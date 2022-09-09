import { Button } from "../Button/style";
import { ProductCard } from "../ProductCard";
import { ProductsStyle } from "./style";


export function Products() {
    return (
      <ProductsStyle>
        <div className="products-box">
          <ProductCard
            image={'https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'}
            name={'teste'}
            desc={'lorem ipsum amoisdkjoiaks aojsodijma lorem ipsum pldmesoigm'}
            oldPrice={'caro'}
            newPrice={'ainda caro'}
            parcelPrice={'caro parcelado'}
          />
          <ProductCard
            image={'https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'}
            name={'teste'}
            desc={'lorem ipsum amoisdkjoiaks aojsodijma lorem ipsum pldmesoigm'}
            oldPrice={'caro'}
            newPrice={'ainda caro'}
            parcelPrice={'caro parcelado'}
          />
          <ProductCard
            image={'https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'}
            name={'teste'}
            desc={'lorem ipsum amoisdkjoiaks aojsodijma lorem ipsum pldmesoigm'}
            oldPrice={'caro'}
            newPrice={'ainda caro'}
            parcelPrice={'caro parcelado'}
          />
          <ProductCard
            image={'https://miro.medium.com/max/1280/0*i1v1In2Tn4Stnwnl.jpg'}
            name={'teste'}
            desc={'lorem ipsum amoisdkjoiaks aojsodijma lorem ipsum pldmesoigm'}
            oldPrice={'caro'}
            newPrice={'ainda caro'}
            parcelPrice={'caro parcelado'}
          />
        </div>
      </ProductsStyle>
    )
}