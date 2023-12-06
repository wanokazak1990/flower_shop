import {HeaderApp} from "../components/HeaderApp/HeaderApp.jsx";
import {ContactsSection} from "../components/sections/ContactsSection/ContactsSection.jsx";
import { CartSection } from "../components/sections/CartSection/CartSection.jsx";

export const CartPageApp = () => {
    return (
      <>
          <HeaderApp/>
          <CartSection/>
          <ContactsSection/>
      </>
    );
}
