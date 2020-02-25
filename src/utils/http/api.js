const SERVICE = require("../../env.js");
console.log(SERVICE);
const api = {
  // 删除购物车商品
  delShopCartGoods: `${SERVICE.storeUrl}/api/user/del_shop_cart`
};

export default api;
