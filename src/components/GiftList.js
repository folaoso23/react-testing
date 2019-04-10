import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CarGiver from './CarGiver';

class GiftList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipient: '',
            gift: '',
            recipientGiftList: []
        };

        // this.setRecipient = this.setRecipient.bind(this);
        // this.setGift = this.setGift.bind(this);
    }

    render() {
        return (
            <div>
                <Router>
                    <Route path='/car-giver' component={CarGiver} />
                    <Link to='/car-giver'>Car Giver</Link>
                </Router>
            </div>
        );
    }
}

export default GiftList;