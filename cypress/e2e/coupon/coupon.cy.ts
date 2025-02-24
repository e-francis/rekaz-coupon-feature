import App from "../../page-objects/app";
import {
  generateIndividualCustomerData,
  generateCorporateCustomerData,
  generateCouponData,
} from "../utils/helpers/test.data";

const app = new App();

describe("Coupon Tests Suite", () => {
  beforeEach(() => {
    const email = Cypress.env("EMAIL");
    const password = Cypress.env("VALID_PASSWORD");
    app.loginPage.loginWithValidCredentials(email, password);
    app.loginPage.verifySuccessfulLogin();
  });

  it("should create a fixed discount type coupon", () => {
    const { couponData } = generateCouponData();

    app.couponPage.navigateToCouponManagementPage();
    app.couponPage.createFixedDiscountTypeCoupon(
      couponData.couponCode,
      couponData.discountAmount.toString(),
      couponData.totalUsageForAll.toString(),
      couponData.totalUsagePerCustomer.toString()
    );
    app.couponPage.verifySuccessfulCouponCreation();
  });

  it("should activate a new created coupon", () => {
    app.couponPage.activateCoupon();
  });

  it("should apply an active coupon", () => {
    app.couponPage.applyActiveCoupon();
  });

  it("should deactivate a new created coupon", () => {
    app.couponPage.deActivateCoupon();
  });

  it("should apply an inactive coupon", () => {
    app.couponPage.applyInActiveCoupon();
  });

  it("should delete a coupon", () => {
    app.couponPage.deleteCoupon();
  });

  it("should create a percentage discount type coupon", () => {
    const { couponData } = generateCouponData();

    app.couponPage.navigateToCouponManagementPage();
    app.couponPage.createPercentageDiscountTypeCoupon(
      couponData.couponCode,
      couponData.discountAmount.toString(),
      couponData.totalUsageForAll.toString(),
      couponData.totalUsagePerCustomer.toString(),
      couponData.minimumCartAmount.toString()
    );
  });

  it("should create a fixed discount coupon for an individual customer", () => {
    const { couponData } = generateCouponData();
    const { individualCustomerData } = generateIndividualCustomerData();

    app.couponPage.navigateToCouponManagementPage();
    app.couponPage.createIndividualCustomerFixedDiscountTypeCoupon(
      couponData.couponCode,
      couponData.discountAmount.toString(),
      couponData.totalUsageForAll.toString(),
      couponData.totalUsagePerCustomer.toString(),
      individualCustomerData.customerName,
      individualCustomerData.mobileNumber,
      individualCustomerData.email,
      individualCustomerData.address
    );
  });

  it("should create a fixed discount coupon for a corporate customer", () => {
    const { couponData } = generateCouponData();
    const { individualCustomerData } = generateIndividualCustomerData();
    const { corporateCustomerData } = generateCorporateCustomerData();

    app.couponPage.navigateToCouponManagementPage();
    app.couponPage.createCorporateCustomerFixedDiscountTypeCoupon(
      couponData.couponCode,
      couponData.discountAmount.toString(),
      couponData.totalUsageForAll.toString(),
      couponData.totalUsagePerCustomer.toString(),
      corporateCustomerData.companyName,
      corporateCustomerData.crNumber,
      corporateCustomerData.vatNumber,
      individualCustomerData.customerName,
      individualCustomerData.mobileNumber,
      individualCustomerData.email,
      individualCustomerData.address
    );
  });

  it("should create a percentage discount coupon for an individual customer", () => {
    const { couponData } = generateCouponData();
    const { individualCustomerData } = generateIndividualCustomerData();

    app.couponPage.navigateToCouponManagementPage();
    app.couponPage.createIndividualCustomerPercentageDiscountTypeCoupon(
      couponData.couponCode,
      couponData.discountAmount.toString(),
      couponData.totalUsageForAll.toString(),
      couponData.totalUsagePerCustomer.toString(),
      couponData.minimumCartAmount.toString(),
      individualCustomerData.customerName,
      individualCustomerData.mobileNumber,
      individualCustomerData.email,
      individualCustomerData.address
    );
  });

  it("should create a percentage discount coupon for a corporate customer", () => {
    const { couponData } = generateCouponData();
    const { individualCustomerData } = generateIndividualCustomerData();
    const { corporateCustomerData } = generateCorporateCustomerData();

    app.couponPage.navigateToCouponManagementPage();
    app.couponPage.createCorporateCustomerPercentageDiscountTypeCoupon(
      couponData.couponCode,
      couponData.discountAmount.toString(),
      couponData.totalUsageForAll.toString(),
      couponData.totalUsagePerCustomer.toString(),
      couponData.minimumCartAmount.toString(),
      corporateCustomerData.companyName,
      corporateCustomerData.crNumber,
      corporateCustomerData.vatNumber,
      individualCustomerData.customerName,
      individualCustomerData.mobileNumber,
      individualCustomerData.email,
      individualCustomerData.address
    );
  });
});
