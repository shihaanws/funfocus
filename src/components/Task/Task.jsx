import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TaskList } from "./TaskList";
import { TaskModal } from "../TaskModal/TaskModal";
import { useTaskModal } from "../../common/context/TaskModalContext";
import { useTaskData } from "../../common/context/TaskDataContext";
import { Card, Button } from "react-bootstrap"
import "./Task.css";
import { Typography } from "@mui/material";

const Task = () => {
    const { setModalToggle, initialTaskModalData, setTaskModalData } = useTaskModal();
    const { taskData } = useTaskData();

    return (
        <main className="main-container">
            <div className="task-container space-XL flex-col-container">
                {taskData.length ?
                    <Typography variant="h1" component="div" gutterBottom>
                        Pending tasks :{taskData.length}
                    </Typography>

                    :
                    <Typography variant="h1" component="div" gutterBottom>
                        Great! You have no pending tasks.
                    </Typography>}

                <TaskModal />



                <div className="tasks-section rounded-lg flex-col-container">
                    <div className="tasks-section-heading flex-row-container">
                        <Typography variant="h1" component="div" gutterBottom>
                           Tasks
                        </Typography>
                        <button className="btn-icon btn-icon-primary add-task-btn rounded space-S"
                            onClick={() => {
                                setModalToggle(modal => ({ ...modal, displayModal: true, type: "add" }));
                                setTaskModalData({ ...initialTaskModalData });
                            }}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>

                    {/* Task List */}
                    <TaskList />
                </div>
            </div>
        </main>
    );
}

export { Task };