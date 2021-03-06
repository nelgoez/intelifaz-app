import React, { useState, useEffect } from 'react'

export const CreateUser = ({ newUser, setNewUser, addUsers, setErrors, errors, allUsers }) => {

    const areErrors = Object.values(errors).some(e => e.length > 0);
    const [hasErrors, setHasErrors] = useState(true);
    const roles = ['admin', 'usuario', 'invitado']

    useEffect(() => {
        setHasErrors(areErrors)
    }, [errors, areErrors])



    function validate(name) {
        let testErrors = errors
        let nameExp = /^[a-zA-Z ]*$/;
        let nicknameExp = /^[a-zA-Z0-9 .!?"-]+$/;
        let emailExp = /^[^\s@]+@[^\s@]+$/;
        let phoneExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        switch (name) {
            case 'name':
                if (!nameExp.test(newUser[name]) || newUser[name].length === 0) testErrors = { ...testErrors, [name]: 'Debe ingresar un nombre Válido' }
                else testErrors = { ...testErrors, [name]: '' }
                break;

            case 'lastname':
                if (!nameExp.test(newUser[name]) || newUser[name].length === 0) testErrors = { ...testErrors, [name]: 'Debe ingresar un apellido Válido' }
                else testErrors = { ...testErrors, [name]: '' }
                break;

            case 'nickname':
                if (!nicknameExp.test(newUser[name]) || newUser[name].length === 0) testErrors = { ...testErrors, [name]: 'Debe ingresar un apodo Válido' }
                else testErrors = { ...testErrors, [name]: '' }
                break;

            case 'email':
                if (!emailExp.test(newUser[name]) || newUser[name].length === 0) testErrors = { ...testErrors, [name]: 'Debe ingresar un E-Mail Válido' }
                else testErrors = { ...testErrors, [name]: '' }
                break;

                case 'phone':
                    if (!phoneExp   .test(newUser[name]) || newUser[name].length === 0) testErrors = { ...testErrors, [name]: 'Debe ingresar un E-Mail Válido' }
                    else testErrors = { ...testErrors, [name]: '' }
                    break;

            case 'role':
                if (newUser[name].length === 0) testErrors = { ...testErrors, [name]: 'Debe seleccionar un role' };
                else testErrors = { ...testErrors, [name]: '' }
                break;

            default: break;
        };

        return testErrors;
    }

    function handleChange(e) {
        let { target } = e;
        let { value, name } = target;
        setNewUser({ ...newUser, [name]: value })
        setErrors(validate(name))

    }

    function hanldeBlur(e) {
        setErrors(validate(e.target.name))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!hasErrors) {
            if (allUsers.find(u => u.email === newUser.email)) alert('El usuario ya existe!');
            else {
                addUsers(newUser)
                setNewUser({
                    name: '',
                    lastname: '',
                    nickname: '',
                    email: '',
                    role: ''
                });
                alert('Usuario agregado con éxito!')
            }
        }
    }

    return (
        <div className='add-user'>
            <form onSubmit={handleSubmit} className='form'>
                <h4>Completa tus dátos:</h4>
                <label>Nombre</label>
                <input
                    name='name'
                    value={newUser.name}
                    onChange={handleChange}
                    onBlur={hanldeBlur}
                    placeholder='Nombre...' />
                {errors.name && <span className='errors'>{errors.name}</span>}
                <label>Apellido</label>
                <input
                    name='lastname'
                    value={newUser.lastname}
                    onChange={handleChange}
                    onBlur={hanldeBlur}
                    placeholder='Apellido...' />
                {errors.lastname && <span className='errors'>{errors.lastname}</span>}
                <label>Apodo</label>
                <input
                    name='nickname'
                    value={newUser.nickname}
                    onChange={handleChange}
                    onBlur={hanldeBlur}
                    placeholder='Apodo...' />
                {errors.nickname && <span className='errors'>{errors.nickname}</span>}
                <label>Email</label>
                <input
                    name='email'
                    value={newUser.email}
                    onChange={handleChange}
                    onBlur={hanldeBlur}
                    placeholder='E-Mail...' />
                {errors.email && <span className='errors'>{errors.email}</span>}
                <label>Tel</label>
                <input
                    name='phone'
                    value={newUser.phone}
                    onChange={handleChange}
                    onBlur={hanldeBlur}
                    placeholder='Teléfono...' />
                {errors.phone && <span className='errors'>{errors.phone}</span>}
                <label>Role</label>
                <select
                    name='role'
                    value={newUser.role}
                    onChange={handleChange}
                    onBlur={hanldeBlur} >
                       { roles.map(r => (<option value={r}>{r}</option>)) }
                        </select>
                {errors.role && <span className='errors'>{errors.role}</span>}
                <br />
                <button className='button' disabled={hasErrors} type='submit'>Agregar</button>
            </form>
        </div>
    )
}

export default CreateUser
