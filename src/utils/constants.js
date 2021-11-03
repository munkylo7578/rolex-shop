import React from "react";
export const links = [
    {
        id:1,
        text: 'Trang chủ',
        url:'/'
    },
    {
        id:2,
        text: 'Sản phẩm hot',
        url:'/cua-hang/san-pham-hot'
    },
    {
        id:3,
        text: 'Sale',
        url:'/cua-hang/sale'
    },
    {
        id:4,
        text: 'Đồng hồ nữ',
        url:'/cua-hang/dong-ho-nu'
    },
    {
        id:5,
        text: 'Đồng hồ nam',
        url:'/cua-hang/dong-ho-nam'
    },
    {
        id:6,
        text: 'Brands',
        url:'/',
        types:[
            {
                name:"CITIZEN",
                url:'/cua-hang/brands/citizen'
            },
            {
                name:"ROLEX",
                url:'/cua-hang/brands/rolex'
            },
            {
                name:"CASIO",
                url:'/cua-hang/brands/casio'
            }
            
        ]
    },
    {
        id:7,
        text: 'Liên hệ',
        url:'/contact'
    },
    {
        id:8,
        text: 'Giới thiệu',
        url:'/introduction'
    },
    {
        id:9,
        text: 'đăng nhập',
        url:'/oops'
    }
]

export const products_url = "http://localhost:8888/api/danh-muc"