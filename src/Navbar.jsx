import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const [showPopup, setShowPopup] = useState(false)
    const popupContainerRef = useRef(null)
    const popupRef = useRef(null)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    const popupStyle = {
        height: showPopup ? `${popupRef.current.getBoundingClientRect().height}px` : '0px'
    }
    
  return (
    <section className="navbar-section">
        <nav  className="navbar">
            <div>
                <img src="../images/logo.svg" alt="logo" className="logo" />
            </div>
            <button className="nav-toggle" onClick={togglePopup}>
                <FaBars />
            </button>
        </nav>
        <div 
            className="popup"
            ref={popupContainerRef}
            style={popupStyle}
        >
            <ul className="nav-list" ref={popupRef}>
                <div className="nav-links">
                    <li>features</li>
                    <li>pricing</li>
                    <li>resources</li>
                </div>             
                <hr/>
                <div className="login">
                    <li>login</li>
                    <li>sign up</li>
                </div>            
            </ul>
        </div>
    </section>
  )
}
export default Navbar