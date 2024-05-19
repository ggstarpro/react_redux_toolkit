import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from "../features/cart/CartSlice"
import { closeModal } from '../features/cart/ModalSlice';

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>買い物かごを全てからにしますか？</h4>
        <div className="btn-container">
          <div className="btn confirm-btn" onClick={() => {
            dispatch(clearCart())
            dispatch(closeModal())
          }}>OK</div>
          <div className="btn clear-btn" onClick={() => dispatch(closeModal())}>やめる</div>
        </div>
      </div>
    </aside>
  )
}

export default Modal