import React from 'react'

export const CreateUser = (props) => {

    const {
        newUser,
        setNewUser,
        addUsers,
        setErrors,
        errors
    } = props

    function validate(name) {
        let testErrors = errors
        let nameExp = /^[a-zA-Z ]*$/;
        let nicknameExp = /^[a-zA-Z0-9 .!?"-]+$/;
        let emailExp = /^[^\s@]+@[^\s@]+$/;
        switch (name) {
            case 'name': {
                if (!nameExp.test(newUser[name]) || newUser[name].length === 0) testErrors = { ...testErrors, [name]: 'Debe ingresar un nombre Válido' }
                else testErrors = { ...testErrors, [name]: '' }
                break;
            };

            case 'lastname': {
                if (!nameExp.test(newUser[name]) || newUser[name].length === 0) testErrors = { ...testErrors, [name]: 'Debe ingresar un apellido Válido' }
                else testErrors = { ...testErrors, [name]: '' }
                break;
            };

            case 'nickname': {
                if (!nicknameExp.test(newUser[name]) || newUser[name].length === 0) testErrors = { ...testErrors, [name]: 'Debe ingresar un apodo Válido' }
                else testErrors = { ...testErrors, [name]: '' }
                break;
            };
            case 'email': {
                if (!emailExp.test(newUser[name]) || newUser[name].length === 0) testErrors = { ...testErrors, [name]: 'Debe ingresar un E-Mail Válido' }
                else testErrors = { ...testErrors, [name]: '' }
                break;
            };
            case 'role': {
                if (newUser[name].length === 0) testErrors = { ...testErrors, [name]: 'Debe seleccionar un role' };
                else testErrors = { ...testErrors, [name]: '' }
                break;
            };
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
        addUsers(newUser)
        setNewUser({
            name: '',
            lastname: '',
            nickname: '',
            email: '',
            role: ''
        })
    }

    return (
        <div className='add-user'>
            <form onSubmit={handleSubmit} className='form'>
                acá se crea un usuario
                <label>Nombre</label>
                <input
                    name='name'
                    value={newUser.name}
                    onChange={handleChange}
                    onBlur={hanldeBlur}
                    placeholder='Nombre...' />
                <label>Apellido</label>
                <input
                    name='lastname'
                    value={newUser.lastname}
                    onChange={handleChange}
                    onBlur={hanldeBlur}
                    placeholder='Apellido...' />
                <label>Apodo</label>
                <input
                    name='nickname'
                    value={newUser.nickname}
                    onChange={handleChange}
                    onBlur={hanldeBlur}
                    placeholder='Apodo...' />
                <label>Email</label>
                <input
                    name='email'
                    value={newUser.email}
                    onChange={handleChange}
                    onBlur={hanldeBlur}
                    placeholder='E-Mail...' />
                <label>Role</label>
                <input
                    name='role'
                    value={newUser.role}
                    onChange={handleChange}
                    onBlur={hanldeBlur}
                    placeholder='Role...' />
                <button className='button' disabled={!newUser} type='submit'>Agregar</button>
            </form>
        </div>
    )
}

export default CreateUser
