import styled from 'styled-components';
import SearchIcon from '../../assets/images/search.svg';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    height: 50px;
    width: calc(100% - 40px);
    top: 0;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    border-radius: 12px;
    height: 24px;
    width: 175px;
    padding: 6px 7px 6px 26px;
    background: #fff url(${SearchIcon}) no-repeat 7px center;

    input {
        flex: 1;
        width: 100%;
        font-size: 13px;
        color: #121212;
        border: 0;
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #fff;

    img {
        width: 27px;
        height: 27px;
        border-radius: 50%;
        margin-right: 13px;
    }
`;
