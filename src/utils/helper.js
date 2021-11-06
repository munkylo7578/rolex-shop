export const formatPrice = (number)=>{
   return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

export const paginate = (products)=>{
   const itemPerPage = 9;
   const pages = Math.ceil(products.length / itemPerPage)
   const newProducts = Array.from({length:pages},(_,index)=>{
      const start = index * itemPerPage
      return products.slice(start,start + itemPerPage)
   })
   if(products.length > itemPerPage)
   {
      return newProducts
   }
   else{
      return products
   }
}