import {CartCard} from "./cartComponents/CartCard.jsx";
import {useCallback, useEffect, useState} from "react";
import Fetch from "../../../api/api.js";
import {SpinnerApp} from "../../SpinnerApp/SpinnerApp.jsx";

export const CartSection = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getProducts = useCallback(async ()=> {
        const response = await Fetch.get('cart');
        if (response.success) {
            const list = [];
            for (const key in response.data) {
                list.push(response.data[key]);
            }
            console.log(list)
            setProducts(list);
            setIsLoading(false);
        }
    }, [])
    useEffect(()=>{
        getProducts()
    }, [getProducts]);
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
                                    return <CartCard key={product.id} product={product}/>
                                })}
                            </ul>
                            <div className="cart__final">Итого: </div>
                        </>
                    }
                    {isLoading && <SpinnerApp className="spinner_absolute"/>}
                </div>
            </div>
        </section>
    );
}
