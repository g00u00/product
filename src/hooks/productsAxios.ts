import {useEffect, useState} from 'react'
import {IProduct} from '../models'
import axios from 'axios'

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
    }

    async function fetchProducts() {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=2')
        setProducts(response.data)

    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return {products}
}