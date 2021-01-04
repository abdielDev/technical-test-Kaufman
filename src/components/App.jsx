import React, { Fragment, useState, useEffect } from 'react';
import '../css/App.css';
import Card from "./Card";
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getData() {
      try{
        const response = await fetch('https://api.mercadolibre.com/sites/MLC/search?category=MLC1748');
        setLoading(false);
        const body = await response.json();
        setProducts(body.results);
      } catch(error) {
        setError('Something went wrong')
      }
    };
    getData()
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Fragment>
      <h1>Products 🚗</h1>
      <div className="Card-List">
      {!loading && !error && products.map((product, index) => {
        return <Card
          handleClick={() => handleClick()}
          title={product.title}
          price={product.price}
          image={product.thumbnail}
          key={product.id}
        />
      })}
      </div>
      {error && <h1 className="Error">{error}</h1>}
      <Modal onClose={handleClick} isOpen={isOpen} />
    </Fragment>
  );
};

export default App;