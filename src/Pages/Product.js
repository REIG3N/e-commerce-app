import { useParams } from "react-router-dom";
import { useState } from "react";
import { useGetCommentsQuery, useGetProductsQuery } from "../Services/API";
import { useCreateCommentMutation } from "../Services/API";
import { useCart } from "../Providers/CartContext";
import Navbar from "../Components/Navbar";
import {
  AddToCartButton,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductPageWrapper,
  ProductContainer,
} from "../Components/StyledProduct";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Product() {
  let { cart, addToCart, removeFromCart } = useCart();

  const [InputValue, setInputValue] = useState("");
  const [InputValue2, setInputValue2] = useState("");

  let { id } = useParams();
  let { data, isFetching, isSuccess } = useGetCommentsQuery(id);
  let { data: product } = useGetProductsQuery();
  let [createComment] = useCreateCommentMutation();
  console.log(data, product, isFetching, isSuccess);

  if (!product) {
    return <p>fetching</p>;
  }

  let productID = product.find((product) => product.id === id);


  return isFetching ? (
    <p>fetching</p>
  ) : (
    <div>
      <Navbar />
      <ProductPageWrapper>
        <h1>Détails du Produit</h1>
        <ProductContainer>
          <ProductImage src={productID.image} alt={productID.title} />
          <ProductTitle>{productID.title}</ProductTitle>
          <ProductPrice>{productID.price} €</ProductPrice>
          <AddToCartButton
            onClick={() => addToCart(productID)}
          >
            Ajouter au Panier
          </AddToCartButton>
        </ProductContainer>
      </ProductPageWrapper>

      <input
        type="text"
        name="comment"
        onChange={(e) => setInputValue(e.target.value)}
        value={InputValue}
      />
      <input
        type="text"
        name="comment"
        onChange={(e) => setInputValue2(e.target.value)}
        value={InputValue2}
      />
      <input
        type="submit"
        onClick={() =>
          createComment({ id: id, username: InputValue, comment: InputValue2 })
        }
      />
      <h3>Comments</h3>
      <Comments />
    </div>
  );
}

function Comments() {
  let { id } = useParams();
  let { data, isFetching } = useGetCommentsQuery(id);
  return data.map((data) => {
    return (
      <div>
        <p>id: {data.id}</p>
        <p>username: {data.username}</p>
        <p>commentaire: {data.comment}</p>
      </div>
    );
  });
}
