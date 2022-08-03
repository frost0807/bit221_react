import React from 'react'
import Header from '../layout/Header'
import Content from '../layout/Content'
import Footer from '../layout/Footer'
import {BrowserRouter} from 'react-router-dom'

function Page() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Page