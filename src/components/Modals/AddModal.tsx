/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface AddModalProps {
    isOpen: boolean;
    onClose: () => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleAddTask: (taskData: any) => void;
}

const AddModal = ({ isOpen, onClose, setOpen, handleAddTask }: AddModalProps) => {
    const initialTaskData = {
        id: uuidv4(),
        title: "",
        description: "",
        color: ""
    };

    const [taskData, setTaskData] = useState(initialTaskData);
    const [tagTitle, setTagTitle] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
    };


    const closeModal = () => {
        setOpen(false);
        onClose();
        setTaskData(initialTaskData);
    };

    const handleSubmit = () => {
        handleAddTask(taskData);
        closeModal();
    };

    return (
        <div
            className={`w-screen h-screen place-items-center fixed top-0 left-0 ${isOpen ? "grid" : "hidden"
                }`}
        >
            <div
                className="w-full h-full bg-black opacity-70 absolute left-0 top-0 z-20"
                onClick={closeModal}
            ></div>
            <div className="md:w-[30vw] w-[90%] bg-white rounded-lg shadow-md z-50 flex flex-col items-center gap-3 px-5 py-6">
                <input
                    type="text"
                    name="title"
                    value={taskData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border focus:bg-white border-slate-300 text-sm font-medium text-black"
                />
                
                <input
                    type="text"
                    name="description"
                    value={taskData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 focus:bg-white border border-slate-300 text-sm font-medium text-black"
                />

                <input
                    type="color"
                    id="color"
                    name="color"
                    value={taskData.color}
                    onChange={handleChange}
                />

                <button
                    className="w-full mt-3 rounded-md h-9 bg-[#00A88B] text-blue-50 font-medium"
                    onClick={handleSubmit}
                >
                    Submit Task
                </button>
            </div>
        </div >
    );
};

export default AddModal;
