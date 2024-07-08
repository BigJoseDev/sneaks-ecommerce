import '../ProductList/ProductList.css'
import yeezy from '../../assets/images/yeezy.png'
import addidas from '../../assets/images/addidas.png'
import airjordan from '../../assets/images/airjordan.png'
import airmax from '../../assets/images/airmax.png'
import allstars from '../../assets/images/allstars.png'
import balenciaga from '../../assets/images/balenciaga.png'
import fila from '../../assets/images/fila.png'
import newbalance from '../../assets/images/newbalance.png'
import sketchers from '../../assets/images/sketchers.png'
import ProductCard from '../ProductCard/ProductCard'


const products = [
    {
        id: 1,
        name: 'YEEZY BOOST',
        price: '$240',
        image: yeezy,
    },

    {
        id: 2,
        name: 'SKETCHERS',
        price: '$140',
        image: sketchers,
    },

    {
        id: 3,
        name: 'NIKE AIR MAX',
        price: '$370',
        image: airmax,
    },

    {
        id: 4,
        name: 'BALENCIAGA',
        price: '$280',
        image: balenciaga,
    },

    {
        id: 5,
        name: 'FILA',
        price: '$220',
        image: fila,
    },

    {
        id: 6,
        name: 'NIKE AIR JORDAN',
        price: '$340',
        image: airjordan,
    },

    {
        id: 7,
        name: 'NEW BALANCE',
        price: '$200',
        image: newbalance,
    },

    {
        id: 8,
        name: 'ADDIDAS',
        price: '$120',
        image: addidas,
    },
    
    {
        id: 9,
        name: 'ALL STARS',
        price: '$100',
        image: allstars,
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