import { useState } from 'react'
import './Navbar.scss'

export default function Navbar() {

    const [statebtn, SetstateBtn] = useState(false)

    function stateOpenBtn() {
        SetstateBtn(!statebtn)
    }


    return (

        <div className='nav-container'>
            <div className="navbar-log">
                <img src="/assets/logo.svg" alt="logo homepage" />
            </div>
            <div className="navbar-menu">
                <div className="nav-list">
                    <a href="">Home</a>
                    <a href="">New</a>
                    <a href="">Popular</a>
                    <a href="">Trending</a>
                    <a href="">Categories</a>
                </div>
                <div className="menu-mobile">
                    <div className="btn-menu">
                        {statebtn ? <>
                            <button onClick={stateOpenBtn} ><img src="/assets/images/icon-menu-close.svg" alt="icon-open-menu" /></button>
                            <div className="menu-mobile-list">
                                <a href="">Home</a>
                                <a href="">New</a>
                                <a href="">Popular</a>
                                <a href="">Trending</a>
                                <a href="">Categories</a>
                            </div>
                        </>
                            :
                            <button onClick={() => SetstateBtn(!statebtn)} ><img src="/assets/images/icon-menu.svg" alt="icon-open-menu" /></button>
                        }
                    </div>
                </div>
            </div>
        </div>

    )

}