import { useParams } from 'react-router-dom';
import {HeaderApp} from "../components/HeaderApp/HeaderApp.jsx";
import {useCallback, useEffect, useState} from "react";
import Fetch from "../api/api.js";
import {SpinnerApp} from "../components/SpinnerApp/SpinnerApp.jsx";
import {ContactsSection} from "../components/sections/ContactsSection/ContactsSection.jsx";
export const ProductAppPage = () => {
    const { id } = useParams();
    const [count, setCount] = useState(1);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [sum, setSum] =useState(productPrice);
    const getProduct = useCallback(async ()=> {
        if (+id !== 0) {
            const response = await Fetch.get(`admin/products/${id}`);
            if (response.success) {
                setProductName(response.data.name);
                setProductPrice(response.data.price);
                setProductDescription(response.data.description);
                setImgUrl(response.data.img);
                setIsLoading(false);
                setSum(String(count * +response.data.price));
            }
        } else {
            setIsLoading(false);
        }
    }, [])
    useEffect(()=>{
        getProduct()
    }, [getProduct]);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count !== 1) {
            setCount(count - 1)
        }
    }
    useEffect(() => {
        const sum = count * +productPrice
        setSum(String(sum));
    }, [count]);
    return (
        <>
            <HeaderApp/>
            {!isLoading &&
                <div className="product-page">
                    <div className="container">
                        <div className="product-page__wrapper">
                            <div className="product-page__image">
                                <img src={imgUrl} alt="image"/>
                            </div>
                            <div className="product-page__info">
                                <div className="product-page__title">{productName}</div>
                                <div className="product-page__counter">
                                    <button className="minus" onClick={() => decrement()}>
                                        <svg width="35" height="5" viewBox="0 0 35 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.4999 0.114716C18.1324 0.114811 18.1016 0.11482 18.7683 0.11482C19.1562 0.11482 19 0.11482 19.5 0.11482L19.8851 0.114716L31.8142 0.114715C32.4396 0.125585 33.0357 0.381655 33.4741 0.827771C33.9126 1.27389 34.1582 1.87436 34.1582 2.49985C34.1582 3.12534 33.9126 3.72581 33.4741 4.17193C33.0357 4.61805 32.4396 4.87412 31.8142 4.88499L19.8851 4.88499L19.4181 4.88499C19.033 4.88499 19.1433 4.88499 18.6433 4.88499C18.1433 4.88499 18.1254 4.88499 17.4999 4.88499C16.8744 4.88499 16.4319 4.88499 15.9319 4.88499C15.3307 4.88499 15.9727 4.88499 15.4727 4.88499L15.1149 4.88499L3.18581 4.88499C2.56041 4.87412 1.9643 4.61805 1.52587 4.17193C1.08744 3.72581 0.841769 3.12534 0.841769 2.49985C0.841769 1.87436 1.08744 1.27389 1.52587 0.827771C1.9643 0.381655 2.56041 0.125585 3.18581 0.114715L15.1149 0.114716H15.4452C15.9452 0.114716 15.5897 0.114716 16.0897 0.114716C16.5897 0.114716 16.8673 0.114811 17.4999 0.114716Z" fill="black"/>
                                        </svg>
                                    </button>
                                    <span>{ count }</span>
                                    <button className="plus" onClick={() => increment()}>
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5 0.800733C18.1325 0.800828 18.7392 1.05215 19.1864 1.49943C19.6337 1.94671 19.885 2.55332 19.8851 3.18587L19.8851 15.1149L31.8142 15.1149C32.4396 15.1258 33.0357 15.3819 33.4741 15.828C33.9126 16.2741 34.1582 16.8746 34.1582 17.5001C34.1582 18.1256 33.9126 18.726 33.4741 19.1721C33.0357 19.6183 32.4396 19.8743 31.8142 19.8852L19.8851 19.8852L19.8851 31.8142C19.8743 32.4396 19.6182 33.0358 19.1721 33.4742C18.726 33.9126 18.1255 34.1583 17.5 34.1583C16.8745 34.1583 16.274 33.9126 15.8279 33.4742C15.3818 33.0358 15.1257 32.4396 15.1149 31.8142L15.1149 19.8852L3.18581 19.8852C2.56041 19.8743 1.9643 19.6183 1.52587 19.1721C1.08744 18.726 0.841769 18.1256 0.841769 17.5001C0.841769 16.8746 1.08744 16.2741 1.52587 15.828C1.9643 15.3819 2.56041 15.1258 3.18581 15.1149L15.1149 15.1149L15.1149 3.18587C15.115 2.55332 15.3663 1.94671 15.8136 1.49943C16.2608 1.05215 16.8675 0.800828 17.5 0.800733Z" fill="black"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="product-page__price">{sum} р.</div>
                                <button className="product-page__btn">В корзину</button>
                            </div>
                        </div>
                        <div className="product-page__description">{productDescription}</div>
                    </div>
                </div>
            }
            {isLoading && <SpinnerApp className="spinner_absolute"/>}
            <ContactsSection/>
        </>
    );
}
