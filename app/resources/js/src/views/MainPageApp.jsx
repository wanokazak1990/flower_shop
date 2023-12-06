import {HeaderApp} from "../components/HeaderApp/HeaderApp.jsx";
import {BannerSection} from "../components/sections/BannerSection/BannerSection.jsx";
import {ProductsSection} from "../components/sections/ProductsSection/ProductsSection.jsx";
import {ContactsSection} from "../components/sections/ContactsSection/ContactsSection.jsx";
import {useCallback, useEffect, useState} from "react";
import Fetch from "../api/api.js";
import {useDispatch} from "react-redux";
export const MainPageApp = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    const getProducts = useCallback(async ()=> {
        const response = await Fetch.get('products');
        if (response.success) {
            const list = [];
            for (const key in response.data) {
                list.push({title: key, data: response.data[key]})
            }
            setProducts(list)
        }
    }, [])
    const getCartCounter = useCallback(async () => {
        const response = await Fetch.get('cart/count');
        console.log(response);
    }, [])
    useEffect(()=>{
        getProducts()
    }, [getProducts]);
    useEffect(()=>{
        getCartCounter()
    }, [getCartCounter]);
    return (
        <>
            <HeaderApp/>
            <BannerSection/>
            {products.length === 0 &&
                <section className="products">
                    <div className="container">
                        <div className="products__title">Товаров нет</div>
                    </div>
                </section>
            }
            {products.map((product, index) => {
                return (
                    <ProductsSection key={`${product.title}-${index}`} title={product.title} products={product.data}/>
                );
            })}
            <ContactsSection/>
        </>
    );
}
