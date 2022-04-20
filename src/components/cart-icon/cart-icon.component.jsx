import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <CartIconContainer onClick={() => dispatch(setIsCartOpen(!isCartOpen))}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
