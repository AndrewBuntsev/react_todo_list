import React, { Component } from 'react';

function About(){
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>
                This is ToDoList app v1.0.0. It is part of react crash course
            </p>
        </React.Fragment>
    )
}

const headerStyle= {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default About;