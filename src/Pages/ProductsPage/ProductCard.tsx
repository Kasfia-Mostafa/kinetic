import { TProducts } from "@/Types/ProductsTypes";
import "../../styles/productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: TProducts }) => {
  return (
    <div>
      <div className="card  border-l-4 border-t-4  border-yellow-300 shadow-lg">
        <div className="image-container">
          <img className="w-full h-80" src={product.image} alt="" />

          <div className="price">${product?.price}</div>
        </div>

        <div className="content">
          <div className="brand">{product?.name}</div>
          <div className="product-name">{product?.category}</div>
          <div className="color-size-container"></div>
          <div className="rating">
            <svg
              viewBox="0 0 99.498 16.286"
              xmlns="http://www.w3.org/2000/svg"
              className="svg four-star-svg"
            >
              <path
                fill="#fc0"
                transform="translate(-0.001 -1.047)"
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                id="star-svgrepo-com"
              ></path>
              <path
                fill="#fc0"
                transform="translate(20.607 -1.047)"
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                id="star-svgrepo-com-2"
              ></path>
              <path
                fill="#fc0"
                transform="translate(41.215 -1.047)"
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                id="star-svgrepo-com-3"
              ></path>
              <path
                fill="#fc0"
                transform="translate(61.823 -1.047)"
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                id="star-svgrepo-com-4"
              ></path>
              <path
                fill="#e9e9e9"
                transform="translate(82.431 -1.047)"
                d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z"
                data-name="star-svgrepo-com"
                id="star-svgrepo-com-5"
              ></path>
            </svg>
            {product?.rating}
          </div>
        </div>

        <div className="button-container">
          <button className="buy-button button">
            <Link to={`/products/${product?._id}`}>See details</Link>
          </button>
          <button className="cart-button button">
            <svg viewBox="0 0 27.97 25.074" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z"
                id="cart-shopping-solid"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
