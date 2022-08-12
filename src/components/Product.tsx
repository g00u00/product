 import React, {useState} from 'react'
import {IProduct} from '../models'

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
console.log('11',{ product})
  const [details, setDetails] = useState(false)
  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  return (
    <div  style={{margin:40}}>
      <img src={product.image} style={{width: 100}} alt={product.title} />
      <p>{product.title}.  {product.price}р. </p>
        <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}
      >
        { details ? 'Hide Details' : 'Show Details' }
      </button>

      {details && <div>
        <p>{ product.description }</p>
        <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
      </div>}

    </div>
  )
}