import React, { Component } from 'react'
import AddMoneyBtn from './AddMoneyBtn'

export default class Header extends Component {

    render() {
        return (
                <header>
                    Your total money: {this.props.totalMoney}
                    <AddMoneyBtn value={100} onClick={this.props.onClick} > Add $100 </AddMoneyBtn>
                    <AddMoneyBtn value={500} onClick={this.props.onClick} > Add $500 </AddMoneyBtn>
                    <AddMoneyBtn value={1000} onClick={this.props.onClick} > Add $1000 </AddMoneyBtn>
                </header>
        )
    }
}
