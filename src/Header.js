import React from 'react'

const Header = (props) => {
  return (
    <header>
      <div className='heading'>
        <h1>{props.myTitle}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  myTitle: 'Default Title'
}

export default Header