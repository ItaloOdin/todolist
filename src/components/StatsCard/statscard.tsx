import styles from "./styles.module.scss"

interface StatatsCardProps {
title:string,   
value:number
}

export const StatsCard: React.FC<StatatsCardProps> =({title, value})=>{
return(
    <>
    <article  className={styles.stats_card}>
        <h2>{title}</h2>
        <span> {value} </span>
    </article>
    
    
    
    
    </>
)
}