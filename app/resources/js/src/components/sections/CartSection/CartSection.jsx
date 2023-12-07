import {CartCard} from "./cartComponents/CartCard.jsx";
import {useCallback, useEffect, useState} from "react";
import Fetch from "../../../api/api.js";
import {SpinnerApp} from "../../SpinnerApp/SpinnerApp.jsx";
import {FormCart} from "./cartComponents/FormCart.jsx";

export const CartSection = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const [visibleForm, setVisibleForm] = useState(false);
    const delProductToCart = (id) => {
        setProducts(products.filter(prod => prod.id !== id));
    }
    const getProducts = useCallback(async ()=> {
        const response = await Fetch.get('cart');
        if (response.success) {
            const list = [];
            for (const key in response.data) {
                list.push(response.data[key]);
            }
            setProducts(list);
            setTotalPrice(list.reduce((a,b) => {
                return a + +b.price;
            }, 0));
            setIsLoading(false);
        }
    }, [])
    useEffect(()=>{
        getProducts()
    }, [getProducts]);
    const getFinalPrice = (finalPrice) => {
        setTotalPrice(finalPrice)
    }
    const stepForm = (e) => {
        e.preventDefault();
        setVisibleForm(true);
    }
    return (
        <section className="cart">
            <div className="container">
                {!isLoading && products.length === 0 &&
                    <div className="products__title">Корзина пуста</div>
                }
                <div className="cart__wrapper">
                    {!isLoading && products.length !== 0 &&
                        <>
                            <ul className="cart__list">
                                {products.map(product => {
                                    return <CartCard getFinalPrice={getFinalPrice} key={product.id} product={product} delProductToCart={delProductToCart}/>
                                })}
                            </ul>
                            <div className="cart__final">Итого: {totalPrice}₽</div>
                            {products.length !== 0 &&
                                <div>
                                    {!visibleForm && <a href="#" className="cart__btn" onClick={(e) => stepForm(e)}>Перейти к оформлению</a>}
                                    {visibleForm && <FormCart/>}
                                </div>
                            }
                        </>
                    }
                    {isLoading && <SpinnerApp className="spinner_absolute"/>}
                </div>
            </div>
        </section>
    );
}
