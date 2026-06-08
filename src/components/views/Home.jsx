import { useState } from 'react';
import {CardContainer, Card} from "../UI/Card.jsx";
import './Home.scss';

function Home () {
//state

const [columns, setColumns] = useState({
    todo:{
        name: "To Do",
        items:[
            { id:"1", content: "React Research" },
            { id:"2", contnent: "Write Basic Code" },
        ],
    },

    inProgress:{
         name: "In Progress",
        items:[
            { id:"3", content: "Design UI" },
        ],

    },

    done:{

        name: "Done",
        items:[
            { id:"4", content: "Create Repository" },
        ],
    }
});

const [newTask, setNewTask] = useState("");
const [activeColumns, setActiveColumns] = useState("todo");
const [draggedItem, setDraggedItem] = useState(null);

const addNewTask = () => {
    if(newTask.trim() === "") return;

    const updatedColumns = {...columns};

    updatedColumns[activeColumns].items.push({
        id: Date.now().toString(),
        content: newTask,
    });

    setColumns(updatedColumns);
    setNewTask("");
};

const removeTask = (columnId, taskId) => {

    const updatedColumns = {...columns};

    updatedColumns[columnId].items = updatedColumns[columnId].items.
    filter((item) => item.id !== taskId)

    setColumns(updatedColumns);

};

//handlers

const handleDragStart = (columnId, item) => {
    setDraggedItem({columnId, item})
}

const handleDragOver = (e) => {
    e.preventDefault();
}

const handleDrop = (e, columnId) => {
    e.preventDefault();
    
    if(!draggedItem) return;

    const {columnId: sourceColumnId, item} = draggedItem;

    if(sourceColumnId === columnId) return;

    const updatedColumns = {...columns}

    updatedColumns[sourceColumnId].items = updatedColumns[sourceColumnId].items.filter((i) => i.id != item.id);

    updatedColumns[columnId].items.push(item);

    setColumns(updatedColumns);
    setDraggedItem(null);
}

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