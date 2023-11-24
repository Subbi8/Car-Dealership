import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const sortProducts = (order) => {
    const sortedProducts = [...all_product];
  
    sortedProducts.sort((a, b) => {
      if (order === 'asc') {
        return a.new_price - b.new_price;
      } else if (order === 'desc') {
        return b.new_price - a.new_price;
      }
      return 0; 
    });
  
  
  
    setShowSortOptions(false); 
  };
  
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing 1-8
          </span> out of 24 products
        </p>
        <div className="shopcategory-sort">
          <div className="dropdown" onClick={toggleSortOptions}>
            Sort
            <img src={dropdown_icon} alt='' />
            {showSortOptions && (
              <div className="dropdown-content">
                <button onClick={() => sortProducts('asc')}>Low to High</button>
                <button onClick={() => sortProducts('desc')}>High to Low</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          }
          return null;
        })}
      </div>
      
    </div>
  );
};

export default ShopCategory;

