import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import {lazy,Suspense} from "react"

export const LoadableHeader = loadable(() => import("../components/Header"));
export const LoadableNavbar = loadable(() => import("../components/Navbar"));
export const LoadableHome = loadable(() => import("../pages/HomePage"));
export const LoadableMobileCategory = loadable(()=>import("../components/MobileCategory"))
export const LoadableSidebar = loadable(()=>import("../components/Sidebar"))
export const LoadableModal = loadable(()=>import("../components/Modal"))
export const LoadableContact = loadable(()=>import("../pages/Contact"))
export const LoadableIntroduction = loadable(()=>import("../pages/Introduction"))
export const LoadableProductPage = loadable(()=>import("../pages/ProductPage"))
export const LoadableSingleProductPage = loadable(()=>import("../pages/SingleProductPage"))
export const LoadableCartPage = loadable(()=>import("../pages/CartPage"))
export const LoadableIntroSlider = loadable(()=>(import("../components/IntroSlider")))
export const LoadableProductList = loadable(()=>pMinDelay(import("../components/ProductsList"),0))
export const LoadableProduct = loadable(()=>pMinDelay(import("../components/Product"),2000))


