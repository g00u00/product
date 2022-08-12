import React, {useContext} from 'react'
import {useProducts} from '../hooks/productsAxios'
import {IProduct} from '../models'
import {Product} from '../components/Product'

export function ProductsPage() {
  const {products} = useProducts()


  return (
    <div>
      { products.map(product => <Product product={product} key={product.id} />) }
    </div>
  )
}