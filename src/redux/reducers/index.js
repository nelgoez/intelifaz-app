import { GET_USERS, SET_USERS, REMOVE_USER } from "../../consts";

const initialState = {
    users: []
}

export default function reducer(state = initialState, action) {

    let { type, payload } = action;

    switch (type) {

        case SET_USERS:

            return { ...state, users: [...state.users, payload] };

        case GET_USERS:

            return state.users;

        case REMOVE_USER:

            return { ...state, users : state.users.filter(u => u.name !== payload)};

        default:
            return state
    }
}
