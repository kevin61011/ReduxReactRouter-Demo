import React from 'react'
import PropTypes from 'prop-types'

const AddMoneyBtn = ({ value, children, onClick }) => (
    <button
        value={value}
        onClick={() =>onClick(value)}
        style={{marginLeft:"5px"}}>
        {children}
    </button>
)

AddMoneyBtn.propTypes = {
    value: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default AddMoneyBtn
