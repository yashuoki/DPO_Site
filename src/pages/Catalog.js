import React, { useState } from 'react';
import { createProductCard } from '../components/card';
import './pages.css';
import png1 from '../images/whey_3matrix.png';
import png2 from '../images/creatine_nic.png';
import png3 from '../images/bcaa.png';
import png4 from '../images/creatine_green.png';
import png5 from '../images/creatine_micronized.png';
import png6 from '../images/glutamine.png';
import png7 from '../images/whey-syntha-6.png';
import png8 from '../images/whey_blue_complete.png';
import png9 from '../images/whey_gold.png';
import png10 from '../images/whey_white.png';

const Catalog = () => {
  const [products] = useState([
    { id: 1, image: png1, name: 'Протеин Whey 3matrix', type: 'Протеин', price: 1199 },
    { id: 2, image: png2, name: 'Креатин Betancourt', type: 'Креатин', price: 899 },
    { id: 3, image: png3, name: 'bcaa', type: 'Витамины', price: 399 },
    { id: 4, image: png4, name: 'Креатин Micronized Green', type: 'Креатин', price: 799 },
    { id: 5, image: png5, name: 'Креатин Micronized Blue', type: 'Креатин', price: 899 },
    { id: 6, image: png6, name: 'Глютамин', type: 'Витамины', price: 349 },
    { id: 7, image: png7, name: 'Протеин Synta-6', type: 'Протеин', price: 1149 },
    { id: 8, image: png8, name: 'Протеин Complete-blue', type: 'Протеин', price: 1249 },
    { id: 9, image: png9, name: 'Протеин Micronized Gold', type: 'Протеин', price: 1499 },
    { id: 10, image: png10, name: 'Протеин Micronized White', type: 'Протеин', price: 1399 },
  ]);

  return (
    <div className="catalog">
      <h2>Каталог</h2>
      <div className="product-list">
        {products.map(product => createProductCard(product))}
      </div>
    </div>
  );
};

export default Catalog;
