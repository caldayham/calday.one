import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    margin-bottom: 60px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--lines);
    padding-right: 10px;
    padding-left: 10px;
`;
const HeaderTopLine = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
`;
const Label = styled.label`
    width: 50px;
    height: 26px;
    display: flex;
    background-color: var(--bg);
    border: 1px solid var(--lines);
    border-radius: 50px;
    align-items: center;
    position: relative;
    transition: all 0.2s ease;
`;
const Ball = styled.div`
    width: 20px;
    height: 20px;
    background-color: var(--text);
    position: absolute;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: all 0.2s linear;
`;
const Checkbox = styled.input`
    opacity: 0;
    position: absolute;
`;
const Nav = styled.nav`
    user-select: none;
    width: 80%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    color: var(--lines);
`;
const SearchWrapper = styled.div`
    margin-top: 20px;
`;
const SearchInput = styled.input`
    background-color: transparent;
    border: 1px solid var(--text);
    padding: 4px;
    border-radius: 4px;
    color: var(--text);
    outline: none;
`;
const SearchButton = styled.button`
    background-color: transparent;
    border: 1px solid var(--text);
    padding: 4px;
    border-radius: 4px;
    color: var(--text);
    font-weight: 600;
    transition: all 0.2s ease;
`;

const Header = () => {
  return (
    <HeaderWrapper>
            <HeaderTopLine>
                <h1>Cal Day</h1>
                <div>
                    <Checkbox type="checkbox" id="checkbox"/>
                    <Label for="checkbox">
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
                <Link to='/contact'>contact</Link>
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