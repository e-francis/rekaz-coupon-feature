import LoginPage from "./auth/login.page";
import CouponPage from "./coupon/coupon.page";

export default class App {
  loginPage: LoginPage;
  couponPage: CouponPage;

  constructor() {
    this.loginPage = new LoginPage();
    this.couponPage = new CouponPage();
  }
}
