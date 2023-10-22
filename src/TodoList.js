
import React, {Component} from "react";
import './index.css';


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
                <label htmlFor="insertArea">输入内容</label>
                <input id = "insertArea" value= {this.state.inputValue} onChange= {this.handleInputChange.bind(this)}/> <button onClick={this.add.bind(this)}>提交</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {return <li key={index} onClick={this.handleDelete.bind(this, index)}>{item}</li>})
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

    handleDelete(index) {
        let src = [...this.state.list]
        src.splice(index)
        this.setState({
            list:src
        })
    }

}


export default  TodoList