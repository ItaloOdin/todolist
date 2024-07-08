import { StatsCard } from "../StatsCard/statscard"
import styles from"./styles.module.scss"


export const Header: React.FC = ()=>{
    return<> 
    <div className={styles.header}>
        <div className={styles.container}>
          <div>
        <h1>My todo</h1>
        <span>Bem vindo, Italo!</span>
        
    </div>

    <div>
    <StatsCard title="Tarefas Completas" value={11}/>
    <StatsCard title="Tarefas Pendentes" value={10}/>
    <StatsCard title="Tarefas completas" value={5}/>
    </div>
    </div>
    
    </div>
    </>
}