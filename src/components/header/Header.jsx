import React from 'react'
import { Link } from 'react-router-dom';
import { Ball, Checkbox, HeaderTopLine, HeaderWrapper, Label, Nav, SearchButton, SearchInput, SearchWrapper } from './headerStyles.js';

const Header = () => {
  return (
    <HeaderWrapper>
            <HeaderTopLine>
                <h1>Cal Day</h1>
                <div>
                    <Checkbox type="checkbox" id="checkbox"/>
                    <Label htmlFor="checkbox">
                        <Ball/>
                    </Label>
                </div>
            </HeaderTopLine>
            <Nav>
                <Link to='/home'>home</Link>
                |
                <Link to='/about'>about</Link>
                |
                <Link to='/thoughts'>thoughts</Link>
                |
                <Link to='/projects'>projects</Link>
                |
                <Link to='/lessons'>lessons</Link>
                |
                <Link to='/connect'>connect</Link>
                |
                <Link to='/login'>login</Link>
            </Nav>
            <SearchWrapper>
                <SearchInput placeholder="search content"/>
                <SearchButton>Go</SearchButton>
            </SearchWrapper>
        </HeaderWrapper>
  )
}

export default Header