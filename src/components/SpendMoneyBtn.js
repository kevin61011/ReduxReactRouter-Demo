import React, { Component } from 'react'

export default class SpendMoneyBtn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bet: this.props.oldBet
        }
    }

    handleBtnClick() {
        if(this.state.bet == 0 || this.state.bet == ""){
            alert(`place your bet first`);
            return;
        }

        let condition = true;
        if (typeof this.props.condition == "function") {
            condition = this.props.condition();
        }
        if (condition) {
            this.props.onClick(this.state.bet);
            this.props.additionalAction();
        }
    }

    changeBet(e) {
        let value = e.currentTarget.value;

        if(this.props.totalMoney < value){
            alert(`you only have ${this.props.totalMoney} dollar, placing ${value} is too much`);
            return;
        }

        this.setState({
            bet: value
        })

        this.props.placeBet(parseInt(value));
    }

    clearBet() {
        this.setState({
            bet: ""
        })
    }

    render() {
        return (
            <div>
                <input type="number" onClick={() => this.clearBet()} onChange={(e) => { this.changeBet(e) }} value={this.state.bet}/>
                <button
                    className="btn btn-spend-money"
                    onClick={() => this.handleBtnClick()}>
                    Place & Bet
                </button>
            </div>
        )
    }
}