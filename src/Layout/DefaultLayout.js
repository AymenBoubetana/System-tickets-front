import React from 'react'
import Footer from './partiels/Footer'
import Header from './partiels/Header'

const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
      <div className='header'>
        <Header/>
      </div>
      <main>
      {children}
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  )
}

export default DefaultLayout