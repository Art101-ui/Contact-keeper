import {
    SET_ALERT,
    REMOVE_ALERT
} from '../type'

// eslint-disable-next-line
export default (state,action)=>{
   switch(action.type){
       case SET_ALERT:
           return{
               ...state,
               alerts:action.payload
           }
       case REMOVE_ALERT:
           return {
               ...state,
               alerts:state.alerts.filter(alert=>alert.id!==action.payload)

           }

        default:
          return state
   }
}

