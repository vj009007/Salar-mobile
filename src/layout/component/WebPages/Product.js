/** @format */

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartSidebar from "../WebPages/CartSidebar";
import { productDetailID, postcart } from "../../ApiData/AllapiData";
import {pinCodeCheck} from "../repo/iThink";
import { Image } from 'antd';
const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [productDetailIDS, setProductDetailID] = useState([]);
  const [detailPrd, setDetailPrd] = useState([]);
  const [cartDataPush, setCartDataPush] = useState([]);
  const [isVisibles, setIsVisibles] = useState(false);
  // const [img, setImg] = useState(images[0]);
  const [visible, setVisible] = useState(false);
  const [pinCode, setPinCode] = useState("")
  const [delivaryState, setDelivaryState] = useState("")
  const [quantity, setQuantity] = useState("1")
const res=detailPrd;
  const openCate = async () => {
    setIsVisibles(true);
  };
  const openClose = async () => {
    setIsVisibles(false);
  };

  const getIDProducts = async () => {
    const responseJson = await productDetailID(id);
    setDetailPrd(responseJson.data);
    console.log(responseJson.data);
  };
console.log(pinCode,"pin");
  const handlePinCode = async () => {
    const responseJson = await pinCodeCheck(pinCode);
    const pin =responseJson.data.data
    setDelivaryState("")
    if(pin[pinCode].xpressbees.pickup == "Y" || pin[pinCode].fedex.pickup == "Y" || pin[pinCode].delhivery.pickup == "Y" || pin[pinCode].aramex.pickup == "Y" || pin[pinCode].ecom.pickup == "Y" ){
      setDelivaryState("Delivery is available")
    }else{
      setDelivaryState("Delivery not available")
    }
    
    console.log(pin,"data" );
  };

  useEffect(() => {
    getIDProducts();
  }, [id]);

  const cardClear = async () => {
    setIsVisible((current) => !current);
  };
  const addTocartGame = async (event) => {
    const userId = localStorage.getItem("dataAuthUserID");
    if (!!userId) {
      const user_id = localStorage.getItem("dataAuthUserID");
      const ecomm_prod_id = event._id;
      const quantity = event.min_purchase_qty;
      const unit_price = event.unit_price;
      const prod_image = event.prod_image;
      const name = event.name;
      const sku = event.sku;
      const dataS = {
        user_id,
        ecomm_prod_id,
        quantity,
        unit_price,
        prod_image,
        name,
        sku,
      };
      const responseJson = await postcart([dataS]);
      // console.log(responseJson);
    } else {
      navigate("/signin");
    }

    setIsVisible((current) => !current);
  };

  const [img, setImg] = useState(productDetailIDS);
  const hoverHandler = (image, i) => {
    setImg(productDetailIDS);
    refs.current[i].classNameList.add("active");
    for (var j = 0; j < productDetailIDS.length; j++) {
      if (i !== j) {
        refs.current[j].classNameList.remove("active");
      }
    }
  };
  const refs = useRef([]);
  refs.current = [];
  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
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
  return (
    <>
      <header className="position-relative">
        <div className="page-header min-vh-45 position-relative" loading="lazy">
          <span className="mask bg-gradient-secondary opacity-6"></span>
        </div>
      </header>

      {/* <!----header--> */}
      <div className="card card-body blur shadow-blur mx-4 mt-n9">
        <div className="section my-4 my-lg-5">
          <div className="container-fluid">
            <div className="row flex-row zoomingFeature">
              <div className="col-lg-4">
                <div className="row align-items-center">
                  <div className="col-4">
                    <Image
                      preview={{
                        visible: false,
                      }}
                      width={400}
                      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                      onClick={() => setVisible(true)}
                    />
                    <div
                      style={{
                        display: 'none',
                      }}
                    >
                      <Image.PreviewGroup
                        preview={{
                          visible,
                          onVisibleChange: (vis) => setVisible(vis),
                        }}
                      >
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                      </Image.PreviewGroup>
                    </div>
                    {/* <div
                      className="my-gallery cont-img d-flex flex-column mt-4 pt-2 h-100"
                      itemscope=""
                      itemtype="http://schema.org/ImageGallery"
                      data-pswp-uid="1"
                    >
                      {productDetailIDS.map((image, i) => (
                        <figure
                          itemprop="associatedMedia"
                          // ms-3
                          className={i == 0 ? "img_wrap active" : "img_wrap"}
                          key={i}
                          onMouseOver={() => hoverHandler(image, i)}
                          ref={addRefs}
                          itemscope=""
                          itemtype="http://schema.org/ImageObject"
                        >
                          <a href="#" itemprop="contentUrl" data-size="40*50">
                            <img
                              className="w-100  border-radius-lg"
                              src={image}
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </figure>
                      ))}
                    </div> */}
                  </div>

                  <div
                    className="col-8"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-default"
                  >
                    {productDetailIDS.map((image, i) => (
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "small",
                            isFluidWidth: true,
                            src: image,
                          },
                          largeImage: {
                            src: image,
                            width: 1200,
                            height: 1800,
                          },
                          enlargedImageContainerDimensions: {
                            width: "200%",
                            height: "200%",
                          },
                        }}
                      />
                    ))}
                  </div>
                  <div className="right"></div>
                </div>

                <div
                  className="pswp"
                  tabindex="-1"
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="pswp__bg"></div>

                  <div className="pswp__scroll-wrap">
                    <div className="pswp__container">
                      <div className="pswp__item"></div>
                      <div className="pswp__item"></div>
                      <div className="pswp__item"></div>
                    </div>

                    <div className="pswp__ui pswp__ui--hidden">
                      <div className="pswp__top-bar">
                        <div className="pswp__counter"></div>
                        <button className="btn btn-white btn-sm pswp__button pswp__button--close">
                          Close (Esc)
                        </button>
                        <button className="btn btn-white btn-sm pswp__button pswp__button--fs">
                          Fullscreen
                        </button>
                        <button className="btn btn-white btn-sm pswp__button pswp__button--arrow--left">
                          Prev
                        </button>
                        <button className="btn btn-white btn-sm pswp__button pswp__button--arrow--right">
                          Next
                        </button>
                        <div className="pswp__preloader">
                          <div className="pswp__preloader__icn">
                            <div className="pswp__preloader__cut">
                              <div className="pswp__preloader__donut"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                        <div className="pswp__share-tooltip"></div>
                      </div>
                      <div className="pswp__caption">
                        <div className="pswp__caption__center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                {[detailPrd].map((res) => (
                  // console.log(res),
                  <div>
                    <h3 className="mt-lg-0 mt-4">{res.name}</h3>
                    <span className="badge badge-success">In Stock</span>{" "}
                    <span>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="fas fa-star" aria-hidden="true"></i>
                      <i className="far fa-star" aria-hidden="true"></i>
                    </span>
                    <span className="font-weight-bold">( 2000 Rating )</span>
                    <div className="mt-3">
                      <Link to="/Vendor">
                        Visit <span className="text-primary">Apple</span> Store{" "}
                        <br />
                      </Link>
                    </div>
                    {/* <h6 className="mb-0 mt-2">Price</h6> */}
                    <h5>
                      <span className="font-weight-normal"></span>Price:₹
                      {res.unitPrice ? res.unitPrice : 0}
                    </h5>
                    <label className="mt-3 text-black font-weight-bold">
                      Offers
                    </label>
                    <ul className="list-unstyled px-4 text-black m-0 p-0">
                      <li>
                        My Shopping Amount :<b>₹</b>.
                      </li>
                      <li>
                        My Wallet Amount :<b>₹</b>.
                      </li>
                    </ul>
                    <label
                      className="mt-2 text-black font-weight-bold"
                      style={{ textDecoration: "line-through" }}
                    >
                      Offers Price <b>₹ {res.finalPrice ? res.finalPrice : 0}</b>.
                    </label>
                    <ul className="list-unstyled px-4 text-black m-0 p-0">
                      <li style={{ color: "#df2869" }}>
                        You Save :
                        <b>
                          {Math.round(
                            100 - (res.unitPrice / res.finalPrice) * 100
                          ) ? Math.round(
                            100 - (res.unitPrice / res.finalPrice) * 100
                          ) : 0}
                          %
                        </b>
                      </li>
                    </ul>
                    <small> (Inclusive of all Taxes)</small> <br />
                    <label className="mt-3 text-black font-weight-bold">
                      Color
                    </label>
                    <ul className="colornav-items">
                      <li className="rf-pdp-colornav-item colornav-item">
                        <input
                          type="radio"
                          id="0fe77cb0-0f51-11ed-b420-bda1313b777a"
                          className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                          name="dimensionColor"
                          value="marineblue"
                          checked=""
                        />
                        <label
                          for="0fe77cb0-0f51-11ed-b420-bda1313b777a"
                          className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                          data-autom="colornav-marineblue"
                        >
                          <img
                            width="32"
                            height="32"
                            alt=""
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA73_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154299730"
                            srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA73_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154299730, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA73_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154299730 2x"
                            className="colornav-swatch"
                          />
                          <span className="colornav-label">Marine Blue</span>
                        </label>
                      </li>
                      <li className="rf-pdp-colornav-item colornav-item">
                        <input
                          type="radio"
                          id="0fe7a3c0-0f51-11ed-b420-bda1313b777a"
                          className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                          name="dimensionColor"
                          value="darkcherry"
                        />
                        <label
                          for="0fe7a3c0-0f51-11ed-b420-bda1313b777a"
                          className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                          data-autom="colornav-darkcherry"
                        >
                          <img
                            width="32"
                            height="32"
                            alt=""
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA43_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298745"
                            srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA43_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298745, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA43_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298745 2x"
                            className="colornav-swatch"
                          />
                          <span className="colornav-label">Dark Cherry</span>
                        </label>
                      </li>
                      <li className="rf-pdp-colornav-item colornav-item">
                        <input
                          type="radio"
                          id="0fe7cad0-0f51-11ed-b420-bda1313b777a"
                          className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                          name="dimensionColor"
                          value="electricorange"
                        />
                        <label
                          for="0fe7cad0-0f51-11ed-b420-bda1313b777a"
                          className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                          data-autom="colornav-electricorange"
                        >
                          <img
                            width="32"
                            height="32"
                            alt=""
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM23_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746"
                            srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM23_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM23_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746 2x"
                            className="colornav-swatch"
                          />
                          <span className="colornav-label">
                            Electric Orange
                          </span>
                        </label>
                      </li>
                      <li className="rf-pdp-colornav-item colornav-item">
                        <input
                          type="radio"
                          id="0fe7cad1-0f51-11ed-b420-bda1313b777a"
                          className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                          name="dimensionColor"
                          value="white"
                        />
                        <label
                          for="0fe7cad1-0f51-11ed-b420-bda1313b777a"
                          className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                          data-autom="colornav-white"
                        >
                          <img
                            width="32"
                            height="32"
                            alt=""
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0A3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298023"
                            srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0A3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298023, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0A3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298023 2x"
                            className="colornav-swatch"
                          />
                          <span className="colornav-label">White</span>
                        </label>
                      </li>
                      <li className="rf-pdp-colornav-item colornav-item">
                        <input
                          type="radio"
                          id="0fe7f1e0-0f51-11ed-b420-bda1313b777a"
                          className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                          name="dimensionColor"
                          value="englishlavender"
                        />
                        <label
                          for="0fe7f1e0-0f51-11ed-b420-bda1313b777a"
                          className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                          data-autom="colornav-englishlavender"
                        >
                          <img
                            width="32"
                            height="32"
                            alt=""
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA63_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746"
                            srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA63_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA63_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746 2x"
                            className="colornav-swatch"
                          />
                          <span className="colornav-label">
                            English Lavender
                          </span>
                        </label>
                      </li>
                      <li className="rf-pdp-colornav-item colornav-item">
                        <input
                          type="radio"
                          id="0fe818f0-0f51-11ed-b420-bda1313b777a"
                          className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                          name="dimensionColor"
                          value="deepnavy"
                        />
                        <label
                          for="0fe818f0-0f51-11ed-b420-bda1313b777a"
                          className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                          data-autom="colornav-deepnavy"
                        >
                          <img
                            width="32"
                            height="32"
                            alt=""
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH073_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1598908026000"
                            srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH073_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1598908026000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH073_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1598908026000 2x"
                            className="colornav-swatch"
                          />
                          <span className="colornav-label">Deep Navy</span>
                        </label>
                      </li>
                      <li className="rf-pdp-colornav-item colornav-item">
                        <input
                          type="radio"
                          id="0fe84000-0f51-11ed-b420-bda1313b777a"
                          className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                          name="dimensionColor"
                          value="mallardgreen"
                        />
                        <label
                          for="0fe84000-0f51-11ed-b420-bda1313b777a"
                          className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                          data-autom="colornav-mallardgreen"
                        >
                          <img
                            width="32"
                            height="32"
                            alt=""
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM53_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617478214000"
                            srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM53_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617478214000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM53_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617478214000 2x"
                            className="colornav-swatch"
                          />
                          <span className="colornav-label">Mallard Green</span>
                        </label>
                      </li>
                      <li className="rf-pdp-colornav-item colornav-item">
                        <input
                          type="radio"
                          id="0fe86710-0f51-11ed-b420-bda1313b777a"
                          className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                          name="dimensionColor"
                          value="black"
                        />
                        <label
                          for="0fe86710-0f51-11ed-b420-bda1313b777a"
                          className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                          data-autom="colornav-black"
                        >
                          <img
                            width="32"
                            height="32"
                            alt=""
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0D3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746"
                            srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0D3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0D3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746 2x"
                            className="colornav-swatch"
                          />
                          <span className="colornav-label">Black</span>
                        </label>
                      </li>
                    </ul>
                    <br />
                    <label className="mt-3 text-black font-weight-bold">
                      Size
                    </label>
                    <label
                      style={{ cursor: "pointer" }}
                      onClick={() => openCate("ecomm_prod_id")}
                      className="mt-3 text-black font-weight-bold float-end"
                    >
                      Size Chart
                    </label>
                    <div className="d-flex flex-wrap">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault1"
                        >
                          Samll
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault2"
                        >
                          Medium
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault3"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault3"
                        >
                          Large
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault4"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault4"
                        >
                          Extra Large
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault5"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault5"
                        >
                          XX Large
                        </label>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-4 mt-lg-0 mt-2">
                        <label className="text-black font-weight-bold">
                          Weight
                        </label>
                        <div
                          className="choices"
                          data-type="select-one"
                          tabindex="0"
                          role="listbox"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <select
                            className="form-control choices__input dropDownSet"
                            name="choices-material"
                            id="choices-material"
                            hidden=""
                            tabindex="-1"
                            data-choice="active"
                          >
                            <option value="Choice 1">Black</option>
                          </select>

                          <div
                            className="choices__list choices__list--dropdown"
                            aria-expanded="false"
                          >
                            <div className="choices__list" role="listbox">
                              <div
                                id="choices--choices-material-item-choice-1"
                                className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                                role="option"
                                data-choice=""
                                data-id="1"
                                data-value="Choice 1"
                                data-select-text=""
                                data-choice-selectable=""
                                aria-selected="true"
                              >
                                Black
                              </div>
                              <div
                                id="choices--choices-material-item-choice-2"
                                className="choices__item choices__item--choice choices__item--selectable"
                                role="option"
                                data-choice=""
                                data-id="2"
                                data-value="Choice 2"
                                data-select-text=""
                                data-choice-selectable=""
                              >
                                Blue
                              </div>
                              <div
                                id="choices--choices-material-item-choice-3"
                                className="choices__item choices__item--choice choices__item--selectable"
                                role="option"
                                data-choice=""
                                data-id="3"
                                data-value="Choice 4"
                                data-select-text=""
                                data-choice-selectable=""
                              >
                                Brown
                              </div>
                              <div
                                id="choices--choices-material-item-choice-4"
                                className="choices__item choices__item--choice choices__item--selectable"
                                role="option"
                                data-choice=""
                                data-id="4"
                                data-value="Choice 3"
                                data-select-text=""
                                data-choice-selectable=""
                              >
                                Gray
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-space-between mt-3">
                      <div className="col-6 mx-auto">
                        <div className="card card-profile mt-md-0 mt-5 bg-gray-200 text-black">
                          <div className="card-body text-center p-0 ">
                            <h5 className="mb-0 text-black">Bank Offers </h5>
                            <p className="text-sm text-start px-2">
                              10% Instant Discount upto Rs.1500 with Citibank
                              Credit Cards and Debit Cards(NonEMI).Minimum
                              purchase of INR
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 mx-auto">
                        <div className="card card-profile mt-md-0 mt-5 bg-gray-200 text-black">
                          <div className="card-body text-center p-0">
                            <h5 className="mb-0 text-black">Bank Offers </h5>
                            <p className="text-sm text-start px-2">
                              10% Instant Discount upto Rs.1500 with Citibank
                              Credit Cards and Debit Cards(NonEMI).Minimum
                              purchase of INR
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <label className="mt-5 text-black font-weight-bold">
                      About This Item
                    </label>
                    <ul className="list-unstyled px-4 text-black m-0 p-0">
                      <li>
                        <i
                          className="fas fa-check text-dark opacity-6 text-sm"
                          aria-hidden="true"
                        ></i>{" "}
                        Combo OfferBuy 3-4 items save 5%; Buy 5 or more save 7%S
                      </li>
                      <li>
                        <i
                          className="fas fa-check text-dark opacity-6 text-sm"
                          aria-hidden="true"
                        ></i>{" "}
                        Bank Offer10% off on Axis Bank Credit Cards, up to
                        ₹1250.
                      </li>
                      <li>
                        <i
                          className="fas fa-check text-dark opacity-6 text-sm"
                          aria-hidden="true"
                        ></i>{" "}
                        Bank Offer5% off on Flipkart Axis Bank Co Brand Card, up
                        to ₹625. On orders of ₹3000 and aboveT&C
                      </li>
                    </ul>
                    <div className="accordion" id="accordionProduct">
                      <div className="accordion-item mb-1">
                        <h6 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button border-bottom font-weight-bold text-start collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            Description
                            {/* <i
                            className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"
                            aria-hidden="true"
                          ></i> */}
                            {/* <i
                            className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"
                            aria-hidden="true"
                          ></i> */}
                          </button>
                        </h6>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionProduct"
                        >
                          <div className="accordion-body text-sm opacity-8">
                            Eres' daring 'Grigri Fortune' swimsuit has the fit
                            and coverage of a bikini in a one-piece silhouette.
                            This fuchsia style is crafted from the label's
                            sculpting peau douce fabric and has flattering
                            cutouts through the torso and back. Wear yours with
                            mirrored sunglasses on vacation.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-1">
                        <h6 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button border-bottom font-weight-bold text-start collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Product Information
                            {/* <i
                            className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"
                            aria-hidden="true"
                          ></i> */}
                            {/* <i
                            className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"
                            aria-hidden="true"
                          ></i> */}
                          </button>
                        </h6>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionProduct"
                        >
                          <div className="accordion-body text-sm opacity-8">
                            An infusion of West Coast cool and New York
                            attitude, Rebecca Minkoff is synonymous with It girl
                            style. Minkoff burst on the fashion scene with her
                            best-selling 'Morning After Bag' and later expanded
                            her offering with the Rebecca Minkoff Collection - a
                            range of luxe city staples with a "downtown
                            romantic" theme.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-1">
                        <h6 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button border-bottom font-weight-bold text-start collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Additional Information
                            {/* <i
                            className="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0"
                            aria-hidden="true"
                          ></i> */}
                            {/* <i
                            className="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0"
                            aria-hidden="true"
                          ></i> */}
                          </button>
                        </h6>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionProduct"
                        >
                          <div className="accordion-body text-sm opacity-8">
                            <ul>
                              <li>
                                Storm and midnight-blue stretch cotton-blend
                              </li>
                              <li>
                                Notch lapels, functioning buttoned cuffs, two
                                front flap pockets, single vent, internal pocket
                              </li>
                              <li>Two button fastening</li>
                              <li>84% cotton, 14% nylon, 2% elastane</li>
                              <li>Dry clean</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-4 mt-5 mt-lg-0">
                <div className="card card-pricing">
                  <div className="bg-gray-600 text-center py-3 position-relative mx-3 mt-n4 border-radius-xl">
                    <div className="z-index-1 position-relative">
                      <h5 className="text-white">Total Commissions </h5>
                      <h3 className="text-white mt-2 mb-0">
                        <small>₹</small><span>{res.unitPrice*(1/100) ? res.unitPrice*(1/100) : 0}</span>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body text-start">
                    <ul className="list-unstyled max-width-300 mx-auto text-black">
                      <li>
                        <i className="fas fa-check text-dark opacity-6 text-sm"></i>{" "}
                        My Shopping Amount :<b>₹</b>.
                      </li>
                      <li>
                        <i className="fas fa-check text-dark opacity-6 text-sm"></i>{" "}
                        My Wallet Amount :<b>₹</b>.
                      </li>
                      <li>
                        <i className="fas fa-check text-dark opacity-6 text-sm"></i>{" "}
                        My Available Commissions : <b>₹</b>.
                      </li>
                      <li>
                        <i className="fas fa-check text-dark opacity-6 text-sm"></i>{" "}
                        My Team Bonus : <b>₹</b>.
                      </li>
                    </ul>
                    <div className="mt-5 d-flex gap-2 align-items-center text-center  mb-2">
                      <div className="input-group input-group-outline">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Pincode"
                          name="pincode"
                          onChange={(e)=>setPinCode(e.target.value)}
                        />
                      </div>
                      <button
                        onClick={handlePinCode}
                        className="d-inline-block bg-gradient-primary w-80 btn btn-sm m-0"
                      >
                        Check Delivery
                      </button>
                    </div>
                    {(delivaryState == "Delivery is available") ?  <p className="text-success px-2 text-start m-0">
                      {delivaryState}
                    </p> :  <p className="text-danger px-2 text-start m-0">
                      {delivaryState}
                    </p>}
                    {/* <p className="text-success px-2 text-start m-0">
                      {delivaryState}
                    </p> */}
                    <small>Free Delivery by Friday 24th November 20</small>
                    <div className="d-flex align-items-center gap-1">
                      <i className="material-icons opacity-10 text-primary">
                        local_shipping
                      </i>{" "}
                      Deliver to Suraj, City,Pincode,Country
                    </div>
                    <div className="mt-3">
                      <Link to="/vendor">
                        Sold by <b>Darshita </b>
                        <span>
                          <i className="star fas fa-star"></i>
                          <i className="star fas fa-star"></i>
                          <i className="star fas fa-star"></i>
                          <i className="star fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </span>
                        <span className="font-weight-bold">
                          ( 2000 Rating )
                        </span>
                      </Link>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-3">
                        <label className="ms-0 font-weight-bolder text-black">
                          Quantity
                        </label>
                        <div
                          className="choices"
                          data-type="select-one"
                          tabindex="0"
                          role="listbox"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <select
                            className="form-control choices__input dropDownSet"
                            name="choices-colors"
                            id="choices-colors"
                            hidden=""
                            tabindex="-1"
                            data-choice="active"
                            onChange={e=>setQuantity(e.target.value)}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                          </select>

                          <div
                            className="choices__list choices__list--dropdown"
                            aria-expanded="false"
                          >
                            <div className="choices__list" role="listbox">
                              <div
                                id="choices--choices-colors-item-choice-1"
                                className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                role="option"
                                data-choice=""
                                data-id="1"
                                data-value="Choice 2"
                                data-select-text=""
                                data-choice-selectable=""
                                aria-selected="true"
                              >
                                Extra Small
                              </div>
                              <div
                                id="choices--choices-colors-item-choice-2"
                                className="choices__item choices__item--choice choices__item--selectable"
                                role="option"
                                data-choice=""
                                data-id="2"
                                data-value="Choice 4"
                                data-select-text=""
                                data-choice-selectable=""
                              >
                                Large
                              </div>
                              <div
                                id="choices--choices-colors-item-choice-3"
                                className="choices__item choices__item--choice choices__item--selectable"
                                role="option"
                                data-choice=""
                                data-id="3"
                                data-value="Choice 3"
                                data-select-text=""
                                data-choice-selectable=""
                              >
                                Medium
                              </div>
                              <div
                                id="choices--choices-colors-item-choice-4"
                                className="choices__item choices__item--choice is-selected choices__item--selectable"
                                role="option"
                                data-choice=""
                                data-id="4"
                                data-value="Choice 1"
                                data-select-text=""
                                data-choice-selectable=""
                              >
                                Small
                              </div>
                              <div
                                id="choices--choices-colors-item-choice-5"
                                className="choices__item choices__item--choice choices__item--selectable"
                                role="option"
                                data-choice=""
                                data-id="5"
                                data-value="Choice 5"
                                data-select-text=""
                                data-choice-selectable=""
                              >
                                XXL
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-7">
                        {/* <h6 className="mb-0 mt-2">Price</h6> */}
                        {[detailPrd].map((res) => (
                          <h5 className="pt-5">
                            <span className="font-weight-normal">Price:</span> ₹
                            {res.unitPrice * quantity ? res.unitPrice * quantity : 0}
                          </h5>
                        ))}
                      </div>
                      <div className="mt-2"></div>
                      <button
                        onClick={() => addTocartGame(detailPrd)}
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                      <div className="mt-2"></div>
                      <button
                        class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container-fluid">
          <h3>Recommended Products</h3>
        </div>
        <div className="container-fluid mt-sm-5 mt-3">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"
                style={{ top: "100px" }}
              >
                <h6>Customer reviews</h6>
                <div className="py-2 px-2">
                  <span>
                    <i className="star fas fa-star"></i>
                    <i className="star fas fa-star"></i>
                    <i className="star fas fa-star"></i>
                    <i className="star fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>{" "}
                  <span className="lead px-2">4.2 out of 5</span>
                </div>
                <div className="py-3 px-3">
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-percentage d-flex justify-content-between align-items-lg-center">
                        <span className="text-sm font-weight-bold">5 Star</span>
                        <span className="text-sm font-weight-bold">80%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-percentage d-flex justify-content-between align-items-lg-center">
                        <span className="text-sm font-weight-bold">4 Star</span>
                        <span className="text-sm font-weight-bold">60%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-percentage d-flex justify-content-between align-items-lg-center">
                        <span className="text-sm font-weight-bold">3 Star</span>
                        <span className="text-sm font-weight-bold">40%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-percentage d-flex justify-content-between align-items-lg-center">
                        <span className="text-sm font-weight-bold">2 Star</span>
                        <span className="text-sm font-weight-bold">20%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-percentage d-flex justify-content-between align-items-lg-center">
                        <span className="text-sm font-weight-bold">1 Star</span>
                        <span className="text-sm font-weight-bold">10%</span>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-12">
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="py-3">
                        <div className="pt-3">
                          <a href="javascript:;">
                            <h5>
                              <i className="material-icons me-sm-1">
                                account_circle
                              </i>{" "}
                              Lovely and cosy apartment
                            </h5>
                          </a>
                          <p>
                            <span>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </span>{" "}
                            Lovely and cosy apartment
                          </p>
                          <p>
                            Siri's latest trick is offering a hands-free TV
                            viewing experience, that will allow consumers to
                            turn on or off their television, change inputs, fast
                            forward.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="py-3">
                        <div className="pt-3">
                          <a href="javascript:;">
                            <h5>
                              <i className="material-icons me-sm-1">
                                account_circle
                              </i>{" "}
                              Lovely and cosy apartment
                            </h5>
                          </a>
                          <p>
                            <span>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </span>{" "}
                            Lovely and cosy apartment
                          </p>
                          <p>
                            Siri's latest trick is offering a hands-free TV
                            viewing experience, that will allow consumers to
                            turn on or off their television, change inputs, fast
                            forward.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="py-3">
                        <div className="pt-3">
                          <a href="javascript:;">
                            <h5>
                              <i className="material-icons me-sm-1">
                                account_circle
                              </i>{" "}
                              Lovely and cosy apartment
                            </h5>
                          </a>
                          <p>
                            <span>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </span>{" "}
                            Lovely and cosy apartment
                          </p>
                          <p>
                            Siri's latest trick is offering a hands-free TV
                            viewing experience, that will allow consumers to
                            turn on or off their television, change inputs, fast
                            forward.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row mt-5">
                    <div className="col-md-6">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="Images"
                        className="img-fluid border-radius-lg max-height-160"
                        loading="lazy"
                        style={{ marginLeft: "5px" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="py-3">
                        <div className="pt-3">
                          <a href="javascript:;">
                            <h5>
                              <i className="material-icons me-sm-1">
                                account_circle
                              </i>{" "}
                              Lovely and cosy apartment
                            </h5>
                          </a>
                          <p>
                            <span>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="star fas fa-star"></i>
                              <i className="far fa-star"></i>
                            </span>{" "}
                            Lovely and cosy apartment
                          </p>
                          <p>
                            Siri's latest trick is offering a hands-free TV
                            viewing experience, that will allow consumers to
                            turn on or off their television, change inputs, fast
                            forward.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/">
                  <div className="col-12 mt-2 text-end">
                    <a
                      type="button"
                      className="btn btn-info"
                      href="all-review.html"
                    >
                      See More Reviews
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 pb-0">
        <div className="container-fluid">
          <h3 className="">Recommended Products</h3>
          <div className="row mt-5 ">
            <Slider {...settings}>
              <div className="col p-2">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Dolce &amp; Gabbana</a>
                    </h5>
                    <p className="mb-0">
                      Dolce &amp; Gabbana's 'Greta' tote has been crafted in
                      Italy from hard-wearing red textured-leather.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h5 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h5>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product1.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Dolce &amp; Gabbana</a>
                    </h5>
                    <p className="mb-0">
                      Dolce &amp; Gabbana's 'Greta' tote has been crafted in
                      Italy from hard-wearing red textured-leather.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h5 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h5>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col p-2">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product3.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Balmain</a>
                    </h5>
                    <p className="mb-0">
                      Dolce &amp; Gabbana's 'Greta' tote has been crafted in
                      Italy from hard-wearing red textured-leather.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h5 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h5>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product4.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product4.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2 flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Balenciaga</a>
                    </h5>
                    <p className="mb-0">
                      Balenciaga's black textured-leather wallet is finished
                      with the label's iconic 'Giant' studs.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h5 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h5>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Burberry</a>
                    </h5>
                    <p className="mb-0">
                      Burberry's black textured-cottom bomber is finished with
                      the label's iconic 'Weareable' jacket.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h5 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h5>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <a className="d-block blur-shadow-image">
                      <img
                        src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid border-radius-lg"
                        loading="lazy"
                      />
                    </a>
                    <div
                      className="colored-shadow"
                      style={{
                        backgroundImage:
                          "url(https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-product2.jpg)",
                      }}
                    ></div>
                  </div>
                  <div className="card-body text-start">
                    <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-2">
                      <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                        Trending
                      </p>
                      <span>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="star fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                    </div>
                    <h5 className="font-weight-bold mt-3">
                      <a href="javascript:;">Burberry</a>
                    </h5>
                    <p className="mb-0">
                      Burberry's black textured-cottom bomber is finished with
                      the label's iconic 'Weareable' jacket.
                    </p>
                  </div>
                  <div class="card-footer d-flex pt-0 pb-0">
                    <h5 class="font-weight-bold my-auto">₹ 123</h5>
                    <h5 class="font-weight-bold my-auto crossDiscount">
                      ₹ 123
                    </h5>

                    <div class="ribbon-2" style={{ top: "330px" }}>
                      Save %
                    </div>
                    <i
                      class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                    >
                      favorite
                    </i>
                  </div>
                  <div class="row mt-2 mb-3 all">
                    <div class="col-lg-6 mt-2 AllIcons">
                      <button
                        class="btn bg-info text-white mb-0 mt-lg-auto w-100"
                        type="button"
                        name="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div class="col-lg-6  mt-2 margInrights">
                      <Link to="/checkout" className="AllIcons" title="Buy Now">
                        {/* <i class="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                                    data-bs-toggle="tooltip" data-bs-placement="top">shopping_basket</i> */}
                        <button
                          class="btn bg-gradient-light text-black mb-0 mt-lg-auto w-100"
                          type="button"
                          name="button"
                        >
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <div
        class="modal fade"
        id="modal-default"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modal-default"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal- modal-dialog-centered modal-lg modal-"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              {/* <h6 class="modal-title" id="modal-title-default">Type your modal title</h6> */}
              <button
                type="button"
                class="btn-close text-dark"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="container-fluid">
              <div class="modal-body">
                <div className="section ">
                  <div className="container">
                    <div className="row flex-row ">
                      <div className="col-lg-12">
                        <div className="row align-items-center">
                          <div
                            className="col-9"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-default"
                          >
                            {productDetailIDS.map((image, i) => (
                              <ReactImageMagnify
                                {...{
                                  smallImage: {
                                    alt: "small",
                                    isFluidWidth: true,
                                    src: image,
                                  },
                                  largeImage: {
                                    src: image,
                                    width: 600,
                                    height: 600,
                                  },
                                  enlargedImageContainerDimensions: {
                                    width: "100%",
                                    height: "100%",
                                  },
                                }}
                              />
                            ))}
                          </div>

                          <div className="col-2 mx-auto">
                            <div
                              className="my-gallery cont-img d-flex flex-column mt-4 pt-2 h-100"
                              itemscope=""
                              itemtype="http://schema.org/ImageGallery"
                              data-pswp-uid="1"
                            >
                              {/* {images.map((image, i) => (
                        // <div
                        //     className={i == 0 ? 'img_wrap active' : 'img_wrap'}
                        //     key={i}
                        //     onMouseOver={() => hoverHandler(image, i)}
                        //     ref={addRefs}
                        // >
                        //     <img src={image} alt="" />
                        // </div>
                    ))} */}
                              {productDetailIDS.map((image, i) => (
                                <figure
                                  itemprop="associatedMedia"
                                  // ms-3
                                  className={
                                    i == 0 ? "img_wrap active" : "img_wrap"
                                  }
                                  key={i}
                                  onMouseOver={() => hoverHandler(image, i)}
                                  ref={addRefs}
                                  itemscope=""
                                  itemtype="http://schema.org/ImageObject"
                                >
                                  <a
                                    href="#"
                                    itemprop="contentUrl"
                                    data-size="40*50"
                                  >
                                    {/* <img
                            className="w-100 min-height-100 max-height-100 border-radius-lg"
                            src="https://demos.creative-tim.com/material-kit-pro/assets/img/examples/product3.png"
                            alt="Image description"
                            loading="lazy"
                          /> */}
                                    <img
                                      className="w-100  border-radius-lg"
                                      src={image}
                                      alt=""
                                      loading="lazy"
                                    />
                                  </a>
                                </figure>
                              ))}
                            </div>
                          </div>
                          {/* <div
                              className="col-lg-4"
                              style={{ marginTop: "-280px" }}
                            >
                              {[detailPrd].map(res => (
                                // console.log(res),
                                <div>
                                  <h3 className="mt-lg-0 mt-4">{res.name}</h3>

                                  

                                  <label className="mt-3 text-black font-weight-bold">
                                    Color
                                  </label>
                                  <ul className="colornav-items">
                                    <li className="rf-pdp-colornav-item colornav-item">
                                      <input
                                        type="radio"
                                        id="0fe77cb0-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                                        name="dimensionColor"
                                        value="marineblue"
                                        checked=""
                                      />
                                      <label
                                        for="0fe77cb0-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                                        data-autom="colornav-marineblue"
                                      >
                                        <img
                                          width="32"
                                          height="32"
                                          alt=""
                                          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA73_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154299730"
                                          srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA73_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154299730, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA73_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154299730 2x"
                                          className="colornav-swatch"
                                        />
                                        <span className="colornav-label">
                                          Marine Blue
                                        </span>
                                      </label>
                                    </li>
                                    <li className="rf-pdp-colornav-item colornav-item">
                                      <input
                                        type="radio"
                                        id="0fe7a3c0-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                                        name="dimensionColor"
                                        value="darkcherry"
                                      />
                                      <label
                                        for="0fe7a3c0-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                                        data-autom="colornav-darkcherry"
                                      >
                                        <img
                                          width="32"
                                          height="32"
                                          alt=""
                                          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA43_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298745"
                                          srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA43_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298745, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA43_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298745 2x"
                                          className="colornav-swatch"
                                        />
                                        <span className="colornav-label">
                                          Dark Cherry
                                        </span>
                                      </label>
                                    </li>
                                    <li className="rf-pdp-colornav-item colornav-item">
                                      <input
                                        type="radio"
                                        id="0fe7cad0-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                                        name="dimensionColor"
                                        value="electricorange"
                                      />
                                      <label
                                        for="0fe7cad0-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                                        data-autom="colornav-electricorange"
                                      >
                                        <img
                                          width="32"
                                          height="32"
                                          alt=""
                                          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM23_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746"
                                          srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM23_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM23_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746 2x"
                                          className="colornav-swatch"
                                        />
                                        <span className="colornav-label">
                                          Electric Orange
                                        </span>
                                      </label>
                                    </li>
                                    <li className="rf-pdp-colornav-item colornav-item">
                                      <input
                                        type="radio"
                                        id="0fe7cad1-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                                        name="dimensionColor"
                                        value="white"
                                      />
                                      <label
                                        for="0fe7cad1-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                                        data-autom="colornav-white"
                                      >
                                        <img
                                          width="32"
                                          height="32"
                                          alt=""
                                          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0A3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298023"
                                          srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0A3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298023, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0A3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298023 2x"
                                          className="colornav-swatch"
                                        />
                                        <span className="colornav-label">
                                          White
                                        </span>
                                      </label>
                                    </li>
                                    <li className="rf-pdp-colornav-item colornav-item">
                                      <input
                                        type="radio"
                                        id="0fe7f1e0-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                                        name="dimensionColor"
                                        value="englishlavender"
                                      />
                                      <label
                                        for="0fe7f1e0-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                                        data-autom="colornav-englishlavender"
                                      >
                                        <img
                                          width="32"
                                          height="32"
                                          alt=""
                                          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA63_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746"
                                          srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA63_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNA63_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746 2x"
                                          className="colornav-swatch"
                                        />
                                        <span className="colornav-label">
                                          English Lavender
                                        </span>
                                      </label>
                                    </li>
                                    <li className="rf-pdp-colornav-item colornav-item">
                                      <input
                                        type="radio"
                                        id="0fe818f0-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                                        name="dimensionColor"
                                        value="deepnavy"
                                      />
                                      <label
                                        for="0fe818f0-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                                        data-autom="colornav-deepnavy"
                                      >
                                        <img
                                          width="32"
                                          height="32"
                                          alt=""
                                          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH073_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1598908026000"
                                          srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH073_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1598908026000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH073_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1598908026000 2x"
                                          className="colornav-swatch"
                                        />
                                        <span className="colornav-label">
                                          Deep Navy
                                        </span>
                                      </label>
                                    </li>
                                    <li className="rf-pdp-colornav-item colornav-item">
                                      <input
                                        type="radio"
                                        id="0fe84000-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                                        name="dimensionColor"
                                        value="mallardgreen"
                                      />
                                      <label
                                        for="0fe84000-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                                        data-autom="colornav-mallardgreen"
                                      >
                                        <img
                                          width="32"
                                          height="32"
                                          alt=""
                                          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM53_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617478214000"
                                          srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM53_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617478214000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJM53_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1617478214000 2x"
                                          className="colornav-swatch"
                                        />
                                        <span className="colornav-label">
                                          Mallard Green
                                        </span>
                                      </label>
                                    </li>
                                    <li className="rf-pdp-colornav-item colornav-item">
                                      <input
                                        type="radio"
                                        id="0fe86710-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-value rc-dimension-colornav-input rf-pdp-colornav-input"
                                        name="dimensionColor"
                                        value="black"
                                      />
                                      <label
                                        for="0fe86710-0f51-11ed-b420-bda1313b777a"
                                        className="colornav-link rc-dimension-colornav-link rf-pdp-colornav-label"
                                        data-autom="colornav-black"
                                      >
                                        <img
                                          width="32"
                                          height="32"
                                          alt=""
                                          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0D3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746"
                                          srcset="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0D3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0D3_SW_COLOR?wid=64&amp;hei=64&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645154298746 2x"
                                          className="colornav-swatch"
                                        />
                                        <span className="colornav-label">
                                          Black
                                        </span>
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              ))}
                            </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="menuSidebarRight"
        style={{ right: isVisibles ? "0px" : "-400px" }}
      >
        <div id="hmenu-customer-profile">
          <div id="hmenu-customer-profile-left" class="hmenu-avatar-icon">
            <div id="hmenu-customer-avatar-icon" class="nav-sprite"></div>
          </div>
          <div id="hmenu-customer-profile-right">
            <div id="hmenu-customer-name">
              <p style={{ paddintTop: "10px" }}>Brand</p>{" "}
              <i
                onClick={() => openClose("ecomm_prod_id")}
                class="fa fa-close"
                aria-hidden="true"
              ></i>
              <hr style={{ border: "1px solid" }}></hr>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Size Guide
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 pt-5">
          <div
            className="navbar-collapse w-100 pt-3 pb-2 py-lg-0"
            id="navigation"
          >
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div>
                  <div class="measure-img">
                    <img
                      width="100"
                      src="https://assets.ajio.com//sizeguide/Topwear.jpg"
                      alt="Measurement image"
                    />
                  </div>
                  <div>
                    <div class="i1iN1">
                      <div class="_2SccH">
                        <span class="_23n-0">Was this information useful?</span>
                        <div class="_1JWFj">
                          <div>
                            <div
                              role="presentation"
                              id="icon"
                              class="_3dt_t _1JyDJ _1JrWv"
                              data-after="0"
                            ></div>
                          </div>
                          <div>
                            <div
                              role="presentation"
                              id="icon"
                              class="_3o4Uu _7YRxO _1JrWv"
                              data-after="0"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {localStorage.getItem("authToken") == null ? (
        <div></div>
      ) : (
        <div
          className="row g-0 sideBarNavRight"
          style={{
            transform: isVisible ? "translateX(100%)" : "translateX(0%)",
          }}
        >
          <div
            className="col-md-12 leftcarts"
            style={{
              transform: isVisible ? "translateX(100%)" : "translateX(0%)",
            }}
          >
            <i
              onClick={() => cardClear()}
              className="material-icons removeIcons"
            >
              clear
            </i>
            <CartSidebar />
          </div>
        </div>
      )}
    </>
  );
};
export default Product;
