

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div>
      <h2>Category List</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
