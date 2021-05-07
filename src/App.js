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
            string : "Hello Binuka"
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        {this.state.string}
                    </p>
                    {/*Change the State name on Button click*/}
                    <button onClick={() => this.setState({string:"Bye Binuka"})}>Change Text</button>
                </header>
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
