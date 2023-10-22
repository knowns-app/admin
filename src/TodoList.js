
import React, {Component} from "react";

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'hello',
            list:['a', 'b']
        }
    }

    render() {

        return (

            <div>
                <input value= {this.state.inputValue} onChange= {this.handleInputChange.bind(this)}/> <button onClick={this.add.bind(this)}>提交</button>

                <ul>
                    {
                        this.state.list.map((item, index) => {return <li>{item}</li>})
                    }
                </ul>
            </div>
        )
    }

    handleInputChange(e) {
        this.setState({
            inputValue:e.target.value
        })
    }

    add(e) {
        let src = this.state.list
        src.push(this.state.inputValue)
        this.setState({
            list:src
        })
    }

}


export default  TodoList