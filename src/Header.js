import React from 'react'

const Header = (props) => {
  return (
    <header>
        <h1>{props.myTitle}</h1>
    </header>
  )
}

Header.defaultProps = {
  myTitle : 'Default Title'
}

export default Header