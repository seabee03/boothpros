import React, { Component } from 'react';

export class Home extends Component {
    render () {
        return (
            <div className = "p-grid">
                <div className = "p-col-12">
                    <div className = "card">
                        <img src="assets/layout/images/Booth-Pros.png" alt="" width="300" />
                        <h1>Welcome to Booth Pros!</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    };
}

export default Home;