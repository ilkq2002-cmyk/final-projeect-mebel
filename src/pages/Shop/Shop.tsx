import { Flex, Row } from "antd";
import { chairsbenches } from "../../db";
import "./Shop.css";
import Product from "../Products/Product";
import star from "../../assets/StarIcon.png";
import default5 from "../../assets/Default5.png";
import default10 from "../../assets/Default10.png";
import default9 from "../../assets/Default9.png";
interface Mychair {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew: boolean;
  discount: number;
}
export interface Istate {
  data: Mychair[];
  isLoading: boolean;
  error: string;
}
const Shop = () => {
  return (
    <>
      <div>
        <h1 className="ChairBenches">Chairs & Benches</h1>
        <Row className="styles.rowContainer products" justify="space-evenly">
          {chairsbenches.map((chair: Mychair) => (
            <div key={chair.id} className="product">
              <img
                src={chair.image}
                alt={chair.name}
                className="product-image"
              />{" "}
              <br />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <h3>{chair.name}</h3>
              <p>Price: ${chair.price}</p>
              {chair.isNew && <span>New</span>}
              {chair.discount > 0 && <p>Discount: {chair.discount}%</p>}
            </div>
          ))}
        </Row>
      </div>
      <Flex gap="medium" justify="center" className="bottomSection">
        <img src={default5} alt="" className="ChairsBenchesBigFoto" />
        <Row
          className="styles.rowContainer products-second"
          justify="space-evenly"
        >
          {Array(4)
            .fill(chairsbenches[0])
            .map((chair, index) => (
              <div key={index}>
                <img src={chair.image} alt={chair.name} />
                <h3>{chair.name}</h3>
                <p>${chair.price}</p>
              </div>
            ))}
        </Row>
      </Flex>
      <Flex gap={"medium"} className="turntableCouch" justify="center">
        <img src={default10} alt="" className="defaultTenFoto" />
        <Flex gap={"medium"} vertical className="TuruntableH1p">
          <h1>
            TRUNTABLE <br /> CHOUCH
          </h1>
          <p>
            The archaic form of this table speaks for <br />
            itself. It owes its unique identity to the <br /> feeling that it
            turns around its own axis. <br /> It is present in the room as a
            feature and <br />
            fixed on its slim-line middle foot in solid <br /> wood.
          </p>
        </Flex>
        <img src={default9} alt="" className="defaultnineFoto" />
      </Flex>

      
    </>
  );
};

export default Shop;
