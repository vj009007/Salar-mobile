/** @format */

import "./App.css";
import "./component/user/assets/admin/assets/css/nucleo-icons.css";
//import "./component/user/assets/admin/assets/css/soft-ui-dashboard.css";
import "./component/user/assets/admin/assets/css/custom.css";
import "./component/user/assets/admin/assets/css/nucleo-svg.css";
import "./assets/css/style.css";
import "./Custom.css";
import "./assets/js/core";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Index from "./component/footerPages/Index";
import Career from "./component/footerPages/Career";
import Ethics from "./component/footerPages/Ethics";
import OurLeadership from "./component/footerPages/OurLeadership";
import PoliticalEngagement from "./component/footerPages/PoliticalEngagement";
import PostPage from "./component/footerPages/PostPage";
import PressRelease from "./component/footerPages/PressRelease";
import Sustainability from "./component/footerPages/Sustainability";
import Testimonials from "./component/footerPages/Testimonials";
import WorkWithUs from "./component/footerPages/WorkWithUs";
import FeesPricing from "./component/footerPages/GenerateMoney/FeesPricing";
import ListUrProduct from "./component/footerPages/GenerateMoney/ListUrProduct";
import SellOnGlobal from "./component/footerPages/GenerateMoney/SellOnGlobal";
import SellOnSalar from "./component/footerPages/GenerateMoney/SellOnSalar";
import Signupseller from "./component/seller/Signupseller";
import Corporateinformation from "./component/footerPages/Corporateinformation";
// web pages
import HomePage from "./component/WebPages/HomePage";
import CartPage from "./component/WebPages/CartPage";
import CheckoutPage from "./component/WebPages/CheckoutPage";
import ProceedToPay from "./component/WebPages/ProceedToPay";
import Product from "./component/WebPages/Product";
import GameProduct from "./component/WebPages/gameProduct"
import FilterPage from "./component/WebPages/FilterPage";
import Category from "./component/WebPages/Category";
import AllReview from "./component/WebPages/AllReview";
import ProductReview from "./component/WebPages/ProductReview";
import OrderPage from "./component/WebPages/OrderPage";
import Meetourteam from "./component/footerPages/Meetourteam";
import Postpage2 from "./component/footerPages/Postpage2";
import Presspost from "./component/footerPages/Presspost";
import Latestupdates from "./component/footerPages/Latestupdates";
import Latestpost from "./component/footerPages/Latestpost";
import Salarbenifts from "./component/footerPages/Salarbenifts";
import SignUp from "./component/WebPages/SignUp";
import SignIn from "./component/WebPages/SignIn";
import Withdrawhistory from "./component/user/component/Withdrawl/Withdrawhistory";
import Dashboard from "./component/user/component/Dashboard/Dashboard";
import Forgot from "./component/WebPages/Forgetpassword";
import TermsConditions from "./component/WebPages/TermsConditions";
import PrivacyPolicy from "./component/WebPages/PrivacyPolicy";
import BlogPost from "./component/footerPages/BlogPost";
import Helps from "./component/footerPages/Helps";
import FAQ from "./component/footerPages/GenerateMoney/Faq";
import AccountManagement from "./component/footerPages/GenerateMoney/AccountManagement";
import Myteam from "./component/user/component/Myteam/Myteam";
import Addteam from "./component/user/component/Mybonusteam/Addteam";
import Teambonus from "./component/user/component/Mybonusteam/Teambonus";
import Teambonus1 from "./component/user/component/Mybonusteam/Teambonus1";
import Teambonuslevel from "./component/user/component/Mybonusteam/Teambonuslevel";
import Teamlis from "./component/user/component/Mybonusteam/Teamlis";
import Productcommission from "./component/user/component/Productcommission/Productcommission";
import Register from "./component/user/component/Register/Register";
import Signin from "./component/user/component/Register/Signin";
import Forgotpass from "./component/user/component/Register/Forgotpass";
import Resetpass from "./component/user/component/Register/Resetpass";
import Organisation from "./component/user/component/Register/Organisation";
import Manageadd from "./component/user/component/Manageaddress/Manageadd";
import Orders from "./component/user/component/Myorders/Orders";
import Refund from "./component/user/component/Myorders/Refund";
import OrdersDetails from "./component/user/component/Myorders/OrdersDetails";
import Returnreplace from "./component/user/component/Myorders/Returnreplace";
import Productchats from "./component/user/component/Myorders/Productchats";
import Points from "./component/user/component/My Stuff/Points";
import Rewards from "./component/user/component/My Stuff/Rewards";
import Offers from "./component/user/component/My Stuff/Offers";
import Sponsorcommission from "./component/user/component/Myearnings/Sponsorcommission";
import Cashbackcommission from "./component/user/component/Myearnings/Cashbackcommission";
import Membership from "./component/user/component/Myearnings/Membership";
import Shoppingamount from "./component/user/component/My Stuff/Shoppingamount";
import Transferwallet from "./component/user/component/Mywallet/Transferwallet";
import Fundtransfer from "./component/user/component/Mywallet/Fundtransfer";
import Fundsrecieved from "./component/user/component/Mywallet/Fundsrecieved";
import Fundstransferhis from "./component/user/component/Mywallet/Fundstransferhis";
import Selftransferwall from "./component/user/component/Mywallet/Selftransferwall";
import Mywallhistory from "./component/user/component/Mywallet/Mywallhistory";
import Withdrawreq from "./component/user/component/Withdrawl/Withdrawreq";
import Ticketlist from "./component/user/component/Tickets/Ticketlist";
import Playgames from "./component/user/component/Playgames/Playgames";
import Creditdebit from "./component/user/component/My Stuff/Creditdebit";
import Addticket from "./component/user/component/Tickets/Addticket";
import Chats from "./component/user/component/Chats/Chats";
import Invoice from "./component/user/component/Invoice/Invoice";
import Payout from "./component/user/component/Payout/Payout";
import Ordertrack from "./component/user/component/Myorders/Ordertrack";
import Tree from "./component/user/component/Myearnings/Tree";
import Viewtable from "./component/user/component/Myearnings/Viewtable";
import Add1 from "./component/user/component/Manageaddress/Add1";
import Cashbackoffer from "./component/user/component/Cashbackoffers/Cashbackoffer";
import Geneologytree from "./component/user/component/Geneologytable/Geneologytree";
import Personaldetails from "./component/user/component/Myaccount/Personaldetails";
import Kyc from "./component/user/component/Myaccount/Kyc";
import Personaldetailsorg from "./component/user/component/Myaccount/Personaldetailsorg";
import Kycorg from "./component/user/component/Myaccount/Kycorg";
import Bankdetails from "./component/user/component/Myaccount/Bankdetails";
import Changepass from "./component/user/component/Myaccount/Changepass";
import Rightnav from "./component/user/component/Rightnavbar/Rightnav";
import Geneology from "./component/user/component/Geneologytable/Geneology";
import Changetxnpass from "./component/user/component/Myaccount/Changetxnpass";
import SuccessM from "./component/WebPages/SuccessM";

import Productreview from "./component/user/component/Myorders/Productreview";
import Procommission from "./component/user/component/Myearnings/Procommission";
import AURCommission from "./component/user/component/Myearnings/AURCommission";
import Whysellonseller from "./component/seller/Whysellonseller";
import Requirementstosell from "./component/seller/Requirementstosell";

import Signinseller from "./component/seller/Signinseller";
import Promoteprod from "./component/seller/Promoteprod";
import Shipping from "./component/seller/Shipping";
import Helpsupport from "./component/seller/Helpsupport";
import Sellersuccess from "./component/seller/Sellersuccess";
import Listyourpro from "./component/seller/Listyourpro";
import Sellglobal from "./component/seller/Sellglobal";
import Typesoffee from "./component/seller/Typesoffee";
import Paymentcycle from "./component/seller/Paymentcycle";
import Faq from "./component/seller/Faq";
import Forgotpassword from "./component/seller/Forgotpassword";
import Resetpassword from "./component/seller/Resetpassword";
import Typesofseller from "./component/seller/Typesofseller";
// admin start here
// Admin Start here

function App() {
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setAuthToken(sessionStorage.getItem("authToken"));
    setAuthToken(localStorage.getItem("authToken"));
  }, [authToken]);

  return (
    <div className="App" style={{ textAlign: "start" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" exact={true} element={<HomePage />} />
              <Route path="/after-signup" exact={true} element={<HomePage />} />
              <Route path="/cart" exact={true} element={<CartPage />} />
              <Route path="/checkout" exact={true} element={<CheckoutPage />} />
              <Route path="/pay" exact={true} element={<ProceedToPay />} />
              <Route
                path="/product-detail/:id"
                exact={true}
                element={<Product />}
              />
               <Route
                path="/gamingproduct-detail/:id"
                exact={true}
                element={<GameProduct />}
              />
              <Route
                path="/product-list"
                exact={true}
                element={<FilterPage />}
              />
              <Route
                path="/product-list/:id"
                exact={true}
                element={<FilterPage />}
              />
              <Route path="/category" exact={true} element={<Category />} />
              <Route path="/all-review" exact={true} element={<AllReview />} />
              <Route
                path="/product-review"
                exact={true}
                element={<ProductReview />}
              />
              <Route path="/order" exact={true} element={<OrderPage />} />
              <Route
                path="/Meetourteam"
                exact={true}
                element={<Meetourteam />}
              />
              <Route path="/Postpage2" exact={true} element={<Postpage2 />} />
              <Route path="/Presspost" exact={true} element={<Presspost />} />
              <Route
                path="/Latestupdates"
                exact={true}
                element={<Latestupdates />}
              />
              <Route path="/Latestpost" exact={true} element={<Latestpost />} />
              <Route
                path="/Salarbenifts"
                exact={true}
                element={<Salarbenifts />}
              />
              <Route path="/index" exact={true} element={<Index />} />
              <Route path="/career" exact={true} element={<Career />} />
              <Route path="/ethics" exact={true} element={<Ethics />} />
              <Route
                path="/our-leadership"
                exact={true}
                element={<OurLeadership />}
              />
              <Route
                path="/political-engagement"
                exact={true}
                element={<PoliticalEngagement />}
              />
              <Route path="/post-page" exact={true} element={<PostPage />} />
              <Route
                path="/press-release"
                exact={true}
                element={<PressRelease />}
              />
              <Route
                path="/sustainability"
                exact={true}
                element={<Sustainability />}
              />
              <Route
                path="/testimonials"
                exact={true}
                element={<Testimonials />}
              />
              <Route
                path="/work-with-us"
                exact={true}
                element={<WorkWithUs />}
              />
              <Route
                path="/fees-pricing"
                exact={true}
                element={<FeesPricing />}
              />
              <Route
                path="/list-ur-product"
                exact={true}
                element={<ListUrProduct />}
              />
              <Route
                path="/sell-on-global"
                exact={true}
                element={<SellOnGlobal />}
              />
              <Route
                path="/Typesofseller"
                exact={true}
                element={<Typesofseller />}
              />
              <Route
                path="/sell-on-salar"
                exact={true}
                element={<SellOnSalar />}
              />
              <Route
                path="/Whysellonseller"
                exact={true}
                element={<Whysellonseller />}
              />
              <Route
                path="/Requirementstosell"
                exact={true}
                element={<Requirementstosell />}
              />
              <Route
                path="/Promoteprod"
                exact={true}
                element={<Promoteprod />}
              />
              <Route path="/Shipping" exact={true} element={<Shipping />} />
              <Route
                path="/Helpsupport"
                exact={true}
                element={<Helpsupport />}
              />
              <Route
                path="/Forgotpassword"
                exact={true}
                element={<Forgotpassword />}
              />
              <Route
                path="/Resetpassword"
                exact={true}
                element={<Resetpassword />}
              />
              <Route
                path="/Sellersuccess"
                exact={true}
                element={<Sellersuccess />}
              />
              <Route
                path="/Listyourpro"
                exact={true}
                element={<Listyourpro />}
              />
              <Route path="/Sellglobal" exact={true} element={<Sellglobal />} />
              <Route path="/Faq" exact={true} element={<Faq />} />
              <Route path="/Typesoffee" exact={true} element={<Typesoffee />} />
              <Route
                path="/Paymentcycle"
                exact={true}
                element={<Paymentcycle />}
              />
              <Route
                path="/Signupseller"
                exact={true}
                element={<Signupseller />}
              />
              <Route
                path="/Signinseller"
                exact={true}
                element={<Signinseller />}
              />
              <Route
                path="/Corporateinformation"
                exact={true}
                element={<Corporateinformation />}
              />
              <Route path="/signup" exact={true} element={<SignUp />} />
              <Route
                path="/sponser_sign_up"
                exact={true}
                element={<SignUp />}
              />
              <Route path="/signin" exact={true} element={<SignIn />} />
              <Route
                path="/user/withdrawhistory"
                exact={true}
                element={<Withdrawhistory />}
              />
              <Route
                path="/user/dashboard"
                exact={true}
                element={<Dashboard />}
              />
              <Route path="/forgetpassword" exact={true} element={<Forgot />} />
              <Route
                path="/terms-conditions"
                exact={true}
                element={<TermsConditions />}
              />
              <Route
                path="/privacy-policy"
                exact={true}
                element={<PrivacyPolicy />}
              />
              <Route path="/blogs" exact={true} element={<BlogPost />} />
              <Route path="/helps" exact={true} element={<Helps />} />
              <Route path="/faqs" exact={true} element={<FAQ />} />
              <Route
                path="/account-management"
                exact={true}
                element={<AccountManagement />}
              />
              <Route path="/User/Myteam" exact={true} element={<Myteam />} />
              <Route path="/User/Addteam" exact={true} element={<Addteam />} />
              <Route
                path="/User/dashboard"
                exact={true}
                element={<Dashboard />}
              />
              <Route
                path="/User/Geneologytree"
                exact={true}
                element={<Geneologytree />}
              />
              <Route
                path="/User/Personaldetails"
                exact={true}
                element={<Personaldetails />}
              />
              <Route
                path="/User/Personaldetailsorg"
                exact={true}
                element={<Personaldetailsorg />}
              />
              <Route
                path="/User/Bankdetails"
                exact={true}
                element={<Bankdetails />}
              />
              <Route path="/User/Kyc" exact={true} element={<Kyc />} />
              <Route path="/User/Kycorg" exact={true} element={<Kycorg />} />
              <Route
                path="/User/Changepass"
                exact={true}
                element={<Changepass />}
              />
              <Route
                path="/User/Changetxnpass"
                exact={true}
                element={<Changetxnpass />}
              />
              <Route path="/User/Myteam" exact={true} element={<Myteam />} />
              <Route path="/User/Addteam" exact={true} element={<Addteam />} />
              <Route
                path="/User/Teambonus"
                exact={true}
                element={<Teambonus />}
              />
              <Route
                path="/User/Teambonus1"
                exact={true}
                element={<Teambonus1 />}
              />
              <Route
                path="/User/Teambonuslevel"
                exact={true}
                element={<Teambonuslevel />}
              />
              <Route path="/User/Teamlis" exact={true} element={<Teamlis />} />
              <Route
                path="/User/Productcommission"
                exact={true}
                element={<Productcommission />}
              />
              <Route
                path="/User/Register"
                exact={true}
                element={<Register />}
              />
              <Route path="/User/Signin" exact={true} element={<Signin />} />
              <Route
                path="/User/Forgotpass"
                exact={true}
                element={<Forgotpass />}
              />
              <Route
                path="/User/Resetpass"
                exact={true}
                element={<Resetpass />}
              />
              <Route
                path="/User/Organisation"
                exact={true}
                element={<Organisation />}
              />
              <Route
                path="/User/AddAddress"
                exact={true}
                element={<Manageadd />}
              />
              <Route
                path="/User/ManageAddress/:id"
                exact={true}
                element={<Manageadd />}
              />
              <Route path="/User/Add1" exact={true} element={<Add1 />} />
              <Route
                path="/User/Rightnav"
                exact={true}
                element={<Rightnav />}
              />
              <Route
                path="/User/Cashbackoffer"
                exact={true}
                element={<Cashbackoffer />}
              />
              <Route path="/User/Orders" exact={true} element={<Orders />} />
              <Route
                path="/User/Ordersdetails/:id"
                exact={true}
                element={<OrdersDetails />}
              />
              <Route path="/User/Refund" exact={true} element={<Refund />} />
              <Route
                path="/User/Returnreplace"
                exact={true}
                element={<Returnreplace />}
              />
              <Route
                path="/User/Productchats"
                exact={true}
                element={<Productchats />}
              />
              <Route
                path="/User/Productreview"
                exact={true}
                element={<Productreview />}
              />
              <Route path="/User/Points" exact={true} element={<Points />} />
              <Route path="/User/Rewards" exact={true} element={<Rewards />} />
              <Route path="/User/Offers" exact={true} element={<Offers />} />
              <Route
                path="/User/Procommission"
                exact={true}
                element={<Procommission />}
              />
              <Route
                path="/User/AURCommission"
                exact={true}
                element={<AURCommission />}
              />
              <Route
                path="/User/Sponsorcommission"
                exact={true}
                element={<Sponsorcommission />}
              />
              <Route
                path="/User/Cashbackcommission"
                exact={true}
                element={<Cashbackcommission />}
              />
              <Route
                path="/User/Membership"
                exact={true}
                element={<Membership />}
              />
              <Route
                path="/User/Shoppingamount"
                exact={true}
                element={<Shoppingamount />}
              />
              <Route
                path="/User/Transferwallet"
                exact={true}
                element={<Transferwallet />}
              />
              <Route
                path="/User/Fundtransfer"
                exact={true}
                element={<Fundtransfer />}
              />
              <Route
                path="/User/Fundsrecieved"
                exact={true}
                element={<Fundsrecieved />}
              />
              <Route
                path="/User/Fundstransferhis"
                exact={true}
                element={<Fundstransferhis />}
              />
              <Route
                path="/User/Selftransferwall"
                exact={true}
                element={<Selftransferwall />}
              />
              <Route
                path="/User/Mywallhistory"
                exact={true}
                element={<Mywallhistory />}
              />
              <Route
                path="/User/Withdrawreq"
                exact={true}
                element={<Withdrawreq />}
              />
              <Route
                path="/User/Withdrawhistory"
                exact={true}
                element={<Withdrawhistory />}
              />
              <Route
                path="/User/Ticketlist"
                exact={true}
                element={<Ticketlist />}
              />
              <Route
                path="/User/Playgames"
                exact={true}
                element={<Playgames />}
              />
              <Route
                path="/User/Creditdebit"
                exact={true}
                element={<Creditdebit />}
              />
              <Route
                path="/User/Addticket"
                exact={true}
                element={<Addticket />}
              />
              <Route
                path="/User/Ordertrack"
                exact={true}
                element={<Ordertrack />}
              />
              <Route path="/User/Chats" exact={true} element={<Chats />} />
              <Route path="/User/Invoice" exact={true} element={<Invoice />} />
              <Route path="/User/Payout" exact={true} element={<Payout />} />
              <Route path="/User/Tree" exact={true} element={<Tree />} />
              <Route
                path="/User/Viewtable"
                exact={true}
                element={<Viewtable />}
              />
              <Route
                path="/User/Geneology"
                exact={true}
                element={<Geneology />}
              />
              <Route path="/successfull" exact={true} element={<SuccessM />} />
              SuccessM
              {/* admin start here */}
              {/* <Route path='/product' exact={true} element={<SingleProduct />} />
              <Route path='/category' exact={true} element={<Category />} />
              <Route path='/cart' exact={true} element={<Cart />} /> */}
            </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
