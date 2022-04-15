import { CartItemContainer, ItemDetails, Span } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Span>{name}</Span>
        <Span>
          {quantity} x &#36;{price}
        </Span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
