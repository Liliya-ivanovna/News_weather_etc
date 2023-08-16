import ProductItem from "components/ProductItem/ProductItem";
import PropTypes from 'prop-types';


const ProductList=({products=[]})=>{
    const isVisible = Array.isArray(products) && products?.length > 0;

    return (
        <>
          <ul>
            {isVisible &&
              products.map(product => <ProductItem key={product.id} {...product} />)}
          </ul>
        </>
      );
    };
    
    ProductList.propTypes = {
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price:PropTypes.number.isRequired,
        }).isRequired
      ),
    };

    export default ProductList;