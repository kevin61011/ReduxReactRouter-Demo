import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: "",
            password: ""
        }
    }

    login() {
        if(this.state.account == ""){
            alert("please check you user id and password");
            return;
        }
        this.props.login(this.state.account, this.state.password);
        window.location.href = "./#/SlotMachinePage"
    }

    onAccountChange(e) {
        let value = e.currentTarget.value;
        this.setState({
            account: value
        })
    }

    onPasswordChange(e) {
        let value = e.currentTarget.value;
        this.setState({
            password: value
        })
    }

    render() {
        return (
            <div>
                <div className="login-wrap">
                    <h2>Welcome</h2>
                    <div>User ID</div>
                    <div>
                        <input type="text" placeholder="user ID" onChange={(e) => { this.onAccountChange(e) }} />
                    </div>
                    <div>Password</div>
                    <div>
                        <input type="password" placeholder="password" onChange={(e) => { this.onPasswordChange(e) }} />
                    </div>
                    <button className="login-btn" onClick={() => this.login()} >Login</button>
                </div>
            </div>
        );
    }
}