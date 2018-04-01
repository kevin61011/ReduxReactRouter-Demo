import React, { Component } from 'react'
import Router from '../pages/Router'


export default class MyFavorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
    }

    showEdit() {
        this.setState({
            edit: true
        })
    }

    closeEdit() {
        this.setState({
            edit: false
        })
    }

    changeGame(newGame) {
        window.location.href = `./#${newGame}`
    }

    render() {

        let editBtn = [];
        for (let path in Router) {
            let exist = this.props.myFavorite.indexOf(path) > -1;
            let displayName = path.substring(1);
            editBtn.push(
                <button key={`edit-${path}`} className="edit-btn" onClick={() => (exist ? this.props.onClickDelete(path) : this.props.onClickAdd(path))}>{(exist ? "V " : "X ") + displayName}</button>
            )
        }

        let myFavoriteBtn = [];
        for (let path in this.props.myFavorite) {
            let displayName = this.props.myFavorite[path].substring(1);
            
            myFavoriteBtn.push(
                <button key={`favorite-${path}`} className="favorite-btn" onClick={() => this.changeGame(this.props.myFavorite[path])}>{displayName}</button>
            )
        }

        return (
            <div className="my-favorite-wrap">
                <div className="title-block">
                    <span className="title">My Favorite</span>
                    <button onClick={() => this.showEdit()} style={{ display: (this.state.edit ? "none" : "") }}>Edit</button>
                    <button onClick={() => this.closeEdit()} style={{ display: (this.state.edit ? "" : "none") }}>Confirm</button>
                </div>
                <div className="my-favorite" style={{ display: (this.state.edit ? "none" : "") }}>
                    <div>
                        {(myFavoriteBtn.length == 0) ? "you dont have any favorite game yet" : myFavoriteBtn}
                    </div>
                </div>
                <div className="my-favorite-edit" style={{ display: (this.state.edit ? "" : "none") }}>
                    <div>
                        {editBtn}
                    </div>
                </div>
            </div>
        );
    }
}