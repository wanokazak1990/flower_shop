export const ProductsSection = (props) => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__title">{ props.title }</div>
                <div className="products__grid">
                    {props.products.map(product => {
                        return (
                            <div className="products__card" key={product.id}>
                                <div className="products__card-image">
                                    <img src={product.img} alt="image"/>
                                </div>
                                <p className="products__card-title">{ product.name }</p>
                                <div className="products__card-description">
                                    { product.description }
                                </div>
                                <div className="products__card-price">{ product.price } р.</div>
                                <button className="products__card-btn">В корзину</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
