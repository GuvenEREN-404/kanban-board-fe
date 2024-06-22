export type TaskT = {
	id: string;
	title: string;
	description: string;
    color:string;
};

export type Column = {
	name: string;
	items: TaskT[];
};

export type Columns = {
	[key: string]: Column;
};
