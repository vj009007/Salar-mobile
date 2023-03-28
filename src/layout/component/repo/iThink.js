import api from "../../../api/axios";

const pinCodeCheck = (data) => {
   
    return api.post(`/checkpincode`,{pincode:data});
  };

  export {pinCodeCheck}