import React, { Component } from 'react';

class ClassCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
             counter:0
        }
    }
    increaseHandler = () => {
        this.setState(
            // { counter : this.state.counter + 1}
                        (prevState)=>{
                            return {counter : prevState.counter +1}
                        }
        )
    }



    render() {
        return (
            <div className="App">
                <p>Counter : {this.state.counter} </p>
                <button onClick={this.increaseHandler}>Increase with Class</button>
            </div>
        );
    }
}

export default ClassCounter;