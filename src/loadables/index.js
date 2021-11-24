import pMinDelay from "p-min-delay";
import { lazy } from "react";

export const LoadableHome = lazy(() => import("../pages/HomePage"));

export const LoadableFeaturedProduct = lazy(() =>
  import("../components/FeaturedProduct")
);
export const LoadableSpecialProduct = lazy(() =>
  import("../components/SpecialProduct")
);
export const LoadableContact = lazy(() => import("../pages/Contact"));
export const LoadableIntroduction = lazy(() => import("../pages/Introduction"));
export const LoadableErrorPage = lazy(() => import("../pages/ErrorPage"));
export const LoadableProductPage = lazy(() => import("../pages/ProductPage"));
export const LoadableSingleProductPage = lazy(() =>
  import("../pages/SingleProductPage")
);
export const LoadableCartPage = lazy(() => import("../pages/CartPage"));
export const LoadableCheckoutPage = lazy(() => import("../pages/CheckoutPage"));
export const LoadableAccountPage = lazy(() => import("../pages/AccountPage"));
export const LoadableViewOrder = lazy(() => import("../pages/ViewOrder"));
export const LoadableOrdersPage = lazy(() => import("../pages/OrdersPage"));

export const LoadableProductList = lazy(() =>
  pMinDelay(import("../components/ProductsList"), 0)
);
export const LoadableProduct = lazy(() =>
  pMinDelay(import("../components/Product"), 2000)
);
