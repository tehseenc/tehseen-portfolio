import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData'

const WrapperMax = styled.section`
  background: #F8F8F8;
  width: 100%;
`;

const Nav = styled.nav`
height: 6rem;
margin: 0 auto;
padding-top: 3.125rem;
display: flex;
justify-content: space-between;
z-index: 100;
position: relative;
min-width: 50rem;
max-width: 66.625rem;
background: none;
`

const NavLink = css`
display: flex;
align-items: center;
height: 100%;
cursor: pointer;
text-decoration: none;
`

const Logo = styled(Link)`
${NavLink}
font-family: Stratos;
margin-left: 3rem;
font-size: 1.6rem;
letter-spacing: 0.1em;
color: #22211A;
white-space: nowrap;
`

const MenuBars = styled.i``

const NavMenu = styled.div`
display: flex;
align-items: center;
`

const NavMenuLinks = styled(Link)`
${NavLink}
font-family: Hermes;
margin: 3rem;
font-size: 1.1rem;
letter-spacing: 0.1em;
color: #575340;
white-space: nowrap;
`

const Navbar = () => {
    return (
        <WrapperMax>
            <Nav>
                <Logo to="/">TEHSEEN CHAUDHRY</Logo>
                <MenuBars />
                <NavMenu>
                    {menuData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
            </Nav>
        </WrapperMax>
    )
}

export default Navbar
