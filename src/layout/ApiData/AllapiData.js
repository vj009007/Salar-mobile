/** @format */

import axios from "axios";
const BASE_URL = "https://api.salar.in";
//const BASE_URL = "http://localhost:4000";

export const fileUploads = async formData => {
  try {
    const response = await axios.post(`${BASE_URL}/fileUpload`, formData);
    const responseJson = await response.data;
    // console.log(responseJson);
    return responseJson;
  } catch (ex) {
    console.log(ex);
  }
};

export const getAllCategorys = async () => {
  const response = await axios(`${BASE_URL}/ua/categories`);
  const responseJson = await response.data;
  //console.log(responseJson);
  return responseJson;
};

export const getAllSubCategorys = async () => {
  const response = await axios(`${BASE_URL}/ua/sub-categories`);
  const responseJson = await response.data;
  return responseJson;
};

export const getAllgames = async () => {
  const response = await axios(`${BASE_URL}/ua/game-products`);
  const responseJson = await response.data;
  return responseJson;
};

export const getAllproducts = async () => {
  const response = await axios(`${BASE_URL}/ua/ecomm-products`);
  const responseJson = await response.data;
  return responseJson;
};

export const getAlldeals = async () => {
  const response = await axios(`${BASE_URL}/ua/getDealDetailsall`);
  const responseJson = await response.data;
  return responseJson;
};

export const getAllcountry = async () => {
  const response = await axios(`${BASE_URL}/ua/countries`);
  const responseJson = await response.data;
  return responseJson;
};

// post methode

export const postSign = async data => {
  try {
    const response = await axios.post(`${BASE_URL}/signIn`, data);
    //console.log(response.data)
    const responseJson = await response.data;
    //    console.log(response);

    return responseJson;
  } catch (e) {
    //alert(e)
  }
  // const response = await axios(`${BASE_URL}/signIn`, settings);
  // const responseJson = await response.data;
  // console.log(response);
  // return responseJson;
};

const heraderAll = {
  headers: {
    Accept: "application/json",
    authorization: `Bearer ${localStorage.getItem("authToken")}`,
    "Content-Type": "application/json",
  },
};
export const getcarts = async () => {
  // console.log("hello", heraderAll);
  const response = await axios.get(`${BASE_URL}/cart`, heraderAll);
  const responseJson = await response.data;
  // console.log("cartD", responseJson);
  return responseJson;
};

export const postcart = async cartdata => {
  try {
    const settings = {
      method: "POST",
      body: JSON.stringify(cartdata),
      headers: {
        Accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      `${BASE_URL}/add-to-cart`,
      cartdata,
      settings,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    // console.log("cart data", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const placeOrder = async order => {
  try {
    const settings = {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        Accept: "application/json",
        authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      `${BASE_URL}/place-order`,
      order,
      settings,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    // console.log("cart data", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getOrder = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/orders`, heraderAll);
    // console.log(response.data)
    const responseJson = await response.data;
    // console.log("order data", response);
    return responseJson;
  } catch (e) {
    // alert(e)
  }
};

export const deleteOrder = async deletes => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/cartdelete/${deletes}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    // console.log("order delete", response);
    return responseJson;
  } catch (e) {
    // alert(e)
  }
};

export const AddShippingAddress = async address => {
  try {
    const response = await axios.post(
      `${BASE_URL}/addShippingAddress`,
      address,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    //console.log("address data", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getShippingAddress = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/userManageAddress`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    //console.log("address get", response);
    return responseJson;
  } catch (e) {
    // alert(e)
  }
};

export const getShippingDefoultAddress = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getShippingAddress`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    //console.log("address get", response);
    return responseJson;
  } catch (e) {
    // alert(e)
  }
};

export const signUps = async employee => {
  console.log(employee);
  // return axios.post('/signIn', employee);
  // const settings = {
  //     method: 'POST',
  // 	body: JSON.stringify(employee),
  //     headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //     }
  // };

  try {
    const response = await axios.post(`${BASE_URL}/signUp`, employee);
    //console.log(response.data)
    const responseJson = await response.data;
    //console.log(response);
    return responseJson;
  } catch (e) {
    // alert(e)
  }

  // const response = await axios(`${BASE_URL}/signUp`, settings);
  // const responseJson = await response.data;
  // //console.log(responseJson);
  // return responseJson;
};

export const forgots = async employee => {
  //console.log(employee);
  // return axios.post('/signIn', employee);
  const settings = {
    method: "POST",
    body: JSON.stringify(employee),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const response = await axios(`${BASE_URL}/forgotPassword`, settings);
  const responseJson = await response.data;
  //console.log(responseJson);
  return responseJson;
};

// export const productCat = async (prdId) => {
// 	const response = await axios.get(`${BASE_URL}/ua/ecomm-products`, { params: prdId });
// 	const responseJson = await response.data;
// 	return responseJson;
// };
export const productCatID = async prdId => {
  console.log(prdId.category);
  const response = await axios.get(
    `${BASE_URL}/ua/ecomm-products/${prdId.category}`,
  );
  const responseJson = await response.data;
  // console.log("juy", responseJson.data[0].category);
  return responseJson;
};

// /ua/ecomm-products/:id

export const getFeatureproduct = async () => {
  const response = await axios.get(`${BASE_URL}/ua/ecomm-products`);
  const responseJson = await response.data;
  // console.log(responseJson);
  return responseJson;
};

export const productDetailID = async prdId => {
  const response = await axios.get(`${BASE_URL}/ua/product-detail/${prdId}`);
  const responseJson = await response.data;
  // console.log("juy", responseJson.data);
  return responseJson;
};

// start user Apis
export const getProfileDetail = async () => {
  const heraderAll = {
    headers: {
      Accept: "application/json",
      authorization: `Bearer ${localStorage.getItem("authToken")}`,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.get(`${BASE_URL}/getUserProfile`, heraderAll);
  // console.log(response.data)
  const responseJson = await response.data;
  // console.log("profile data", response);
  return responseJson;
};

export const updateProfileDetail = async dataUpdate => {
  try {
    const response = await axios.post(
      `${BASE_URL}/editUserProfile`,
      dataUpdate,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    // console.log("profile data post", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const changePasswords = async datachange => {
  try {
    const response = await axios.post(
      `${BASE_URL}/changePassword`,
      datachange,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getOrderDetails = async () => {
  try {
    // console.log(heraderAll);

    const response = await axios.get(`${BASE_URL}/order-summary`, heraderAll);
    // console.log(response.data)
    const responseJson = await response.data;
    // console.log("profile data", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getOrderDetailsAll = async () => {
  try {
    // console.log(heraderAll);

    const response = await axios.get(`${BASE_URL}/orders`, heraderAll);
    // console.log(response.data)
    const responseJson = await response.data;
    // console.log("profile data", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const defoultAddr = async data => {
  try {
    const response = await axios.post(
      `${BASE_URL}/setDefaultAddress`,
      data,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getLogout = async () => {
  try {
    // console.log(heraderAll);

    const response = await axios.get(`${BASE_URL}/logOut`, heraderAll);
    const responseJson = await response.data;
    console.log("profile data", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getSponserIdDetails = async id => {
  const response = await axios.get(`${BASE_URL}/sponserId/${id}`, heraderAll);
  const responseJson = await response.data;
  return responseJson;
};

// export const defoultAddr = async (data) =>{
// 	try {

// 		const response = await axios.post(`${BASE_URL}/setDefaultAddress`,data,heraderAll)
// 		// console.log(response.data)
// 		const responseJson = await response.data;
// 		console.log("profile data chae", response);
// 		return responseJson;
// 	} catch (e) {
// 		//alert(e)
// 	}
// }

export const getTicketss = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/gettickets/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const addAndUpdateKycDetailss = async data => {
  try {
    const response = await axios.post(
      `${BASE_URL}/addAndUpdateKycDetails`,
      data,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const forgotPasswords = async data => {
  try {
    const response = await axios.post(`${BASE_URL}/forgotPassword`, data);
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getUserDashboardDatabyIds = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getUserDashboardData/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getSponserCommissions = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/myearns/getsponsercommission/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getAurCommissions = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/myearns/getaurcommission/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getProCommissions = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/myearns/getprocommission/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getMemberShipCommissions = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/myearns/getmembershipcommission/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getTeamIncomeCommissions = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/myearns/getincome/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getMyWalletDatas = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getallmywalletdata/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getmlmbyIds = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getmlmuser/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getPointss = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mystuff/getpoints/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getRewardss = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mystuff/getrewards/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getOfferss = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mystuff/getoffers/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};
export const getCreditdebits = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mystuff/getccdc/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getShoppingamounts = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mystuff/getshoppingamount/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getFundsRecevieds = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mywallet/getfundsrecevied/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};
export const getFundsTransfers = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mywallet/getfundstransfer/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getWalletHistorys = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/mywallet/getwallethistory/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getOrderbyIds = async ID => {
  try {
    const response = await axios.get(`${BASE_URL}/orders/${ID}`, heraderAll);
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getRefundbyIds = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getrefundorders/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getReturnbyIds = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getreturnorders/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};
export const getProductchats = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getProductchatorders/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getProductreviews = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getProductrevieworders/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getsponserbyIds = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getsponsorcomm/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const getProdCombyIds = async ID => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getproductcomm/${ID}`,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

export const addAndUpdateBankDetailss = async data => {
  try {
    const response = await axios.post(
      `${BASE_URL}/addAndUpdateBankDetails`,
      data,
      heraderAll,
    );
    // console.log(response.data)
    const responseJson = await response.data;
    console.log("profile data chae", response);
    return responseJson;
  } catch (e) {
    //alert(e)
  }
};

// end here user aapis
