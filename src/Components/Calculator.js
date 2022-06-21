import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            result: null
        }

        // this.handleChangeFirst = this.handleChangeFirst.bind(this);
        // this.handleChangeSecond = this.handleChangeSecond.bind(this);
        // this.plus = this.plus.bind(this);
        
    }

    handleChangeFirst = (event) => {
        this.setState({
            firstNumber: parseInt(event.target.value)
        });
    }

    handleChangeSecond = (event) => {
        this.setState({
            secondNumber: parseInt(event.target.value)
        });
    }

    plus = () => {
        let result = this.state.firstNumber + this.state.secondNumber;
        this.setState({
            result: result
        });
    }

    minus = () => {
        let result = this.state.firstNumber - this.state.secondNumber;
        this.setState({
            result: result
        })
    }

    multiple = () => {
        let result = this.state.firstNumber * this.state.secondNumber;
        this.setState({
            result: result
        })
    }

    divide = () => {
        let result = this.state.firstNumber / this.state.secondNumber;
        this.setState({
            result: result
        })
    }

    render() {
        return (
            <div>
                <input type="number" onChange={this.handleChangeFirst}/>
                <br />
                <input type="number" onChange={this.handleChangeSecond}/>
                <br />
                Result: {this.state.result}
                <br />
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
                <button onClick={this.multiple}>x</button>
                <button onClick={this.divide}>/</button>
            </div>
        )
    }
}

export default Calculator;