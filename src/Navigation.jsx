import { ShoppingCart } from "lucide-react";
import "./Navigation.css";

function Navigation(props) {
  return (
    <nav className="navbar">
      <div className="navgroup">
        <a className="navbar-brand" href="/">
          Learn Management System
        </a>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/shop">Categories</a>
        </div>
      </div>
      <div className="cart-section">
        <div>
          <a href="/cart" className="cart-link">
            <p className="cart-count">{props.cartCount}</p>
            <div className="cart-icon">
              <ShoppingCart />
              Cart
            </div>
          </a>
        </div>
        <p>Hi {props.name}</p>
      </div>
    </nav>
  );
}

export default Navigation;