import "../ProductList/ProductList.css";


import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductDetails from "../ProductDetails/ProductDetails";


const ProductList = () => {
  const [fetchProducts, setFetchProducts] = useState([]);

  // handle fetch data from api
  const APP_ID = "LOIFSLLA9YGW0AZ"; // Replace with your actual App ID
  const API_KEY =  "314416608cd4448f9f2d10df2ec7d6c320240712182938368472"; // Replace with your actual API Key
  const API_URL = "/api";

  const fetchData = async (page = 1, limit = 10) => {
    try {
      const response = await fetch(
        `${API_URL}/products?organization_id=0451c87499bf4b70b65a092793e4a797&page=${page}&size=${limit}&Appid=${APP_ID}&Apikey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setFetchProducts(data.items)
    } catch (error) {
      console.error("Error fetching data", error);
      throw error; // Rethrow the error after logging it
    }
  };

  useEffect(()=>{
    fetchData()
  },[])

  console.log(fetchProducts)

  const [productDetails, setProductDetails] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);

  const openProductDetail = (id) => {
    setShowProductDetails(true)
    // filter using id
    const singleProduct = fetchProducts.find((product) => product.id === id );
    setProductDetails(singleProduct)

    console.log("singleProduct", singleProduct)
    // navigate to detail
  }

  return (
  <>
  {showProductDetails ?  <ProductDetails product={productDetails}/>: (<div className="product-list">
      {fetchProducts.map((product) => (
        <ProductCard key={product.id} product={product} openProduct={openProductDetail}/>
      ))}
    </div>)}
    

     
    </>
  );
};

export default ProductList;
