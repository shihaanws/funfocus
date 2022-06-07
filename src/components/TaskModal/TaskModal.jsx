import { useTaskModal } from "../../common/context/TaskModalContext";
import { useTaskData } from "../../common/context/TaskDataContext";
import { CREATE_TASK, UPDATE_TASK } from "../../common/constants";
import { createTask, updateTask } from "../../common/helpers/TaskService";
import "./TaskModal.css";
import { TextField, Typography } from "@mui/material";
import { Button } from "react-bootstrap";

const TaskModal = () => {
    const { modalToggle, setModalToggle, taskModalData, setTaskModalData } = useTaskModal();
    const { taskDataDispatch } = useTaskData();

    const onSubmitAddTaskHandler = async (event) => {
        event.preventDefault();
        const createTaskResponse = await createTask(taskModalData);
        console.log("Task Created - ", createTaskResponse);
        taskDataDispatch({ type: CREATE_TASK, payload: { ...taskModalData, _id: createTaskResponse[createTaskResponse.length - 1]._id } });
        setModalToggle(modal => ({ ...modal, displayModal: false }));
    }

    const onSubmitUpdateTaskHandler = async (event) => {
        event.preventDefault();
        const updateTaskResponse = await updateTask(taskModalData);
        console.log("Task Updated - ", updateTaskResponse);
        taskDataDispatch({ type: UPDATE_TASK, payload: taskModalData });
        setModalToggle(modal => ({ ...modal, displayModal: false }));
    }

    return (
        <div>
            <div className={`modal-overlay ${modalToggle.displayModal ? "display-modal-overlay" : ""}`}></div>

            <div className={`modal ${modalToggle.displayModal ? "display-modal" : ""} centered-flex-col-container`}>
                <div className="modal-header">
                    <Typography variant="h4" component="div">
                        Task
                    </Typography>

                    <img className="btn-close" src="/assets/images/close-button.svg" alt="Close Button" onClick={() => setModalToggle(modal => ({ ...modal, displayModal: false }))} />
                </div>

                <form className={`flex-col-container task-form`} onSubmit={async (e) => {
                    modalToggle.type === "add" ? await onSubmitAddTaskHandler(e) : await onSubmitUpdateTaskHandler(e);
                }}>
                    <div className='form-item'>
                        <Typography variant="h6">
                            Task Name
                        </Typography>
                        <TextField type="text" id="task-name" className={`form-input-field input-primary`} value={taskModalData.taskName} name='taskName'
                            onChange={(event) => {
                                setTaskModalData(taskItem => ({ ...taskItem, taskName: event.target.value }));
                            }} required />
                    </div>

                    <div className='form-item'>
                        <Typography variant="h6">
                            Task Description
                        </Typography>
                        <textarea id="task-description" className='form-text-area input-primary' value={taskModalData.taskDescription} name='taskDescription' rows="3"
                            onChange={(event) => {
                                setTaskModalData(taskItem => ({ ...taskItem, taskDescription: event.target.value }));
                            }} required />
                    </div>

                    <div className='form-item'>
                    <Typography variant="h6">
                        Focus Duration
                    </Typography>               
                               <input type="range" min="15" max="90" step="15" list="tickmarks" id="focus-duration" className={`form-input-slider input-primary`} value={taskModalData.focusDuration.toString()} name='focusDuration'
                            onChange={(event) => setTaskModalData(taskItem => ({ ...taskItem, focusDuration: parseInt(event.target.value) }))} required></input>

                        <datalist className="datalist flex-row-container" id="tickmarks">
                            <option className="range-markers" value="15" label="15m"></option>
                            <option className="range-markers" value="30" label="30m"></option>
                            <option className="range-markers" value="45" label="45m"></option>
                            <option className="range-markers" value="60" label="60m"></option>
                            <option className="range-markers" value="75" label="75m"></option>
                            <option className="range-markers" value="90" label="90m"></option>
                        </datalist>
                    </div>

                    <div className='form-item'>
                        <Typography variant="h6">
                            Break Duration
                        </Typography>                         
                         <input type="range" min="15" max="90" step="15" list="tickmarks" id="break-duration" className={`form-input-slider input-primary`} value={taskModalData.breakDuration.toString()} name='breakDuration'
                            onChange={(event) => setTaskModalData(taskItem => ({ ...taskItem, breakDuration: parseInt(event.target.value) }))} required></input>

                        <datalist className="datalist flex-row-container" id="tickmarks">
                            <option className="range-markers" value="15" label="15m"></option>
                            <option className="range-markers" value="30" label="30m"></option>
                            <option className="range-markers" value="45" label="45m"></option>
                            <option className="range-markers" value="60" label="60m"></option>
                            <option className="range-markers" value="75" label="75m"></option>
                            <option className="range-markers" value="90" label="90m"></option>
                        </datalist>
                    </div>

                    <div className='form-actions flex-row-container'>
                        <Button type="button" value="Cancel" className='btn btn-dark  space-S' onClick={() => setModalToggle(modal => ({ ...modal, displayModal: false }))}>Cancel</Button>

                        {modalToggle.type === "add" ?

                            <input type="submit" value="Add Task" className={`btn btn-success  space-S`} />
                            : <input type="submit" value="Update Task" className={`btn btn-outline-primary  space-S`} />
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export { TaskModal };
