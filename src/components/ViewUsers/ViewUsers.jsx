import React from 'react'


function ViewUsers({ users, deleteUser }) {

    const hanldeDelete = (e) =>{
        deleteUser(e.target.value)
    } 

    return (
        <div className='view-users'>
            <ul>
                {users && users.map((u, i) => (
                    <li>
                        <a href={`/details/${i}`}>{u.name}</a>
                        <span><button value={u.name} onClick={hanldeDelete}>X</button></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ViewUsers

