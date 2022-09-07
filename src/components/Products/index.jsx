export function Products (image, name, desc, oldPrice, newPrice, parcelPrice) {
    return (
        <section className="products-container">
            <div className="products-list">
                <div className="product">
                    <img src="https://picsum.photos/200/300" alt="product" />
                    <h3>Nome do produto</h3>
                    <p>Descrição do produto</p>
                    <p>De: R$ 100,00</p>
                    <p>Por: R$ 80,00</p>
                    <p>ou 10x de R$ 8,00</p>
                    <p>Valor com desconto de 20%</p>
                </div>
            </div>
            </section>
    )
}

export function ProductCard({
    image, name, oldPrice, newPrice, price,
  }) {
    return (
      <Card>
        <div className="imageContainer">
          <img src={image} alt="" />
        </div>
        <div className="infoContainer">
          <p className="productName">{name}</p>
          <span className="oldPrice">{oldPrice}</span>
          <p className="newPrice">{newPrice}</p>
          <span className="price">{price}</span>
          <Button width={200} height={30}> Comprar </Button>
        </div>
      </Card>
    );
  }