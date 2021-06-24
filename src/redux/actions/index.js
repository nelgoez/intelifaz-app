import {
    SET_USERS,
    GET_USERS,
    REMOVE_USER
} from '../../consts'

export const setUsers = (payload) => ({
    type: SET_USERS,
    payload
})

export const getUsers = () => ({
    type: GET_USERS
})

export const removeUser = (payload) => ({
    type: REMOVE_USER,
    payload
})