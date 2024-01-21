import styled from "styled-components";

export const CartPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CartItem = styled.div`
  border: 1px solid #ccc;
  margin: 10px;
  display: flex;
  justify-content: space-a;
  flex-wrap: wrap;
  padding: 20px  30px;
  width: 30%;
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  width: 200px;
  align-items: center;
  gap: 40px;
  
`;

export const ProductImage = styled.img`
  max-width: 150px;
  height: 100px;
`;

export const ProductTitle = styled.h4`
  margin-bottom: 8px;
`;

export const ProductPrice = styled.p`
  color: #333;
`;

export const TotalAmount = styled.div`
  margin-top: 16px;
  text-align: right;
  font-size: 18px;
  color: #333;
`;