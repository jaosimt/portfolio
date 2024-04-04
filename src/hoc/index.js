// @flow

import { useCallback, useEffect, useRef, useState } from 'react';
import {
    emptyFn,
    generateUID,
    getStackTrace,
    hashCode,
    isFunction,
    isHtmlElement,
    isNumber,
    isObject,
    isString
} from "../utils";
import {Params} from "../structs";

export const useStateCallback = initialValue => {
    const uSCRef = useRef(null);
    const [state, setState] = useState(initialValue);

    const setStateCallback = useCallback((value, callback) => {
        uSCRef.current = callback;
        setState(value);
    }, []);

    useEffect(() => {
        if (isFunction(uSCRef?.current)) {
            uSCRef.current(state);
            uSCRef.current = null;
        }
    }, [state]);

    return [state, setStateCallback];
};

export function usePrevious(value) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export const onTimedOut = (callback = emptyFn, delay = 0) => {
    let id = null;

    const strace = getStackTrace().split('\n');
    try {
        const _id = strace
            .splice(strace.findIndex(x => x.includes('onTimedOut')) + 1, 1)[0]
            .match(/(^\w+)|(\w+\.\w{2,3}:\d+:\d+$)/gm)
            .join('-');
        id = isString(_id, true) ? _id : (id = hashCode(callback.toString()));
    } catch (e) {
        id = hashCode(callback.toString());
    }

    clearTimeout(window[id]);
    window[id] = setTimeout(() => {
        delete window[id];
        callback();
    }, delay);
};

export const useKeyPress = (...params) => {
    const { targetKey, callback, options } = new Params(
        {
            targetKey: arg => isString(arg, true),
            callback: isFunction,
            options: isObject
        },
        params
    );

    const { listen } = Object.assign({ listen: true }, isObject(options) ? options : {});

    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = ({ key }) => {
        const myKey = key === targetKey;

        if (myKey) setKeyPressed(true);
    };

    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    const disengage = () => {
        document.removeEventListener('keydown', downHandler);
        document.removeEventListener('keyup', upHandler);
    };

    useEffect(() => {
        if (!listen) {
            disengage();
            return;
        }

        document.addEventListener('keydown', downHandler);
        document.addEventListener('keyup', upHandler);

        return disengage;
    });

    if (keyPressed) {
        if (isFunction(callback)) callback(keyPressed);
        else return keyPressed;
    }

    return null;
};

export const useOnScroll = (...params): [boolean, Event] => {
    const { element, delay = 700, callback } = new Params(
        {
            element: isHtmlElement,
            delay: arg => isNumber(arg, true),
            callback: isFunction
        },
        params
    );

    const timeoutRef = useRef();

    const [scrolled, setScrolled] = useState(false);
    const [scrollEvent, setScrollEvent] = useState(null);

    const scrollHandler = e => {
        clearTimeout(timeoutRef.current);

        if (!scrolled) {
            setScrolled(true);
            setScrollEvent(e);
        }

        timeoutRef.current = setTimeout(() => {
            if (scrolled) {
                setScrolled(false);
                setScrollEvent(e);
            }
        }, delay);
    };

    useEffect(() => {
        if (!element) return;

        element.addEventListener('scroll', scrollHandler);

        return () => {
            clearTimeout(timeoutRef.current);
            element.removeEventListener('scroll', scrollHandler);

            if (scrolled) setScrolled(false);
        };
    });

    if (isFunction(callback)) callback([scrolled, scrollEvent]);
    else return [scrolled, scrollEvent];
};

// noinspection JSCommentMatchesSignature
/**
 *
 * @param {Object|Array<element: HTMLElement, callback: Function>} params
 * @param {HTMLElement} element
 * @param {Function} callback
 */
export const useOnOutsideClick = (...params) => {
    const { element, callback } = new Params(
        {
            element: isHtmlElement,
            callback: isFunction
        },
        params
    );

    const handleClick = e => {
        if (element && !element.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        if (!isHtmlElement(element)) return;

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};

const DEFAULT_OPTIONS = {
    config: { attributes: true, childList: true, subtree: true }
};

export const useMutationObserver = (targetEl, cb, options = DEFAULT_OPTIONS) => {
    /*
    const boxContent = getParentElement(anchorRef.current[0], '.BoxContent');
    useMutationObserver(boxContent, useCallback(mutationList => {
      // eslint-disable-next-line no-console
      console.info('MutationList', mutationList);
    }, []));
  */

    const [observer, setObserver] = useState(null);

    useEffect(() => {
        const obs = new MutationObserver(cb);
        setObserver(obs);
    }, [cb, options, setObserver]);

    useEffect(() => {
        if (!observer) return;
        const { config } = options;
        observer.observe(targetEl, config);

        return () => {
            if (observer) observer.disconnect();
        };
    }, [observer, targetEl, options]);
};

export const useBeforeUnload = ({ when = true, onCancel = emptyFn }) => {
    const cb = useRef(null);
    const userDidLeft = useRef(false);
    const initialized = useRef(false);

    useEffect(() => {
        if (!isFunction(onCancel))
            throw new Error(
                'useBeforeUnload is expecting param "onCancel" to be of type function.',
                `got ${typeof onCancel} instead!`
            );

        if (!isFunction(cb.current)) return;

        // eslint-disable-next-line no-console
        // console.log('[useBeforeUnload] assigning callback...');
        cb.current = onCancel;
    }, [onCancel]);

    useEffect(() => {
        const deInitialize = () => {
            if (initialized.current) {
                // eslint-disable-next-line no-console
                // console.log('[useBeforeUnload] de-initializing');
                window.removeEventListener('beforeunload', beforeUnloadHandler);
                window.removeEventListener('unload', unloadHandler);
                initialized.current = false;
            }
        };

        const doSomethingWhenUserStays = function doSomethingWhenUserStays() {
            if (!userDidLeft.current) onCancel();
        };

        const beforeUnloadHandler = event => {
            // eslint-disable-next-line no-console
            // console.log('[useBeforeUnload] Handler');
            setTimeout(doSomethingWhenUserStays, 500);
            event.preventDefault();
            event.returnValue = '';
        };

        const unloadHandler = () => (userDidLeft.current = true);

        if (!when) return deInitialize;

        // eslint-disable-next-line no-console
        // console.log('[useBeforeUnload] initializing');
        window.addEventListener('beforeunload', beforeUnloadHandler);
        window.addEventListener('unload', unloadHandler);
        initialized.current = true;

        return deInitialize;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onCancel, when]);
};

export const useComponentLifeCycle = ({ onMount, onUpdate, onUnmount }) => {
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        if (isFunction(onMount)) onMount();

        setDidMount(true);

        return () => {
            if (isFunction(onUnmount)) onUnmount();
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (didMount && isFunction(onUpdate)) onUpdate();
    });
};

/**
 * @param {function} args.callback - thread content/callback
 * @param {number} args.timer - thread start delay timer
 * @param {string} args.id - thread id [optional]
 * @returns {[string,number]}
 */
export const newThread = (...args) => {
    let { timer = 0, callback, id = generateUID(7) } = new Params(
        {
            id: id => isString(id, true),
            timer: delay => isNumber(delay, true),
            callback: isFunction
        },
        args
    );

    clearTimeout(id);
    id = setTimeout(callback, timer);

    return [id, timer];
};
