import { useEffect, useState } from "react";

function TodoComponent() {
    const APIURL = "http://localhost:3000/tasks";

    let [task, setTask] = useState("");
    let [todos, setTodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:3000/tasks", {
            method: "post",
            headers: {
                "Accept": "Application/json",
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ "task": task, "date": new Date().toLocaleDateString() })
        }).then((response) => {
            response.json().then((result) => {
                //console.log(result);
                setTask("");
                loadAllTodos();
            })
        })
    }

    function loadAllTodos() {
        fetch(APIURL).then((response) => {
            response.json().then((result) => {
                setTodos(result);
            })
        })
    }

    function deleteTodo(id) {
        //alert(id);
        if (window.confirm("Are you sure to delete this TODO ??")) {


            fetch(APIURL + "/" + id, {
                method: "DELETE"
            }).then((response) => {
                response.json().then((result) => {
                    loadAllTodos();
                })
            });
        }
    }

    useEffect(() => {
        loadAllTodos();
    }, []);

    return <>
        <div className="container-fluid">
            <div className="bg-primary text-center text-white p-3">
                <h1>Todo List</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="my-2 input-group">
                    <input className="form-control p-3" placeholder="Enter New Task" required onChange={(e) => setTask(e.target.value)} value={task} />
                    <button className="btn btn-primary">Add Now</button>
                </div>
            </form>

            <hr />

            <div className="row">
                {
                    todos.map((todo) => <div className="col-md-3 card my-2">
                        <div className="card-header">
                            {todo.task}
                        </div>
                        <div className="card-header">
                            {todo.date}
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default TodoComponent;