import React from 'react'
import { Route } from 'react-router-dom'
import {useSelector} from 'react-redux';


import Blogs from '../Blogs/blogs'
import Contact from '../Contact/contact'
import Elements from '../Elements/elements';
import Faq from '../Faq/faq'

function MainContainer() {

    const pagename = useSelector(state => state.pagename)

    return (
        <section id="main-container">
            <h2 className="text-center">{pagename}</h2>
            <div className="container">
                <Route path='/blogs' exact><Blogs /></Route>
                <Route path='/contact' exact><Contact /></Route>
                <Route path='/elements' exact><Elements /></Route>
                <Route path='/faq' exact><Faq /></Route>              
            </div>
        </section>
    )
}

export default MainContainer