import {HeaderApp} from "../components/HeaderApp/HeaderApp.jsx";
import {BannerSection} from "../components/sections/BannerSection/BannerSection.jsx";
import {ProductsSection} from "../components/sections/ProductsSection/ProductsSection.jsx";
import {ContactsSection} from "../components/sections/ContactsSection/ContactsSection.jsx";
export const MainPageApp = () => {
    return (
        <>
            <HeaderApp/>
            <BannerSection/>
            <ProductsSection/>
            <ContactsSection/>
        </>
    );
}
