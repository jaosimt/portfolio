// @flow

import {
	capitalize,
	getIn as _getIn,
	isNullOrUndefined,
	isNumber,
	isObject,
	isReactElement,
	isString,
	snakeCase
} from "../utils";
import type {iEntity, iEntityTypes} from "./interfaces";

/**
 * Custom Class Property Setter
 */
export class PropertySetter {
	/**
	 * Iterates over the given props and assigns all properties to the instance
	 *
	 * @param {Object} propValue - Key-Value pair
	 * @param {Array<Object>||null||undefined} propDefinition - propValue definitions
	 * @param {Boolean} freeze
	 * @param {Boolean} allowNullValues
	 * @param {String} propDefinition.key - String literal of key in propValue
	 * @param {Type} propDefinition.type - Type definition of value in propValue
	 * @throws {TypeError} - if propValue is not an instance of Object or
	 *                       propValue[key] is not an instance of
	 *                       propDefinition[type]
	 */
	setProperties(propValue = {}, propDefinition, freeze = true, allowNullValues = false) {
		if (!isObject(propValue))
			throw new TypeError('Property Setter expected propValue argument to be of type Object!');

		const hasDef = !isNullOrUndefined(propDefinition);

		if (hasDef) {
			if (!Array.isArray(propDefinition))
				throw new TypeError(
					'Property Setter propDefinition is an optional argument!  If provided, it has to be an Array of Object(s)!'
				);

			for (const { key, type } of propDefinition) {
				if (!isString(key, true) || isNullOrUndefined(type)) {
					throw new TypeError(
						'Property Setter expected propDefinition argument to be an Array of Object as follows: { key: <propKey>, type: <typeof propValue> }'
					);
				}
			}
		}

		for (const [key, value] of Object.entries(propValue)) {
			let typeError;

			if (!isString(key, true)) {
				typeError = new TypeError('Property key can not be empty and must be of type string!');
				throw typeError;
			}

			if (!allowNullValues && isNullOrUndefined(value)) {
				typeError = new TypeError(
					`Value of property "${key}", or any other property value can not be null or undefined!`
				);
				throw typeError;
			}

			if (hasDef) {
				const def = propDefinition.filter(x => x.key === key);
				if (def.length === 0) {
					typeError = new TypeError(`Missing definition for property key "${key}"!`);
					throw typeError;
				}

				const type = def[0].type;

				if (!((!isString(type) && value instanceof type) || typeof value === type)) {
					typeError = new TypeError(
						`Expected argument "${key}" has to be of type "${type?.constructor?.name || type}"!`
					);
					throw typeError;
				}
			}

			this[key] = value;
		}

		if (freeze) Object.freeze(this);
	}
}

export class CancelCallback {
	callback: Function;
	label: String;

	constructor(callback, label = 'Cancel') {
		this.callback = callback;
		this.label = label;
	}
}

export class ElementWithDelay {
	delay: number;
	element: $ElementType;

	constructor(element, delay = 0) {
		this.delay = delay;
		this.element = element;
	}
}

export class JSObject extends PropertySetter {
	constructor(obj, freeze = true, allowNullValues = false) {
		const _obj = { ...obj, isInstanceOfJSObject: true };

		super(_obj);
		this.setProperties(_obj, null, freeze, allowNullValues);
	}

	instanceIsEmpty() {
		return this.getKeys().length < 1;
	}

	getKeys() {
		const keys = [];
		Object.keys(this).forEach(k => {
			if (!k.startsWith('isInstanceOf')) keys.push(k);
		});
		return keys;
	}

	getIn(path: Array<string | Number>, notSetValue: any) {
		if (!Array.isArray(path)) {
			// eslint-disable-next-line no-console
			console.warn(
				new Error(
					'[JSObject] getIn argument path is expected to be an Array<string | number>',
					path
				)
			);

			return notSetValue;
		}
		return _getIn([this, ...path], notSetValue);
	}

	get(key: string | Number, notSetValue: any) {
		if (!isString(key) && !isNumber(key)) {
			// eslint-disable-next-line no-console
			console.warn(
				new Error(
					'[JSObject] get argument key is expected either string or number!',
					key
				)
			);

			return notSetValue;
		}

		return _getIn([this, key], notSetValue);
	}
}

export class MenuListObject extends JSObject {
	constructor(menuList) {
		for (let i = 0; i < menuList.items.length; i++) {
			if (isString(menuList.items[i]['label'])) {
				if (isNullOrUndefined(menuList.items[i].attributes['className']))
					menuList.items[i].attributes['className'] = snakeCase(menuList.items[i]['label'], '-');
				if (isNullOrUndefined(menuList.items[i].attributes['aria-label']))
					menuList.items[i].attributes['aria-label'] = capitalize(
						menuList.items[i]['label'],
						true
					);
			}
		}

		let _menuList = menuList;
		if (!_menuList?.isInstanceOfIMenuListProperty) _menuList = new iMenuListProperty(menuList);

		if (!_menuList?.isInstanceOfIMenuListProperty) {
			throw new Error(
				'MenuListObject is expecting a menuList of type iMenuListProperty!'
			);
		}

		// eslint-disable-next-line no-unused-vars
		const { isInstanceOfIMenuListProperty, ...rest } = _menuList;

		// eslint-disable-next-line no-console
		// console.info(
		// 	'[MenuListObject] isInstanceOfIMenuListProperty is no longer needed at this point!',
		// 	isInstanceOfIMenuListProperty
		// );

		super({
			...rest,
			isInstanceOfMenuListObject: true
		});
	}

	getMenuItemByAttribute(attribute: string, value: any) {
		return this.items.find(item => item.attributes[attribute] === value);
	}
}

export class Entity extends JSObject implements iEntity {
	constructor(obj) {
		super({ ...obj, isInstanceOfEntity: true });
	}
}

export class EntityTypes extends JSObject implements iEntityTypes {
	constructor(obj) {
		super({ ...obj, isInstanceOfEntityTypes: true }, false);
	}

	add(entityTypes: iEntityTypes, overwriteIfExist: boolean = false) {
		for (const [key, value] of Object.entries(entityTypes)) {
			if (overwriteIfExist || !Object.prototype.hasOwnProperty.call(this, key)) {
				this[key] = value;
			}
		}
	}
}

//---

export class iMenuItem extends JSObject {
	constructor(menuItem: Object) {
		const { label, attributes } = menuItem;

		if (!isString(label, true) && !isReactElement(label))
			throw new Error(
				'iMenuItem is expecting prop label of type String or React.JSX.Element!'
			);

		if (!isObject(attributes))
			throw new Error(
				'iMenuItem is expecting prop attributes of type Object!'
			);

		super({ label, attributes, isInstanceOfIMenuItem: true });
	}
}

export class iMenuListProperty extends JSObject {
	constructor(menu: Object) {
		if (!isObject(menu))
			throw new Error(
				'iMenuListProperty is expecting prop menu of type Object!'
			);

		const { attributes, items } = menu;
		if (!isObject(attributes))
			throw new Error(
				'iMenuListProperty is expecting prop menu.attributes of type Object!'
			);

		if (!Array.isArray(items))
			throw new Error(
				'iMenuListProperty is expecting prop menu.items of type Array<iMenuItem>!'
			);

		// noinspection ES6ConvertIndexedForToForOf
		for (let i = 0; i < items.length; i++) {
			let item = items[i];

			if (!isObject(item))
				throw new Error(
					'iMenuListProperty is expecting prop menu.items of type Array<iMenuItem>! MenuItem is not an Object!'
				);

			if (!item?.isInstanceOfIMenuItem) item = new iMenuItem(item);

			if (!item?.isInstanceOfIMenuItem)
				throw new Error(
					'iMenuListProperty is expecting prop menu.items of type Array<iMenuItem>!'
				);

			items[i] = item;
		}

		const _menu = {
			attributes,
			items,
			isInstanceOfIMenuListProperty: true
		};

		super(_menu);
	}
}

export class Params extends JSObject {
	constructor(validator: Object, params: Array<*> | Object) {
		const propsIsObject = isObject(params);

		if (!isObject(validator))
			throw new Error(
				'Params is expecting prop definition of type Object! A key-value pair. where key is your parameter and value must be the parameter data type validator!'
			);

		if (!Array.isArray(params) && !propsIsObject)
			throw new Error(
				'Params is expecting props of type Array<any> or Object'
			);

		const initProp = { isInstanceOfParams: true };

		for (const [key, isForKey] of Object.entries(validator)) {
			if (propsIsObject) {
				if (isForKey(params[key])) initProp[key] = params[key];
			} else {
				for (const param of params) {
					if (isForKey(param)) initProp[key] = param;
				}
			}
		}

		super(initProp);
	}
}
