import styled from "styled-components";

export const DescriptionStyle = styled.div `
    form {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        color: #888888;
    }

    .description-container {
        display: flex;
        padding: 20px;
        border-top: 1px;
        align-items: center;
    }
    
    .description-text{
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        width: 60%;
        color: #888888;
        padding: 40px;
        font-size: 15px;
    }

    .description-text h2 {
        font-weight: normal;
    }

    .description-form {
        width: 40%;
        align-items: center;
        padding: 20px;
        color: #888888;
    }
    
    .input-container {
        display: flex;
        flex-direction: column;
        gap: 1.0rem;
    }

    .input-container input {
        width: 100%;
        height: 1.8rem;
        border-color: #707070 1.5px;
    }

    .input-name, .input-email, .input-cpf {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    .radio-btn {
        display: flex;
        gap: 2.2rem;
    } 
    
    Button {
        height: 45px;
        background-color: #FFFFFF;
        border-color: #707070;
        border: 1.2px solid;
        border-radius: 5px;
        color: #707070;
        font-size: 16px;
    }



`