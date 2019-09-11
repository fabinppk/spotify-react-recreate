import styled from 'styled-components';

export const Container = styled.div`
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #282828;
    padding: 12px;
`;

export const Current = styled.div`
    display: flex;
    align-items: center;
    width: 250px;

    img {
        width: 48px;
        height: 48px;
    }

    div {
        margin-left: 12px;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;

        p {
            font-size: 13px;
            color: white;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow-x: hidden;
        }

        small {
            font-size: 11px;
            color: #f2f2f2;
            margin-top: 5px;
        }
    }
`;

export const Progress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    max-width: 940px;
`;

export const Controls = styled.div`
    display: flex;
    align-items: center;

    button {
        background: transparent;
        border: 0;
        margin: 0 15px;
    }
`;

export const Time = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 5px;

    span {
        font-size: 11px;
        color: #f2f2f2;
    }
`;

export const ProgressSlider = styled.div`
    width: 100%;
    margin: 0 15px;
`;

export const Volume = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    margin-rigth: 20px;
    margin-right: 20px;
    width: 250px;
    justify-content: flex-end;

    .rc-slider {
        width: 100px;
    }

    img {
        margin-right: 5px;
    }
`;
