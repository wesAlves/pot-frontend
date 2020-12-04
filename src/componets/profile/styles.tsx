import styled from "styled-components";

export const Container = styled.div`
    background: #494949;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 256px;
    min-width: 256px;
    min-height: 672px;
    padding: 16px;
    max-height: 768px;

    display: flex;
    flex-flow: column;
    align-items: center;

    margin-bottom: 32px;

    & > div {
        margin-top: 16px;
        background: #494949;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        border: 4px solid #fff;
        min-width: 128px;
        width: 128px;
        min-height: 128px;
        height: 128px;
        overflow: hidden;

        & > img {
            width: 100%;
        }
    }
`;

export const Title = styled.h1`
    margin-top: 8px;
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    & > span {
        font-size: 12px;
        color: #878787;
    }
`;

export const SubTitle = styled.h3`
    margin-top: 16px;
    margin-bottom: 4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #878787;
    line-height: 14px;
    text-align: left;
    width: 100%;
`;

export const CurrentLocation = styled(SubTitle)`
    text-align: center;
    margin-top: 8px;
`;

export const Paragraph = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;

    color: #ffffff;
`;
export const Icons = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    margin-top: 4px;
    list-style: none;
    width: 100%;
    justify-content: start;

    & > li + li {
        margin-left: 4px;
    }
`;

export const SocialIcons = styled(Icons)`
    justify-content: center;
`;
