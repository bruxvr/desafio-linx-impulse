import { useState, useEffect } from "react";
import { Button } from "../Button/style";
import { ProductCard } from "../ProductCard";
import { ProductsStyle } from "./style";

export function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`;

  const getApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts([...products, ...data.products]);
    setPage(page + 1);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <ProductsStyle>
      <div className="products-box">
        {products.map((product) => (
          <ProductCard
            image={product.image}
            name={product.name}
            desc={product.desc}
            oldPrice={`De: R$${product.oldPrice},00`}
            newPrice={`Por: R$${product.price},00`}
            parcelPrice={`ou ${product.installments.count}x de R$${product.installments.value}0`}
          />
        ))}
      </div>
      <div className="btn-products">
        <Button width={260} height={40} onClick={getApi}>
          Ainda mais produtos aqui!
        </Button>
      </div>
    </ProductsStyle>
  );
}
