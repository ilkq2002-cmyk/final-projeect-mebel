import "./Headr.css";
import menuImg from "../assets/store 2.png";
import plyogon from "../assets/Polygon 1.png";
import logoone from "../assets/Logo.png";
import vector from "../assets/Vector.png";
import usercircle from "../assets/user-circle.png";
import canta from "../assets/canta.png";
import { Flex } from "antd";
import { Link } from "react-router";
const Header = () => {
  return (
    <>
      <div>
        <div className="basliq">
          <p>Free Shipping Over 50$!</p>
        </div>
        <Flex gap="large" className="startInfo">
          <Flex gap="medium">
            <img src={menuImg} style={{ width: "20px" }} />
            <b>London,</b>
            <p>Brick Lane,8</p>
            <img src={plyogon} style={{ width: "6px" }} />
          </Flex>
          <Flex gap="customize">
            <div className="menuborder">take away</div>
            <div className="menuborder" id="boz">
              shipping
            </div>
          </Flex>
        </Flex>
      </div>
      <div className="navtoplayici">
        <Flex
          gap="medium"
          className="startnav"
          align="center"
          justify="space-between"
        >
          <div>
            <Link to={"/"}><img src={logoone} style={{ width: "120px", height: "32px" }} /></Link>
          </div>
          <nav>
            <Flex gap={"medium"} className="navbarFlex">
              <li><Link to={"/home"}>Home</Link></li>
              <li><Link to={"/shop"}>Shop</Link></li>
              <li><Link to={"/product"}>Product</Link></li>
              <li><Link to={"/contactus"}>Contact us</Link></li>
            </Flex>
          </nav>
          <div className="Layoutfotos">
            <Flex gap={"large"} className="layoutsFotoFirstFlex">
              <img src={vector} alt="Lupa" />
              <img src={usercircle} alt="singin" />
              <div>
                <Flex gap={"customize"}>
                  <img src={canta} alt="canta" />
                  <div className="layotcircile">2</div>
                </Flex>
              </div>
            </Flex>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default Header;
