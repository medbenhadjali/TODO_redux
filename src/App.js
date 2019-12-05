import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { add, modif } from "./Action";
import { complit } from "./Action";
import {sup} from "./Action";
import uuid from 'uuid';



class App extends React.Component {
  state = {
    myInputValue: ""
  };

  render() {
    // console.log(this.props);
    // { console.log(this.props.tab[0].complete)}


    return (
      <div className="todo-contener">
        <h1>To-Do App!</h1>
        <h6>Add New To-Do </h6>
        <input
        value={this.state.myInputValue}
          className="taper-text"
          type="text"
          onChange={e => this.setState({ myInputValue: e.target.value })}
        />
        <br />
        <button 
          className="add" 
          onClick={()=>{this.props.addTask({
            id :uuid(),
            desc: this.state.myInputValue,
            complete: false
          });
          this.setState({ myInputValue:"" })}}
          // onChange={() => }

        >
          
          Add
        </button>
        <div>
          {this.props.tab.map((el, i) => (
            <div key={i}>
               <button onClick={() => this.props.modifier({
                 id:el.id,
                 desc:this.state.myInputValue,
                 complete:false
                 })} >
                Update
              </button>
              <button onClick={() => this.props.comp(i)}>
                complet
              </button>
             

              <button onClick={() => this.props.del(i)} >
                delete
              </button>
              <span style={{ textDecoration: el.complete ? "line-through" : "none" }} >
                {el.desc}
              </span>
            </div>
          )
          )}
        </div>

      </div>
    );
  }
}
//recup state
const mapStateToProps = state => ({ tab: state.todos , id : state.todos.id});
//recupe action 
const mapDispatchToProps = dispatch => ({
  addTask: newTask => dispatch(add(newTask)),
  comp:indice  => dispatch(complit(indice)),
  del : index => dispatch(sup(index)),
  
  modifier:modifTask => dispatch(modif(modifTask))
});

// const mapDispatchToProps = dispatch => ({
// });

// const mapDispatchToProps = dispatch => ({
//   check: i => dispatch(COMPLIT(i))
// });




export default connect(mapStateToProps, mapDispatchToProps)(App);
