import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
    return (
        <header style={{backgroundColor:props.bgColor,color:props.textColor}}>
            <div className="container">
                <h2>
                    {props.text}
                </h2>
            </div>
        </header>
    )
}
Header.defaultProps={
    text:"FeedBack UI", //default props
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95'
}
Header.propTypes={
    text:PropTypes.string // to set up a data type 
}
export default Header
