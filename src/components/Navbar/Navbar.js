import React, {useState, useEffect} from 'react';
import {IconContext} from 'react-icons/lib';
import {Button} from '../../gstyles';
import {FaBars, FaTimes} from 'react-icons/fa';
import {
    Nav,
    NavCon,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavBtnLink,
    CallTo,
    CallIcon
} from './Navbar.elements';





function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
        useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);

    return (
          <>      
          <IconContext.Provider value={{ color: '#e4ccba' }}>
          <Nav>
            <NavCon>
              <NavLogo to='/' onClick={closeMobileMenu}>
                <NavIcon />
                AKA
              </NavLogo>
              <CallTo>
                <CallIcon />
                <p>Call 856-345-4488</p>
              </CallTo>
              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>
              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  {/* <NavLinks to='/' onClick={closeMobileMenu}>
                    Home
                  </NavLinks> */}
                </NavItem>
                <NavItem>
                  {/* <NavLinks to='/services' onClick={closeMobileMenu}>
                    Services
                  </NavLinks> */}
                </NavItem>
                <NavItem>
                  {/* <NavLinks to='/products' onClick={closeMobileMenu}>
                    Products
                  </NavLinks> */}
                </NavItem> 
                <NavItemBtn>
                  {button ? (
                    <NavBtnLink to=''>
                      <Button >Free Quote</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to=''>
                      <Button onClick={closeMobileMenu} fontBig primary>
                        Free Quote!
                      </Button>
                    </NavBtnLink>
                  )}
                 </NavItemBtn>
              </NavMenu>
            </NavCon>
          </Nav>
        </IconContext.Provider>
          </>
    )
}

export default Navbar
