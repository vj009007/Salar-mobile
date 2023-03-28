import api from "../../../api/axios";

const getUiCategories = () => {
    return api.get("ua/categories");
  };

  export {getUiCategories}