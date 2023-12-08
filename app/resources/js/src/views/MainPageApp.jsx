import {HeaderApp} from "../components/HeaderApp/HeaderApp.jsx";
import {BannerSection} from "../components/sections/BannerSection/BannerSection.jsx";
import {ProductsSection} from "../components/sections/ProductsSection/ProductsSection.jsx";
import {ContactsSection} from "../components/sections/ContactsSection/ContactsSection.jsx";
import {useState} from "react";
import Fetch from "../api/api.js";
import {useDispatch} from "react-redux";
import {SpinnerApp} from "../components/SpinnerApp/SpinnerApp.jsx";
import { useAsyncEffect } from "@reactuses/core";
import {useCheckAuth} from "../customHooks/useCheckAuth.js";

export const MainPageApp = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    useAsyncEffect(
        async () => {
            const response = await Promise.all([
                Fetch.get('products'),
                Fetch.get('cart/count')
            ])
            if (response[0].success) {
                const list = [];
                for (const key in response[0].data) {
                    list.push({title: key, data: response[0].data[key]})
                }
                dispatch({type: "ADD_TO_CART", payload: response[1].data.count});
                setProducts(list);
                setIsLoading(false);
            }
        },
        () => {},
        [],
    );
    useCheckAuth();
    return (
        <>
            <HeaderApp/>
            <BannerSection/>
            {!isLoading && products.length === 0 &&
                <section className="products">
                    <div className="container">
                        <div className="products__title">Товаров нет</div>
                    </div>
                </section>
            }
            {!isLoading &&
                products.map((product, index) => {
                    return (
                        <ProductsSection key={`${product.title}-${index}`} title={product.title} products={product.data}/>
                    );
                })
            }
            {isLoading &&
                <div className="container">
                    <SpinnerApp/>
                </div>
            }
            <ContactsSection/>
        </>
    );
}
