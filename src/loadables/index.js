import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
export const LoadableMobileCategory = loadable(()=>import("../components/MobileCategory"))
export const LoadableSidebar = loadable(()=>import("../components/Sidebar"))
export const LoadableModal = loadable(()=>import("../components/Modal"))
export const LoadableContact = loadable(()=>import("../pages/Contact"))
export const LoadableIntroduction = loadable(()=>import("../pages/Introduction"))
export const LoadableProductPage = loadable(()=>import("../pages/ProductPage"))
export const LoadableSingleProductPage = loadable(()=>import("../pages/SingleProductPage"))
export const LoadableCartPage = loadable(()=>import("../pages/CartPage"))
export const LoadableIntroSlider = loadable(()=>pMinDelay(import("../components/IntroSlider"),300))
export const LoadableProductList = loadable(()=>pMinDelay(import("../components/ProductsList"),500))
export const LoadableProduct = loadable(()=>pMinDelay(import("../components/Product"),2000))

