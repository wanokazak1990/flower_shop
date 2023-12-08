import { useAsyncEffect } from "@reactuses/core";
import Fetch from "../api/api.js";
import {LOGIN} from "../store/auth.js";
import {useDispatch} from "react-redux";
export const useCheckAuth = () => {
    const dispatch = useDispatch();
    useAsyncEffect(
        async () => {
           const response = await Fetch.get('auth/check')
            if (response.success) {
                dispatch({type: LOGIN, payload: response.data});
                const { created_at, email_verified_at, updated_at, ...rest } = response.data;
                rest.loggedIn = true;
                localStorage.setItem('userData', JSON.stringify(rest))
            }
        },
        () => {},
        [],
    );
}
