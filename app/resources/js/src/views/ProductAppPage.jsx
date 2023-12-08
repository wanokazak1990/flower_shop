import {HeaderApp} from "../components/HeaderApp/HeaderApp.jsx";
import {useCallback, useEffect, useState} from "react";
import Fetch from "../api/api.js";
import {ContactsSection} from "../components/sections/ContactsSection/ContactsSection.jsx";
import {useDispatch, useSelector} from "react-redux";
import { useAsyncEffect } from "@reactuses/core";
export const ProductAppPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    useAsyncEffect(
        async () => {
            const response = await Fetch.get('cart/count');
            dispatch({type: "ADD_TO_CART", payload: response.data.count});
        },
        () => {},
        [],
    );
    const addToCart = async (id) => {
        dispatch({type: "ADD_TO_CART", payload: id});
        const response = await Fetch.put(`cart/${id}`)
    }
    return (
        <>
            <HeaderApp/>
            {cart.product.name !== '' &&
                <div className="product-page">
                    <div className="container">
                        <div className="product-page__wrapper">
                            <div className="product-page__image">
                                <img src={cart.product.img} alt="image"/>
                            </div>
                            <div className="product-page__info">
                                <div className="product-page__title">{cart.product.name}</div>
                                <div className="product-page__price">{cart.product.price} р.</div>
                                <button className="product-page__btn" onClick={() => addToCart(cart.product.id)}>В корзину</button>
                            </div>
                        </div>
                        <div className="product-page__description">{cart.product.description}</div>
                    </div>
                </div>
            }
            {cart.product.name === '' &&
                <div className="product-page">
                    <div className="container">
                        <div className="product-page__title">Товар не существует</div>
                    </div>
                </div>
            }
            <ContactsSection/>
        </>
    );
}
