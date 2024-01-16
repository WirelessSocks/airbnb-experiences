import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';


export default function App() {

  const cardDataElements = data.map((item) => {
    return(
      <Card
        key={item.id}
        {...item} //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
      />
    );
  })

  return (
    <div>
      <Navbar />
      <Hero />
      
      <section className='cards-list'>
        {cardDataElements}
      </section>
      
    </div>
  );
}