"use client"
import { v4 as uuidv4 } from "uuid";
import { Columns } from "@/types";

export const Board: Columns = {
	backlog: {
		name: "Backlog",
		items: [
			{
				id: uuidv4(),
				title: "Admin Panel Front-end",
				description: "Lorem ipsum dolor sit amet ..",
                color:"#C340A1"
			},
			{
				id: uuidv4(),
				title: "Admin Panel Back-end",
				description: "Create new note via SMS. Support text, audio, links, and media.",
                color:"#C340A1"
			},
		],
	},
	todo: {
		name: "To Do",
		items: [
			{
				id: uuidv4(),
				title: "Admin Panel Front-end",
				description: "Lorem ipsum dolor sit amet ..",
                color:"#C340A1"
			},
		],
	},
	inProgress: {
		name: "In Progress",
		items: [
			{
				id: uuidv4(),
				title: "Tablet view",
				description: "",
                color:"#C340A1"
			},
			{
				id: uuidv4(),
				title: "Admin Panel Front-end",
				description: "Lorem ipsum dolor sit amet ..",
				color:"#C340A1"
			},
		],
	},
	done: {
		name: "Done",
		items: [
			{
				id: uuidv4(),
				title: "Admin Panel Front-end",
				description: "Lorem ipsum dolor sit amet ..",
				color:"#C340A1"
			},
		],
	},
};
