import React, { Component } from 'react'
import AddMoneyBtn from './AddMoneyBtn'

export default class Header extends Component {

    handleLogout() {
        this.props.logout();
        window.location.href = "./#/LoginPage"
    }

    render() {
        return (
                <header>
                    Hello {this.props.user} <button onClick={() => {this.handleLogout()}}>Logout</button><br />
                    <br />
                    Your total money: {this.props.totalMoney}
                    <AddMoneyBtn value={100} onClick={this.props.addMoney} > Add $100 </AddMoneyBtn>
                    <AddMoneyBtn value={500} onClick={this.props.addMoney} > Add $500 </AddMoneyBtn>
                    <AddMoneyBtn value={1000} onClick={this.props.addMoney} > Add $1000 </AddMoneyBtn>
                </header>
        )
    }
}
