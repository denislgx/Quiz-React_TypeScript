import styled, { createGlobalStyle } from "styled-components";
import BackgroundImage from "./images/bgimg.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%
    }

    body {
        background-image: url(${BackgroundImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: "Catamaran", sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #ffff;
    }

    .app__score {
        background-image: linear-gradient(180deg, #fff, #ffcc91);
        color: #745b52;
        padding: 15px;
        border-radius: 20px;
        font-size: 1.2rem;
        margin: 0;
        margin-bottom: 10px;
        border: 2px solid #d38558;
    }

    h1 {
        font-family: Fascinate Inline, Impact, Haettenschweiler,
            "Arial Narrow Bold", sans-serif;
        background-image: linear-gradient(180deg, #fff, #ffcc91);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        font-weight: 400;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
    }

    .app__start,
    .app__next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        color: #745b52;
        padding: 0 40px;
        font-size: 1.2rem;
    }

    .app__start {
        max-width: 250px;
    }
`;
