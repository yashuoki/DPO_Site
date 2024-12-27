import React, { useState } from 'react';
import { createProductCard } from '../components/cardAC';
import './pages.css';
import png1 from '../images/whey_3matrix.png';
import png2 from '../images/creatine_nic.png';
import png3 from '../images/bcaa.png';

const Actions = () => {
  const [products] = useState([
    { id: 1, image: png1, name: 'Протеин Whey 3matrix', type: 'Протеин', price: 999, oldPrice: 1200 },
    { id: 2, image: png2, name: 'Креатин Betancourt', type: 'Креатин', price: 699, oldPrice: 800 },
    { id: 3, image: png3, name: 'bcaa', type: 'Витамины', price: 299, oldPrice: 400 },
  ]);

  return (
    <div className="actions">
      <h2>Акции</h2>
      <div className="product-list">
        {products.map(product => createProductCard(product))}
      </div>
    </div>
  );
};

export default Actions;