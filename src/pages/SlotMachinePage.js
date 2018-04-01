import React, { Component } from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import SlotMachineContainer from '../containers/SlotMachineContainer'
import MyFavoriteContainer from '../containers/MyFavoriteContainer'

export default class SlotMachinePage extends Component {

    render() {
        return (
            <div>
                <HeaderContainer />
                <hr />
                <div className="main-game-block">
                    <SlotMachineContainer />
                </div>
                <div className="my-favorite-block">
                    <MyFavoriteContainer />
                </div>
            </div>
        )
    }
}