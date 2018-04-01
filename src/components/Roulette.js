import React, { Component } from 'react'
import SpendMoneyBtn from './SpendMoneyBtn'
import utils from '../utils/utils'

export default class SlotMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: undefined,
            bet: undefined
        }
        this.rouletteData = [
            "#F00",
            "#000",
            "#F00",
            "#000",
            "#F00",
            "#000",
            "#0F0",
            "#F00",
            "#000",
            "#F00",
            "#000",
            "#F00",
            "#000",
        ]
    }

    spin() {
        alert(`you are going to spend $${this.props.bet} to play roulette`);

        let choosenOne = Math.floor(Math.random() * (this.rouletteData.length));

        this.setState({
            current: choosenOne,
        });

        let middle = Math.floor(this.rouletteData.length / 2);

        alert(`the numbers is "${choosenOne}"`);

        let moneyWon = this.props.bet;
        if (middle == choosenOne && this.state.bet == choosenOne) {
            moneyWon *= 10;
            this.props.winMoney(moneyWon);
            alert(`you won $${moneyWon}`);
        } else if (this.state.bet == choosenOne) {
            moneyWon *= 5;
            this.props.winMoney(moneyWon);
            alert(`you won $${moneyWon}`);
        } else if (this.rouletteData[choosenOne] == this.rouletteData[this.state.bet]) {
            moneyWon *= 2;
            this.props.winMoney(moneyWon);
            alert(`you won $${moneyWon}`);
        } else {
            alert("too bad, you lose");
        }
    }

    condition() {
        if (this.state.bet === undefined) {
            alert("please choose a number to start the game");
            return false;
        }
        return true;
    }

    setBet(index) {
        if (this.state.bet == index) {
            this.setState({
                bet: undefined
            })
        } else {
            this.setState({
                bet: index
            });
        }
    }

    render() {

        if (this.props.user == "") {
            utils.toLoginPage();
        }

        let board = [];
        for (let i = 0; i < this.rouletteData.length; i++) {
            board.push(
                <div key={i} className={"slot" + ((i == this.state.current) ? " active" : "")}>
                    <input type="checkbox" onClick={() => this.setBet(i)} checked={i == this.state.bet} />
                    <div
                        className="label"
                        style={{ backgroundColor: this.rouletteData[i] }}>
                        {i}
                    </div>
                </div>
            )
        }

        return (
            <div>
                <h1>This is Roulette game</h1>
                <div className="roulette">
                    {board}
                </div>
                <SpendMoneyBtn
                    totalMoney={this.props.totalMoney}
                    onClick={this.props.onClick}
                    condition={() => this.condition()}
                    placeBet={this.props.placeBet}
                    additionalAction={() => this.spin()}
                    oldBet={this.props.bet} />
            </div>
        )
    }
}