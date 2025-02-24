import { faker } from "@faker-js/faker";

function generateMobileNumber(): string {
  const phoneNumberPrefixes = [
    "050",
    "051",
    "053",
    "054",
    "055",
    "056",
    "057",
    "058",
    "059",
  ];
  return (
    faker.helpers.arrayElement(phoneNumberPrefixes) + faker.string.numeric(7)
  );
}

function generateCustomerIdentity() {
  const firstname = faker.person.firstName();
  const lastname = faker.person.lastName();
  const customerName = `${firstname} ${lastname}`;
  const email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@yopmail.com`;

  return { customerName, firstname, lastname, email };
}

export function generateIndividualCustomerData() {
  return {
    individualCustomerData: {
      ...generateCustomerIdentity(),
      address: faker.location.streetAddress({ useFullAddress: true }),
      mobileNumber: generateMobileNumber(),
    },
  };
}

export function generateCorporateCustomerData() {
  return {
    corporateCustomerData: {
      ...generateCustomerIdentity(),
      address: faker.location.streetAddress({ useFullAddress: true }),
      mobileNumber: generateMobileNumber(),
      crNumber: "1010" + faker.string.numeric(7) + faker.string.numeric(1),
      companyName: faker.company.name(),
      vatNumber: "300" + faker.string.numeric(8) + faker.string.numeric(4),
    },
  };
}

export function generateCouponData() {
  return {
    couponData: {
      couponCode: `TEST-${faker.string.alphanumeric(6).toUpperCase()}`,
      discountAmount: faker.number.int({ min: 1, max: 100 }),
      totalUsageForAll: faker.number.int({ min: 1, max: 5 }),
      totalUsagePerCustomer: faker.number.int({ min: 1, max: 5 }),
      minimumCartAmount: faker.number.int({ min: 1, max: 1 }),
    },
  };
}
