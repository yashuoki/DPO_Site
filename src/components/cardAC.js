import React, { useState } from 'react';
import './cardAC.css';

const Card = ({ image, name, type, oldPrice, price, id }) => {
  const [quantity, setQuantity] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const toggleReviewForm = () => setShowReviewForm(!showReviewForm);

  const handleSubmitReview = (event) => {
    event.preventDefault();
    
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const review = event.target.review.value;

    setErrors([]);
    setSuccessMessage('');

    const validationErrors = [];
    if (!name) validationErrors.push('Введите ваше имя.');
    if (!phone || !/^\+?\d{10,15}$/.test(phone)) validationErrors.push('Введите контактный номер телефона.');
    if (!review) validationErrors.push('Введите ваш отзыв.');

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      setSuccessMessage('Ваш отзыв успешно отправлен!');
      console.log('Отзыв отправлен:', { name, phone, review });
      event.target.reset();
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingProduct = cart.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.push({ id, name, quantity, price });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} добавлен в корзину (${quantity} шт.)`);
      setQuantity(0);
    } else {
      alert('Выберите количество перед добавлением в корзину.');
    }
  };

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3>{name}</h3>
      <p className="type">{type}</p>

      <div className="price-container">
        {oldPrice && <span className="old-price">{`${oldPrice} руб.`}</span>}
        <span className="new-price">{`${price} руб.`}</span>
      </div>

      <div className="quantity">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <button className="add-to-cart" onClick={handleAddToCart} disabled={quantity === 0}>
        Добавить в корзину
      </button>

      <button onClick={toggleReviewForm} className="review-button">
        Написать отзыв
      </button>

      {showReviewForm && (
        <div className="review-form">
          <h4>Ваш отзыв</h4>
          <form onSubmit={handleSubmitReview}>
            <input type="text" name="name" placeholder="Ваше имя" required />

            <input type="tel" name="phone" placeholder="Ваш контактный номер" required />

            <textarea name="review" placeholder="Ваш отзыв" required></textarea>

            <button type="submit">Отправить</button>
          </form>

          {errors.length > 0 && (
            <div className="error-log">
              <ul>
                {errors.map((error, index) => (
                  <li key={index} style={{ color: 'red' }}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {successMessage && (
            <div className="success-message" style={{ color: 'green' }}>
              {successMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const createProductCard = (product) => {
  return (
    <Card
      key={product.id}
      image={product.image}
      name={product.name}
      type={product.type}
      oldPrice={product.oldPrice}
      price={product.price}
      id={product.id}
    />
  );
};

export default Card;
