// @flow

export interface iEntity {
	displayName: string;
	name: string;
	type: string;
	value: string;
}

export interface iEntityTypes {
	[key: string]: {
		collectionType: string,
		type: string
	};
}
