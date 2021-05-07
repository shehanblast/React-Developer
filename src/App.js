import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

//Reason why we use class is it contains more functionality than function.
//As a result we have the access to the render method
//Another benifit is we can access to the state(change object when its clicked)
class App extends Component{
    constructor() {
        super();
        this.state = {
            monsters : [
                {
                    name : 'Frank',
                    id : 'asc1'
                },
                {
                    name : 'Dracular',
                    id : 'asr2'
                },
                {
                    name : 'Frank',
                    id : 'as1w'
                }
            ]
        }
    }

    render() {
        return (
            <div className="App">
                {this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)}

                {/*/!*Change the State name on Button click*!/*/}
                {/*<p>*/}
                {/*    {this.state.string}*/}
                {/*</p>*/}
                {/*<button onClick={() => this.setState({string:"Bye Binuka"})}>Change Text</button>*/}
            </div>
        )
    }
}

////////////////////////////////////////////////////////////
//Same Thing with the class component

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           My name is Binuka.
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
