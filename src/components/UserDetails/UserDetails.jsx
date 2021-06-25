import React from 'react'

function UserDetails({user}) {

    return (
        <div className='view-user'>
            <h3>Detalles de ''{user.name.split(' ')[0]}'':</h3>
            <p>Nombre Completo: {user.name}</p>
            <p>Apellido: {user.lastname}</p>
            <p>Apodo: {user.nickname}</p>
            <p>E-Mail: {user.email}</p>
            <p>Role: {user.role}</p>
        </div>
    )
}

export default UserDetails
