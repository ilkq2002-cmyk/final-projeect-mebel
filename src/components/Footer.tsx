import { Flex } from "antd";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="FOOter">
      <div className="footeerfirstdiv">
        <Flex gap={"medium"} justify="space-between">
          <h1>Iconic</h1>
          <p>Design furniture Store</p>
          <Flex gap={"medium"}>
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>products</li>
            <li>Contact us</li>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Footer;
