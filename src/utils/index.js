// @flow
// noinspection JSUnusedGlobalSymbols,JSUnresolvedReference,DuplicatedCode

import type { ElementRef, isValidElement } from 'react';
import { Children, cloneElement, createRef as _createRef } from 'react';
import { parseHTMLString } from 'react-parse-htmlstring';
import deepEqual from 'deep-equal';

//Components and styles
import utilStyles from './utils.module.scss';

export const emptyFn = () => null;

export const executeWhenActionsDone = (callback = emptyFn, timeout = 1400) =>
    (function actionWatcher() {
        setTimeout(() => {
            if (window['axns'].size) actionWatcher();
            else callback();
        }, timeout);
    })();

export const executeWhen = (
    conditionIsTrue = () => true,
    executeCallback = emptyFn,
    loopCallback = emptyFn,
    timeout = 300
) => {
    const looper = () => {
        loopCallback();

        setTimeout(() => {
            if (conditionIsTrue()) {
                // eslint-disable-next-line no-console
                console.info('[executeWhen] conditionIs True! Executing callback...');
                executeCallback();
            } else {
                // eslint-disable-next-line no-console
                console.info('[executeWhen] conditionIs False! Circling back...');
                looper();
            }
        }, timeout);
    };

    looper();
};

export const getParentElement = (element, targetParentSelector) => {
    if (!isHtmlElement(element) || !isString(targetParentSelector)) {
        // eslint-disable-next-line no-console
        console.warn(
            `getParentElement() requires an html element and target parent element's selector!)`
        );
        return;
    }

    let _parentElement = element.parentElement,
        _targetParent = null;

    while (isHtmlElement(_parentElement) && !isHtmlElement(_targetParent)) {
        _targetParent = _parentElement.parentNode.querySelector(targetParentSelector);
        if (!isHtmlElement(_targetParent)) _parentElement = _parentElement.parentElement;
    }

    return _targetParent;
};

export const trackAction = {
    add: (name, timestamp) => {
        if (isNumber(window['axns'].get(name))) return isNumber(window['axns'].get(name));
        const _timeStamp = timestamp || performance.now();

        // eslint-disable-next-line no-console
        console.info(`[tracking] ${name} -> start[${_timeStamp}]`);

        window['axns'] = window['axns'].withMutations(mutable => mutable.set(name, _timeStamp));
        return _timeStamp;
    },
    remove: name => {
        const timeStamp = performance.now();

        // eslint-disable-next-line no-console
        console.info(`[tracking] ${name} -> end[${timeStamp}]`);

        window['axns'] = window['axns'].withMutations(mutable => mutable.delete(name));
        return timeStamp;
    }
};

export const filterStackTrace = stack =>
    stack
        .split('\n')
        .filter(x => !x?.match(/getStackTrace|node_modules|asyncGenerator/gim))
        .filter(
            x =>
                !x?.match(
                    /^(\.\/src|init@webpack|__webpack_require|sessionManager|promise|fn@|@webpack-internal|.@http|@http|dispatch|__webpack_exports|_callee|tryCatch|makeInvokeMethod|defineIteratorMethods|_next|_asyncToGenerator|_createSuperInternal)/gim
                )
        )
        .join('\n');

export const getStackTrace = raw => {
    let obj = {};
    if (isFunction(Error.captureStackTrace)) Error.captureStackTrace(obj, getStackTrace);
    else obj = new Error('stack tracing...');

    return raw ? obj.stack : filterStackTrace(obj.stack);
};

/**
 *
 * @param   {object}        argument
 * @param   {Array|string}  argument.charSet        - e.g.: 'a-zA-Z0-9' or ['a-z', 'A-Z', '0-9']
 * @param   {Array<number>} argument.octet          - e.g.: [3, 7, 21]
 * @param   {boolean}       argument.shuffled       - shuffle octet - default true
 * @param   {number}        argument.length         - if specified, e.g. 7, will override octet with [7]
 * @returns {string}        Unique Identifier   - e.g.: xxxxxxx-xxx-xxxxxxxxxxxxxxxxxxxxx or xxxxxxx
 */
export const generateUID = (...argument) => {
    const defaultCharSet = {
        '0-9': '0123456789',
        'a-z': 'abcdefghijklmnopqrstuvwxyz',
        'A-Z': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    };
    const allChars = Object.values(defaultCharSet).join('');

    let _octet = [],
        _charSet = '';
    const args = {};

    argument.forEach(arg => {
        if (isNumber(arg, true)) _octet.push(arg);
        else if (Array.isArray(arg)) _octet = _octet.concat(arg);
        else if (isObject(arg)) Object.assign(args, arg);
        else if (isString(arg, true)) _charSet += arg.replace(new RegExp(`[^${allChars}]`, 'gm'), '');
    });

    let { charSet: cs, octet: oc = [], shuffled = true, length } = args;

    _octet = _octet.concat(oc.filter(o => isNumber(o, true)));
    if (Array.isArray(cs)) cs = cs.join('');

    if (isString(cs, true)) _charSet += cs;

    const charSet = (() => {
        if (!isString(_charSet, true) && !Array.isArray(_charSet)) return allChars;

        const charSetHas = chars =>
            Array.isArray(_charSet) ? _charSet.includes(chars) : _charSet?.match(new RegExp(chars));

        let _cSet = '';

        if (charSetHas('0-9')) _cSet += defaultCharSet['0-9'];
        if (charSetHas('a-z')) _cSet += defaultCharSet['a-z'];
        if (charSetHas('A-Z')) _cSet += defaultCharSet['A-Z'];

        return _cSet.length > 7 ? _cSet : _charSet;
    })();

    const octet = isNumber(length, true)
        ? [Math.max(length, 3)]
        : (() => {
            let _oct = [];

            if (Array.isArray(_octet))
                _oct = _octet.map(o => (isNumber(o, true) ? Math.max(o, 3) : 7));

            _oct = _oct.length > 0 ? _oct : [7, 3, 14];

            const sameLenght = (() => {
                let prev = 0;
                for (const o of _oct) {
                    if (prev !== 0 && o !== prev) return false;
                    else prev = o;
                }

                return true;
            })();

            return _oct.length > 5 && !sameLenght && shuffled ? shuffle(_oct) : _oct;
        })();

    return (() => {
        let uid = '';
        for (const n of octet) {
            if (uid !== '') uid += '-';
            uid += Array(n)
                .fill()
                .map(() => charSet.charAt(Math.random() * charSet.length))
                .join('');
        }

        return uid;
    })();
};

export const createRef = initialValue => {
    const _ref = _createRef();
    _ref.current = initialValue;
    return _ref;
};

/**
 * No-Operation, just returns null;
 * @returns {null}
 */
export function noop() {
    return null;
}

/**
 * Usage:
 *       const array = ['a', 1, 2, 3, 1, 1, 'a'];
 *       getDuplicates(array1, (a, b) => [a, b]);
 *       -> [ "a", "a", 1, 1, 1 ]
 *
 *       const array = [{ 'id': 1,'name': 'One' },{ 'id': 2, 'name': 'Two' },{ 'id': 1, 'name': 'Another One' }];
 *       getDuplicates(array2, (a, b) => [a.id, b.id]);
 *       -> [{ 'id': 1,'name': 'One' },{ 'id': 1,'name': 'Another One' }]
 *
 * @param {array<any>} array
 * @param {function} callback
 * @param {boolean} flat   - return as a flat array ... why? well, there's an option to return
 * @returns *          an array of object, grouping duplicate occurrences!
 */
export const getDuplicates = (array, callback, flat = true) => {
    let _ctr = 0,
        dups = [],
        _done = [];

    eachRow(array, (f, i) => {
        const _current = [f];
        let x;
        const _dups = filterRows(array, (_f, _i) => {
            const _target = callback(f, _f);
            x = _target[0];
            const y = _target[1];
            return !isUndefined(y) && x === y && _i > i && !_done.includes(x);
        });
        _done.push(x);
        if (_dups.length > 0) {
            if (flat) dups = Object.assign([], dups.concat(_current, _dups));
            else dups.push({ [`#${++_ctr}`]: Object.assign([], _current.concat(_dups)) });
        }
    });

    return dups;
};

export const isDate = arg => {
    const _date = new Date(arg);
    return _date instanceof Date && !isNaN(_date);
};
// noinspection RegExpSimplifiable
export const isNumber = (arg, matchType) =>
    matchType
        ? typeof arg === 'number' && Number.isFinite(arg)
        : Number.isFinite(parseFloat(arg)) &&
        String(arg)
            .replace(/,/g, '')
            ?.match(/^-*\d+(.\d+){0,1}$/) !== null;

export const parseIfNumberIsString = arg => (isNumber(arg) ? +arg : arg);
export const isNull = arg => arg === null;
export const isBoolean = arg => typeof arg === 'boolean';
export const isFunction = arg => typeof arg === 'function';
export const isUndefined = arg => typeof arg === 'undefined';
export const isObject = arg => typeof arg === 'object' && !isNull(arg) && !Array.isArray(arg);
export const isNullOrUndefined = arg => isNull(arg) || isUndefined(arg);
export const isEmpty = arg => {
    if (isString(arg)) return arg.trim() === '';
    else if (isObject(arg)) {
        if (!isUndefined(arg.size)) return arg.size < 1;

        return Object.keys(arg).length === 0;
    } else if (Array.isArray(arg)) return arg.length === 0;
    else return isNullOrUndefined(arg);
};

export const classNames = (...args) =>
    Array.from(args)
        .filter(x => isString(x, true))
        .join(' ');

/**
 *
 * @param {HTMLElement} element
 * @param {object} styles
 * @returns {*}
 */
export const setElementStyles = (element, styles) => Object.assign(element.style, styles);

export const getNodeStyles = (node, preStyles = {}) => {
    const clone = node.cloneNode(true);
    setElementStyles(clone, {
        ...preStyles,
        position: 'absolute',
        display: 'block',
        opacity: 1,
        color: 'red'
    });
    node.parentNode.insertBefore(clone, node.nextSibling);
    const computedStyles = getComputedStyle(clone);
    const cStyles = Object.assign({}, computedStyles);
    clone.remove();
    return cStyles;
};

/**
 *
 * @param {string|number} sectionNNN
 * @param {number} length - Default: 6 (matching backend)
 * @returns {string} zero padded (left) sectionNNN completing sectionNNN upto <length>
 */
export const zeroPadLeft = (sectionNNN, length = 6) => {
    if (!isString(sectionNNN)) sectionNNN = String(sectionNNN);

    const zeros = length - sectionNNN.length;
    if (zeros < 1) return sectionNNN;

    return '0'.repeat(zeros) + sectionNNN;
};

export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

export async function readFileContent(input) {
    const file = input.files[0];
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        if (!file) {
            reject({
                status: 'error',
                message: 'No file selected'
            });
            return;
        }
        reader.readAsText(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
    });
}

/**
 * Function to clamp given value to a min and max value
 * e.g. clamp(-50, 0, 100) === 0
 * @param {number} val - value to clamp
 * @param {number} min - minimum possible value
 * @param {number} max - maximum possible value
 * @returns {number} - clamped value
 */
export const clamp = (val, min, max) =>
    Math.min(Math.max(val, Math.min(min, max)), Math.max(min, max));

// Similar to Java's Collections.emptyList(), etc where these are intended to be immutable
// default values
export const EMPTY_OBJECT = Object.freeze({});
export const EMPTY_ARRAY = Object.freeze([]);

/**
 * Obfuscates an HTML string.
 *
 * @param {string} stringHtml
 * @return {string}
 */
export function obfuscateHTMLString(stringHtml) {
    stringHtml = parseHTMLString(stringHtml);

    return stringHtml; // disabled for now as instructed on 09082023 via slack call!

    // const tempElem = document.createElement('div');
    // tempElem.innerHTML = stringHtml;
    //
    // obfuscateElement(tempElem);
    //
    // const _return = tempElem.innerHTML;
    // tempElem.remove();
    //
    // return _return;
}

/*
 * Obfuscates the text content of a given element and its children.
 *
 * Realistically, given enough time and effort, someone
 * will eventually crack this. But, we can try to make
 * it more annoying!
 *
 * The idea is that if someone tries to copy and paste the
 * rendered HTML, we'll try to hide the "real" text content
 * by mixing in a bunch of garbage.
 *
 * We're using some CSS classes to "visually hide" the elements
 * and (hopefully) make it more difficult to differentiate the
 * garbage content from the actual content.
 *
 * - Since the classes eventually get hashed by webpack, it should
 * make it ever-so slightly more difficult since there's no static
 * .hidden class or [hidden] attribute to search for.
 *
 * - Using the noop classes should help blend in the garbage content
 * from the actual content, at least at a glance
 *
 * - Using a "visual hide" technique to prevent looking at innerText
 * and window.getComputedStyle()
 *
 * But, for accessibility purposes, we need to make the content machine-readable
 * somehow... which fundamentally defeats the purpose of obfuscation. Still,
 * hopefully there's just-enough roadblocks such that we'll deter anyone
 * casually trying to scrape/de-obfuscate our content.
 *
 * @params {Element} element
 */
export function obfuscateElement(element) {
    element.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            //Split node.innerHTML string into various segments,
            //and insert a garbage <span> at every split.
            //Split regex stolen from: https://stackoverflow.com/a/6259543
            //Random string generator stolen from: https://stackoverflow.com/a/8084248
            const originalHTML = node.textContent;
            const tokens = originalHTML?.match(/.{1,5}/g) || [];
            const newElement = document.createElement('span');

            tokens.forEach(token => {
                const garbage = document.createElement('span');
                const actual = document.createElement('span');

                actual.classList.add(utilStyles.noop);
                actual.classList.add(utilStyles.nooptwo);
                garbage.classList.add(utilStyles.noop);
                garbage.classList.add(utilStyles.vhide);

                actual.textContent = token;
                garbage.textContent = Math.random()
                    .toString(36)
                    .substring(7);

                newElement.append(actual);
                newElement.append(garbage);
            });

            newElement.classList.add(utilStyles.noop);
            newElement.classList.add(utilStyles.nooptwo);
            element.replaceChild(newElement, node);
        } else if (
            node.nodeType === Node.ELEMENT_NODE &&
            node.nodeName !== 'PRE' &&
            !node.classList.contains('active-glossary-link')
        ) {
            //The obfuscator is breaks formatting and the glossary,
            //so ignore them
            node.classList.add(utilStyles.noop);
            node.classList.add(utilStyles.nooptwo);
            obfuscateElement(node);
        }
    });
}

/**
 * Get current window text selection
 * @returns {string}
 */
export function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}

export const circularReferenceHandler = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (isHtmlElement(value)) return;
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value))
                return {
                    'circular-reference': JSON.stringify(value, () => {
                        const seen = new WeakSet();
                        return (key, value) => {
                            if (isHtmlElement(value)) return;
                            if (typeof value === 'object' && value !== null) {
                                if (seen.has(value)) return;
                                seen.add(value);
                            }
                            return value;
                        };
                    })
                };
            seen.add(value);
        }
        return value;
    };
};

/**
 * Get normal JS object if @param obj is immutable
 *
 * @param obj
 * @returns {*}
 */
export const getJSObject = obj => (isFunction(obj?.toJS) ? obj.toJS() : obj);

export const getStringified = obj => JSON.stringify(getJSObject(obj), circularReferenceHandler());

export const deepCloneObject = obj => {
    if (obj === null || typeof obj !== 'object' || 'isActiveClone' in obj) return obj;

    const temp = obj instanceof Date ? new obj.constructor() : obj.constructor();
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = deepCloneObject(obj[key]);
            delete obj['isActiveClone'];
        }
    }

    return temp;
};

/**
 * Get a clone on object
 *
 * @param {array|object} obj
 * @returns []|[]|
 */
export const cloneObject = obj => {
    if (Array.isArray(obj)) return [...obj];
    else if (isObject(obj)) return deepCloneObject(obj);
    else {
        // eslint-disable-next-line no-console
        console.warn(
            `Unable to clone! [${obj}] \nArgument is neither an array nor an object!` //\nStack Trace:\n${getStackTrace()}
        );

        return obj;
    }
};

/**
 * Shuffle an array
 *
 * @param array
 * @returns {[*]}
 */
export const shuffle = array => {
    let shuffled = cloneObject(array);

    const shuffleIt = arr => {
        let currentIndex = arr.length;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }

        return arr;
    };

    let triesLeft = 7,
        logMessage = 'shuffling';
    while (deepEqual(shuffled, array) && triesLeft > 0) {
        triesLeft--;
        // eslint-disable-next-line no-console
        console.info(`${logMessage} array...`);
        logMessage = logMessage === 'shuffling' ? 'unchanged! re-shuffling' : logMessage;
        shuffled = shuffleIt(shuffled);
    }

    return shuffled;
};

export const isVisible = (element, container) => {
    if (!(element instanceof HTMLElement)) return false;

    const el_rect = element.getBoundingClientRect(),
        container_rect = container instanceof HTMLElement ? container.getBoundingClientRect() : {};

    return (
        el_rect.top >= (container_rect.top || 0) &&
        el_rect.left >= (container_rect.left || 0) &&
        el_rect.bottom <=
        (container_rect.bottom || window.innerHeight || document.documentElement.clientHeight) &&
        el_rect.right <=
        (container_rect.right || window.innerWidth || document.documentElement.clientWidth)
    );
};

export const scrollSelectedIntoView = direction => {
    /**
     *    I know! Thi is not the React way!
     *    But until I will be able to figure out how to work my way with AutoSizer
     *    in getting the right element (ref), I am sticking to my good old javascript!
     */
    const tocGrid = document.querySelector('#TOC [aria-label="grid"]');

    if (!(tocGrid instanceof HTMLElement)) return;

    const { scrollTopMax: _scrollTopMax } = tocGrid;
    const scrollTopMax = _scrollTopMax,
        _direction = direction || 'next';

    let scrolledTop = false;

    const looper = () => {
        const last = tocGrid.querySelector(
                `[data-testid="TC_LAB_TOC_ROW"]:${_direction === 'next' ? 'last-child' : 'first-child'}`
            ),
            selected = tocGrid.querySelector('[data-testid="TC_LAB_TOC_ROW"][data-selected="true"]'),
            scrollTop = tocGrid.scrollTop;

        if (!(last instanceof HTMLElement)) return;

        if (_direction === 'prev') {
            if (scrollTop === 0) return;
        } else if (scrollTop === scrollTopMax) return;

        if (selected instanceof HTMLElement) {
            if (!isVisible(selected, tocGrid))
                selected.scrollIntoView({ behaviour: 'smooth', block: 'nearest', inline: 'nearest' });
        } else {
            if (!scrolledTop && tocGrid.scrollTop !== 0 && isNullOrUndefined(direction)) {
                tocGrid.scrollTo({ top: 0 });
                scrolledTop = true;
            } else last.scrollIntoView({ behaviour: 'smooth', block: 'center', inline: 'center' });

            setTimeout(() => looper(), 14);
        }
    };

    looper();
};

/**
 * This method is used in Cucumber testing to simulate drag and dropping
 *   TOC item
 *
 * Not sure if there will be a use-case in here!
 * Added it for reference and backup purpose only for now!
 *
 * Usage:
 * ------
 * const source = arguments[0],
 *  destination = arguments[1];
 * simulateHTML5DragAndDrop(source,destination);
 *
 * @param element
 * @param destination
 * @return void
 */
export const simulateHTML5DragAndDrop = (element, destination) => {
    const createEvent = typeOfEvent => {
            const event = document.createEvent('CustomEvent');
            // noinspection JSDeprecatedSymbols
            event.initCustomEvent(typeOfEvent, true, true, null);
            event.dataTransfer = {
                data: {},
                setData(key, value) {
                    this.data[key] = value;
                },
                getData(key) {
                    return this.data[key];
                }
            };
            return event;
        },
        dispatchEvent = (element, event, transferData) => {
            if (transferData !== undefined) {
                event.dataTransfer = transferData;
            }

            const { fireEvent, dispatchEvent } = element;
            if (dispatchEvent) {
                dispatchEvent(event);
            } else if (fireEvent) {
                fireEvent(`on${event.type}`, event);
            }
        };

    const dragStartEvent = createEvent('dragstart');
    dispatchEvent(element, dragStartEvent);

    const dropEvent = createEvent('drop');
    dispatchEvent(destination, dropEvent, dragStartEvent.dataTransfer);

    const dragEndEvent = createEvent('dragend');
    dispatchEvent(element, dragEndEvent, dropEvent.dataTransfer);
};

const elementStyles = el => {
    if (!isHtmlElement(el)) return {};

    const _styles = getComputedStyle(el);
    return Array.from(_styles).reduce((acc, curr) => {
        acc[curr] = _styles.getPropertyValue(curr);
        return acc;
    }, {});
};

/**
 *
 * @param {string|HTMLElement} arg
 * @param {object} offset
 * @param {number} offset.width
 * @param {number} offset.height
 * @param {undefined|string|HTMLElement} getStyleFrom - HTMLElement or classNames
 * @returns {{width: number, height: number}}
 */
export const getDimensions = (
    arg,
    offset = {
        width: 0,
        height: 0,
        assume: {
            width: false,
            height: false
        },
        deduct: {
            height: [],
            width: []
        }
    },
    getStyleFrom
) => {
    let text,
        styles = {};

    const stylesHandler = styles => {
        const argRec = { with: 'unset', height: 'unset' };

        if (isHtmlElement(arg)) {
            const _argRec = arg.getBoundingClientRect();
            argRec.width = `${_argRec.width}px`;
            argRec.height = `${_argRec.height}px`;
        }

        return {
            ...styles,
            'white-space': 'no-wrap',
            'z-index': '-7',
            top: 0,
            left: 0,
            opacity: 0,
            display: 'block',
            position: 'absolute',
            visibility: 'hidden',
            'max-width': 'unset',
            'min-width': 'unset',
            width: offset?.assume?.width ? argRec.width : 'unset',
            'max-height': 'unset',
            'min-height': 'unset',
            height: offset?.assume?.height ? argRec.height : 'unset'
        };
    };

    if (isHtmlElement(arg)) {
        styles = stylesHandler(elementStyles(arg));
        const clone = arg.cloneNode(true);
        // noinspection JSUndefinedPropertyAssignment
        clone.style = Object.entries(styles)
            .map(x => `${x[0]}: ${x[1]}`)
            .join('; ');

        arg.parentElement.appendChild(clone);
        const rect = clone.getBoundingClientRect();

        let lessHeight = 0,
            lessWidth = 0;

        if (offset?.deduct?.width)
            offset.deduct.width.forEach(x => (lessWidth += parseFloat(clone.style[x]) || 0));
        if (offset?.deduct?.height)
            offset.deduct.height.forEach(x => (lessHeight += parseFloat(clone.style[x]) || 0));

        clone.remove();

        return { ...rect, width: rect.width - lessWidth, height: rect.height - lessHeight };
    } else {
        text = arg || '';
        if (isHtmlElement(getStyleFrom)) styles = stylesHandler(elementStyles(getStyleFrom));
    }

    styles['min-width'] = 'unset';
    styles['max-width'] = 'unset';
    styles['min-height'] = 'unset';
    styles['max-height'] = 'unset';
    styles['width'] = 'fit-content';
    styles['height'] = 'fit-content';

    const attributes = {
        id: 'width-calculator-container',
        style: Object.entries(styles)
            .map(x => `${x[0]}: ${x[1]}`)
            .join('; ')
    };

    if (isString(getStyleFrom)) attributes['class'] = getStyleFrom;

    const cleanRows = text.replace(/\n$/, '').split('\n').length,
        rows = text.split('\n').length;

    const _elemDiv = document.querySelector(`#${attributes.id}`);
    const elemDiv =
        _elemDiv ||
        createElement(
            'div',
            parseHTMLString(
                text
                    .replace(/\n/gm, '<br style="display: block;"/>')
                    .replace(/\t/gm, '&nbsp;&nbsp;&nbsp;&nbsp;')
            ),
            attributes
        );

    if (!_elemDiv) document.body.appendChild(elemDiv);

    const cStyles = getComputedStyle(elemDiv);
    // noinspection SpellCheckingInspection
    const width = parseFloat(cStyles['width']) + (offset?.width || 0),
        paddY = parseFloat(cStyles['paddingTop']) + parseFloat(cStyles['paddingBottom']);
    const lineHeight = (parseFloat(cStyles['height']) - paddY) / cleanRows;
    const height = lineHeight * rows + paddY + (offset?.height || 0);

    elemDiv.remove();

    return { width, height };
};

/**
 * getIn([object, 'depth_1_prop', 'depth_2_prop', 'dept_N_prop']) - A hassle free nested object value getter
 *
 * @param {[object, string|number]} path
 * @param {any}                     notSetValue
 * @returns {*}
 */
export const getIn = (path, notSetValue) => {
    if (path.length < 2) {
        // eslint-disable-next-line no-console
        console.warn('path is NOT specified!');
        return notSetValue;
    }

    let value = path[0] || {};
    let keyIsNumber = isNumber(path[1], true);

    if (!Object.prototype.hasOwnProperty.call(value, path[1])) {
        // eslint-disable-next-line no-console
        console.warn(
            `Could be nothing...  just so you know!\nobj does NOT have ${keyIsNumber ? '[' : ''}${
                path[1]
            }${keyIsNumber ? ']' : ''} property!`
        );

        return notSetValue;
    }

    let str_path = value.name || (value.type || value.constructor)['name'] || '???';

    path.shift();

    for (const key of path) {
        const keyIsArray = Array.isArray(key) && key.length > 0;

        if (!keyIsArray && !isString(key) && !isNumber(key, true)) {
            // eslint-disable-next-line no-console
            console.warn(
                `Could be nothing...  just so you know!\n\t:${key} is NOT a valid obj property!}`
            );
            return notSetValue;
        }

        let thisKey = key;

        if (keyIsArray) {
            let skey;

            for (skey of key) {
                if (!isString(skey) && !isNumber(skey, true)) continue;
                if (Object.prototype.hasOwnProperty.call(value, skey)) break;
            }

            thisKey = skey;
        }

        keyIsNumber = isNumber(thisKey, true);
        str_path += `\u2B62${keyIsNumber ? '[' : ''}${thisKey}${keyIsNumber ? ']' : ''}`;

        if (!Object.prototype.hasOwnProperty.call(value, thisKey)) {
            // eslint-disable-next-line no-console
            console.warn(`Could be nothing...  just so you know!\n\t:${str_path} does NOT exist!}`);

            return notSetValue;
        }

        value = value[thisKey];
    }

    return value;
};

/**
 * Attach new properties to props.children
 *
 * @param {ReactNode} children
 * @param {object} newProps
 * @returns ReactNode | null | undefined | unknown>
 */
export const reProps = (children, newProps) =>
    isNullOrUndefined(children)
        ? [null]
        : Children.map(children, (child, index) => {
            if (isReactElement(child)) {
                const { props: _props } = child;
                const childProps = isObject(_props) ? Object.assign({}, _props) : {};

                // BE CAREFUL USING AN OBJECT newProps! THIS SIMPLY MEANS
                // ALL CHILDREN WILL HAVE THIS newProps!  IF IT IS YOUR
                // INTENTION, BE MY GUEST ;) BUT IF NOT, YOU'D RATHER USE
                // newProps AS A FUNCTION THAT RETURNS AN OBJECT CONTAINING
                // THE NEW PROP FOR THIS SPECIFIC CHILD.
                // SEE EXAMPLE BELOW... AS IF YOU HAVE NO IDEA HOW TO DO THAT?!
                if (isObject(newProps)) Object.assign(childProps, newProps);

                // e.g. reProps(children, index => ({ ref: ref => (yourRef.current[index] = ref) }))
                // or   reProps(children, (index, child) => {
                //        return child.type === 'button' ? { ref: ref => (yourButtonRef.current[index] = ref) } : {};
                //      })
                //
                // DO MAKE SURE TO INITIALIZE yourRef/yourButtonRef AS AN EMPTY ARRAY!
                if (isFunction(newProps)) {
                    const _newProps = newProps(index, child);
                    if (isObject(_newProps)) Object.assign(childProps, _newProps);
                }

                return cloneElement(child, { ...childProps });
            }

            return child;
        });

export const cloneNode = node => {
    if (!isHtmlElement(node)) return null;

    return node.cloneNode(true);
};

export const getComponentsName = component =>
    component.displayName || component.name || 'Component';

export const hasVerticalScrollbar = el => {
    if (!isHtmlElement(el)) return false;
    const style = getComputedStyle(el);
    return (
        /(auto|scroll)/.test(style.overflow + style.overflowY + style.overflowX) &&
        el.scrollHeight > el.clientHeight
    );
};

export const hasHorizontalScrollbar = el => {
    if (!isHtmlElement(el)) return false;
    const style = getComputedStyle(el);
    return (
        /(auto|scroll)/.test(style.overflow + style.overflowY + style.overflowX) &&
        el.scrollWidth > el.clientWidth
    );
};

export const hasScrollbars = el => hasHorizontalScrollbar(el) || hasVerticalScrollbar(el);

/**
 * The next three methods might be unnecessary
 * on a first look!  Come to think what the
 * heck Array.filter, .forEach & .map are for!!!
 * Well, I did a combined CSSTransition + css overrides
 * in a notification component.  Not to happy with
 * what CSSTransition has on its sleeve as far
 * as the animations that I want!  And I was having
 * troubles using Array.filter.  Somehow, it appeared
 * like it is an asynchronous method despite google
 * says it ain't.  And I remembered having the same
 * issue with Array.filter in the past...
 * Bothered NOT to investigate and proceed with the
 * old passion for...loop. And created a reusable here,
 * and Array.map too for good measure... because why not...
 */
export const filterRows = (array, callback = () => {}) => {
    if (!Array.isArray(array)) return array;

    const filtered = [],
        _array = cloneObject(array);

    for (let index = 0; index < _array.length; index++) {
        const row = _array[index];
        const _filtered = callback(row, index);
        if (isBoolean(_filtered)) {
            if (_filtered === false) continue;
            filtered.push(row);
        } else if (!isEmpty(_filtered)) filtered.push(_filtered);
    }

    return filtered;
};
export const eachRow = (array, callback = () => {}) => {
    if (!Array.isArray(array)) return;

    const _array = cloneObject(array);

    for (let index = 0; index < _array.length; index++) callback(_array[index], index);
};
export const mapRow = (array, callback = () => {}) => {
    if (!Array.isArray(array)) return;

    const mapped = [],
        _array = cloneObject(array);

    for (let index = 0; index < _array.length; index++) mapped.push(callback(_array[index], index));

    return mapped;
};

/**
 *
 * @param {object} props
 * @param {object} options - One of:
 * @param {array} options.exclude
 * @param {array} options.include
 * @returns {{}}
 */
export const propsList = (props, { exclude = [], include = [] } = {}) => {
    const exList = exclude.map(x => x.toLowerCase()),
        inList = include.map(x => x.toLowerCase());

    // Gather
    const o = {};
    for (const p in props) {
        const _prop = props[p];
        const propsP = getJSObject(_prop);
        let t = typeof propsP;
        if (propsP) t = propsP['constructor']['name'];

        t = t.toLowerCase();

        if (exList.length > 0 && exList.includes(t.toLowerCase())) continue;
        else if (inList.length > 0 && !inList.includes(t.toLowerCase())) continue;

        if (!Array.isArray(o[t])) o[t] = [];
        o[t].push(p);
    }

    // Print
    for (const [k, v] of Object.entries(o)) {
        // eslint-disable-next-line no-console
        console.log(`${k}: \n${'-'.repeat(k.length + 1)}`);
        // eslint-disable-next-line no-console
        console.log(`${v.join('\n')}\n\n`);
    }

    return o;
};

export function getScrollParent(
    element: ElementRef<*>,
    excludeClassList: Array<string> = []
): Element {
    if (!isHtmlElement(element)) return;

    const docEl = ((document.documentElement: any): Element);

    for (let parent = element; (parent = parent.parentElement); ) {
        // FILTER OUT EXCLUDED
        if (
            excludeClassList.length > 0 &&
            new RegExp(`(${excludeClassList.join('|')})`, 'i').test(parent.className)
        )
            continue;

        if (hasScrollbars(parent)) {
            // eslint-disable-next-line no-console
            console.info('[getScrollParent] scroll parent:', parent);
            return parent;
        }
    }

    return docEl;
}

export const hashCode = s =>
    String(s)
        .split('')
        .reduce((a, b) => {
            a = (a << 5) - a + b.charCodeAt(0);
            return a & a;
        }, 0);

export const isRunningLocal = /^http[s]*:\/\/dev-sim/.test(window.location.href);

/**
 * @param {string} name - expose name
 * @param {any} obj - object to expose to window
 * @param {object} callback - [optional] if set, above obj should be not!
 * @param {string} callback.fetch - instruction to fetch "anything"; Limited to pre-defined gettable obj(s)
 * @param {function} callback.obj - callback method to apply fetched object to target function along with whatever args there may be!
 * @returns {null}
 */
export const exposeForDebugging = ({ name, obj, callback = {} }) => {
    if (isRunningLocal && isString(name, true)) {
        const xList =
            /**
             * @returns {{ list: Array<String<name>> || null, xKeys: Object<name: prefixName> } || null}
             **/
            (() => {
                const xList = JSON.parse(localStorage.getItem('x'));

                if (!isObject(xList)) return null;
                let { list, expose, pre: prefix = '_' } = xList;

                if (!Array.isArray(list) || !Array.isArray(expose)) return null;
                list = list.filter((name, i) => expose.includes(i));

                return {
                    list: list.length >= 1 ? list : null,
                    xKeys:
                        list.length >= 1
                            ? list.reduce((a, v) => ({ ...a, [v]: camelCase(`${prefix}_${v}`) }), {})
                            : null
                };
            })();

        if (isObject(xList)) {
            const { list, xKeys } = xList;

            if (Array.isArray(list) && list.includes(name) && isObject(xKeys)) {
                const key = xKeys[name];
                if (!isNullOrUndefined(obj)) window[key] = obj;
                else {
                    const { obj, fetch } = callback;
                    if (!(isFunction(obj) && isString(fetch, true))) return null;

                    window[key] = obj(window[xKeys[fetch]]);
                }
            }
        }
    }

    return null;
};

export const hasModalOverlay = () =>
    document.querySelectorAll('[id*=GENERIC_MODAL], .ModalOverlay').length > 0;

/**
 * Remove Duplicates by "key", keeping last occurrence
 *
 * Usage: filterDuplicates(array, x => x.exssn)
 *
 * @param {Array<*>} arr
 * @param {any} key
 * @returns [Array<*>]
 */
export const filterDuplicates = (arr, key) => [...new Map(arr.map(x => [key(x), x])).values()];

export const isString = (str, validateNotEmpty = false) =>
    validateNotEmpty ? typeof str === 'string' && str.trim() !== '' : typeof str === 'string';

export const snakeCase = (str, delimiter = '_', keepNumbers = false) => {
    if (!isString(str, true)) return str;

    str = str
        .replace(/\.+/gm, delimiter)
        .replace(/[/\\]/gm, delimiter)
        .replace(/[^a-z0-9]+/gim, ' ')
        .trim()
        .replace(/([a-z0-9 ])([A-Z])/gm, (w, m1, m2) => `${m1} ${m2}`)
        .replace(/([0-9 ])([a-z])/gim, (w, m1, m2) => `${m1} ${m2}`)
        .replace(/([A-Z]{2,})([a-z]{2,})/gm, (w, m1, m2) => `${m1} ${m2}`)
        .replace(new RegExp(`^${delimiter}+|${delimiter}+$`, 'gm'), '')
        .toLowerCase();

    if (!keepNumbers) str = str.replace(/[0-9]+/gm, ' ').trim() || 'empty string on snake case';
    else str = str.replace(/(\d+)/gm, ' $1 ').trim();

    return str.replace(/ +/gm, delimiter);
};

export const camelCase = str =>
    isString(str, true)
        ? str
            .replace(/[^a-z0-9]+/gim, ' ')
            .trim()
            .replace(/([a-z0-9 ])([A-Z])/gm, (w, m1, m2) => `${m1} ${m2}`)
            .replace(/([0-9 ])([a-z])/gim, (w, m1, m2) => `${m1} ${m2}`)
            .replace(/([A-Z]{2,})([a-z]{2,})/gm, (w, m1, m2) => `${m1} ${m2}`)
            .toLowerCase()
            .trim()
            .replace(/ +(\w)/gm, (w, m) => m.toUpperCase())
        : str;

export const deCamelCase = str =>
    isString(str, true)
        ? str.replace(/ *([A-Z])/gm, ' $1').replace(/^./, m => m.toUpperCase())
        : str;

export const capitalize = (str, properCase = true) =>
    isString(str, true)
        ? properCase
            ? str.replace(/(^|\s)\S/g, m => m.toUpperCase())
            : str.toLowerCase().replace(/(^|[.!?]) *./gm, m => m.toUpperCase())
        : str;

/**
 * The idea is to convert the strings "true" or "false" into a boolean value.
 * @param {string} value - a string representation of a boolean
 * @returns {boolean}
 */
export const parseBooleanString = value => value === 'true';

/**
 * Formats a telephone number to US standards. Ex. (555)-555-5555x1234
 * @param {string} value - phone number
 * @returns {string} - formatted phone number
 */
export const formatPhone = value => {
    if (!isString(value, true)) return value;

    if (value?.match(/[-()]/g)) return value;
    if (value.length >= 10) {
        return `${value.substring(0, 3)}-${value.substring(3, 6)}-${value.substring(6)}`;
    }
    return value;
};


/**
 * Returns a truncated email in the form of "firstChar...lastChar@domain" where the characters are from the email identity string
 * @param {string} email
 * @returns {string}
 */
export const maskEmail = email => {
    const [identity, domain] = email?.match(/^(.*)@(.*)$/);
    return `${identity[0]}...${identity[identity.length - 1]}@${domain}`;
};

/*
 * Returns true if the string is falsy
 * or composed of only whitespace.
 *
 * @param {string} str
 * @return {boolean}
 */
export function isEmptyString(str) {
    return !str || !/\S/.test(str);
}

/**
 * @param {String}  tag                     - element tag
 * @param {String}  content                 - string/html string
 * @param {Object}  attributes              - all possible tag's attributes - e.g.: {class: 'myCssClass'}
 * @param {Object}  options
 * @param {Boolean} options.returnAsString  - htmlString that is
 * @return HTMLElement
 */
export const createElement = (tag, content, attributes = {}, options = {}) => {
    const { returnAsString = false } = options;

    const el = document.createElement(tag);
    if (!isNullOrUndefined(content)) el.innerHTML = content;

    for (const [attr, value] of Object.entries(attributes)) el.setAttribute(attr, value);

    if (returnAsString) {
        const htmlString = el.outerHTML;
        el.remove();
        return htmlString;
    }

    return el;
};

/**
 * Returns true if string contains a html tag
 *
 * @param {string} str
 * @returns {boolean}
 */
export function stringHasHTML(str) {
    if (!isString(str)) return false;

    const tmp = document.createElement('div');

    tmp.innerHTML = str;
    const hasHtml = tmp.childElementCount >= 1;
    tmp.remove();

    return hasHtml;
}

/**
 * @param {string} htmlString
 * @returns {string}
 */
export const escapeHTML = (htmlString = '') =>
    isString(htmlString) ? htmlString.replace(/</gm, '&lt;').replace(/>/gm, '&gt;') : htmlString;

/**
 * @param {string} htmlString
 * @returns {string}
 */
export const unEscapeHTML = (htmlString = '') =>
    isString(htmlString) ? htmlString.replace(/&lt;/gm, '<').replace(/&gt;/gm, '>') : htmlString;

/**
 * @param {HTMLElement} htmlElement
 * @param {Function}    callback    - access node and modify as needed
 * @param {Object}      options
 */
export const modify_NODE = (htmlElement, callback = emptyFn, options = {}) => {
    const { recursive = true } = options;

    const recur = node => {
        for (const el of node.childNodes) {
            if (el?.childNodes?.length > 0 && recursive) recur(el);
            else callback(el);
        }
    };

    recur(htmlElement);
};

export const padString = (str, length = 0, padChar = ' ', padLeft = false) => {
    if (!isString(str, '')) return str;

    const len = str.length;
    if (len >= length) return str;

    const padding = padChar.repeat(length - len);
    return padLeft ? `${padding}${str}` : `${str}${padding}`;
};

export const isHtmlElement = arg => arg instanceof HTMLElement && !isUndefined(arg.nodeType);

export const isReactElement = arg => isValidElement(arg);

export const isFunctionComponent = component => {
    // https://stackoverflow.com/questions/33199959/how-to-detect-a-react-component-vs-a-react-element
    return (
        isFunction(component) &&
        new RegExp('return React.createElement|return .*_react.*.createElement', 'igm').test(
            String(component)
        )
    );
};

