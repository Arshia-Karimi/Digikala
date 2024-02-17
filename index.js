const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const phone = document.getElementById("phone");
const input = document.getElementById("aer");
const description = document.getElementById("description");

let error;

const isValidPhoneNumber = (phone) => {
  return /^(09|\+989|9)[0-9]{9}$|^00([1-9]{2})[0-9]{10}$/.test(phone);
};

const setError = (elementId, message) => {
  const element = document.getElementById(elementId);
  element.innerText = message;
};

input.addEventListener("input", function (e) {
  var foo = this.value.split("-").join("");
  if (foo.length > 0) {
    foo = foo.match(new RegExp(".{1,1}", "g")).join("-");
  }
  this.value = foo;
});

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  phonevalidate();
  if (!error) {
    form1.classList.add("hide");
    form2.classList.remove("hide");
    description.innerText = `کد تایید برای شماره ${phone.value} پیامک شد`;
  }
});

const phonevalidate = () => {
  const phoneValue = phone.value.trim();
  if (phoneValue === "") {
    setError("phoneError", "وارد کردن شماره موبایل اجباری است");
    error = "وارد کردن شماره موبایل اجباری است";
  } else if (!isValidPhoneNumber(phoneValue)) {
    setError("phoneError", "شماره موبایل صحیح نیست");
    error = "شماره موبایل صحیح نیست";
  } else {
    setError("phoneError", "");
    error = undefined;
  }
};
