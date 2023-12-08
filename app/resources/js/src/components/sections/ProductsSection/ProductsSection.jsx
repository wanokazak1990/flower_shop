import {useDispatch} from "react-redux";
import Fetch from "../../../api/api.js";
import {useNavigate} from "react-router-dom";
import {SET_PRODUCT} from "../../../store/Cart.js";

export const ProductsSection = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addToCart = async (id) => {
        const response = await Fetch.put(`cart/${id}`)
        if (response.success) {
            dispatch({type: "ADD_TO_CART", payload: response.data.count});
        }
    }
    const openProduct = (product) => {
        dispatch({type: SET_PRODUCT, payload: product})
        navigate(`/product`);
    }

    return (
        <section className="products">
            <div className="container">
                <div className="products__title">{ props.title }</div>
                <div className="products__grid">
                    {props.products.map(product => {
                        return (
                            <div className="products__card" key={product.id}>
                                <div className="products__card-image" onClick={() => openProduct(product)}>
                                    <img src={product.img} alt="image"/>
                                </div>
                                <p className="products__card-title" onClick={() => openProduct(product)}>{ product.name }</p>
                                <div className="products__card-description">
                                    { product.description }
                                </div>
                                <div className="products__card-price">{ product.price } р.</div>
                                <button className="products__card-btn" onClick={() => addToCart(product.id)}>В корзину</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
