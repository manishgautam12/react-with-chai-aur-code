import { Button, Grid, TextField } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import useTodo from "../contexts/todoContext";
import { useState } from "react";

function Table({ todo }) {
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }

    return (
        <Grid
        >
            <TextField
                type="checkbox"
                id="standard-basic"
                variant="standard"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <TextField
                type="text"
                id="standard-basic"
                variant="standard"
                value={todoMsg}
                onChange={(e)=>setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <Button
            onClick={()=>{
                if(todo.completed) return;

                if(isTodoEditable){
                    editTodo();
                }else{
                    setIsTodoEditable((prev)=>!prev)
                }
            }}
            >
                {isTodoEditable ? <SaveIcon /> : <EditIcon />}
            </Button>
            <Button
            onClick={()=>deleteTodo(todo.id)}
            >
                <DeleteIcon />
            </Button>
        </Grid>
    )
}
export default Table