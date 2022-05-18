import Button from './Button'
import Card from '../UI/Card'
import styles from './DeleteModal.module.css'

const DeleteModal=props=>{

    return (
        <div className={styles.backdrop}  onClick={props.onNotDelete} >
            <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
        <p>{props.message}</p>
        </div>
    <footer className={styles.actions}>
    <Button  onClick={()=>props.onDelete(props.id)}>Да</Button>
    <Button    onClick={props.onNotDelete}>Нет</Button>
    </footer>
    </Card>
    </div>
    )
}

export default DeleteModal
