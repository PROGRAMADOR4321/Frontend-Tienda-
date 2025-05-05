import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import Skeleton from 'react-loading-skeleton';
import Marquee from 'react-fast-marquee';

const Products = () => {
  const { id } = useParams(); // Obtener el id del producto desde la URL
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        console.log('Producto:', response.data); // Verifica que description esté en la respuesta
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
        setLoading(false);
      }
    };

    const fetchSimilarProducts = async () => {
      try {
        const response = await api.get(`/products/${id}/similar`);
        setSimilarProducts(response.data);
        setLoading2(false);
      } catch (error) {
        console.error('Error al obtener productos similares:', error);
        setLoading2(false);
      }
    };

    fetchProduct();
    fetchSimilarProducts();
  }, [id]);

  if (loading) {
    return (
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-6 py-3">
            <Skeleton height={400} width={400} />
          </div>
          <div className="col-md-6 py-5">
            <Skeleton height={30} width={250} />
            <Skeleton height={90} />
            <Skeleton height={40} width={70} />
            <Skeleton height={50} width={110} />
            <Skeleton height={120} />
            <Skeleton height={40} width={110} inline={true} />
            <Skeleton className="mx-3" height={40} width={110} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3">
            <img
              className="img-fluid"
              src={product?.image}
              alt={product?.title}
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-md-6 py-5">
            <h4 className="text-uppercase text-muted">{product?.category}</h4>
            <h1 className="display-5">{product?.title}</h1>
            <p className="lead">
              {product?.rating?.rate} <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 my-4">S/. {product?.price}</h3>
            <p className="lead">{product?.description}</p>
            <button className="btn btn-outline-dark">Add to Cart</button>
            <Link to="/cart" className="btn btn-dark mx-3">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <h2>You may also like</h2>
        <Marquee pauseOnHover={true} speed={50}>
          {loading2 ? (
            <div className="my-4 py-4">
              <div className="d-flex">
                <div className="mx-4">
                  <Skeleton height={400} width={250} />
                </div>
                <div className="mx-4">
                  <Skeleton height={400} width={250} />
                </div>
                <div className="mx-4">
                  <Skeleton height={400} width={250} />
                </div>
                <div className="mx-4">
                  <Skeleton height={400} width={250} />
                </div>
              </div>
            </div>
          ) : (
            similarProducts.map((item) => (
              <div key={item.id} className="card mx-4 text-center">
                <img
                  className="card-img-top p-3"
                  src={item.image}
                  alt="Card"
                  height={300}
                  width={300}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p>S/. {item.price}</p>
                  <Link to={`/product/${item.id}`} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                </div>
              </div>
            ))
          )}
        </Marquee>
      </div>
    </div>
  );
};

export default Products;
