import React ,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { fetchProducts } from "../redux/actions/fetchData";

function ProductDetail() {
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProducts());
    
}, []);
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const product = products.find((i) => i.id === id)

  console.log(product , products);

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <img src={product?.image} alt={product?.title} />
      </div>
      <h3>{product?.title}</h3>
      <p>{product?.description}</p>
      <p>Price: ${product?.price}</p>
    </div>
  );
}

export default ProductDetail;
