import React from 'react'

const header = () => {

    const headerStyle = {
        backgroundColor:'mediumseagreen',
        color:'#ffff'
      };
  return (
    <div>
      <header style={headerStyle}>
        <h1 style={{textAlign :'center'}}> 
            Grocery List
        </h1>
      </header>
    </div>
  )
}

export default header
