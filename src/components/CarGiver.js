import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CarGiver from './CarGiver';

class GiftList extends Component {


    render() {
        return (
            <div>
                <Router>
                    <h1>Car Giver</h1>
                </Router>
            </div>
        );
    }
}

export default GiftList;