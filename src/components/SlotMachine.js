import React, { Component } from 'react'
import SpendMoneyBtn from './SpendMoneyBtn'

export default class SlotMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slot1: 0,
            slot2: 0,
            slot3: 0
        }
    }

    pull() {
        alert(`you are going to spend ${this.props.bet} to play slot machine`);

        let slot1 = Math.floor(Math.random() * 4),
            slot2 = Math.floor(Math.random() * 4),
            slot3 = Math.floor(Math.random() * 4);

        this.setState({
            slot1: slot1,
            slot2: slot2,
            slot3: slot3,
        });

        alert(`your numbers are "${slot1}", "${slot2}", and "${slot3}"`);

        let moneyWon = this.props.bet;
        if (slot1 == slot2 && slot1 == slot3) {
            moneyWon *= 5;
            this.props.winMoney(moneyWon);
            alert(`you won $${moneyWon}`);
        } else if (slot1 == slot2 || slot1 == slot3 || slot2 == slot3) {
            moneyWon *= 2;
            this.props.winMoney(moneyWon);
            alert(`you won $${moneyWon}`);
        } else {
            alert("too bad, you lose");
        }
    }

    render() {
        return (
            <div>
                <h1>This is Slot Machine game</h1>
                <div className="slotMachine">
                    <span className="slot">{this.state.slot1}</span>
                    <span className="slot">{this.state.slot2}</span>
                    <span className="slot">{this.state.slot3}</span>
                </div>
                <SpendMoneyBtn
                    totalMoney={this.props.totalMoney}
                    onClick={this.props.onClick}
                    placeBet={this.props.placeBet}
                    additionalAction={() => this.pull()}
                    oldBet={this.props.bet}/>
            </div>
        )
    }
}