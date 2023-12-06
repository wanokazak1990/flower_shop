import {CartCard} from "./cartComponents/CartCard.jsx";
export const CartSection = () => {
    return (
        <section className="cart">
            <div className="container">
                <div className="cart__wrapper">
                    <ul className="cart__list">
                        <CartCard/>
                    </ul>
                    <div className="cart__final">Итого: </div>
                </div>
            </div>
        </section>
    );
}
