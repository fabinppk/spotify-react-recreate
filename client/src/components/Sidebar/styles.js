import styled from 'styled-components';
import { Spinner } from '../Loading/styles';

export const Container = styled.aside`
    width: 200px;
    height: 100%;
    background: #121212;
    color: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BlockUl = styled.div`
    padding: 25px;
`;

export const Nav = styled.ul`
    list-style: none;
    margin-top: 25px;

    &:first-child {
        margin: 0;
    }

    li {
        a {
            color: inherit;
            text-decoration: none;
            font-size: 13px;
            line-height: 32px;
            font-weight: ${props => (props.main ? 'bold' : 'normal')}

            &:hover {
                color: white;
            }
        }

        span {
            font-size: 11px;
            text-transform: uppercase;
            line-height: 22px;
            letter-spacing: 1.11px;
            font-weight: 300;
        }

        ${Spinner} {
            height: 15px;
            margin-left: 5px;
        }
    }
`;

export const NewPlaylist = styled.button`
    background: transparent;
    border: 0;
    border-top: 1px solid #282828;
    font-size: 13px;
    color: #f2f2f2;
    display: flex;
    align-items: center;
    padding: 15px 25px;

    &: hover {
        color: white;
    }

    img {
        margin-right: 10px;
    }
`;
