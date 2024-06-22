"use client"

export const onDragEnd = (result: any, columns: any, setColumns: any, slugID:string ) => {
    // If there is no destination (item was dropped outside the list), do nothing
    if (!result.destination) return;

    // Destructure source and destination from the result
    const { source, destination } = result;

    // Helper function to update columns and save to localStorage
    const updateColumns = (newColumns: any) => {
        setColumns(newColumns);
        localStorage.setItem(`${slugID}`, JSON.stringify(newColumns));
    };

    // If the source and destination are different columns
    if (source.droppableId !== destination.droppableId) {
        // Get the source and destination columns
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];

        // Create copies of the items in the source and destination columns
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];

        // Remove the item from the source column
        const [removed] = sourceItems.splice(source.index, 1);

        // Insert the removed item into the destination column at the specified index
        destItems.splice(destination.index, 0, removed);

        // Update the state with the new column data, rearranging items in source and destination columns
        updateColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems,
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems,
            },
        });
    } else {
        // If the source and destination are the same column
        const column = columns[source.droppableId];

        // Create a copy of the items in the column
        const copiedItems = [...column.items];

        // Remove the item from the source index
        const [removed] = copiedItems.splice(source.index, 1);

        // Insert the removed item into the destination index
        copiedItems.splice(destination.index, 0, removed);

        // Update the state with the new column data, rearranging items within the same column
        updateColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems,
            },
        });
    }
};
