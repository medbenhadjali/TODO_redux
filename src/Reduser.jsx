import { ADD, MODIF, COMPLIT, SUP } from "./actionTypes";
const initialState = {
  todos: [
    {
      id: 0,
      desc: "ichri l5bez",
      complete: false
    }
  ]
};
function todoreducer(state = initialState, action) {
  switch (action.type) {

    case ADD:
      return { ...state, todos: [...state.todos, action.payload] };

    case COMPLIT:
      let newTodos = state.todos;
      // console.log(newTodos)
      newTodos[action.payload].complete = !newTodos[action.payload].complete;
      return { ...state,todos:[...newTodos]   };
      case SUP:
          let a = state.todos;
          // newState.filter((el,id)=> i !== id)
          return { ...state,todos: [...a.filter((el,id)=> id !== action.payload )]  };
          case MODIF:
            console.log(action.payload)
            let modifstate= state.todos ;
            console.log(action.payload)
           return { ...state,todos: modifstate.map((el,id)=> el.id === action.payload.id ?{...el, desc:action.payload.desc}: el )} ;
            // {...state,todos:[...b.map((el,i)=>el)] }
          


   
     
      
      default: return state
  }
}

export default todoreducer;

// if(action.type===ADD)
// {
//     return (this.state.concat(action.payload))
// }
// if (action.type===MODIF)
// {
//     return
// }
// if (action.type===COMPLIT)
// {
//     return
// }
// if(action.type===SUP)
// {
//     return
// }
