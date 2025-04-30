// components/Product.jsx

import styled from "@emotion/styled";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { Box } from "styles/StyleComponent";
import { useCartStore } from "../store/CartStore"; // ← 경로 중요!

export const Product = ({ product }) => {
    const navigate = useNavigate();

    // Zustand에서 전역 상태 불러오기
    const cart = useCartStore((state) => state.cart);
    const setCart = useCartStore((state) => state.setCart);

    const handleCart = (product) => {
        if (cart.find((item) => item.id === product.id)) {
            alert("이미 장바구니에 추가된 상품입니다.");
            return;
        }
        setCart([...cart, product]);
        alert("장바구니에 추가되었습니다.");
    };

    return (
        <Box>
            <ProductName>{product.name}</ProductName>
            <Button onClick={() => handleCart(product)}>장바구니 담기</Button>
        </Box>
    );
};

const ProductName = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
`;
