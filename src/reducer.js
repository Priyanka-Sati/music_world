export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQDwJ1BtO8EF6pboLbk0Lu2SczWLkA8F4_9X1tj_n8enLP_7vJ…tjpB_PWTGgMsJCKR8M6I_p88wocxGoXa4M3reIOr3fEQ7z1QA',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER' : 
            return {...state, user: action.user}

        case 'SET_TOKEN' :
            return {...state, token: action.token}
        
        default : 
            return state;
    }

}

export default reducer;