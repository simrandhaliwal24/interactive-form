// defined variables
const jobRoleSection = document.querySelector('#title');
const designSelectBox = document.querySelector('#design');
const activities = document.querySelector('.activities');
const form = document.querySelector('form');

// focusing on first input field on page load
const firstInput = document.querySelector('input');
firstInput.focus();

// creating and adding input and removing input based on selection
///////////////////                  ///////////////////

const jobRoleSectionParent = jobRoleSection.parentNode;
const input = document.createElement('input');
jobRoleSection.addEventListener('change', (e) => {
  const value = e.target.value;
  if(value === 'other') {
    input.type = 'text';
    input.placeholder = 'Your Job Role';
    input.id = 'other-title';
    jobRoleSectionParent.appendChild(input);
  } else {
    const myElm = document.getElementById('other-title');
    if(myElm != null) {
      const lastChild = jobRoleSectionParent.lastChild;
      jobRoleSectionParent.removeChild(lastChild);
    }
  }
});


/////////////////// T- Shirt Section ///////////////////
///////////////////                  ///////////////////

designSelectBox.addEventListener('change', (e) => {
  let colorSelectbox = document.getElementById('color');
  const value = e.target.value;
  if(value == 'js puns') {
    let options = '<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>' +
                  '<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>' +
                  '<option value="gold">Gold (JS Puns shirt only)</option>';
    colorSelectbox.innerHTML = options;
  } else if(value == 'heart js') {
    let options = '<option value="tomato">Tomato (I &#9829; JS shirt only)</option>' +
                  '<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>' +
                  '<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>';
    colorSelectbox.innerHTML = options;
  } else {
    let options = '<option value="">< --- Please select a T-shirt theme --- ></option>';
    colorSelectbox.innerHTML = options;
  }
});


/////////////////// ”Register for Activities” section ///////////////////
///////////////////                  ///////////////////

const total = document.createElement('div');
total.id = 'total';
activities.appendChild(total);

let totalCost = 0;
updateCost = (cost) => {
  totalCost += cost;
  if( totalCost > 0 ) {
    document.getElementById('total').innerHTML = "Total: $" + totalCost;
  } else if(totalCost == 0) {
    document.getElementById('total').innerHTML = '';
  }
}

activities.addEventListener('change', (e) => {
  const target = e.target;
  if(target.name === 'all') {
    if(target.checked) {
      updateCost(200);
    } else {
      updateCost(-200);
    }
  } else if (target.name === 'js-frameworks') {
    const element = document.querySelector("input[name='express']")
    if(target.checked) {
      updateCost(100);
      element.parentNode.style.color = 'grey';
      element.disabled = true;
    } else {
      updateCost(-100);
      element.parentNode.style.color = '#000';
      element.disabled = false;
    }
  } else if (target.name === 'js-libs') {
    const element = document.querySelector("input[name='node']")
    if(target.checked) {
      element.parentNode.style.color = 'grey';
      element.disabled = true;
      updateCost(100);
    } else {
      updateCost(-100);
      element.parentNode.style.color = '#000';
      element.disabled = false;
    }
  } else if (target.name === 'express') {
    const element = document.querySelector("input[name='js-frameworks']")
    if(target.checked) {
      updateCost(100);
      element.parentNode.style.color = 'grey';
      element.disabled = true;
    } else {
      updateCost(-100);
      element.parentNode.style.color = '#000';
      element.disabled = false;
    }
  } else if (target.name === 'node') {
    const element = document.querySelector("input[name='js-libs']")
    if(target.checked) {
      updateCost(100);
      element.parentNode.style.color = 'grey';
      element.disabled = true;
    } else {
      updateCost(-100);
      element.parentNode.style.color = '#000';
      element.disabled = false;
    }
  } else if (target.name === 'build-tools') {
    if(target.checked) {
      updateCost(100);
    } else {
      updateCost(-100);
    }
  } else if (target.name === 'npm') {
    if(target.checked) {
      updateCost(100);
    } else {
      updateCost(-100);
    }
  }
});


/////////////////// Payment Section ///////////////////
///////////////////                  ///////////////////

displayNone = (element) => {
  element.style.display = 'none';
}
displayBlock = (element) => {
  element.style.display = '';
}
const creditCard = document.getElementById('credit-card');
displayNone(creditCard);
const paypal = document.getElementById('paypal');
displayNone(paypal);
const bitcoin = document.getElementById('bitcoin');
displayNone(bitcoin);
payment.addEventListener('change', (e) => {
  const target = e.target;
  if(target.value === 'credit card') {
    displayBlock(creditCard);
    displayNone(paypal);
    displayNone(bitcoin);
  } else if (target.value === 'paypal') {
    displayBlock(paypal);
    displayNone(creditCard);
    displayNone(bitcoin);
  } else if (target.value === 'bitcoin') {
    displayBlock(bitcoin);
    displayNone(creditCard);
    displayNone(paypal);
  } else {
    displayNone(creditCard);
    displayNone(paypal);
    displayNone(bitcoin);
  }
});


/////////////////// Form Validation Section ////////////
///////////////////                  ///////////////////

var emailAddress = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
var credit_Card = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g;
var zipCode = /^\d{5}(?:[-\s]\d{4})?$/;

generateErrorMessage = (label, errorMessage, color) => {
  label.textContent = errorMessage;
  label.style.color = color;
}
noErrorMessage = (label, labelText, color) => {
  label.textContent = labelText;
  label.style.color = color;
}


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  let namelabel = name.previousSibling.previousSibling;
  const email = document.getElementById('mail');
  let emailLabel = email.previousSibling.previousSibling;
  const otherTitleInput = document.getElementById('other-title');
  let otherTitleInputText = '';
  if(otherTitleInput != null) {
    otherTitleInputText = otherTitleInput.previousSibling.previousSibling.previousSibling.previousSibling;
  }

  // name input validation check
  if(name.value === "") {
    generateErrorMessage(namelabel, 'Name: (please provide your name)', 'red');
    name.focus();
  } else {
    noErrorMessage(namelabel, 'Name:', '#000');
  }

  // email input validation check
  if (!emailAddress.test(email.value)) {
    noErrorMessage(emailLabel, 'Email: (please provide a valid email address)', 'red');
    email.focus();
  } else {
    noErrorMessage(emailLabel, 'Email:', '#000');
  }

  // other title input validation check
  if(otherTitleInput != null) {
    if (otherTitleInput.value === "") {
      generateErrorMessage(otherTitleInputText, 'Job Role: (please provide a job role)', 'red');
      otherTitleInput.focus();
    } else {
      noErrorMessage(otherTitleInputText, 'Job Role', '#000');
    }
  }

  // activities checkbox validation check
  const checkedActivities = document.querySelectorAll('.activities label input[type="checkbox"]:checked');
  let legend = activities.firstElementChild;
  if(checkedActivities.length === 0) {
    generateErrorMessage(legend, 'Register for Activities: (please check atleast one checkbox)', 'red');
  } else {
    noErrorMessage(legend, 'Register for Activities', '#000');
  }

  // payment info validation check
  let paymentValue = payment.value;
  let legendPaymentText = payment.previousSibling.previousSibling.previousSibling.previousSibling;
  if ( paymentValue === "select_method" ) {
    generateErrorMessage(legendPaymentText, 'Payment Info: (please select payment method)', 'red');
  } else if(paymentValue === "credit card") {
    const ccnumID = document.getElementById('cc-num');
    const zipID = document.getElementById('zip');
    const cvvID = document.getElementById('cvv');
    console.log(ccnumID.value);
    console.log(isNaN(ccnumID.value));
    if ( ccnumID.value === "" || isNaN(ccnumID.value) || ccnumID.value.length > 16 || ccnumID.value.length < 13 ) {
      generateErrorMessage(legendPaymentText, 'Payment Info: (Credit Card field should only accept a number between 13 and 16 digits)', 'red');
    } else if ( zipID.value === "" || isNaN(zipID.value) || zipID.value.length !== 5 ) {
      generateErrorMessage(legendPaymentText, 'Payment Info: (The Zip Code field should accept a 5-digit number)', 'red');
    } else if ( cvvID.value === "" || isNaN(cvvID.value) || cvvID.value.length !== 3 ) {
      generateErrorMessage(legendPaymentText, 'Payment Info: (The CVV should only accept a number that is exactly 3 digits long)', 'red');
    } else {
      noErrorMessage(legendPaymentText, 'Payment Info', '#000');
    }
  } else {
    noErrorMessage(legendPaymentText, 'Payment Info', '#000');
  }
})
