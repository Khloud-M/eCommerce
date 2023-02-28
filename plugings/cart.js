export default function({store} , inject) {
  store.commit('cart/loadCart');
  inject("formatMoney", (money) => {
    return new Intl.NumberFormat("en-US", {
      currency: "USD",
      style: "currency",
    }).format(money);
  });
}
