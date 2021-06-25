import React from 'react'
import { useEffect } from 'react'


function ViewUsers({ users, deleteUser, seeUser, setViewOpen, setDetailsOpen, setCreateOpen }) {

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [deleteUser, users])

    const hanldeDelete = (e) =>{
        e.preventDefault()
        deleteUser(e.target.value);
        localStorage.setItem('users', JSON.stringify(users))
    }

    const handleOpen = (e) =>{
        let { value } = e.target;
        let userShown = users[value]
        setDetailsOpen(true);
        setViewOpen(false);
        seeUser(userShown)
    }

    const handleGoTo = (e) =>{
        e.preventDefault();
        setCreateOpen(true);
        setViewOpen(false);
    }

    if(users.length === 0) return <h1 className='view-users'>Aún no hay usuarios: ve a <button className='go-to-add' onClick={handleGoTo}>agregar usuarios</button></h1>

    return (
        <div className='view-users'>
            <label>Usuarios</label>
            <ul className='list-item'>
                {users && users.map((u, i) => (
                    <li className='item' key={i}>
                        <span>
                            <button className='list-user' value={i} onClick={handleOpen}>{u.name}</button>
                        </span>
                    <span><button className='delete' value={u.name} onClick={hanldeDelete}>X</button></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ViewUsers

