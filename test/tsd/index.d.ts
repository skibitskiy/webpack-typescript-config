export interface Animal {
	name: string;
	color: "black" | "White" | "Brown";
	legs: 4;
}

export interface Cat extends Animal {
	sound: 'meow';
}

export interface Dog extends Animal {
	sound: 'woof';
	isFriend: true;
}

export type typedParams<t, Obj, Params = {
	[key in keyof Obj]?: Obj[key] extends t ? t : never;
}> = Params;
