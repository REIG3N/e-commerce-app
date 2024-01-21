import Navbar from "../Components/Navbar";
import { useCart } from "../Providers/CartContext";
import styled from "styled-components"; 
import { Link } from "react-router-dom";
import { TotalAmount,  CartPageWrapper, CartItem, ProductInfo, ProductImage, ProductTitle, ProductPrice } from "../Components/StyledCart";
import { Button } from "../Components/StyledCard";

export default function Cart() {
  let { cart, removeFromCart } = useCart();

  const calculateTotalAmount = () => {
    // Ajoutez ici la logique pour calculer le montant total du panier
    // en fonction des prix des articles dans le panier.
    return '$99.99'; // Exemple de montant total (à remplacer par votre logique réelle)
  };

  return (
    <>
      <Navbar/>
      {/* {cart.length <= 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <p>You have {cart.length} items in your cart</p>
          <button onClick={() => removeFromCart()}>Remove All</button>
          div
          <CartList cart={cart} />
        </>
      )} */}
      <CartPageWrapper>
      <h2>Panier</h2>
      <TotalAmount>Total : {cart.length}</TotalAmount>
      <button onClick={() => removeFromCart()}>Remove All</button>
      <div style={{ display: "flex",  flexWrap: "wrap", padding: "0px 30px" }}>
      {cart.map((item) => (
        <CartItem key={item.id}>
          <ProductInfo>
            <ProductImage src={item.image} alt={item.title} />
            <div>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price} €</ProductPrice>
              <Link to={`/products/${item.id}`}>
            <Button className="btn btn-info text-light">View Details</Button>
          </Link>
            </div>

          </ProductInfo>
        </CartItem>
      ))}
      </div>
    </CartPageWrapper>
    </>
  );
}

export function CartList({ cart }) {
  return cart.map((product) => {
    return (
      <>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </>
    );
  });
}

