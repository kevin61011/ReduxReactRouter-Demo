import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import RouletteContainer from '../containers/RouletteContainer'
import MyFavoriteContainer from '../containers/MyFavoriteContainer'

export default class RoulettePage extends Component {

    render() {
        return (
            <div>
                <HeaderContainer />
                <hr />
                <div className="main-game-block">
                    <RouletteContainer />
                </div>
                <div className="my-favorite-block">
                    <MyFavoriteContainer />
                </div>
            </div>
        )
    }
}