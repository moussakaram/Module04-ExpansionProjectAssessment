import Card from '../components/Card';
import Navbar from '../components/Navbar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
        <Navbar/>
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Home;
