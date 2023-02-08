import React from 'react'

const Footer = () => {
    const  todayDate = new Date();
  return (
    <footer >
      <p style={{textAlign:'center'}}>Copy Right &copy; {todayDate.getFullYear()} </p>
    </footer>
  )
}

export default Footer
