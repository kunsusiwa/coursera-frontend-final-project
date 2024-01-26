import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Main from '../components/Main'

function Home() {
    return (
        <div>
            {/* <Header className="App-header" /> */}
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;