const convertBtn = document.getElementById("convert-btn");
const numInput = document.getElementById("number");
const output = document.getElementById("output");
let indexes;
let batta;
let str;
let arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let roman = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

convertBtn.addEventListener("click", () => {
  if (numInput.value === "") {
    output.innerHTML = "Please enter a valid number";
  } else if (numInput.value < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (numInput.value > 3999) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
  } else {
    indexes = [];
    batta = [];
    str = "";
    convert(arr);
    converter(batta);
    last(indexes, roman);
    output.innerHTML = str;
    numInput.value = "";
  }
});
const convert = (arr, index = 0) => {
  let result = Math.floor(+numInput.value / arr[index]);
  let remain = Math.floor(+numInput.value % arr[index]);
  batta.push(result);
  numInput.value = remain;
  if (remain === 0) {
    return batta;
  }
  convert(arr, index + 1);
};
let converter = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      if (arr[i] > 1) {
        while (arr[i] > 0) {
          indexes.push(i);
          arr[i]--;
        }
      } else {
        indexes.push(i);
      }
    }
  }
};

let last = (arr, mrr) => {
  for (let i = 0; i < arr.length; i++) {
    str += mrr[arr[i]];
  }
};
