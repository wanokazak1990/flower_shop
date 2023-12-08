import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import Fetch from "../../../../api/api.js";
import {SpinnerApp} from "../../../SpinnerApp/SpinnerApp.jsx";
import {toast} from "react-toastify";
import { useAsyncEffect } from "@reactuses/core";
import { useSetState } from "@reactuses/core";
export const FormCart = (props) => {
    const [deliveries, setDeliveries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [defaultDelivery, setDefaultDelivery] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [deliveryId, setDeliveryId] = useState('');


    // const [nameError, setNameError] = useState(false);
    // const [emailError, setEmailError] = useState(false);

    const [nameError, setNameError] = useSetState({nameErr: false});
    const [emailError, setEmailError] = useSetState({emailErr: false});

    const { nameErr } = nameError;
    const { emailErr } = emailError;

    const handleChange = (event) => {
        setDeliveryId(event.target.value);
    };

    useAsyncEffect(
        async () => {
            const response = await Fetch.get('deliveries');
            if (response.success) {
                setDeliveries(response.data);
                if (response.data.length !== 0) {
                    setDefaultDelivery(response.data[0].id);
                    setDeliveryId(response.data[0].id);
                } else {
                    setDefaultDelivery('Службы доставки не созданы')
                }
                setIsLoading(false);
            }
        },
        () => {},
        [],
    );

    const getOrderBody = () => {
        return {
            name: name,
            email: email,
            delivery_id: deliveryId
        }
    }
    const sendForm = async (e) => {
        e.preventDefault();
        if (name === '' || email === '') {
            toast.error("Не все поля заполнены");
        } else {
            const response = await Fetch.post('orders', getOrderBody());
            if (response.success) {
                props.getFile(response.data.file);
            }
        }
    }
    return (
        <>
            <form className="cart__form" onSubmit={(e) => sendForm(e)}>
                {!isLoading &&
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Служба доставки</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue={defaultDelivery}
                            name="radio-buttons-group"
                            onChange={handleChange}
                        >
                            {deliveries.map((delivery, index) => {
                                return <FormControlLabel key={delivery.id} value={delivery.id} control={<Radio />} label={delivery.name} />
                            })}
                            {deliveries.length === 0 && <FormControlLabel value={defaultDelivery} control={<Radio />} label={defaultDelivery} />}
                        </RadioGroup>
                    </FormControl>
                }
                <TextField
                    id="outlined-basic"
                    fullWidth
                    value={name}
                    error={nameErr}
                    label="Ваше ФИО*"
                    variant="outlined"
                    onInput={(event) => {
                        setName(event.target.value);
                    }}
                    onFocus={() => setNameError({nameErr: false})}
                />
                <TextField
                    id="outlined-basic"
                    fullWidth
                    value={email}
                    error={emailErr}
                    label="Ваше email*"
                    variant="outlined"
                    onInput={(event) => {
                        setEmail(event.target.value);
                    }}
                    onFocus={() => setEmailError({emailErr: false})}
                />
                <button type="submit" className="cart__form-btn">Заказать</button>
            </form>
            {isLoading && <SpinnerApp/>}
        </>
    );
}
