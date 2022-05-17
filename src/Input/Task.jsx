import React from "react";
import { TaskItem } from "./Taskitem";


function Task(){
    const [query,setQuery]=React.useState("")
    const [tasks,setTasks]=React.useState([]);
    //state ,setState
    const handleChange=(e)=>{
     //console.log(e.target,e.target.value)
     const {value}=e.target;
     setQuery(value);
    };

    const handleAdd =()=>{
        const payload ={
           title:query,
           status:false
        };
        let newTasks=[...tasks,payload];
        setTasks(newTasks)
    };
    console.log(tasks);
    return (
        <div>
            <h1>Tasks</h1>
            <div>
                <input 
                value={query} 
                onChange={handleChange} 
                placeholder="Add Something"
                />
                <button onClick={handleAdd}>ADD</button>
            </div>
            <div>
                {tasks.map((items,index) =>{
                   // return <TaskItem id={items.id} title={items.title}  status={items.status}/>
                
                   return <TaskItem color={index%2===0?"blue":"green"} {...items} />;
                })}
            </div>
        </div>
    )

}
export {Task}