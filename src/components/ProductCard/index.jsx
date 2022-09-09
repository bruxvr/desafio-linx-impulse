import { Button } from "../Button/style";
import { ProductCardStyle } from "./style";

export function ProductCard({image, name, desc, oldPrice, newPrice, parcelPrice}) {
    return (
    <ProductCardStyle>
        <div className="card-img">
            <img src={image} alt={name} />
        </div>
        <div className="card-content">
            <p className="name">{name}</p>
            <p className="desc">{desc}</p>
            <p className="old">{oldPrice}</p>
            <p className="new">{newPrice}</p>
            <p className="parcel">{parcelPrice}</p>
        </div>
        <div className="card-btn">
            <Button width={200} height={30}> Comprar </Button>
        </div>
    </ProductCardStyle>
  );
}
