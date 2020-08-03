import React from "react";

/* type */
const ADMIN_CHECK = 'ADMIN_CHECK'

/* actions */
export const adminCheck = (admin) =>({
    type: ADMIN_CHECK,
    admin
})

const initialstate={
    admin:false
}
/* reducer */
const admincheckReducer = (state=initialstate,action)=>{
    switch (action.type){
        case ADMIN_CHECK:
            console.log(state)
            return state
        default:
    }
    return state
}

export default admincheckReducer