import React from 'react'
import Header from './Header'
function UserLayout({children}) {
  return (
    <>
    <Header/>
     <div className="content container mt-4 h-[80vh]">{children}</div>
    </>
    
    
  )
}

export default UserLayout