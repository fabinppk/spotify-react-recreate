import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
    flex: 1;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 48px;
    color: white;

    ${Spinner} {
        height: 24px;
        margin-left: 15px;
    }
`;

export const List = styled.div`
    margin-top: 10px;
    display: flex;
`;

export const Playlist = styled(Link)`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 250px;
    text-decoration: none;

    img {
        height: 250px;
    }

    strong {
        font-size: 13px;
        margin-top: 10px;
        color: #fff;
    }

    p {
        line-height: 22px;
        margin-top: 5px;
        font-size: 13px;
        color: #f2f2f2;
    }

    &:hover img {
        opacity: 0.4;
    }

    &:first-child {
        margin: 0;
    }
`;
