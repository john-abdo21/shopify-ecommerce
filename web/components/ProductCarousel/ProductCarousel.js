import { Spinner } from "react-bootstrap";
import { Carousel } from '@trendyol-js/react-carousel';

import { ShopContext } from "../../context/shopContext";
import Product from "../Product/Product";

const ProductCarousel = () => {
  const { collection, fetchCollection } = React.useContext(ShopContext);

  React.useEffect(() => {
    let query = "New";
    fetchCollection(query);
    return () => {};
  }, [fetchCollection]);

  if (!collection.products)
    return (
      <div className="page-spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  else return (
    <Carousel show={3} slide={3} swiping={true} dynamic={true}>
      {collection.products.map((product) => (
        <Product product={product} key={product.id}/>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
