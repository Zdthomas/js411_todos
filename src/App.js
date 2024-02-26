
import { Component } from 'react';
import './App.css';


class App extends Component {

  state = {

    isClicked: false,

    todos: [],

    text: ''


  }

  onClickHandler = () => {

    const todos = this.state.todos.slice();

    todos.push(this.state.text)

    this.setState({

      ...this.state,

      todos,

      text: '',
      

    })

  }

  onChangeHandler = (e) => {

    this.setState({

      ...this.state,

      text: e.target.value

    })

  }

  handleDelete = (idx) => {

    const todos = this.state.todos.filter((_, i) => i !== idx);

    this.setState({

      ...this.state,

      todos

    })


  }

  render() {

    return (

      <div>
         <input onChange = {this.onChangeHandler} value = {this.state.text} />
        

        <br />

        <button onClick = {this.onClickHandler}>Add ToDo</button>
       

        <br />

        <ol>

          {this.state.todos.map((todos, idx) => (

            <li key = {idx}>

              {todos}{' '}

              <button onClick = {() => this.handleDelete(idx)}>Delete</button>

            </li>

          ))}

        </ol>

      </div>


    )
  }


}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Hello World
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
