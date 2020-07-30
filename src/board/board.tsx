import React from 'react';




const boardTypes = {REQUEST: 'board/REQUEST'}
const boardRequest = action => ({type: boardTypes.REQUEST, payload: action.payload})
const boardReducer = ( state, action ) => {
    switch (action.type){
        case boardTypes.REQUEST: return {...state, payload: action.payload}
        default : return null
    }
}
export const Board = () => {
    return (
        <div>
            
        </div>
    );
};

export default boardReducer;