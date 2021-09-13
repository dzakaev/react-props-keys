import React from "react";

function Products(props) {
  const product = (
    <ul>
      {props.product.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.image} />
          </div>
          <li>
            {item.id}.{item.name} : цена {item.price}.руб
          </li>
        </div>
      ))}
    </ul>
  );
  return <div>{product}</div>;
}

export default Products;
