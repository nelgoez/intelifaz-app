import React from 'react'


function ViewUsers({ users, deleteUser, seeUser }) {

    const hanldeDelete = (e) =>{
        deleteUser(e.target.value)
    } 

    return (
        <div className='view-users'>
            <ul>
                {users && users.map((u, i) => (
                    <li>
                        <p onClick={seeUser(u)}>{u.name}</p>
                        <span><button value={u.name} onClick={hanldeDelete}>X</button></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ViewUsers

