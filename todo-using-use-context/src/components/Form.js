import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react";
import useTodo from "../contexts/todoContext";

function Form() {

    const [todo, setTodo] = useState("");
    const {addTodo}=useTodo();

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todo) return

        addTodo({todo,completed:false})
        setTodo("")
    }
    return (
        <Grid>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="Write note..."
                    variant="standard"
                    value={todo}
                    onChange={(e)=>setTodo(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                >
                    Add
                </Button>
            </form>
        </Grid>
    )
}
export default Form