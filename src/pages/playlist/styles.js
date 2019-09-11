import styled, { css } from 'styled-components';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
    margin-top: 50px;
    overflow: hidden;
    height: 100%;

    ${Spinner} {
        height: 48px;
    }

    ${props =>
        props.loading &&
        css`
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        `}
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    img {
        width: 220px;
        height: 220px;
    }

    div {
        margin-left: 20px;

        span {
            font-size: 11px;
            letter-spacing: 1.11px;
            font-weight: 300;
            color: white;
        }

        h1 {
            margin-top: 10px;
            font-size: 48px;
            color: white;
            margin-bottom: 10px;
        }

        p {
            margin-top: 0;
            color: white;
            font-size: 11px;
            letter-spacing: 1.11px;
            text-transform: uppercase;
        }

        button {
            background: #1db854;
            height: 32px;
            border-radius: 16px;
            color: #fff;
            line-height: 32px;
            padding: 0 35px;
            border: 0;
            margin-top: 18px;
            font-size: 12px;
            letter-spacing: 1.11px;
            cursor: pointer;
        }
    }
`;

export const BlockSongList = styled.div`
    overflow: auto;
    height: calc(100% - 220px);
`;

export const SongList = styled.table`
    width: 100%;
    text-align: left;
    margin-top: 20px;

    thead tr th {
        font-size: 11px;
        color: #f2f2f2;
        letter-spacing: 1.11px;
        font-weight: normal;
        text-transform: uppercase;
        padding: 10px 10px;

        &:last-child {
            text-align: right;
        }
    }

    tbody tr * {
        cursor: pointer;
    }

    tbody tr:hover td {
        background: #282828;
    }
`;

export const SongItem = styled.tr`
    td {
        border-top: 1px solid #282828;
        font-size: 13px;
        padding: 0 10px;
        line-height: 40px;
        background: ${props => (props.selected ? '#282828' : 'transparent')};
        color: ${props => (props.playing ? '#1ed770' : '#fff')};

        img {
            vertical-align: sub;
        }

        &:first-child {
            width: 80px;
            text-align: right;
        }

        &:last-child {
            text-align: right;
        }
    }

    &:hover td {
        background: #282828;
    }
`;
