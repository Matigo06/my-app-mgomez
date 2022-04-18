import React, { useState, useEffect } from 'react';
import Cartwidget from '../Cartwidget/Cartwidget';
import { Link, NavLink } from 'react-router-dom'
import { getCategories } from '../../asyncmock';
import './NavBar.css'

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect (() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])


    return (
        <nav className="NavBar" >
            <Link className='principal' to='/'>
            <div>
                <img src='./images/logoolinails.png' className="styleLogo" alt="logo" />
                <h1 className="title">OliNailsShop</h1>
            </div>
            </Link>
            <div className="Categories Secciones">
                { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                    className={({isActive}) => isActive ? 'botonSelected' : 'botonMenu'}>
                    {cat.description}</NavLink>)}
                </div>
            <Cartwidget />
        </nav>
    )
}

export default NavBar