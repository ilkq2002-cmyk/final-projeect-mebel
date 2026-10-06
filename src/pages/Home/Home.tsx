import { Flex } from "antd";
import card from "../../assets/Card.png";
import defaltfive from "../../assets/Default5.png";
import defaltfour from "../../assets/Default4.png";
import defaltthree from "../../assets/Default3.png";
import defalttwo from "../../assets/Default2.png";
import defaltpng from "../../assets/Default.png";
import defaltpngsix from "../../assets/Default6.png";
import defaltpngseven from "../../assets/Default7.png";
import defaltpngeight from "../../assets/Default8.png";
import defaltpngnine from "../../assets/Default9.png";
import defaltpngten from "../../assets/Default10.png";
import randompage2 from "../../assets/randompage2.jpg";
import randomfoto1 from "../../assets/randomfoto1.jpg";
import mektub from "../../assets/mektub.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="homestardiv">
        <Flex gap={"medium"} justify="space-between" className="homeflex">
          <Flex gap={"medium"} vertical justify="center">
            <h1 className="homeh1">
              Masterpieces <br /> crafted from,
              <span style={{ color: "#38CB89" }}>
                solid <br /> wood
              </span>
            </h1>
            <p>
              Since 1990, Iconic has been producing ecological furniture. We
              stand <br />
              for a modern, minimalist design vocabulary and a sustainable{" "}
              <br />
              approach to design.
            </p>
            <div className="orderBorder">Order Custom Design</div>
          </Flex>
          <div className="yatagsekili">
            <img src={card} alt="yatga sekili" />
          </div>
        </Flex>
      </div>
      <div className="secondHomediv">
        <h1 className="homeh1" id="seconddivH1">
          Novelties
        </h1>
        <Flex gap={"medium"} justify="center">
          <div className="firstpngHomSecond">
            <img src={defaltfive} alt="" />
            <h1 className="homeh1">Bondt-ROUND</h1>
            <p>Design by merit Fran, Nana,Groner,210</p>
          </div>
          <Flex gap={"medium"} vertical>
            <div className="secondHomePageImg">
              <img src={defaltfour} alt="" />
              <h1>Bondt-ROUND</h1>
              <p>Design by merit Fran, Nana,Groner,210</p>
              <img src={defaltthree} alt="" />
              <h1>Bondt-ROUND</h1>
              <p>Design by merit Fran, Nana,Groner,210</p>
            </div>
          </Flex>
          <Flex gap={"medium"}>
            <div className="secondHomePageImg">
              <img src={defalttwo} alt="" />
              <h1>Bondt-ROUND</h1>
              <p>Design by merit Fran, Nana,Groner,210</p>
              <img src={defaltpng} alt="" />
              <h1>Bondt-ROUND</h1>
              <p>Design by merit Fran, Nana,Groner,210</p>
            </div>
          </Flex>
        </Flex>
      </div>
      <div className="HomeThreitPage">
        <Flex gap={"medium"}>
          <Flex gap={"medium"} vertical>
            <Flex gap={"medium"} className="ThreitPageh1p" vertical>
              <h1 className="homeh1">
                Chairs & <br /> Benches
              </h1>
              <p>
                The ensemble of the 1.3 Collection comprises <br />
                chair, stool and bar stool. The most <br />
                outstanding feature of this delicate.
              </p>
            </Flex>
            <img src={defaltpngseven} alt="" />
          </Flex>
          <Flex gap={"medium"} vertical>
            <img src={defaltpngeight} alt="" />
            <Flex gap={"medium"} className="ThreitPageh1p" vertical>
              <h1 className="homeh1">
                Chairs & <br /> Benches
              </h1>
              <p>
                The ensemble of the 1.3 Collection comprises <br />
                chair, stool and bar stool. The most <br />
                outstanding feature of this delicate.
              </p>
            </Flex>
          </Flex>
          <img
            src={defaltpngsix}
            alt=""
            style={{ width: "550px", height: "670px" }}
          />
        </Flex>
      </div>
      <div className="HomefourPage">
        <Flex gap={"medium"} align="center" justify="space-between">
          <img src={defaltpngten} alt="" style={{ width: "700px" , height:"424px" }} />
          <Flex gap={"medium"} vertical>
            <h1 className="homeh1">
              TURN TABLE <br /> COUCH
            </h1>
            <p>
              The archaic form of this table speaks for itself. <br />
              It owes its unique identity to the feeling that it <br />
              turns around its own axis. <br />
              It is present in the room as a feature and fixed <br /> on its
              slim-line middle foot in solid wood
            </p>
          </Flex>
          <img src={defaltpngnine} alt="" style={{ width: "300px" , height:"424px" }} />
        </Flex>
      </div>
      <div className="HomePagefive">
        <Flex gap={"medium"} justify="space-between">
          <img src={randomfoto1} alt="" />
          <Flex gap={"medium"} vertical justify="center" align="center">
            <h1 >Join OUR NEWSLETTER</h1>
            <p>sing up for deals ,new products and promotions</p>
            <Flex gap={"medium"} justify="center"
            align="center">
              <img src={mektub} alt="" style={{width:"24px",height:"24px"}} />
              <p>Email address</p>
              <button className="singupButton">Sing Up</button>
            </Flex>
          </Flex>
          <img src={randompage2} alt="" />
        </Flex>

      </div>
    </>
  );
};

export default Home;
