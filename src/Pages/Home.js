import { useGetProductsQuery, useGetCommentsQuery } from "../Services/API";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CartProvider, useCart } from "../Providers/CartContext";
import Navbar from "../Components/Navbar";
import React from "react";
import styled from "styled-components";
import {
  Button,
  ProductCardWrapper,
  ProductImage,
  ProductTitle,
  ProductPrice,
} from "../Components/StyledCard";

// ProductsList component
export default function Home() {
  let { data, isFetching } = useGetProductsQuery();
  let { cart, addToCart, removeFromCart } = useCart();
  return (
    <div>
      <Navbar />
      <h2>Produits</h2>

      {isFetching ? (
        <p>fetching</p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "0px 30px",
          }}
        >
          <ProductsList addToCart={addToCart} />
        </div>
      )}
    </div>
  );
}



function ProductsList({ addToCart }) {
  let { data, error } = useGetProductsQuery();
  return data.map((product) => {
    return (
      <ProductCardWrapper>
        <ProductImage
          src={product.image}
          style={{ width: 250, height: 200 }}
          alt={product.title}
        />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{product.price} €</ProductPrice>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            onClick={() => addToCart(product)}
            className="btn btn-primary"
          >
            Add To Cart
          </Button>
          <Link to={`/products/${product.id}`}>
            <Button className="btn btn-info text-light">View Details</Button>
          </Link>
        </div>
      </ProductCardWrapper>
    );
  });
}
