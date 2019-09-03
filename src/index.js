import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// extends react.component to be useful
class HelloWorld extends React.Component {

    // render is a mandatory method
    render(){
        // allow it to take on properties
        // access properties with this.props
        // can have as many properties as you want
        return <p>Hello, {this.props.greetTarget}!</p>
    }
}

class Buttonify extends React.Component {
    render() {
        // can access children of this element with this.props.children
        return(
            <div>
                <button type={this.props.behavior}>{this.props.children}</button>
            </div>
        );
    }
}

var destination = 
ReactDOM.render(
                // syntax to call component we created
                // works like a normal html tag
                // i.e. can add ids, wrap it in other tags, att properties, etc
                <div>
                    <HelloWorld greetTarget="me"/>
                    <HelloWorld greetTarget="Ty"/>
                    <HelloWorld greetTarget="doggo"/>
                    <HelloWorld greetTarget="pupper"/>
                    <HelloWorld greetTarget="heckin' bamboozeled"/>
                    <Buttonify behavior="submit">SEND DATA</Buttonify>
                </div>,
                document.querySelector("#container")
                );
    // <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
