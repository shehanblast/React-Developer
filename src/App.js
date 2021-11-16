import './App.css';
import React, {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";

//Reason why we use class is it contains more functionality than function.
//As a result we have the access to the render method
//Another benefit is we can access to the state(change object when its clicked)
class App extends Component{

    constructor() {
        super();
        this.state = {
            monsters : [],
            string : 'Hello Binuka',
            abb : [
                {
                    name :'rr',
                    num : 2
                },
                {
                    name :'wr',
                    num : 3
                },
                {
                    name :'tr',
                    num : 3
                }
            ]
        }
    }

    //when this component mounts it calls this method
    //fetch from the url, covert it to JSON format, add to user array and replace it within monsters array
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters : users}));
    }

    render() {
        return (
            <div className="App">

                {/*Pass monster array to the props*/}
                <CardList monsters={this.state.monsters}>
                    {/*Pass as props.children*/}

                </CardList>

                {/*Access array from map*/}
                {/*{this.state.abb.map(jok => (*/}
                {/*    <h1>{jok.name}</h1>*/}
                {/*))}*/}

                {/*Change the State name on Button click*/}
                {/*<p>*/}
                {/*    {this.state.string}*/}
                {/*</p>*/}
                {/*<button onClick={() => this.setState({string:"Bye Binuka"})}>*/}
                {/*    Change Text</button>*/}

            </div>
        )
    }
}

////////////////////////////////////////////////////////////
//Same Thing with the function component

// function App() {
//   return (
//     <div>
//           My name is Binuka.
//     </div>
//   );
// }


export default App;
