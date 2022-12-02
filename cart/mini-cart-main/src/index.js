// 이 곳에 정답 코드를 작성해주세요.
import getProductData from "./api/getProductData.js";
import ProductList from './component/ProductList.js'

const $productListGrid = document.getElementById('product-card-grid');

const productList = new ProductList($productListGrid, []);

const fetchProductData = async () => {
  const result = await getProductData();
  productList.setState(result);
}

fetchProductData();