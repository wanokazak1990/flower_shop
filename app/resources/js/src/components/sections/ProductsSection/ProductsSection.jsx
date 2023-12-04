export const ProductsSection = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__title">Цветы</div>
                <div className="products__grid">
                    <div className="products__card">
                        <div className="products__card-image">
                            <img src="https://thumb.tildacdn.com/stor3033-6237-4036-b965-373537623064/-/cover/432x480/center/center/-/format/webp/59490237.jpg" alt=""/>
                        </div>
                        <p className="products__card-title">ИРИС</p>
                        <div className="products__card-description">
                            БОЛЬШЕ БУКЕТ -МЕНЬШЕ ЦЕНА!!! скидка от 5 штук 10%
                        </div>
                        <div className="products__card-price">99 р.</div>
                        <button className="products__card-btn">В корзину</button>
                    </div>
                    <div className="products__card">
                        <div className="products__card-image">
                            <img src="https://thumb.tildacdn.com/stor3831-3835-4561-b565-373965353761/-/cover/432x480/center/center/-/format/webp/65189457.jpg" alt=""/>
                        </div>
                        <p className="products__card-title">ГВОЗДИКА</p>
                        <div className="products__card-description">
                            Бери больше - плати меньше
                        </div>
                        <div className="products__card-price">89 р.</div>
                        <button className="products__card-btn">В корзину</button>
                    </div>
                    <div className="products__card">
                        <div className="products__card-image">
                            <img src="https://thumb.tildacdn.com/stor3766-6233-4664-a461-646236653435/-/cover/432x480/center/center/-/format/webp/50252957.jpg" alt=""/>
                        </div>
                        <p className="products__card-title">АЛЬСТРОМЕРИЯ</p>
                        <div className="products__card-description">
                            БОЛЬШЕ БУКЕТ -МЕНЬШЕ ЦЕНА!!! (цвет возможен другой) Скидка от 5 штук 10%
                        </div>
                        <div className="products__card-price">189 р.</div>
                        <button className="products__card-btn">В корзину</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
