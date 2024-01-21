import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  max-width: 300px;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ProductTitle = styled.h3`
  margin-top: 12px;
  font-size: 18px;
`;

export const ProductPrice = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: #333;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-top: 12px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: #2980b9;
  }
`;