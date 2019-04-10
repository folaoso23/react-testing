import React, { Component } from 'react';



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



    setRecipient = (event) => {
        this.setState({recipient: event.target.value});
    };

    setGift = (event) => {
        this.setState({gift: event.target.value});
    };

    addRecipientAndGift = () => {
        this.setState({recipientGiftList: this.state.recipientGiftList.concat(this.state.recipient + " | " + this.state.gift) });
        this.setState({recipient: "", gift: ""});
    };

    render() {

        const items = this.state.recipientGiftList.map(function(item){
            return <li value={item}> {item} </li>;
        });

        return (
            <div>
                <h1 data-app-title>Gift Giver</h1>
                <input type="text" placeholder="name of gift recipient" onChange={this.setRecipient} id="data-recipient-input-box"
                       value={this.state.recipient}/>
                <input type="text" placeholder="what's the gift?" onChange={this.setGift} id="data-gift-input-box"
                       value={this.state.gift}/>
                <button id="data-add-gift-button" disabled={!this.state.recipient || !this.state.gift}
                onClick={this.addRecipientAndGift}>Add Gift</button>
                <ul id="data-recipient-gift-list">{items}</ul>
            </div>
        );
    }
}

export default GiftList;