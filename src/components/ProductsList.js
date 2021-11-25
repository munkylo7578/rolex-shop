import React, { useEffect, Suspense,memo } from "react";
import styled from "styled-components";
import { useProductsContext } from "../contexts/products_context";
import { useFilteredContext } from "../contexts/filtered_context";

import uniqid from "uniqid";
import { LoadableProduct } from "../loadables";
import { Loading } from ".";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const ProductsList = ({ category, title }) => {
  const { products, isLoading, sort, sortProduct } = useProductsContext();

  const {
    page,
    paginatedArray,
    changePage,
    getProductByCategory,
    filteredProducts,
  } = useFilteredContext();
  useEffect(() => {
    sortProduct();
    //eslint-disable-next-line
  }, [sort, category]);
  useEffect(() => {
    getProductByCategory(category);

    //eslint-disable-next-line
  }, [category, products, page]);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {filteredProducts?.map((product) => {
        return (
          <Suspense
            fallback={
              <Skeleton height={320} baseColor="#ccc" borderRadius={10} />
            }
          >
            <LoadableProduct title={title} key={product.id} product={product} />
          </Suspense>
        );
      })}
      {paginatedArray.length > 1 && (
        <div className="paginate-button__wrapper">
          {page > 0 && (
            <button
              className="change-page-btn"
              onClick={() => changePage("prev")}
            >
              <GrFormPrevious />
            </button>
          )}

          {paginatedArray?.map((product, index) => {
            return (
              <button
                onClick={() => changePage(index)}
                disabled={index === page}
                key={uniqid()}
              >
                {index + 1}
              </button>
            );
          })}
          {page < paginatedArray.length - 1 && (
            <button
              className="change-page-btn"
              onClick={() => changePage("next")}
            >
              <GrFormNext />
            </button>
          )}
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  grid-gap: 20px;

  .paginate-button__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 1/3;
    grid-row-end: auto;
    @media (min-width: 650px) {
      grid-column: 2/3;
      grid-row-end: 6;
    }
    button {
      margin-left: 5px;
      border-radius: 50%;
      padding: 5px 10px;
      border: 2px solid black;
      cursor: pointer;
      transition: all 0.2s ease-in;
      color: black;
      :hover {
        background-color: var(--primary-color);
        color: white;
      }
      :hover .isPageActive {
        color: black;
      }
    }
    .change-page-btn {
      padding: 6px 7px 3px 7px;
    }
    button:disabled {
      background-color: var(--primary-color);
      cursor: default;
      color: black;
    }
  }
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default memo(ProductsList);
