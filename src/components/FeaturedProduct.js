import React, { forwardRef } from "react";
import styled from "styled-components";
import { useProductsContext } from "../contexts/products_context";
import { LoadableProduct } from "../loadables";
import { Loading } from ".";
import Skeleton from "react-loading-skeleton";
const FeaturedProduct = (props, featuredRef) => {
  const { featuredProducts, isLoading } = useProductsContext();
  if (isLoading) {
    <Loading />;
  }
  return (
    <Wrapper ref={featuredRef} className="section-center">
      <h1>
        <span>FEATURED</span> PRODUCTS
      </h1>
      <div className="featured-product">
        {featuredProducts.map((product) => {
          return (
            <LoadableProduct
              key={product.id}
              fallback={
                <Skeleton height={360} baseColor="#ccc" borderRadius={10} />
              }
              product={product}
              title="Featured"
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  opacity: 0;
  visibility: hidden;
  margin-top: 60px;

  .featured-product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    @media (min-width: 662px) {
      grid-template-columns: 1fr 1fr 1fr;

      grid-gap: 20px;
    }
  }
`;
export default forwardRef(FeaturedProduct);
