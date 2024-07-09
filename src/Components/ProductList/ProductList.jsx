import '../ProductList/ProductList.css'

import yeezy2 from '../../assets/images/yeezy2.png'
import adidas2 from '../../assets/images/adidas2.png'
import airjordan2 from '../../assets/images/airjordan2.png'
import airmax2 from '../../assets/images/airmax2.png'
import allstars2 from '../../assets/images/allstars2.png'

import balenciaga2 from '../../assets/images/balenciaga2.png'
import fila2 from '../../assets/images/fila2.png'
import newbalance2 from '../../assets/images/newbalance2.png'
import sketchers2 from '../../assets/images/sketchers2.png'

import ProductCard from '../ProductCard/ProductCard'


const products = [
    {
        id: 1,
        name: 'YEEZY BOOST',
        price: '$240',
        image: yeezy2,
    },

    {
        id: 2,
        name: 'SKETCHERS',
        price: '$140',
        image: sketchers2,
    },

    {
        id: 3,
        name: 'NIKE AIR MAX',
        price: '$370',
        image: airmax2,
    },

    {
        id: 4,
        name: 'BALENCIAGA',
        price: '$280',
        image: balenciaga2,
    },

    {
        id: 5,
        name: 'FILA',
        price: '$220',
        image: fila2,
    },

    {
        id: 6,
        name: 'NIKE AIR JORDAN',
        price: '$340',
        image: airjordan2,
    },

    {
        id: 7,
        name: 'NEW BALANCE',
        price: '$200',
        image: newbalance2,
    },

    {
        id: 8,
        name: 'ADDIDAS',
        price: '$120',
        image: adidas2,
    },
    
    {
        id: 9,
        name: 'ALL STARS',
        price: '$100',
        image: allstars2,
    },
    

]

const ProductList = () => {

  return (
    <div className='product-list'>
        {products.map (product => (
            <ProductCard key ={product.id} product ={product} />
        ))}
    </div>
  )
}

export default ProductList