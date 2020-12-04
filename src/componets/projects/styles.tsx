import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 320px;
    height: 340px;
    /* padding: 16px; */
    /* margin-left: 32px; */
    /* padding: 0 32px; */
    flex: 1;
    /* margin-top: 32px; */
    background: #494949;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    overflow: hidden;
    flex: 1;

    & + & {
        margin-top: 32px;
    }
`;

export const Title = styled.h2`
    width: 208px;
    height: 19px;
    margin: 16px;
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 19px;

    color: #ffb800;
`;

export const JobsContainer = styled.ul.attrs((props) => ({
    className: props.className,
}))`
    display: flex;
    overflow: hidden;
    width: 100%;
    padding: 0;
    list-style: none;
    position: relative;

    & > li + li {
        margin-left: 16px;
    }

    .rec-dot {
        box-shadow: none;
        border: 2px solid #ffb800;
        padding: 4px;
        opacity: 0.6;
        &:hover,
        &:focus {
            box-shadow: 0 0 8px 1px #fff9;
            opacity: 0.8;
        }
        &_active {
            background: #ffb800;
            box-shadow: none;
        }
    }

    .rec-arrow {
        position: absolute;
        background: #fcfcfcee;
        z-index: 1;
        opacity: 0.2;
        color: #494949;

        box-shadow: 0 0 4px 1px #0003;

        border: 0px solid #494949;

        width: 32px;
        height: 32px;

        min-width: 32px;

        font-size: 1.2em;
        line-height: 31px;

        &-right {
            right: 2px;
        }
        &-left {
            left: 2px;
        }

        &:hover {
            box-shadow: 0 0 12px 0px #0004;
            background: #ffb800;
            opacity: 0.8;
        }
        &:focus {
            box-shadow: 0 0 12px 0px #0004;
            background: #fff;
            color: #494949;
            opacity: 0.8;
        }
    } //Colocar esse cess em um componente junto com o carousel
`;

export const Jobs = styled.li`
    background: #fff;
    margin: 0;
    min-width: calc(312px - 64px);
    width: 312px;
    height: 240px;
    overflow: hidden;

    border-radius: 8px;

    position: relative;

    & > div {
        background: #fcfcfcee;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        width: 100%;
        height: 32px;
        position: absolute;
        bottom: 0;
        padding: 8px;
        display: flex;
        align-content: center;

        & > h3 {
            font-size: 12px;
            line-height: 14px;
            color: #aaa;
        }

        /* border-radius: 0px 0px 4px 4px; */
    }
`;
