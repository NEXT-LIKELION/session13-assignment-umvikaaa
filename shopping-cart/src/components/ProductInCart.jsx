// components/ProductInCart.jsx

import React from "react";
import { useCartStore } from "../store/CartStore";

export const ProductInCart = ({ product }) => {
    const cart = useCartStore((state) => state.cart);
    const setCart = useCartStore((state) => state.setCart);

    const handleRemove = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id);
        setCart(newCart);
    };

    return (
        <div>
            {product.name}
            <button onClick={() => handleRemove(product)}>삭제</button>
        </div>
    );
};
