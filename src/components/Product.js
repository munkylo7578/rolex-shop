import React from 'react'
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helper";
const Product = ({product}) => {
    return (
        <article key={product.id}>
        <Link
          className="product-list__item"
          to={`/cua-hang/san-pham/${product.id}`}
        >
          {product.images?.map((image) => {
            return (
              <img key={image.id} src={image.url} alt={product.name} />
            );
          })}
          <p>{product.name}</p>
          <div>{formatPrice(product.price)}</div>
        </Link>
        <Link to="/cart" className="btn--add-product">
          +
        </Link>
      </article>
    )
}

export default Product
