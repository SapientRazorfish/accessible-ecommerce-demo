import * as orderSummary from '../../components/order-summary/order-summary';
import { getContactInfo, getShippingInfo, getPaymentInfo } from '../checkout/checkout';
import * as Modal from '../../components/modal/modal';

let contactSection;
let shippingSection;
let paymentSection;

const displayContactInfo = () => {
  const contactInfo = getContactInfo();
  if (contactInfo !== null) {
    contactSection.querySelector('#email-address').innerText = contactInfo['email'];
  }
};

const displayShippingInfo = () => {
  const shippingInfo = getShippingInfo();
  if (shippingInfo !== null) {
    Object.keys(shippingInfo).forEach(key => {
      if (!key.includes('method')) {
        shippingSection.querySelector(`#${key}`).innerText = shippingInfo[key];
      }
    });
    const shippingMethod = shippingInfo['shipping-method'];
    shippingSection.querySelector(`p#${shippingMethod}`).classList.remove('hidden');
  }
};

const displayPaymentInfo = () => {
  const paymentInfo = getPaymentInfo();
  if (paymentInfo !== null) {
    Object.keys(paymentInfo).forEach(key => {
      if (!key.includes('billingAddressSame')) {
        paymentSection.querySelector(`#${key}`).innerText = paymentInfo[key];
      }
    });
    paymentSection.querySelector('#cc-holder-name').innerText = `${paymentInfo['billing-first-name']} ${paymentInfo['billing-last-name']}`;
  }
};

const modifyTotalsText = () => {
  const texts = Array.from(document.querySelectorAll('.order-summary__totals dt'));
  texts.forEach(text => {
    text.innerText += ':';
  });
};

window.onload = () => {
  if (localStorage.getItem('shippingInfo') !== null) {
    contactSection = document.querySelector('.review-order__contact-info');
    shippingSection = document.querySelector('.review-order__shipping-info');
    paymentSection = document.querySelector('.review-order__payment-info');

    orderSummary.init();
    displayContactInfo();
    displayShippingInfo();
    displayPaymentInfo();
    modifyTotalsText();

    Modal.init('construction-modal');
  } else {
    // For now, redirect to homepage if there is no checkout data
    window.location.href = '/';
  }
};