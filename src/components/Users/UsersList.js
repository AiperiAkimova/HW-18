import styles from './UsersList.module.css'
import Card from '../UI/Card'
import { useState } from 'react'
import DeleteModal from '../UI/DeleteModal'
	


const UsersList = props =>{
    const [delModal,setDelModal]=useState(false)

	const deleteUserHandler = (event) => {
    event.preventDefault()
    setDelModal({
	   title:"Удаление пользователя!",
	   message:"Вы действительно хотите удалить ? "
   })
  
}
const delHandler=()=>{
	setDelModal(null)
}

    return (
        <div>
            
            <Card className={styles.users}>
            <ul>
                {props.users.map(user=>(
                    <li key={user.id} >
                       {delModal&&
                       <DeleteModal 
                       title={delModal.title} 
						message={delModal.message} 
                        onNotDelete={delHandler} 
						onDelete={props.onDelete} 
                        id={user.id}/>}

                        {user.name} {user.age} years old
                     
                     <button className={styles.btn} 
                     onClick={deleteUserHandler}>
						Delete
					</button>   
                      
                    </li>
                   
                ))}
            </ul>
        </Card> 
        </div>
       
    )
}

export default UsersList