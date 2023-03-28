import api from "../../../api/axios";

const getwebSiteProducts = () => {
    return api.get("/common/getProducts");
  };

  export {getwebSiteProducts}