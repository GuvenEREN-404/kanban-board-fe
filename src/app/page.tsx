"use client"
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Board } from "@/data/board";
import { Columns } from "@/types";
import { onDragEnd } from "@/helpers/onDragEnd";
import { AddOutline } from "react-ionicons";
import Task from "@/components/Task";
import AddModal from "@/components/Modals/AddModal";

export default function Home() {
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);
  const [columns, setColumns] = useState<Columns>(Board);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  const openModal = (columnId: any) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddTask = (taskData: any) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
    setColumns(newBoard); // Update state to reflect the new task
  };
  
  return (
    <>
      {winReady ? <>  <DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
        <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10">
          {Object.entries(columns).map(([columnId, column]: any) => (
            <div className="w-full flex flex-col gap-0" key={columnId}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col w-[340px] gap-3 items-center p-6 bg-[#262626] rounded-[20px]"
                  >
                    <div className="flex items-center justify-between w-full text-white text-[27px] font-bold">
                      {column.name}
                      <div
                        onClick={() => openModal(columnId)}
                        className="flex cursor-pointer items-center justify-center gap-1 py-[10px]  w-[38px] opacity-90 bg-white rounded-lg"
                      >
                        <AddOutline color={"#555"} />

                      </div>
                    </div>
                    {column.items.map((task: any, index: any) => (
                      <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
                        {(provided: any) => (

                          <Task provided={provided} task={task} />

                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>

            </div>
          ))}
        </div>
      </DragDropContext> 
      
      <AddModal
          isOpen={modalOpen}
          onClose={closeModal}
          setOpen={setModalOpen}
          handleAddTask={handleAddTask}
        />
        
        </> : null}

    </>
  );
}
