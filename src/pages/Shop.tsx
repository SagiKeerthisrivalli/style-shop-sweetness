
import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import { products } from '../data/products';

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 500],
    rating: 0
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    
    let filtered = products.filter(product => {
      const matchesCategory = newFilters.category === 'all' || product.category === newFilters.category;
      const matchesPrice = product.price >= newFilters.priceRange[0] && product.price <= newFilters.priceRange[1];
      const matchesRating = product.rating >= newFilters.rating;
      
      return matchesCategory && matchesPrice && matchesRating;
    });
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Collection</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <ProductFilters onFilterChange={handleFilterChange} filters={filters} />
          </div>
          <div className="lg:w-3/4">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
