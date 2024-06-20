"use client"
import { TaskT } from "@/types";

interface TaskProps {
	task: TaskT;
	provided: any;
}

const Task = ({ task, provided }: TaskProps) => {
	const { title, description, color} = task;

	return (
		<div
			ref={provided?.innerRef}
			{...provided?.draggableProps}
			{...provided?.dragHandleProps}
			
			className="w-full"
		>

			<div className="w-full cursor-grab flex bg-white flex-col justify-between gap-3 items-start shadow-sm rounded-xl p-[24px]"  style={{backgroundColor:color}}>
				<span className="text-[15.5px] font-medium text-[#fff]">{title}</span>
				<span className="text-[13.5px] text-[#dadaf3]">{description}</span>
			</div>
			
		</div>
	);
};

export default Task;
