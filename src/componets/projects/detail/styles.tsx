import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        /* height: 768px; */
        /* width: 100%; */
        display: flex;
    }
`;

export const CloseModalDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0003;
    width: 100vw;
    height: 100vh;
`;

export const MainStageDiv = styled.div`
    max-width: 50vw;
    width: fit-content;
    background: #fff;
    height: 768px;
    border-radius: 16px;
    z-index: 3;
    position: relative;

    & > button {
        position: absolute;
        right: 16px;
        top: 16px;
        background: none;
        border: none;
        padding: 8px;
        color: #ff0000;
        cursor: pointer;
    }
`;

export const ImgContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: calc(100% - 32px);
    margin: 0 16px;
    height: 72%;
    overflow: hidden;

    & > img {
        border-radius: 16px;
        width: auto;
        height: 100%;
        display: block;
        align-self: center;
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    padding: 0 16px;
    margin-top: 16px;

    & > h4 {
        font-size: 24px;
        color: #aaa;
        margin: 16px 0;
    }

    & > p {
        font-size: 16px;
        color: #aaa;
        margin: 8px 0;
    }
`;

export const DescriptionStageDiv = styled.div`
    width: 25vw;
    margin-left: 32px;
    background: #fff;
    height: fit-content;
    margin-bottom: 64px;
    border-radius: 16px;
    align-self: flex-start;
    z-index: 3;
`;

export const ProjectTitle = styled.h1`
    width: 100%;
    height: 10%;
    padding: 24px 16px 0;
    color: #ffb800;
`;

export const DescriptionTitle = styled.h2`
    width: 100%;
    height: 10%;
    padding: 24px 16px 0;
    color: #ffb800;
`;
