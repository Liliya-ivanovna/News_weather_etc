import { useFetchProducts } from "hooks/fetchApi";
import { responses } from "services/api";
import { useEffect } from "react";
import ProductList from "components/ProductList/ProductList";
import PropTypes from 'prop-types';
import DrawerAppBar from "components/Header/Header";


const Products = () => {
    const { isLoading, data, error, fetchApi } = useFetchProducts();
  
  useEffect(() => {
    fetchApi(responses.fetchAllProducts());
  }, [fetchApi]);
  const products = data;
  console.log(products);
  const isVisible = Array.isArray(products) && products.length > 0;
  
    return (<>
      <DrawerAppBar/>
      <h1 style={{ marginLeft:`50px` }}>PRODUCT LIST PAGE</h1>
      {isVisible && !error && (
        <ProductList products={products} isLoading={isLoading} />
      )}
      </>
  );
};

Products.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
};
  
  export default Products;