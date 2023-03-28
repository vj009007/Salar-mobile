/** @format */

import React, { useEffect } from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Footer1 from "./component/Footer/Footer1";
import Header1 from "./component/Header/Header1";
import Header2 from "./component/user/component/Header/Header2";
import Header3 from "./component/seller/Header3";
import Footer3 from "./component/seller/Footer3";
import Sidebar from "./component/user/component/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const Layout = ({ children, mainClass, props }) => {
  //const {type} = useParams();
  // const stateParamVal = useLocation().stateParam;
  //console.log(stateParamVal);
  const { pathname } = useLocation();
  // console.log(pathname);
  const splitUrl = pathname.split("/");
  // console.log(splitUrl[1]);
  const newUrlUser = splitUrl[1];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {pathname === "/user/Withdrawhistory" ||
      newUrlUser === "user" ||
      pathname === "/user/dashboard" ||
      pathname === "/user/myaccount" ||
      pathname === "/user/Myteam" ||
      pathname === "/user/Addteam" ||
      pathname === "/user/Teamlis" ||
      pathname === "/user/Teambonus" ||
      pathname === "/user/Teambonuslevel" ||
      pathname === "/user/Productcommission" ||
      pathname === "/user/Cashbackoffer" ||
      pathname === "/user/AddAddress" ||
      pathname === "/user/Add1" ||
      pathname === "/user/Orders" ||
      pathname === "/user/Refund" ||
      pathname === "/user/Returnreplace" ||
      pathname === "/user/Productchats" ||
      pathname === "/user/Productreview" ||
      pathname === "/user/Ordertrack" ||
      pathname === "/user/Points" ||
      pathname === "/user/Rewards" ||
      pathname === "/user/Offers" ||
      pathname === "/user/Creditdebit" ||
      pathname === "/user/Shoppingamount" ||
      pathname === "/user/Sponsorcommission" ||
      pathname === "/user/Cashbackcommission" ||
      pathname === "/user/Membership" ||
      pathname === "/user/Transferwallet" ||
      pathname === "/user/Fundtransfer" ||
      pathname === "/user/Fundsrecieved" ||
      pathname === "/user/Fundstransferhis" ||
      pathname === "/user/Mywallhistory" ||
      pathname === "/user/Withdrawreq" ||
      pathname === "/user/Ticketlist" ||
      pathname === "/user/Addticket" ||
      pathname === "/user/Playgames" ||
      pathname === "/user/Register" ||
      pathname === "/user/Signin" ||
      pathname === "/user/Forgotpass" ||
      pathname === "/user/Resetpass" ||
      pathname === "/user/Organisation" ||
      pathname === "/user/Chats" ||
      pathname === "/user/Teambonus1" ||
      pathname === "/user/Tree" ||
      pathname === "/user/Viewtable" ||
      pathname === "/user/Shoppingamount" ||
      pathname === "/user/Invoice" ||
      pathname === "/user/SponsorCommissionEcom" ||
      pathname === "/user/Payout" ||
      pathname.indexOf("/User/Ordersdetails") > -1 ||
      pathname === "/user/Personaldetails" ? (
        <Header2 />
      ) : pathname === "/" ||
        pathname === "/product-review" ||
        pathname === "/order" ||
        pathname === "/all-review" ||
        pathname === "/after-signup" ||
        pathname === "/cart" ||
        pathname === "/checkout" ||
        pathname === "/filter" ||
        pathname === "/pay" ||
        pathname === "/successfull" ||
        pathname.indexOf("/product-list") > -1 ||
        pathname.indexOf("/product-detail") > -1 ||
        pathname.indexOf("/gamingproduct-detail") > -1 ||
        pathname === "/category" ||
        pathname === "/signup" ||
        pathname === "/signin" ||
        pathname === "/forgetpassword" ||
        pathname === "/terms-conditions" ||
        pathname === "/sponser_sign_up" ||
        pathname === "/privacy-policy" ? (
        <Header1 />
      ) : pathname === "/sell-on-salar" ||
        pathname === "/sell-on-global" ||
        pathname === "/fees-pricing" ||
        pathname === "/account-management" ||
        pathname === "/list-ur-product" ||
        pathname === "/Requirementstosell" ||
        pathname === "/Promoteprod" ||
        pathname === "/Shipping" ||
        pathname === "/Helpsupport" ||
        pathname === "/Whysellonseller" ||
        pathname === "/Sellersuccess" ||
        pathname === "/Listyourpro" ||
        pathname === "/Sellglobal" ||
        pathname === "/Typesoffee" ||
        pathname === "/Paymentcycle" ||
        pathname === "/Faq" ||
        pathname === "/Forgotpassword" ||
        pathname === "/Resetpassword" ||
        pathname === "/Signupseller" ||
        pathname === "/Typesofseller" ||
        pathname === "/sponser_sign_up" ||
        pathname === "/Signinseller" ? (
        <Header3 />
      ) : (
        <Header />
      )}
      {children}
      {pathname === "/user/Withdrawhistory" ||
      pathname === "/user/dashboard" ||
      pathname === "/user/myaccount" ||
      pathname === "/user/Myteam" ||
      pathname === "/user/Addteam" ||
      pathname === "/user/Teamlis" ||
      pathname === "/user/Teambonus" ||
      pathname === "/user/Teambonuslevel" ||
      pathname === "/user/Productcommission" ||
      pathname === "/user/Cashbackoffer" ||
      pathname === "/user/AddAddress" ||
      pathname === "/user/Add1" ||
      pathname === "/user/Orders" ||
      pathname === "/user/Refund" ||
      pathname === "/user/Returnreplace" ||
      pathname === "/user/Productchats" ||
      pathname === "/user/Productreview" ||
      pathname === "/user/Ordertrack" ||
      pathname === "/user/Points" ||
      pathname === "/user/Rewards" ||
      pathname === "/user/Offers" ||
      pathname === "/user/Creditdebit" ||
      pathname === "/user/Shoppingamount" ||
      pathname === "/user/Sponsorcommission" ||
      pathname === "/user/Cashbackcommission" ||
      pathname === "/user/Membership" ||
      pathname === "/user/Transferwallet" ||
      pathname === "/user/Fundtransfer" ||
      pathname === "/user/Fundsrecieved" ||
      pathname === "/user/Fundstransferhis" ||
      pathname === "/user/Mywallhistory" ||
      pathname === "/user/Ticketlist" ||
      pathname === "/user/Addticket" ||
      pathname === "/user/Playgames" ||
      pathname === "/user/Register" ||
      pathname === "/user/Signin" ||
      pathname === "/user/Forgotpass" ||
      pathname === "/user/Resetpass" ||
      pathname === "/user/Organisation" ||
      pathname === "/user/Withdrawreq" ||
      pathname === "/user/Chats" ||
      pathname === "/user/Teambonus1" ||
      pathname === "/user/Tree" ||
      pathname === "/user/Viewtable" ||
      pathname === "/user/Shoppingamount" ||
      pathname === "/user/Invoice" ||
      pathname === "/user/SponsorCommissionEcom" ||
      pathname === "/user/Payout" ||
      pathname === "/user/Personaldetails" ||
      newUrlUser === "user" ||
      pathname.indexOf("/user/Ordersdetails") > -1 ? (
        <Sidebar />
      ) : pathname === "/" ||
        pathname === "/product-review" ||
        pathname === "/order" ||
        pathname === "/all-review" ||
        pathname === "/after-signup" ||
        pathname === "/cart" ||
        pathname === "/checkout" ||
        pathname === "/filter" ||
        pathname === "/pay" ||
        pathname.indexOf("/product-list") > -1 ||
        pathname.indexOf("/product-detail") > -1 ||
        pathname === "/category" ||
        pathname === "/signup" ||
        pathname === "/signin" ||
        pathname === "/forgetpassword" ||
        pathname === "/terms-conditions" ||
        pathname === "/privacy-policy" ? (
        <Footer1 />
      ) : pathname === "/sell-on-salar" ||
        pathname === "/sell-on-global" ||
        pathname === "/fees-pricing" ||
        pathname === "/account-management" ||
        pathname === "/sponser_sign_up" ||
        pathname === "/list-ur-product" ? (
        <Footer3 />
      ) : (
        <Footer />
      )}
      {/* {isWeb ?
                <Header1 />
                :
                <Header />
            }
            {children}
            {isWeb ?
                <Footer1 />
                :
                <Footer />} */}
    </>
  );
};

export default Layout;
