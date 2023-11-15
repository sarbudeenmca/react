import React from 'react'

const Footer = () => {
    const year=new Date();
  return (
    <footer>&copy;Copyright@{year.getFullYear()}.</footer>
  )
}

export default Footer