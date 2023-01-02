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

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${props => props.theme.text};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${props => props.theme.bg};
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${props => props.theme.text};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export {
    CheckBox,
    CheckBoxLabel,
    CheckBoxWrapper,
    HeaderTopLine,
    HeaderWrapper,
    SearchButton,
    SearchInput,
    SearchWrapper,
    Nav,
}