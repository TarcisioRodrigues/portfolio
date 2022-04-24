import "./productList.css";
import Product2 from "../product2/Product2";
import { products2 } from "../../data2";

const ProductList2 = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Linguagens</h1>
        <p className="pl-desc">
       Linguagens que eu uso
        </p>
      </div>
      <div className="pl-list">
        {products2.map((item) => (
          <Product2 key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList2;
