import styled from 'styled-components';

const HeaderWrapper = styled.div`
    padding-bottom: 20px;
    border-bottom: 1px solid var(--lines);
    padding-right: 10px;
    padding-left: 10px;
`;
const HeaderTopLine = styled.div`
    color: ${props => props.theme.text};
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
`;
const SearchWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 6px;
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

    :hover {
        background-color: var(--text);
        color: var(--bg);
    }
`;

export {
    HeaderTopLine,
    HeaderWrapper,
    SearchButton,
    SearchInput,
    SearchWrapper,
    Nav,
    Checkbox,
    Ball,
    Label,
}