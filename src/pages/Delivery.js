import React, { useState, useEffect } from 'react';

const Delivery = () => {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState([]);
  const [orderDescription, setOrderDescription] = useState(null); // Состояние для описания заказа
  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);
  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errorMessages = [];
    
    if (/[\d]/.test(formData.name)) {
      errorMessages.push('Имя не может содержать цифры.');
    }

    const phoneRegex = /^\+?\d{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      errorMessages.push('Введите корректный номер телефона.');
    }

    if (!formData.address.trim()) {
      errorMessages.push('Адрес не может быть пустым.');
    }

    return errorMessages;
  };

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    
    const validationErrors = validateForm();
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    const orderDetails = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      cart,
      total: calculateTotal(),
    };

    setOrderDescription(orderDetails);
    
    console.log('Заказ оформлен:', orderDetails);
    
    alert('Ваш заказ оформлен!');
    localStorage.removeItem('cart');
    setCart([]);
    setErrors([]);
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart([]);
    alert('Корзина очищена.');
  };

  return (
    <div className="delivery">
      <h2>Доставка</h2>

      {errors.length > 0 && (
        <div className="error-log">
          <ul>
            {errors.map((error, index) => (
              <li key={index} style={{ color: 'red' }}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      
      {orderDescription && (
        <div className="order-description">
          <h3>Описание вашего заказа:</h3>
          <p><strong>Имя:</strong> {orderDescription.name}</p>
          <p><strong>Телефон:</strong> {orderDescription.phone}</p>
          <p><strong>Адрес доставки:</strong> {orderDescription.address}</p>
          <h4>Список товаров:</h4>
          <ul>
            {orderDescription.cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} шт. x {item.price} руб. ={' '}
                {item.quantity * item.price} руб.
              </li>
            ))}
          </ul>
          <p><strong>Итоговая сумма:</strong> {orderDescription.total} руб.</p>
        </div>
      )}
      
      {cart.length > 0 ? (
        <div>
          <form>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Ваш контактный номер"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <textarea
                name="address"
                placeholder="Адрес доставки"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
          </form>

          <h3>Список товаров:</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} шт. x {item.price} руб. ={' '}ы
                {item.quantity * item.price} руб.
              </li>
            ))}
          </ul>
          <h3>Итоговая сумма: {calculateTotal()} руб.</h3>

          <button onClick={handleOrderSubmit}>Оформить заказ</button>
          <button onClick={clearCart} className="clear-cart-btn">Очистить корзину</button>
        </div>
      ) : !orderDescription && (
        <p>Корзина пуста.</p>
      )}
    </div>
  );
};

export default Delivery;