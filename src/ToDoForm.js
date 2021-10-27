import { useState } from "react";
const ToDoForm = ({
    addTask
}) => {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
        
    }
    const handleEnter = (e) => {
        if(e.key === "Enter"){
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            value={userInput}
            type="text" 
            onChange={handleChange}
            onKeyDown={handleEnter}
            placeholder="Add your task!"
            />
            <button>Save Task</button>
        </form>
    );
}

export default ToDoForm;
