/** @format */
import React from "react";
import { Card, Button, Row, Col, Rate, Badge, Space } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Link } from "react-router-dom";
const { Meta } = Card;

export default function CardMeta({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const addToCart = async () => {
    console.log("add to cart");
  };

  const BuyNow = async () => {
    console.log("Buy now");
  };
  return (
    <>
      <Slider {...settings}>
        {data &&
          data.map((item, i) => {
            return (
              <div>
                <Card
                  hoverable
                  style={{ width: 270 }}
                  cover={
                    <Link
                      to={`/product-detail/${
                        item._id ? item._id : "63e918643f6240739169adab"
                      }`}
                    >
                      <img
                        alt=""
                        src={
                          item.prod_image
                            ? item.prod_image
                            : "https://via.placeholder.com/200x300"
                        }
                      />
                    </Link>
                  }
                  actions={[
                    <Space justify="space-around">
                      <Button type="dashed" onClick={addToCart}>
                        ADD TO CART
                      </Button>
                      <Button type="dashed" onClick={BuyNow}>
                        BUY NOW
                      </Button>
                    </Space>,
                  ]}
                >
                  <Row align="middle">
                    <Col>TRENDING</Col>
                    <Col offset={2}>
                      {" "}
                      <Rate defaultValue={4}></Rate>
                    </Col>
                  </Row>
                  <Meta
                    title={item.name ? item.name : null}
                    description={item.description ? item.description : null}
                  />
                  <Badge.Ribbon
                    text={`SAVE ${Math.round(
                      100 - (item.unit_price / item.final_price) * 100,
                    )}%`}
                    color="red"
                  ></Badge.Ribbon>
                  <br />
                  <br />
                  <Row align="middle">
                    <Col>
                      {" "}
                      <h6 className="font-weight-bold my-auto">
                        Rs: ₹ {item.unit_price ? item.unit_price : null}
                      </h6>
                    </Col>
                    <Col>
                      <h6 className="font-weight-bold my-auto crossDiscount">
                        ₹ {item.final_price ? item.final_price : null}
                      </h6>
                    </Col>{" "}
                  </Row>
                </Card>
                <br />
              </div>
            );
          })}
      </Slider>
    </>
  );
}
