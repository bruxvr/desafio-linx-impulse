import styled from "styled-components";

export const DividerStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    gap: 1.5rem;
    width: 100%;

    .line {
        width: 500px;
        height: 2px;
        background-color: #707070;
        opacity: 0.5;
    }

    .divider {
        text-align: center;

    }
    
    .divider h2 {
        color: #888888;
        font-weight: 700;
    }

`