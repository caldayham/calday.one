import React from 'react'
import { Link } from 'react-router-dom';
import { CheckBox, CheckBoxLabel, CheckBoxWrapper, HeaderTopLine, HeaderWrapper, Nav, SearchButton, SearchInput, SearchWrapper } from './headerStyles.js';

const Header = (props) => {

    const themeToggler = () => {

        const changeThemeDark = () => {
            console.log('change theme dark');
            props.setTheme('dark');
            localStorage.setItem('theme', 'dark');
        };
        const changeThemeLight = () => {
            console.log('change theme light');
            props.setTheme('light');
            localStorage.setItem('theme', 'light');
        };

        props.theme === 'light' ? changeThemeDark() : changeThemeLight();
    };

    return (
        <HeaderWrapper>
            <HeaderTopLine>
                <h1>Cal Day</h1>
                <div>
                    <CheckBoxWrapper>
                        <CheckBox id="checkbox" type="checkbox" onChange={() => themeToggler()}/>
                        <CheckBoxLabel htmlFor="checkbox" />
                    </CheckBoxWrapper>
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
            </Nav>
            <SearchWrapper>
                <SearchInput placeholder="search content" />
                <SearchButton>Go</SearchButton>
            </SearchWrapper>
        </HeaderWrapper>
    )
}

export default Header