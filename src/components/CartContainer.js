import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { openModal } from "../features/cart/ModalSlice"

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector((store) => store.cart)
  const dispatch = useDispatch();

  if(amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4>何も入っていません・・・🐈</h4>
        </header>
      </section>
    )
  }
  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              合計 <span>{total}</span>
            </h4>
          </div>
          <button className="btn clear-btn" onClick={() => dispatch(openModal())}>全削除</button>
        </footer>
      </header>
    </section>
  )
}

export default CartContainer