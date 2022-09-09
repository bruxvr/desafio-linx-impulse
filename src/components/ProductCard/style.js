import styled from "styled-components";

export const ProductCardStyle = styled.div`
        width: fit-content;
        color: #888888;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1.5rem;
        padding: 1rem;
        
    
    .card-img {
        width: 200px;
        height: 150px;
    }
    
    .card-img img {
        width: 100%;
        height: 100%;
    }

    .card-content {
        width: 200px;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        text-align: left;
    }

    .card-content .name {
        font-weight: 500;
        font-size: 18px;
    }

    .card-content .desc {
        font-size: 16px;
    }

    .card-content .old {
        font-size: 15px;
    }

    .card-content .new {
        font-size: 20px;
        font-weight: 700;
    }

    .card-content .parcel {
        font-size: 15px;
    }

    Button {
        font-size: 15px;
    }




`