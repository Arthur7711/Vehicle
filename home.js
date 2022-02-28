// // // creating all items
// Urgent- red
// Caution - orange
// Normal - green
import { cardsforuser } from "./ajaxdata.js";
import { carddata } from "./ajaxdata.js";
import { carddatadetails } from "./ajaxdata.js";

const arr = [];
(function gettingKeys() {
  for (const key in carddata) {
    arr.push(carddata[key]);
  }
  return arr;
})();

console.log(arr);
// creating consts area
arr.map((el) => {
  let mainItems = document.getElementById("items");

  let child = document.createElement("div");
  child.classList.add("item");

  let itemTitle = document.createElement("div");
  itemTitle.classList.add("itemTitle");
  switch (el.status) {
    case "bg-info":
      itemTitle.classList.add("bgInfo");
      break;
    case "bg-warning":
      itemTitle.classList.add("bgWarning");
      break;
    case "bg-danger":
      itemTitle.classList.add("bgDanger");
      break;
    default:
      break;
  }

  let leftTitleAreas = document.createElement("div");
  leftTitleAreas.classList.add("titleAreas");

  let RightTitleAreas = document.createElement("div");
  RightTitleAreas.classList.add("titleAreas");

  let span = document.createElement("span");

  let itemContent = document.createElement("div");
  itemContent.classList.add("itemContent");

  let p = document.createElement("p");
  p.classList.add("number");

  // building part in home page
  // function asyncElemsAdding(arr) {}
  itemContent.innerHTML = `<svg class="firstSVG" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 47.5V12.5" stroke="#F53737" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M47.5 30L30 12.5L12.5 30" stroke="#F53737" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg><svg class="secSVG" width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.6 0H0V24H24V4C23.9999 3.83053 23.9459 3.66549 23.8459 3.52867C23.7459 3.39184 23.6051 3.2903 23.4436 3.23869C23.2822 3.18708 23.1086 3.18806 22.9478 3.2415C22.7869 3.29493 22.6472 3.39805 22.5488 3.536L15.184 13.8448L11.04 8.32C10.9632 8.21768 10.863 8.13528 10.7477 8.0797C10.6325 8.02413 10.5056 7.997 10.3777 8.00061C10.2498 8.00421 10.1246 8.03844 10.0127 8.10042C9.90076 8.1624 9.80533 8.25032 9.7344 8.3568L1.6 20.5584V0Z" fill="#646464"/></svg>`;
  p.textContent = `${el.count}`;
  itemContent.append(p);
  // leftTop area
  leftTitleAreas.innerHTML =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4V10H7" stroke="#010101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M23 20V14H17" stroke="#010101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.49 9C19.9828 7.56678 19.1209 6.2854 17.9845 5.27542C16.8482 4.26543 15.4745 3.55976 13.9917 3.22426C12.5089 2.88875 10.9652 2.93434 9.50481 3.35677C8.04437 3.77921 6.71475 4.56471 5.64 5.64L1 10M23 14L18.36 18.36C17.2853 19.4353 15.9556 20.2208 14.4952 20.6432C13.0348 21.0657 11.4911 21.1112 10.0083 20.7757C8.52547 20.4402 7.1518 19.7346 6.01547 18.7246C4.87913 17.7146 4.01717 16.4332 3.51 15" stroke="#010101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  span.textContent = `${el.title}`;
  leftTitleAreas.append(span);
  RightTitleAreas.innerHTML =
    '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 10.5C1 8.85563 1.38621 7.23424 2.12752 5.76645C2.86882 4.29865 3.9445 3.02548 5.26791 2.04949L6.62245 3.88621C5.58669 4.65007 4.74481 5.64651 4.16462 6.79528C3.58444 7.94405 3.28217 9.21303 3.28217 10.5H1Z" fill="#010101"/><path d="M21 10.5C21 8.85563 20.6138 7.23424 19.8725 5.76645C19.1312 4.29865 18.0555 3.02548 16.7321 2.04949L15.3775 3.88621C16.4133 4.65007 17.2552 5.64651 17.8354 6.79528C18.4156 7.94405 18.7178 9.21303 18.7178 10.5H21Z" fill="#010101"/><path d="M19 18.19L6.84 5.64L4.27 2.99L3 4.26L5.8 7.06V7.07C5.28 8.06 5 9.23 5 10.49V15.49L3 17.49V18.49H16.73L18.73 20.49L20 19.22L19 18.19ZM11 21.5C12.11 21.5 13 20.61 13 19.5H9C9 20.61 9.89 21.5 11 21.5ZM17 14.18V10.5C17 7.42 15.36 4.86 12.5 4.18V3.5C12.5 2.67 11.83 2 11 2C10.17 2 9.5 2.67 9.5 3.5V4.18C9.35 4.21 9.21 4.26 9.08 4.3C8.98 4.33 8.88 4.37 8.78 4.41H8.77C8.76 4.41 8.76 4.41 8.75 4.42C8.52 4.51 8.29 4.62 8.07 4.73C8.07 4.73 8.06 4.73 8.06 4.74L17 14.18Z" fill="#010101"/></svg> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.25" fill="white" /><path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM12 6C12.2225 6 12.44 6.06598 12.625 6.1896C12.81 6.31321 12.9542 6.48891 13.0394 6.69448C13.1245 6.90005 13.1468 7.12625 13.1034 7.34448C13.06 7.56271 12.9528 7.76316 12.7955 7.9205C12.6382 8.07783 12.4377 8.18498 12.2195 8.22838C12.0013 8.27179 11.7751 8.24951 11.5695 8.16436C11.3639 8.07922 11.1882 7.93502 11.0646 7.75002C10.941 7.56501 10.875 7.3475 10.875 7.125C10.875 6.82663 10.9935 6.54048 11.2045 6.3295C11.4155 6.11853 11.7016 6 12 6ZM15 18.0938H9V16.4062H11.1563V12.0938H9.75V10.4062H12.8438V16.4062H15V18.0938Z"fill="#010101"/></svg>';
  itemTitle.append(leftTitleAreas, RightTitleAreas);
  child.append(itemTitle, itemContent);
  mainItems.appendChild(child);
});
