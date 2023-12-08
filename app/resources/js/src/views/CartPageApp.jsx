import {HeaderApp} from "../components/HeaderApp/HeaderApp.jsx";
import {ContactsSection} from "../components/sections/ContactsSection/ContactsSection.jsx";
import { CartSection } from "../components/sections/CartSection/CartSection.jsx";
import {useCallback, useEffect} from "react";
import Fetch from "../api/api.js";
import {useDispatch} from "react-redux";
import { useAsyncEffect } from "@reactuses/core";
import {useCheckAuth} from "../customHooks/useCheckAuth.js";

export const CartPageApp = () => {
    const dispatch = useDispatch();
    useCheckAuth();
    useAsyncEffect(
        async () => {
            const response = await Fetch.get('cart/count');
            dispatch({type: "ADD_TO_CART", payload: response.data.count});
        },
        () => {},
        [],
    );
    return (
      <>
          <HeaderApp/>
          <CartSection/>
          <ContactsSection/>
      </>
    );
}
