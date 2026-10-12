import { Flex } from "antd";
import "./Footer.css";

import { Link } from "react-router";
import mektub from "../assets/mektub.png";

const Footer = () => {
  return (
    <div className="FOOter">
      <div className="JoinOur">
        <h1>Join OUR NEWSLETTER</h1>
        <p>Sign up for deals, new products and promotions</p>
        <div className="SinginFlex">
          <Flex gap={"customize"}>
            <img
              src={mektub}
              alt=""
              style={{ width: "16px", height: "16px" }}
            />
            <p>Email Adress</p>
          </Flex>
          <button className="SingINBut">Sing in</button>
        </div>
        <div className="line"></div>
      </div>
      <div className="footeerfirstdiv">
        <Flex gap={"medium"} justify="space-between">
          <h1>Iconic</h1>
          <p>Design furniture Store</p>
          <Flex gap={"medium"}>
            <Link to={"/home"}>
              <li>Home</li>
            </Link>
            <Link to={"/shop"}>
              <li>Shop</li>
            </Link>
            <Link to={"/blog"}>
              <li>Blog</li>
            </Link>
            <Link to={"/product"}>
              <li>products</li>
            </Link>
            <Link to={"/contactus"}>
              <li>Contact us</li>
            </Link>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Footer;
