import { Link, useLocation } from "react-router-dom";
import {IoMdHeart } from "react-icons/io";
import PropTypes from 'prop-types';

const ProductItem=({name,price,src})=>{
    const location = useLocation();

    const onHandleClick=()=>{

    }
    
    return (
        <li>
        <img src={`https://testbackend.nc-one.com${src}`} alt={name}/>
        <p>${price}</p>
       <Link to={`/`} state={{ from: location }}>
         {name}
          </Link>
          <button type="button"><IoMdHeart style={{ color:"white",backgroundColor:"orange",borderRadius:5, width: 31.5, height: 31.5}}/></button>
        </li>
      );
    };
  
   ProductItem.propTypes = {
     name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      price:PropTypes.number.isRequired,
    };
    
export default ProductItem;