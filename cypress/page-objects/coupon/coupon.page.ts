export default class CouponPage {
  private readonly couponElements = {
    coupounNavButton: () => cy.get('[class="menu-title"]'),
    couponCodeInputField: () => cy.get('[name="CouponModel.Code"]'),
    productDropDownMenuBox: () => cy.get('[class="select2-search__field"]'),
    addCustomerButton: () => cy.get('[type="button"]'),
    customerNameInputField: () => cy.get('[id="CustomerModel_Name"]'),
    customerMobileNumberInputField: () =>
      cy.get('[id="CustomerModel_MobileNumber"]'),
    customerEmailInputField: () => cy.get('[id="CustomerModel_Email"]'),
    customerAddressInputField: () => cy.get('[id="CustomerModel_Address"]'),
    customerTypeDropDownMenu: () => cy.get('[id="CustomerModel_CustomerType"]'),
    selectCorporateCustomerType: () => cy.get('[value="2"]'),
    companyNameInputField: () => cy.get('[id="CustomerModel_CompanyName"]'),
    crNumberInputField: () => cy.get('[id="CustomerModel_CrNumber"]'),
    vatNumberInputField: () => cy.get('[id="CustomerModel_VatNumber"]'),
    submitButton: () => cy.get('[type="submit"]'),
    selectFixedDiscountType: () => cy.get('[value="2"]'),
    selectPercentageDiscountType: () => cy.get('[value="3"]'),
    setFixedDiscountAmountInputField: () => cy.get(".discount-value-fixed"),
    setPercentageAmountInputField: () => cy.get('[data-input-type="number"]'),
    totalUsageForAllInputField: () =>
      cy.get('[id="CouponModel_TotalUsageForAll"]'),
    totalUsagePerCustomerInputField: () =>
      cy.get('[id="CouponModel_TotalUsagePerCustomer"]'),
    minimumCartAmountInputField: () =>
      cy.get('[id="CouponModel_MinimumCartAmount"]'),
    datePicker: () => cy.get("input.flatpickr-input"),
    calendar: () => cy.get(".flatpickr-calendar"),
    goToNextMonth: () => cy.get(".flatpickr-next-month"),
    selectDay: () => cy.get(".flatpickr-day"),
    toggle: () => cy.get('[type="checkbox"]'),
    createCouponSubmitButton: () => cy.get('[id="btn-submit"]'),
    dropDownButton: () => cy.get('button[data-state="closed"]'),
    enterCouponCodeInputField: () => cy.get('[data-sentry-element="Input"]'),
  };

  navigateToCouponManagementPage() {
    this.couponElements.coupounNavButton().eq(6).should("be.visible").click();
    cy.url().should("include", "/coupons");
  }

  createFixedDiscountTypeCoupon(
    couponCode: string,
    discountAmount: string,
    totalUsageForAll: string,
    totalUsagePerCustomer: string
  ) {
    cy.contains("Create").should("be.visible").click();
    this.couponElements
      .couponCodeInputField()
      .should("be.visible")
      .type(couponCode);
    this.couponElements.productDropDownMenuBox().eq(0).click({ force: true });
    cy.contains(".select2-results__option", "Spa").should("be.visible").click();
    cy.contains("Fixed").should("be.visible").click();

    this.couponElements
      .setFixedDiscountAmountInputField()
      .should("be.visible")
      .invoke("val", discountAmount)
      .trigger("input");

    this.couponElements
      .totalUsageForAllInputField()
      .should("be.visible")
      .type(totalUsageForAll);
    this.couponElements
      .totalUsagePerCustomerInputField()
      .should("be.visible")
      .type(totalUsagePerCustomer);
    this.couponElements.datePicker().first().click({ force: true });
    this.couponElements.calendar().should("be.visible");
    this.couponElements.selectDay().contains("10").click({ force: true });
    this.couponElements.datePicker().last().click({ force: true });
    this.couponElements.calendar().should("be.visible");
    this.couponElements.selectDay().contains("17").click({ force: true });
    this.couponElements.createCouponSubmitButton().should("be.visible").click();
    cy.wait(5000);
    cy.contains("Coupons").should("be.visible");
  }

  createPercentageDiscountTypeCoupon(
    couponCode: string,
    discountPercent: string,
    totalUsageForAll: string,
    totalUsagePerCustomer: string,
    minimumCartAmount: string
  ) {
    cy.contains("Create").should("be.visible").click();
    this.couponElements
      .couponCodeInputField()
      .should("be.visible")
      .type(couponCode);
    this.couponElements.productDropDownMenuBox().eq(0).click({ force: true });
    cy.contains(".select2-results__option", "Spa").should("be.visible").click();
    cy.contains("Percentage").should("be.visible").click();

    this.couponElements
      .setPercentageAmountInputField()
      .first()
      .should("be.visible")
      .type(discountPercent);

    this.couponElements
      .totalUsageForAllInputField()
      .should("be.visible")
      .type(totalUsageForAll);
    this.couponElements
      .totalUsagePerCustomerInputField()
      .should("be.visible")
      .type(totalUsagePerCustomer);
    this.couponElements
      .minimumCartAmountInputField()
      .should("be.visible")
      .type(minimumCartAmount);
    this.couponElements.datePicker().first().click({ force: true });
    this.couponElements.calendar().should("be.visible");
    this.couponElements.selectDay().contains("10").click({ force: true });
    this.couponElements.datePicker().last().click({ force: true });
    this.couponElements.calendar().should("be.visible");
    this.couponElements.selectDay().contains("17").click({ force: true });
    this.couponElements.createCouponSubmitButton().should("be.visible").click();
    cy.wait(5000);
    cy.contains("Coupons").should("be.visible");
  }

  fillIndividualCustomerInformation(
    customerName: string,
    customerMobileNumber: string,
    email: string,
    customerAddress: string
  ) {
    cy.contains("Create").should("be.visible").click();
    cy.contains("Add").should("be.visible").click();
    this.couponElements
      .customerNameInputField()
      .should("be.visible")
      .type(customerName);
    this.couponElements
      .customerMobileNumberInputField()
      .should("be.visible")
      .type(customerMobileNumber);
    this.couponElements
      .customerEmailInputField()
      .should("be.visible")
      .type(email);
    this.couponElements
      .customerAddressInputField()
      .should("be.visible")
      .type(customerAddress);
  }

  fillCorporateCustomerInformation(
    companyName: string,
    crNumber: string,
    vatNumber: string
  ) {
    this.couponElements
      .companyNameInputField()
      .should("be.visible")
      .type(companyName);
    this.couponElements
      .crNumberInputField()
      .should("be.visible")
      .type(crNumber);
    this.couponElements
      .vatNumberInputField()
      .should("be.visible")
      .type(vatNumber);
  }

  createIndividualCustomerFixedDiscountTypeCoupon(
    couponCode: string,
    discountAmount: string,
    totalUsageForAll: string,
    totalUsagePerCustomer: string,
    customerName: string,
    customerMobileNumber: string,
    email: string,
    customerAddress: string
  ) {
    this.fillIndividualCustomerInformation(
      customerName,
      customerMobileNumber,
      email,
      customerAddress
    );
    cy.contains("Submit").should("be.visible").click();
    cy.wait(3000);
    this.createFixedDiscountTypeCoupon(
      couponCode,
      discountAmount,
      totalUsageForAll,
      totalUsagePerCustomer
    );
  }
  createCorporateCustomerFixedDiscountTypeCoupon(
    couponCode: string,
    discountAmount: string,
    totalUsageForAll: string,
    totalUsagePerCustomer: string,
    companyName: string,
    crNumber: string,
    vatNumber: string,
    customerName: string,
    customerMobileNumber: string,
    email: string,
    customerAddress: string
  ) {
    this.fillIndividualCustomerInformation(
      customerName,
      customerMobileNumber,
      email,
      customerAddress
    );
    cy.get("select").eq(0).select("Corporates");
    this.fillCorporateCustomerInformation(companyName, crNumber, vatNumber);
    cy.contains("Submit").should("be.visible").click();
    cy.wait(3000);
    this.createFixedDiscountTypeCoupon(
      couponCode,
      discountAmount,
      totalUsageForAll,
      totalUsagePerCustomer
    );
  }

  createIndividualCustomerPercentageDiscountTypeCoupon(
    couponCode: string,
    discountPercent: string,
    totalUsageForAll: string,
    totalUsagePerCustomer: string,
    minimumCartAmount: string,
    customerName: string,
    customerMobileNumber: string,
    email: string,
    customerAddress: string
  ) {
    this.fillIndividualCustomerInformation(
      customerName,
      customerMobileNumber,
      email,
      customerAddress
    );
    cy.contains("Submit").should("be.visible").click();
    cy.wait(3000);
    this.createPercentageDiscountTypeCoupon(
      couponCode,
      discountPercent,
      totalUsageForAll,
      totalUsagePerCustomer,
      minimumCartAmount
    );
  }

  createCorporateCustomerFixedeDiscountTypeCoupon(
    couponCode: string,
    discountPercent: string,
    totalUsageForAll: string,
    totalUsagePerCustomer: string,
    companyName: string,
    crNumber: string,
    vatNumber: string
  ) {
    this.fillCorporateCustomerInformation(companyName, crNumber, vatNumber);
    this.createFixedDiscountTypeCoupon(
      couponCode,
      discountPercent,
      totalUsageForAll,
      totalUsagePerCustomer
    );
  }

  createCorporateCustomerPercentageDiscountTypeCoupon(
    couponCode: string,
    discountPercent: string,
    minimumCartAmount: string,
    totalUsageForAll: string,
    totalUsagePerCustomer: string,
    companyName: string,
    crNumber: string,
    vatNumber: string,
    customerName: string,
    customerMobileNumber: string,
    email: string,
    customerAddress: string
  ) {
    this.fillIndividualCustomerInformation(
      customerName,
      customerMobileNumber,
      email,
      customerAddress
    );
    cy.get("select").eq(0).select("Corporates");
    this.fillCorporateCustomerInformation(companyName, crNumber, vatNumber);
    cy.contains("Submit").should("be.visible").click();
    cy.wait(3000);
    this.createPercentageDiscountTypeCoupon(
      couponCode,
      discountPercent,
      totalUsageForAll,
      totalUsagePerCustomer,
      minimumCartAmount
    );
  }

  verifySuccessfulCouponCreation() {
    cy.contains("Coupons").should("be.visible");
    cy.contains(/^TEST-[A-Z0-9]{6}$/).should("be.visible");
  }

  activateCoupon() {
    this.navigateToCouponManagementPage();
    cy.contains("Actions")
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.contains("Edit").should("be.visible").click();
    cy.wait(5000);
    this.couponElements.toggle().scrollIntoView().should("be.visible").click();
    cy.contains("Active").should("be.visible");
    cy.wait(5000);
    this.couponElements.createCouponSubmitButton().should("be.visible").click();
    cy.wait(5000);
    cy.contains("Coupons").should("be.visible");
  }

  deActivateCoupon() {
    this.navigateToCouponManagementPage();
    cy.contains("Actions")
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.contains("Edit").should("be.visible").click();
    cy.wait(5000);
    this.couponElements.toggle().should("be.visible").click();
    cy.contains("inactive").should("be.visible");
    cy.wait(5000);
    this.couponElements.createCouponSubmitButton().should("be.visible").click();
    cy.wait(5000);
    cy.contains("Coupons").should("be.visible");
  }

  deleteCoupon() {
    this.navigateToCouponManagementPage();
    cy.contains("Actions")
      .first()
      .scrollIntoView()
      .should("be.visible")
      .click();
    cy.contains("Delete").should("be.visible").click();
    cy.wait(300);
    cy.contains("Yes").should("be.visible").click({ force: true });
    cy.contains("Successfully Deleted").should("be.visible");
  }

  applyActiveCoupon() {
    this.navigateToCouponManagementPage();

    cy.get("td:visible")
      .invoke("text")
      .then((text) => {
        const regex = /TEST-[A-Z0-9]{6}/;
        const match = text.match(regex);

        if (match) {
          const couponCode = match[0];
          cy.wrap(couponCode).as("storedCoupon");

          cy.contains("Visit Website")
            .should("be.visible")
            .invoke("removeAttr", "target")
            .click();

          cy.origin(
            "https://rekaz.dev",
            { args: { couponCode } },
            ({ couponCode }) => {
              cy.contains("اشتر الآن").should("be.visible").click();
              cy.scrollTo("bottom");
              cy.contains("اشتر الآن").should("be.visible").click();
              cy.scrollTo("bottom");
              cy.contains("اشتر الآن").should("be.visible").click();
              cy.scrollTo("bottom");
              cy.get('[data-sentry-component="AddToCartButton"]')
                .scrollIntoView()
                .click();
              cy.contains("هل لديك كود خصم؟").should("be.visible").click();

              cy.get('[data-sentry-element="Input"]')
                .should("be.visible")
                .type(couponCode, { force: true });

              cy.contains("تطبيق").should("be.visible").click();
              cy.contains("تم تطبيق الكود").should("be.visible");
            }
          );
        } else {
          throw new Error("No valid coupon code found!");
        }
      });
  }

  applyInActiveCoupon() {
    this.navigateToCouponManagementPage();

    cy.get("td:visible")
      .invoke("text")
      .then((text) => {
        const regex = /TEST-[A-Z0-9]{6}/;
        const match = text.match(regex);

        if (match) {
          const couponCode = match[0];
          cy.wrap(couponCode).as("storedCoupon");

          cy.contains("Visit Website")
            .should("be.visible")
            .invoke("removeAttr", "target")
            .click();

          cy.origin(
            "https://rekaz.dev",
            { args: { couponCode } },
            ({ couponCode }) => {
              cy.visit("https://rekaz.dev/efrancis-tech/products");
              cy.contains("اشتر الآن").should("be.visible").click();
              cy.scrollTo("bottom");
              cy.contains("اشتر الآن").should("be.visible").click();
              cy.scrollTo("bottom");
              cy.contains("اشتر الآن").should("be.visible").click();
              cy.scrollTo("bottom");
              cy.get('[data-sentry-component="AddToCartButton"]')
                .scrollIntoView()
                .click();
              cy.contains("هل لديك كود خصم؟").should("be.visible").click();

              cy.get('[data-sentry-element="Input"]')
                .should("be.visible")
                .type(couponCode, { force: true });

              cy.contains("تطبيق").should("be.visible").click();
              cy.contains("الكوبون غير صالح").should("be.visible");
            }
          );
        } else {
          throw new Error("No valid coupon code found!");
        }
      });
  }
}
