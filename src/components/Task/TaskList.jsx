import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useTaskModal } from "../../common/context/TaskModalContext";
import { useTaskData } from "../../common/context/TaskDataContext";
import { deleteTask } from "../../common/helpers/TaskService";
import { Card, Button } from "react-bootstrap"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';





import {
    DELETE_TASK
} from "../../common/constants";
import "./TaskList.css";
import { IconButton, LinearProgress } from "@mui/material";

const feather = require('feather-icons')


const TaskList = () => {
    const { setModalToggle, setTaskModalData } = useTaskModal();
    const { taskData, taskDataDispatch, getTaskById } = useTaskData();
    const navigate = useNavigate();

    return (
        <ul className="task-list flex-col-container">
            {taskData.map(task => {
                return (
                    <>

                      
                        <Card className="text-center" style={{ width: "100%", height: "200px" }} >

                            <Card.Header>{task.taskName}</Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    Focus duration :{task.focusDuration}  - Break duration :{task.breakDuration}                                 </Card.Text>

                                <div className="task-operations centered-flex-row-container">
                                    <Button variant="success" onClick={() => {
                                        navigate(`/pomodoro/${task._id}`);
                                    }} >Start focusing now!</Button>
                                    <IconButton>
                                        <EditIcon style={{ fontSize: "30px" }} className="edit-task-btn" onClick={() => {
                                            setModalToggle(modal => ({ ...modal, displayModal: true, type: "update" }));
                                            const taskData = getTaskById(task._id);
                                            setTaskModalData({ ...taskData });
                                        }} />
                                    </IconButton>

                                    <IconButton>
                                        <DeleteIcon style={{ fontSize: "30px" }} className="delete-task-btn" onClick={async () => {
                                            taskDataDispatch({ type: DELETE_TASK, payload: task });
                                            const deleteTaskResponse = await deleteTask(task._id);
                                            console.log("Task Deleted - ", deleteTaskResponse);
                                        }} />
                                    </IconButton>


                                </div>
                            </Card.Body>
                            <Card.Footer className="text-muted"></Card.Footer>

                        </Card>
                    </>
                );
            })}
        </ul>
    );
}

export { TaskList };