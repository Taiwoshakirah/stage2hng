import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useDispatch } from "react-redux";
import rate from "../assets/images/rating.png";
import norate from "../assets/images/ratingnone.png";
import { addToCart } from "../stores/cart";

const Product = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axiosInstance.get("/products", {
          params: {
            organization_id: "dc9bae6696bc4af5913b4ea425fcfa0b",
            reverse_sort: false,
            page: 1,
            size: 9,
            Appid: "X85K3S09EJTDIY5",
            Apikey: "93e826d6ce504f0cbd7a30f97b0649c620240712130840416690",
          },
        });

        const items = res.data.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: extractPrice(item.current_price),
          image:
            item.photos.length > 0
              ? `https://api.timbu.cloud/images/${item.photos[0]?.url}`
              : "https://via.placeholder.com/150",
        }));

        setProducts(items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProduct();
  }, []);

  const extractPrice = (current_price) => {
    if (
      current_price &&
      current_price.length > 0 &&
      current_price[0].NGN &&
      current_price[0].NGN.length > 0
    ) {
      return current_price[0].NGN[0];
    }
    return "Price not available";
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div>
      <section className="product-list container">
        {products.map(({ id, name, image, price }) => (
          <div key={id} className="product">
            <div>
              <img className="mt-5 px-4 mw-100" src={image} alt={name} />
              <button
                className="addcartbtn py-2 text-white"
                onClick={() => handleAddToCart({ id, name, price, image })}
              >
                Add To Cart
              </button>
              <p className="text-center name">{name}</p>
              <p className="text-center price">{price}</p>
              <div className="text-center">
                <img src={rate} alt="rating" />
                <img src={rate} alt="rating" />
                <img src={rate} alt="rating" />
                <img src={rate} alt="rating" />
                <img src={norate} alt="no rating" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Product;
