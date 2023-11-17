import React from 'react'

const Footer = (props) => {
  const year = new Date();
  return (
    <footer>
      <p>Total Item{ (props.listLength >=2 && 's' ) }: {props.listLength}</p>
      <p>&copy;Copyright@{year.getFullYear()}.</p>
    </footer>
  )
}

export default Footer