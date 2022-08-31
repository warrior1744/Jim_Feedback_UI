import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse }) {

    // className conditional
//   return (
//     <div className={`card ${reverse && `reverse`}`}>{children}</div>
//   )

    // styling conditional
return (
    <div className='card' style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' :  '#fff',
        textColor: reverse? '#white' : '#000'
    }}>{children}</div>
)
}


Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card