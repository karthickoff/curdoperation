import React from 'react'
import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import _ from "lodash";
import { Droppable } from 'react-beautiful-dnd';
import { v4 } from "uuid";
import { Draggable } from 'react-beautiful-dnd';
import "../styles/todo.css";
import Logout from './logout';
function Todo() {
    // const [state, setState] = useState(intialState: {
    //   "todo": {},
    //   "progress": {},
    //   "completed": {},
    //   "tested": {}

    // }  
    const item1 = {
        id: v4(),
        topic: "eee",
        description: "hello dnd",
    }
    const item2 = {
        id: v4(),
        topic: "oo",
        description: "Bye dnd",
    }
    // console.log("--item----", item1);
    const intialState = {
        "todo": {
            title: "todo",
            items: []
        },
        "progress": {
            title: "progress",
            items: []
        },
        "completed": {
            title: "completed",
            items: []
        },
        "tested": {
            title: "tested",
            items: []
        }
    }
    const currentuserEmail = (localStorage.getItem('currentuserEmail'));
    const existingToDoList = JSON.parse(localStorage.getItem("userstodolist"));
    const exisitingTODOData = existingToDoList.filter((data) => data.userEmail === currentuserEmail)
    // console.log("--------exisitingTODOData-----+++---", exisitingTODOData[0].todoData);
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState("");
    const [state, setState] = useState(
        exisitingTODOData[0] ? exisitingTODOData[0].todoData : intialState
    )
    const usersToDoList = localStorage.getItem('userstodolist') ? JSON.parse(localStorage.getItem('userstodolist')) : [];
    const handleTodo = () => {
        console.log(topic, description);
        const data = {
            id: v4(),
            topic: topic,
            description: description,
        }

        setState(prev => {
            return {
                ...prev,
                todo: {
                    title: 'todo',
                    items: [{
                        id: v4(),
                        topic: topic,
                        description: description,
                    }, ...prev.todo.items]

                }
            }
        })
        setTopic(" ");
        setDescription(" ")
    }

    if (usersToDoList.length === 0) {
        // alert("add todo ") 
        usersToDoList.push({
            userEmail: currentuserEmail,
            todoData: state
        }
        )

    }
    else {
        var rmi = null;
        usersToDoList.map((item, index) => {
            console.log("----item", item, index);
            if (item.userEmail === currentuserEmail) {
                rmi = index;
            }
        })
        if (rmi === null) {
            usersToDoList.push({
                userEmail: currentuserEmail,
                todoData: state
            }
            )
        }
        else {
            usersToDoList.splice(rmi, 1, {
                userEmail: currentuserEmail,
                todoData: state
            });

        }
        console.log("-----------usersToDoList-------", usersToDoList);

    }
    localStorage.setItem('userstodolist', JSON.stringify(usersToDoList));



    const handleDragEnd = ({ destination, source }) => {

        if (!destination) {
            return
        }
        if (destination.index === source.index && destination.droppableId === source.droppableId) {

            return
        }
        const itemCopy = state[source.droppableId].items[source.index];
        setState(
            prev => {
                prev = { ...prev }
                prev[source.droppableId].items.splice(source.index, 1);
                prev[destination.droppableId].items.splice(destination.index, 0, itemCopy);
                return prev
            }
        )
    }
    return (
        <div>
            <Logout />
            <div className="todo">
                <div>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Add TO DO
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add To Do</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div>
                                        <p>Enter Title</p>
                                        <input type="text" placeholder="enter title" onChange={e => setTopic(e.target.value)} />
                                        <p>Enter Description</p>
                                        <textarea type="text" placeholder="enter description" onChange={e => setDescription(e.target.value)} />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleTodo}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* chech */}
                    {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add To Do</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <p>Enter Title</p>
                                    <input type="text" placeholder="enter title" onChange={e => setTopic(e.target.value)} />
                                    <p>Enter Description</p>
                                    <textarea type="text" placeholder="enter description" onChange={e => setDescription(e.target.value)} />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleTodo}>Add</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>
                <DragDropContext onDragEnd={handleDragEnd}>
                    {_.map(state, (data, key) => {
                        return (
                            <div key={key} className='column'>
                                <h3>{data.title}</h3>
                                <Droppable droppableId={key}>
                                    {(provided) => {
                                        return (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                className="droppable-col"
                                            >
                                                {data.items.map((ele, index) => {
                                                    return (
                                                        <Draggable key={ele.id} index={index} draggableId={ele.id}>
                                                            {(provided) => {
                                                                return (
                                                                    <div
                                                                        className='item'
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                    >
                                                                        <span>{ele.description} </span> <br />
                                                                        <span>{ele.topic}</span>

                                                                    </div>
                                                                )

                                                            }}
                                                        </Draggable>
                                                    )
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                </Droppable>
                            </div>
                        )
                    })}
                </DragDropContext>

            </div>
        </div>

    );
}

export default Todo