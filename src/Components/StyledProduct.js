import React from 'react';
import styled from 'styled-components';

export const ProductPageWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const ProductContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ProductTitle = styled.h2`
  margin: 12px 0;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 16px;
`;

export const AddToCartButton = styled.button`
  padding: 10px 20px;
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