import React from 'react'
import restaurantfood from '../icons_assets/restauranfood.jpg'
import "../styles/Main.css"
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className='main-top'>
            <div className='main-top-left'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    A zesty culinary experience awaits! Indulge in vibrant flavors, locally sourced ingredients, and warm hospitality. Join us for delightful moments at the heart of culinary excellence.
                </p>
                <button>
                    <Link to='/reservation' >Reserve a table</Link>
                </button>
            </div>
            <div className='main-top-right'>
                <img className='restaurant-food' src={restaurantfood} alt="Restaurant Food" />
            </div>
        </div>
    )
}

export default Main