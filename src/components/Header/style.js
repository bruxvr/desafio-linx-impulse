import styled from "styled-components";

export const HeaderStyle = styled.header`
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 48%);
    background-color: #707070;
    width: 100%;
    height: 500px;
    color: white;
    text-align: center;
    justify-content: center;
    
    .header-desc {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }  
    
     h2 {
        font-weight: 50;
        font-size: 20px;
        margin-top: 45px;
    }
    
    h3 {
        font-weight: 50;
        margin-top: 14px;
    }

    h1 {
        font-size: 40px;
    }

    .btn-header {
        display: flex;
        margin-top: 40px;
        justify-content: center;
        gap: 2rem;
        font-size: 14px;
        color: #888888;
        
        
    }
`;
