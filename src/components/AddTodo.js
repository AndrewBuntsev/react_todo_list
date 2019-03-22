import React, { Component } from 'react';

export class AddTodo extends Component {
    state ={
        title: ""
    }

    onChange = (e) => {
        this.setState({title: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return <form 
            style={{display: 'flex'}}
            onSubmit={this.onSubmit} >
            
            <input 
                style={{flex: '10', padding: '5px'}} 
                type="text" 
                name="title" 
                placeholder="Add todo..."
                value={this.state.title}
                onChange={this.onChange}></input>
            <input 
                type="submit" 
                value="Submit" 
                className="btn" 
                style={{flex: '1'}}></input>

        </form>;
    }
}

export default AddTodo;