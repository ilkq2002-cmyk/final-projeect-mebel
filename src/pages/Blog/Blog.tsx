import React from "react";
import blog from "../../assets/ourblog.png";
import blog1 from "../../assets/ourblogfoto1.png";
import blog2 from "../../assets/ourblogfoto2.png";
import blog3 from "../../assets/ourblogfoto3.png";
import blog4 from "../../assets/ourblogfoto4.png";
import blog5 from "../../assets/ourblogfoto5.png";
import blog6 from "../../assets/ourblogfoto6.png";
import default5 from "../../assets/Default5.png";
import "./Blog.css";
import { Flex, Row } from "antd";
import { Link } from "react-router";
import { chairsbenches } from "../../db";

const Blog = () => {
  return (
    <div>
      <div>
        <Link to={"/home"}> Home</Link>
        <Link to={"/shop"}>Blog</Link>
      </div>
      <div className="ourblog">
        <Flex gap={"large"} align="center">
          <img src={blog} alt="" />
          <h1 className="ourblogh1">Our Blog</h1>
        </Flex>
      </div>
      <div className="OurblogsecondLine">
        <Row
          gutter={[16, 24]}
          className={"styles.rowContainer"}
          justify={"space-evenly"}
        >
          <Flex gap={"medium"} vertical>
            <img src={blog1} alt="blog1" />
            <h1>Headquarter in Hamburg</h1>
            <p>DE – Hamburg, 2022 | Office</p>
          </Flex>
          <Flex gap={"medium"} vertical>
            <img src={blog2} alt="blog1" />
            <h1>Headquarter in Hamburg</h1>
            <p>DE – Hamburg, 2022 | Office</p>
          </Flex>
          <Flex gap={"medium"} vertical>
            <img src={blog3} alt="blog1" />
            <h1>Headquarter in Hamburg</h1>
            <p>DE – Hamburg, 2022 | Office</p>
          </Flex>
          <Flex gap={"medium"} vertical>
            <img src={blog4} alt="blog1" />
            <h1>Headquarter in Hamburg</h1>
            <p>DE – Hamburg, 2022 | Office</p>
          </Flex>
          <Flex gap={"medium"} vertical>
            <img src={blog5} alt="blog1" />
            <h1>Headquarter in Hamburg</h1>
            <p>DE – Hamburg, 2022 | Office</p>
          </Flex>
          <Flex gap={"medium"} vertical>
            <img src={blog6} alt="blog1" />
            <h1>Headquarter in Hamburg</h1>
            <p>DE – Hamburg, 2022 | Office</p>
          </Flex>
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
      <div className="showemoredIV">
        <button className="showmore">Show More</button>
      </div>
    </div>
  );
};

export default Blog;
