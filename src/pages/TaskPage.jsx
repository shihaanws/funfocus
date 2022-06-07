import { useState, useEffect } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Task } from "../components/Task/Task";
import "../styles/TaskPage.css";

const TaskPage = () => {
    // Updating title on rendering Task Page comp
    useEffect(() => {
        document.title = "FunFocus - Tasks";
    }, []);

    return (
        <div>
            <NavBar />
            <Task />
        </div>
    );
}

export { TaskPage };