export const links = [
  {
    id: 1,
    text: "Trang chủ",
    url: "/",
  },
  {
    id: 2,
    text: "Sản phẩm hot",
    url: "/cua-hang/san-pham-hot",
  },
  {
    id: 3,
    text: "Sale",
    url: "/cua-hang/sale",
  },
  {
    id: 4,
    text: "Đồng hồ nữ",
    url: "/cua-hang/dong-ho-nu",
  },
  {
    id: 5,
    text: "Đồng hồ nam",
    url: "/cua-hang/dong-ho-nam",
  },
  {
    id: 6,
    text: "Brands",

    types: [
      {
        name: "CITIZEN",
        url: "/cua-hang/brands/citizen",
      },
      {
        name: "ROLEX",
        url: "/cua-hang/brands/rolex",
      },
      {
        name: "CASIO",
        url: "/cua-hang/brands/casio",
      },
    ],
  },
  {
    id: 7,
    text: "Liên hệ",
    url: "/contact",
  },
  {
    id: 8,
    text: "Giới thiệu",
    url: "/introduction",
  },
  {
    id: 9,
    text: "đăng nhập",
  },
];
export const routes = [
  {
    path: "/cua-hang",
    title: "CỬA HÀNG",
    category: "all",
  },
  {
    path: "/cua-hang/san-pham-hot",
    title: "SẢN PHẨM HOT",
    category: "san-pham-hot",
  },
  {
    path: "/cua-hang/dong-ho-nam",
    title: "ĐỒNG HỒ NAM",
    category: "dong-ho-nam",
  },
  {
    path: "/cua-hang/dong-ho-nu",
    title: "ĐỒNG HỒ NỮ",
    category: "dong-ho-nu",
  },
  {
    path: "/cua-hang/sale",
    title: "SALE",
    category: "sale",
  },
  {
    path: "/cua-hang/brands/rolex",
    title: "ROLEX",
    category: "rolex",
  },

  {
    path: "/cua-hang/brands/citizen",
    title: "CITIZEN",
    category: "citizen",
  },
  {
    path: "/cua-hang/brands/casio",
    title: "CASIO",
    category: "casio",
  },
];
export const products_url = "https://rolex-shop.herokuapp.com/api/danh-muc";
