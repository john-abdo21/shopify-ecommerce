import { ShopContext } from "../../context/shopContext";
import Collection from "../../components/Collection/Collection";

const Accessories = (props) => {
  const { fetchCollection } = React.useContext(ShopContext);

  React.useEffect(() => {
    let query = "Accessories";
    fetchCollection(query);
    return () => {};
  }, [fetchCollection]);

  return (
    <div>
      <Collection />
    </div>
  );
};

export default Accessories;
