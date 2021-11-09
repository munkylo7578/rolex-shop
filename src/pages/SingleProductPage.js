import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../contexts/products_context";
import { products_url } from "../utils/constants";
import { Loading, ProductImage, ProductInfo } from "../components";
import styled from "styled-components";
import { memo } from "react/cjs/react.development";
import { useHistory,useLocation } from "react-router-dom";
const SingleProductPage = () => {
    const location = useLocation()
    
  const {
    fetchSingleProduct,
    isSingleProductLoading: loading,
    singleProduct: product,
  } = useProductsContext();
  const { id } = useParams();
  useEffect(() => {
    fetchSingleProduct(`${products_url}?id=${id}`);
    // eslint-disable-next-line
  }, [id]);
  if (loading) {
    <Loading />;
  }
  const { images } = product;

  return (
    <Wrapper>
      {images?.length > 1 && (
        <section>
          <div className="section-center product-info__wrapper">
            <ProductImage images={images} />
            <ProductInfo product={product} title={location.state.from} />
          </div>
        </section>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.main`
    section{
        margin-top: 48px
    }
    .product-info__wrapper{
        display: flex;
       flex-direction: column;
        @media(min-width: 650px){
            flex-direction: row;
        }
    }
`;
export default memo(SingleProductPage);
