import { GET_USERS, SET_USERS, REMOVE_USER } from "../../consts";

const initialState = {
    users: [
        {
            email: "nahuelgomez.cti@gmail.com",
            phone: '+5408545689',
            lastname: "Gomez",
            name: "Nahuel Leonardo Elias",
            nickname: "nelgoez",
            role: "admin",
        },
        {
            email: "raul@mail.com",
            phone: '+5408545289',
            lastname: "Gomez",
            name: "Raul Angel",
            nickname: "gato",
            role: "admin",
        },
        {
            email: "juli@mail.com",
            phone: '+5408555689',
            lastname: "Vasquez ",
            name: "Julian",
            nickname: "javi",
            role: "admin",
        },
        {
            email: "alan@mail.com",
            phone: '+5408545549',
            lastname: "Diaz",
            name: "Alan",
            nickname: "aksa",
            role: "admin",
        }
    ]
}

export default function reducer(state = initialState, action) {

    let { type, payload } = action;

    switch (type) {

        case SET_USERS:

            return { ...state, users: [...state.users, payload] };

        case GET_USERS:

            return state.users;

        case REMOVE_USER:

            return { ...state, users: state.users.filter(u => u.email !== payload) };

        default:
            return state
    }
}
