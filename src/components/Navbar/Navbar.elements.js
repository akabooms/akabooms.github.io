import styled from 'styled-components'
import {Container} from '../../gstyles'
import {Link} from 'react-router-dom'
import {Gi3DStairs} from 'react-icons/gi'
import {FiPhoneForwarded} from 'react-icons/fi'

export const Nav = styled.nav `
background:black;
color:#CCCCCC;
height: 80px;
display:flex;
justify-content:center;
align-items:center;
font-size: 1.2rem;
position:sticky;
top:0;
z-index:999;
`

export const NavCon = styled(Container)`
display: flex;
justify-content:space-between;
height:80px;

${Container}
`

export const NavLogo = styled(Link)`
color: #CCCCCC;
justify-self: flex-start;
cursor: pointer;
text-decoration:none;
font-size:2rem;
display:flex;
align-items:center;
`

export const NavIcon = styled(Gi3DStairs)`
margin-right: .5rem;

`
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 960px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size:1.8rem;
    cursor:pointer;
}
`
export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #e4ccba;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #CCCCCC;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #CCCCCC;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const CallTo = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  font-size: 1.2em;

  &hover{
      cursor:pointer

  }

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center ;
    align-items: center;
    width:100%;
  }

  @media screen and (max-width:768px){
    display:none;
  }
`

export const CallIcon = styled(FiPhoneForwarded)`
/* display:flex;
align-items: center;
justify-content: flex-start; */
margin-right: 10px;
`