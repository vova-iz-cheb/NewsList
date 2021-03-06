import React from 'react'
import UserBox from '../Containers/UserBox'
import Nav from '../Containers/Nav'

export default () => {
  return (
    <header className="header">
    <div className="container">
      <div className="row align-items-center">
        <Nav />
        <div className="col-auto order-1">
          <UserBox />
        </div>
      </div>
    </div>
  </header>
  )
}