import { FormEvent, useEffect, useState } from "react"
import styles from "./styles.module.scss"


interface Task {
    title: String;
    done: Boolean;
    id: Number;
}    


export const Tasks: React.FC = ()=>{

    const [taskTitle, setTasktitle] = useState("")
    const [tasks,setTasks] = useState([]as Task[])



    function submitEvent(event: FormEvent){
        event.preventDefault()

        if(taskTitle.length < 4){
            alert('não é possivel adicionar tarefa com menos de 4 letras')
            return
        }
        const taskAtualize = [...tasks,
            {id: new Date().getTime(), title:taskTitle, done:false}
        ]
        setTasks(taskAtualize)
        localStorage.setItem('tasks',JSON.stringify(taskAtualize))
        setTasktitle('')
    }

    useEffect(()=>{
        const taskOnLocal = localStorage.getItem('tasks')
        if(taskOnLocal){
           setTasks (JSON.parse(taskOnLocal))
        }
    }, [] )

return(

    <section className={styles.container}>
        <form  onSubmit={submitEvent}>
            <div>
            <label htmlFor="tassk-title">Adicionar nova tarefa</label>
            <input value={taskTitle} onChange={(event) => setTasktitle(event.target.value)}
             type="text" id="taks-title" placeholder="titulo da tarefa" />
            </div>
            <button type="submit">Adicionar Tarefas</button>
        </form>



        <ul>
        {tasks.map(task => {
                    return(
                        <li key={String(task.id)}>
                        <input type="checkbox"id={`task-${task.id}`} />
                        <label htmlFor={`task-${task.id}`}> {task.title}</label>
                        <button onClick={()=>{
                            
                            
                        }}>Concluida</button>
                    </li>    
                    )
                })}
        </ul>
    </section>

    



)} 