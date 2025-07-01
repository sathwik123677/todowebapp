import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/navbar'
import { ToastContainer, toast } from 'react-toastify';
import React from 'react'

const Manger = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState(() => {
        const newtodos = localStorage.getItem("todos");
        return newtodos ? JSON.parse(newtodos) : [];
    })
    const [Showfinished, setShowfinished] = useState(false)
    const handleadd = () => {
        setTodos([...todos, { todo, id: uuidv4(), isCompleted: false }])
        console.log(todos);
        setTodo("");
        toast('Task Added', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
    }
    const handleedit = (e, id) => {
        let newtodo = todos.find((item) => item.id === id);
        setTodo(newtodo.todo);
        handledelete(e, id);
    }
    const handledelete = (e, id) => {
        let newtodos = todos.filter((item) => {
            return item.id !== id;

        })
        setTodos(newtodos);
        toast('Task Deleted', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"

        });
    }
    const handlechange = (e) => {
        setTodo(e.target.value)
    }
    const handlefinsh = (e) => {
        let value = e.target.value;
        setShowfinished(!Showfinished);
    }
    const handlecheck = (e) => {
        let index;
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == e.target.name) {
                index = i;
                break;
            }
        }
        let newtodos = [...todos];
        newtodos[index].isCompleted = !newtodos[index].isCompleted;
        e.target.value = newtodos[index].isCompleted
        setTodos(newtodos);

    }
    useEffect(() => {
        // console.log("saving")
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
    useEffect(() => {
        let newtodos = JSON.parse(localStorage.getItem("todos"));
        //  console.log(newtodos)
        if (newtodos) {
            setTodos(newtodos)
        }
    }
        , [])
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            
            <div className="addtodo bg-black flex gap-6 justify-center">
                {/* <1></h1> */}
                <h2 className='text-xl ml-2 text-nowrap'>Add your Task </h2>
                <input type="text" value={todo} onChange={handlechange} className='w-[32vw] h-[4vh]  bg-gray-700 rounded-lg -ml-2' />
                <button onClick={handleadd} disabled={todo.length === 0} className='bg-blue-400 h-fit p-2 rounded-lg py-1'>Save</button>
            </div>
            <div className="bg-gray-900 container h-10 mx-auto mt-5 min-h-[70vh]">

                <h1 className='bg-blue-400 rounded-md'><span className='text-xl font-bold ml-5'>My Todo's</span></h1><div className="todos mt-5">
                    <div className='text-xl mb-2'>  <input type="checkbox" name="" id="" value={Showfinished} onChange={handlefinsh} /> Finished Tasks</div>
                    {todos.length == 0 ? <div className='text-2xl text-gray-700 left-10 top-10 relative'>No Task pending  </div> :
                        todos.map((item, index) => (
                            Showfinished ? item.isCompleted && <div key={index} className="todo p-4 mb-1 border  rounded-md flex justify-between gap-3 border-[1]">
                                <input type="checkbox" name={item.id} checked={item.isCompleted} onChange={handlecheck} />
                                <div className={item.isCompleted ? "line-through" : ""}>{item.todo} </div>
                                <div className="buttons flex gap-4">
                                    <button onClick={(e) => { handleedit(e, item.id) }} className='bg-blue-400  h-fit p-2 rounded-lg py-1'>edit</button>
                                    <button onClick={(e) => { handledelete(e, item.id) }} className='bg-blue-400 h-fit p-1 rounded-lg py-1'>delete</button></div>
                            </div> : !item.isCompleted && <div key={index} className="todo p-4 mb-1 border  rounded-md flex justify-between gap-3 border-[1]">
                                <input type="checkbox" name={item.id} value={item.isCompleted} onChange={handlecheck} />
                                <div className={item.isCompleted ? "line-through" : ""}>{item.todo} </div>
                                <div className="buttons flex gap-4">
                                    <button onClick={(e) => { handleedit(e, item.id) }} className='bg-blue-400  h-fit p-2 rounded-lg py-1'>edit</button>
                                    <button onClick={(e) => { handledelete(e, item.id) }} className='bg-blue-400 h-fit p-1 rounded-lg py-1'>delete</button></div>
                            </div>
                        ))}
                </div></div>

        </>)
}

export default Manger