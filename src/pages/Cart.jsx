import { useSelector } from "react-redux";
import { CartItemList, SectionTitle, CartTotal } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  // temp
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) return <SectionTitle text="Your cart is empty" />;

  return (
    <>
      <SectionTitle text="Shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
          {user ? (
            <Link to="/checkout" className="btn btn-accent btn-block mt-8">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-secondary btn-block mt-8">
              Please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
