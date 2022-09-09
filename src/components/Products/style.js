import styled from "styled-components";

export const ProductsStyle = styled.div`
    justify-content: center;
    
    
    .products-box {
        display: grid;
        grid-template-columns: repeat(4, 200px);
        gap: 3rem;
        margin: 2rem;
        align-items: center;
        justify-content: center;
    }

    .btn-products {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    Button {
        font-size: 15px;
    }
    `

