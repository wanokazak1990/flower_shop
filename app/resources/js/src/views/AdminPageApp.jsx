export const AdminPageApp = () => {
    return (
        <section className="admin">
            <a href="#" className="admin__burger">
                <span></span>
                <span></span>
                <span></span>
            </a>
            <div className="admin__menu">
                <ul className="admin__list">
                    <li className="hidden-sm">
                        <a href="#" className="admin__list-link">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_232_5)">
                                <path d="M0.691605 0.691849C1.13895 0.244637 1.7456 -0.0065918 2.37815 -0.0065918C3.0107 -0.0065918 3.61735 0.244637 4.0647 0.691849L12.4998 9.12696L20.9349 0.691849C21.3848 0.257312 21.9874 0.0168671 22.6129 0.0223022C23.2384 0.0277374 23.8367 0.278618 24.279 0.720908C24.7213 1.1632 24.9721 1.76151 24.9776 2.38698C24.983 3.01245 24.7426 3.61503 24.308 4.06494L15.8729 12.5001L24.308 20.9352C24.7426 21.3851 24.983 21.9877 24.9776 22.6131C24.9721 23.2386 24.7213 23.8369 24.279 24.2792C23.8367 24.7215 23.2384 24.9724 22.6129 24.9778C21.9874 24.9832 21.3848 24.7428 20.9349 24.3083L12.4998 15.8731L4.0647 24.3083C3.61479 24.7428 3.01221 24.9832 2.38674 24.9778C1.76127 24.9724 1.16295 24.7215 0.720664 24.2792C0.278373 23.8369 0.0274933 23.2386 0.0220581 22.6131C0.0166229 21.9877 0.257067 21.3851 0.691605 20.9352L9.12672 12.5001L0.691605 4.06494C0.244393 3.61759 -0.00683594 3.01094 -0.00683594 2.37839C-0.00683594 1.74585 0.244393 1.1392 0.691605 0.691849Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_232_5">
                                        <rect width="25" height="25" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>
                    <li className="admin__list-item">
                        <a href="#" className="admin__list-link">Категории</a>
                    </li>
                    <li className="admin__list-item">
                        <a href="#" className="admin__list-link">Создать категорию</a>
                    </li>
                    <li className="admin__list-item">
                        <a href="#" className="admin__list-link">Создать товар</a>
                    </li>
                    <li className="admin__list-item">
                        <a href="#" className="admin__list-link">Товары</a>
                    </li>
                    <li className="admin__list-item">
                        <a href="#" className="admin__list-link">Аккаунт</a>
                    </li>
                    <li className="admin__list-item">
                        <a href="#" className="admin__list-link">Службы доставки</a>
                    </li>
                    <li className="admin__list-item">
                        <a href="#" className="admin__list-link">Создать службу</a>
                    </li>
                </ul>
            </div>
            <div className="admin__content">
                {/*<CategoryList v-if="activeTab ===  0" @setIdCategory="setIdCategory"/>*/}
                {/*<ProductCategoryCreate v-if="activeTab === 1"/>*/}
                {/*<CreateProduct v-if="activeTab === 2"/>*/}
                {/*<template v-if="activeTab === 3">*/}
                {/*    <ProductsList v-for="category in categories" :key="category.id" :category="category" @changeProduct="changeProduct"/>*/}
                {/*</template>*/}
                {/*<ProductCategoryChange :categoryId="categoryId" v-if="activeTab === 4"/>*/}
                {/*<ChangeProduct :productId="productId" v-if="activeTab === 5"/>*/}
                {/*<AccountChange v-if="activeTab === 6"/>*/}
                {/*<DeliveryList v-if="activeTab === 7" @setIdDelivery="setIdDelivery"/>*/}
                {/*<DeliveryCreate v-if="activeTab === 8"/>*/}
                {/*<DeliveryChange v-if="activeTab === 9" :deliveryId="deliveryId"/>*/}
            </div>
        </section>
    );
}
