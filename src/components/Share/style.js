import styled from "styled-components";

export const ShareStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #888888;
    
    
    .share-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 3rem;
        gap: 2.8rem;
    }
    
    form {
        display: flex;
        width: 100%;
        gap: 7rem;
        
    }
    form input {
        width: 340px;
        height: 30px;
    }

    .f-name {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;
    }

    .f-email {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;
    }

    Button {
        font-size: 15px;
    }
`