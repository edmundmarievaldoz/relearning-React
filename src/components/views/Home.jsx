import { useState, useEffect } from 'react';
import {CardContainer, Card} from "../UI/Card.jsx";
import './Home.scss';

function Home () {
//state

const savedData = localStorage.getItem("taskBoxes")
const initialColumns = savedData ? JSON.parse(savedData) : { //the initial state our columns/boxes
    todo:{
        name: "To Do",
        items:[
            { id:"1", content: "Learn React" },
        ],
    },

    inProgress:{
         name: "In Progress",
        items:[
            { id:"2", content: "UX Design" },
        ],

    },

    done:{

        name: "Done",
        items:[
            { id:"3", content: "Build Repo" },
        ],
    }
};//state variables, these are objects containing properties [id and content]
const [columns, setColumns] = useState(initialColumns)
const [newTask, setNewTask] = useState(""); //for keeping track of the new task to be created
const [activeColumns, setActiveColumns] = useState("todo"); //we use this to keep track of which box our new created task is gon be
const [draggedItem, setDraggedItem] = useState(null); //keeps track of which task is currently being dragged over

useEffect(() => {
    localStorage.setItem("taskBoxes", JSON.stringify(columns));
}, [columns])

const addNewTask = () => {
    if(newTask.trim() === "") return; //if input empty nothing will be returned

    const updatedColumns = {...columns}; //our array

    updatedColumns[activeColumns].items.push({
        id: Date.now().toString(),
        content: newTask,
    });//pushed newly created task to our array

    setColumns(updatedColumns);//update state
    setNewTask("");//clear input after state updated
};

const removeTask = (columnId, taskId) => {

    const updatedColumns = {...columns};

    updatedColumns[columnId].items = updatedColumns[columnId].items.
    filter((item) => item.id !== taskId) //deletes id with the matching (which is the selected item)

    setColumns(updatedColumns);//update state

};

//handlers

const handleDragStart = (columnId, item) => {
    setDraggedItem({columnId, item})
}//keeps track of the item currently being dragged

const handleDragOver = (e) => {
    e.preventDefault();
}//html elements does not allow DnD, we use this to allow it

const handleDrop = (e, columnId) => {
    e.preventDefault();
    
    if(!draggedItem) return;

    const {columnId: sourceColumnId, item} = draggedItem; //extract info of dragged item

    if(sourceColumnId === columnId) return;

    const updatedColumns = {...columns} //copy of our array

    updatedColumns[sourceColumnId].items = updatedColumns[sourceColumnId].items.filter((i) => i.id != item.id);
    //access source column id and its items, and set it equal to the filtered version 

    updatedColumns[columnId].items.push(item); //helps item to be pushed in the targetted box {todo, inprogress or done}

    setColumns(updatedColumns);
    setDraggedItem(null);
}//this function will handle the dropping of task in a box

//views

    return (
        <>
        <div>
            <h1>Home</h1>

            <h2>Kanban Board</h2>
        </div>

        <CardContainer>
        <div className="search">
            <input className='task' type="text" value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Add a New Task...' 
            onKeyDown={(e) => e.key === "Enter" && addNewTask()}
            />

            <select value={activeColumns}
            onChange={(e) => setActiveColumns(e.target.value)}>

                {Object.keys(columns).map((columnId) =>(
                    <option value={columnId} key={columnId}>
                        {columns[columnId].name}
                    </option>
                ))}

            </select>

            <button onClick={addNewTask}>Add</button>
        </div>
        </CardContainer>

        <CardContainer>
        <div className='column'>
            {Object.keys(columns).map((columnId) => (
                <div key={columnId}
                onDragOver={(e) => handleDragOver(e, columnId)}
                onDrop={(e) => handleDrop(e, columnId)}>

                    <Card>
                    <div className="head">
                        { columns[columnId].name }
                        <span>{columns[columnId].items.length}</span>
                    </div>
                    
                    <div>
                        {columns[columnId].items.length === 0 ? (
                            <div>Drop task here</div>
                        ) : (
                           columns[columnId].items.map((item) => (
                            <div key={item.id} draggable 
                            onDragStart={() => handleDragStart(columnId, item)}>
                                <span>{item.content}</span>
                                <button onClick={() => removeTask(columnId, item.id)}>
                                    <span>x</span>
                                </button>
                            </div>
                           ))
                        )}
                    </div>
                    </Card>
                </div>
            ))}
        </div>
        </CardContainer>
        </>
    
    );
}

export default Home;