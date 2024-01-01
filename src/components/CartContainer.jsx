import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <h4 className="empty-crt">your bag is empty</h4>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      {/* footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          type="button"
          className="btn clear-btn"
          onClick={() => dispatch(openModal())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
