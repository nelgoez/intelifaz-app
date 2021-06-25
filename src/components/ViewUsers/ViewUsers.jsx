import React from 'react'
import { useEffect } from 'react'


function ViewUsers({ users, deleteUser, seeUser, setViewOpen, setDetailsOpen }) {

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [deleteUser])

    const hanldeDelete = (e) =>{
        e.preventDefault()
        deleteUser(e.target.value)
    }

    const handleOpen = (e) =>{
        let { value } = e.target;
        let userShown = users[value]
        setDetailsOpen(true);
        setViewOpen(false);
        seeUser(userShown)
    }

    if(users.length === 0) return <h1 className='view-users'>Aún no hay usuarios: ve a Agregar usuarios</h1>

    return (
        <div className='view-users'>
            <label>Usuarios</label>
            <ul>
                {users && users.map((u, i) => (
                    <li key={i}>
                        <span>
                            <button className='list-user' value={i} onClick={handleOpen}>{u.name}</button>
                        </span>
                    <span><button value={u.name} onClick={hanldeDelete}>X</button></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ViewUsers

