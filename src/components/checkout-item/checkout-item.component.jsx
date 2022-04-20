import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
} from "./checkout-item.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  removeItemFromCart,
  addItemToCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => dispatch(addItemToCart(cartItems, cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <RemoveButton
        onClick={() => dispatch(clearItemFromCart(cartItems, cartItem))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
