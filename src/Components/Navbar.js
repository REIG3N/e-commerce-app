import styled from "styled-components";
import { useState } from "react";
import {
  StyledNavbar,
  LeftSideNavbar,
  RightSideNavbar,
  LogoTitleDiv,
  UlNavbar,
  LiNavbar,
  BurgerButton,
  BurgerliNavbar,
  BurgerMenu,
} from "./StyledNavbar";
import { useCart } from "../Providers/CartContext";
import { CartList } from "../Pages/Cart";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [ShowBurgerMenu, setShowBurgerMenu] = useState(false);
  let { cart, addToCart, removeFromCart } = useCart();

  return (
    <>
      <StyledNavbar className="nav navbar navbar-expand-lg navbar-light bg-info">
        <LeftSideNavbar>
          <LogoTitleDiv>
            <Link class="navbar-brand" to={"/"}>
              React E-Commerce
            </Link>
            <LiNavbar>
              <Link class="nav-link text-dark" to={"/"}>
                Home
              </Link>
            </LiNavbar>
          </LogoTitleDiv>
        </LeftSideNavbar>

        <RightSideNavbar>
          <UlNavbar>
            <BurgerButton
              onClick={() => {
                setShowBurgerMenu(!ShowBurgerMenu);
              }}
            >
              <img
                src={ShowBurgerMenu ? "close_menu.svg" : "burger_menu.png"}
                height={20}
              />
            </BurgerButton>
            <LiNavbar>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  class="nav-link text-dark"
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  to={"/cart"}
                >
                  <img src="shopping-cart.png" height={20} />
                  Panier: {cart.length}
                </Link>
              </div>
            </LiNavbar>
          </UlNavbar>
        </RightSideNavbar>
      </StyledNavbar>
      
    </>
  );
}
