import { cardsforuser } from "./ajaxdata.js";
import { carddata } from "./ajaxdata.js";
import { carddatadetails } from "./ajaxdata.js";

const arr = [];
(function () {
  for (const key in carddata) {
    arr.push(carddata[key]);
  }
  return arr;
})();

const dataInfo = [];
(function () {
  for (const key in carddatadetails) {
    dataInfo.push(carddatadetails[key]);
  }
  return dataInfo;
})();

// creating consts area
arr.map((el, i) => {
  let mainItems = document.getElementById("items");

  let infoItemArea = document.createElement("div");
  infoItemArea.classList.add("infoItemArea");

  let infoHere = document.createElement("p");
  infoHere.classList.add("infoHere");

  let child = document.createElement("div");
  child.classList.add("item");
  switch (el.status) {
    case "bg-info":
      child.classList.add("bgInfoItem");
      break;
    case "bg-warning":
      child.classList.add("bgWarningItem");
      break;
    case "bg-danger":
      child.classList.add("bgDangerItem");
      break;
    default:
      break;
  }

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

  let smallP = document.createElement("p");
  smallP.classList.add("smallP");

  let contentMain = document.createElement("div");
  contentMain.classList.add("contentMain");
  // building part in home page
  switch (el.status) {
    case "bg-info":
      itemContent.innerHTML = `<svg class="firstSVG" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 47.5V12.5" stroke="#82BC40" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M47.5 30L30 12.5L12.5 30" stroke="#82BC40" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg> <svg class="secSVG" width="98" height="64" viewBox="0 0 98 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_244_176)">
      <path d="M19.467 38.5033C14.5727 41.003 5.22907 55.5012 -1 55.5012V65H100V21.0054C93.8609 23.1502 89.6766 23.1502 83.5374 21.0054C80.1983 19.8389 79.0247 16.5896 75.5286 16.506C70.9986 16.3977 70.2708 23.4428 65.7401 23.5051C57.8888 23.6131 62.592 -3.49588 57.2863 3.00767C52.3921 9.00694 44.3746 42.5164 37.2643 43.5027C30.1541 44.4889 22.7306 36.8364 19.467 38.5033Z" fill="url(#paint0_linear_244_176)" stroke="#60A017"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_244_176" x1="49.5" y1="2" x2="49.5" y2="65" gradientUnits="userSpaceOnUse">
      <stop stop-color="#60A017" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#60A017" stop-opacity="0"/>
      </linearGradient>
      <clipPath id="clip0_244_176">
      <rect width="98" height="64" fill="white"/>
      </clipPath>
      </defs>
      </svg>`;
      break;
    case "bg-warning":
      itemContent.innerHTML = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 30L47.5 30" stroke="#FFA724" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M30 47.5L47.5 30L30 12.5" stroke="#FFA724" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> <svg class="secSVG" width="98" height="64" viewBox="0 0 98 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_284_197)">
      <path d="M19.467 38.5033C14.5727 41.003 5.22907 55.5012 -1 55.5012V65H100V21.0054C93.8609 23.1502 89.6766 23.1502 83.5374 21.0054C80.1983 19.8389 79.0247 16.5896 75.5286 16.506C70.9986 16.3977 70.2708 23.4428 65.7401 23.5051C57.8888 23.6131 62.592 -3.49588 57.2863 3.00767C52.3921 9.00694 44.3746 42.5164 37.2643 43.5027C30.1541 44.4889 22.7306 36.8364 19.467 38.5033Z" fill="url(#paint0_linear_284_197)"/>
      <path d="M-1 55.5012V55.0012H-1.5V55.5012H-1ZM19.467 38.5033L19.2395 38.058L19.467 38.5033ZM37.2643 43.5027L37.333 43.9979L37.2643 43.5027ZM57.2863 3.00767L56.8989 2.6916V2.6916L57.2863 3.00767ZM65.7401 23.5051L65.747 24.0051L65.7401 23.5051ZM75.5286 16.506L75.5406 16.0061L75.5286 16.506ZM83.5374 21.0054L83.7024 20.5334L83.5374 21.0054ZM100 21.0054H100.5V20.3011L99.8351 20.5334L100 21.0054ZM100 65V65.5H100.5V65H100ZM-1 65H-1.5V65.5H-1V65ZM-1 56.0012C0.731591 56.0012 2.59682 55.0045 4.44133 53.5939C6.30333 52.17 8.23102 50.255 10.0972 48.2833C11.9812 46.2928 13.7742 44.276 15.4389 42.5621C17.1064 40.8452 18.5548 39.5306 19.6944 38.9486L19.2395 38.058C17.9319 38.7258 16.3771 40.1608 14.7215 41.8654C13.063 43.573 11.2132 45.6494 9.37089 47.5959C7.51072 49.5612 5.62866 51.427 3.83386 52.7996C2.02158 54.1855 0.382946 55.0012 -1 55.0012V56.0012ZM19.6944 38.9486C20.306 38.6362 21.1977 38.7258 22.4515 39.1889C23.6836 39.644 25.1036 40.3943 26.699 41.1946C29.8328 42.7667 33.6018 44.5155 37.333 43.9979L37.1956 43.0074C33.8166 43.4761 30.3188 41.8917 27.1474 40.3008C25.5902 39.5196 24.0979 38.731 22.798 38.2509C21.5199 37.7788 20.2598 37.5369 19.2395 38.058L19.6944 38.9486ZM37.333 43.9979C38.3994 43.85 39.4032 43.11 40.3389 42.0578C41.2848 40.9943 42.2216 39.5431 43.1438 37.8411C44.9891 34.4351 46.8209 29.9389 48.5739 25.3122C50.3359 20.6618 52.0055 15.9155 53.5592 11.908C54.3331 9.91178 55.0707 8.11928 55.765 6.64239C56.4631 5.15721 57.1026 4.02389 57.6738 3.32374L56.8989 2.6916C56.2465 3.49127 55.5648 4.71746 54.86 6.21698C54.1512 7.72479 53.4039 9.54218 52.6268 11.5465C51.0785 15.5402 49.3817 20.3577 47.6388 24.9579C45.8868 29.5818 44.0751 34.0228 42.2645 37.3647C41.3587 39.0366 40.4643 40.412 39.5917 41.3933C38.709 42.3858 37.9068 42.9088 37.1956 43.0074L37.333 43.9979ZM57.6738 3.32374C57.9895 2.93676 58.2405 2.71018 58.4307 2.59358C58.616 2.47997 58.6919 2.49992 58.7069 2.50443C58.7346 2.51276 58.8186 2.55392 58.9336 2.74821C59.0466 2.93901 59.1563 3.2232 59.258 3.60919C59.6709 5.17765 59.8227 7.88368 60.0602 10.8973C60.294 13.8658 60.6104 17.0951 61.3752 19.5804C61.7576 20.8232 62.2648 21.9248 62.9652 22.7193C63.6798 23.5299 64.5983 24.0209 65.747 24.0051L65.7332 23.0052C64.9191 23.0164 64.2671 22.6839 63.7154 22.058C63.1495 21.4161 62.6946 20.4682 62.3309 19.2863C61.6036 16.9224 61.292 13.8011 61.0571 10.8188C60.8257 7.88163 60.6678 5.03658 60.225 3.3546C60.1127 2.92798 59.9744 2.54335 59.7942 2.23883C59.616 1.93779 59.3617 1.65712 58.9949 1.5468C58.6154 1.43267 58.2406 1.53718 57.9081 1.74102C57.5804 1.94187 57.2464 2.26564 56.8989 2.6916L57.6738 3.32374ZM65.747 24.0051C68.3005 23.97 69.7588 21.9454 71.0349 20.2413C72.3858 18.4371 73.5508 16.9589 75.5167 17.0059L75.5406 16.0061C72.9765 15.9448 71.5125 17.935 70.2344 19.6419C68.8814 21.4488 67.7104 22.978 65.7332 23.0052L65.747 24.0051ZM75.5167 17.0059C77.0851 17.0434 78.1397 17.7784 79.2694 18.7317C80.3823 19.6708 81.5939 20.8561 83.3725 21.4775L83.7024 20.5334C82.1418 19.9882 81.0971 18.9656 79.9143 17.9675C78.7485 16.9836 77.4682 16.0522 75.5406 16.0061L75.5167 17.0059ZM83.3725 21.4775C86.4759 22.5617 89.1145 23.114 91.7687 23.114C94.423 23.114 97.0615 22.5617 100.165 21.4775L99.8351 20.5334C96.7994 21.594 94.2762 22.114 91.7687 22.114C89.2613 22.114 86.7381 21.594 83.7024 20.5334L83.3725 21.4775ZM99.5 21.0054V65H100.5V21.0054H99.5ZM100 64.5H-1V65.5H100V64.5ZM-0.5 65V55.5012H-1.5V65H-0.5Z" fill="#FFA724"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_284_197" x1="49.5" y1="2" x2="49.5" y2="65" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFA724" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#FFA724" stop-opacity="0"/>
      </linearGradient>
      <clipPath id="clip0_284_197">
      <rect width="98" height="64" fill="white"/>
      </clipPath>
      </defs>
      </svg>`;
      break;
    case "bg-danger":
      itemContent.innerHTML = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 12.5L30 47.5" stroke="#CF1317" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 30L30 47.5L47.5 30" stroke="#CF1317" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> <svg class="secSVG" width="98" height="64" viewBox="0 0 98 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_284_201)">
      <path d="M79.533 38.5033C84.4273 41.003 93.7709 55.5012 100 55.5012V65H-1V21.0054C5.13912 23.1502 9.32343 23.1502 15.4626 21.0054C18.8017 19.8389 19.9753 16.5896 23.4714 16.506C28.0014 16.3977 28.7292 23.4428 33.2599 23.5051C41.1112 23.6131 36.408 -3.49588 41.7137 3.00767C46.6079 9.00694 54.6254 42.5164 61.7357 43.5027C68.8459 44.4889 76.2694 36.8364 79.533 38.5033Z" fill="url(#paint0_linear_284_201)"/>
      <path d="M100 55.5012V55.0012H100.5V55.5012H100ZM79.533 38.5033L79.7605 38.058L79.533 38.5033ZM61.7357 43.5027L61.667 43.9979L61.7357 43.5027ZM41.7137 3.00767L42.1011 2.6916V2.6916L41.7137 3.00767ZM33.2599 23.5051L33.253 24.0051L33.2599 23.5051ZM23.4714 16.506L23.4594 16.0061L23.4714 16.506ZM15.4626 21.0054L15.2976 20.5334L15.4626 21.0054ZM-1 21.0054H-1.5V20.3011L-0.835091 20.5334L-1 21.0054ZM-1 65V65.5H-1.5V65H-1ZM100 65H100.5V65.5H100V65ZM100 56.0012C98.2684 56.0012 96.4032 55.0045 94.5587 53.5939C92.6967 52.17 90.769 50.255 88.9028 48.2833C87.0188 46.2928 85.2258 44.276 83.5611 42.5621C81.8936 40.8452 80.4452 39.5306 79.3056 38.9486L79.7605 38.058C81.0681 38.7258 82.6229 40.1608 84.2785 41.8654C85.937 43.573 87.7868 45.6494 89.6291 47.5959C91.4893 49.5612 93.3713 51.427 95.1661 52.7996C96.9784 54.1855 98.6171 55.0012 100 55.0012V56.0012ZM79.3056 38.9486C78.694 38.6362 77.8023 38.7258 76.5485 39.1889C75.3164 39.644 73.8964 40.3943 72.301 41.1946C69.1672 42.7667 65.3982 44.5155 61.667 43.9979L61.8044 43.0074C65.1834 43.4761 68.6812 41.8917 71.8526 40.3008C73.4098 39.5196 74.9021 38.731 76.202 38.2509C77.4801 37.7788 78.7402 37.5369 79.7605 38.058L79.3056 38.9486ZM61.667 43.9979C60.6006 43.85 59.5968 43.11 58.6611 42.0578C57.7152 40.9943 56.7784 39.5431 55.8562 37.8411C54.0109 34.4351 52.1791 29.9389 50.4261 25.3122C48.6641 20.6618 46.9945 15.9155 45.4408 11.908C44.6669 9.91178 43.9293 8.11928 43.235 6.64239C42.5369 5.15721 41.8974 4.02389 41.3262 3.32374L42.1011 2.6916C42.7535 3.49127 43.4352 4.71746 44.14 6.21698C44.8488 7.72479 45.5961 9.54218 46.3732 11.5465C47.9215 15.5402 49.6183 20.3577 51.3612 24.9579C53.1132 29.5818 54.9249 34.0228 56.7355 37.3647C57.6413 39.0366 58.5357 40.412 59.4083 41.3933C60.291 42.3858 61.0932 42.9088 61.8044 43.0074L61.667 43.9979ZM41.3262 3.32374C41.0105 2.93676 40.7595 2.71018 40.5693 2.59358C40.384 2.47997 40.3081 2.49992 40.2931 2.50443C40.2654 2.51276 40.1814 2.55392 40.0664 2.74821C39.9534 2.93901 39.8437 3.2232 39.742 3.60919C39.3291 5.17765 39.1773 7.88368 38.9398 10.8973C38.706 13.8658 38.3896 17.0951 37.6248 19.5804C37.2424 20.8232 36.7352 21.9248 36.0348 22.7193C35.3202 23.5299 34.4017 24.0209 33.253 24.0051L33.2668 23.0052C34.0809 23.0164 34.7329 22.6839 35.2846 22.058C35.8505 21.4161 36.3054 20.4682 36.6691 19.2863C37.3964 16.9224 37.708 13.8011 37.9429 10.8188C38.1743 7.88163 38.3322 5.03658 38.775 3.3546C38.8873 2.92798 39.0256 2.54335 39.2058 2.23883C39.384 1.93779 39.6383 1.65712 40.0051 1.5468C40.3846 1.43267 40.7594 1.53718 41.0919 1.74102C41.4196 1.94187 41.7536 2.26564 42.1011 2.6916L41.3262 3.32374ZM33.253 24.0051C30.6995 23.97 29.2412 21.9454 27.9651 20.2413C26.6142 18.4371 25.4492 16.9589 23.4833 17.0059L23.4594 16.0061C26.0235 15.9448 27.4875 17.935 28.7656 19.6419C30.1186 21.4488 31.2896 22.978 33.2668 23.0052L33.253 24.0051ZM23.4833 17.0059C21.9149 17.0434 20.8603 17.7784 19.7306 18.7317C18.6177 19.6708 17.4061 20.8561 15.6275 21.4775L15.2976 20.5334C16.8582 19.9882 17.9029 18.9656 19.0857 17.9675C20.2515 16.9836 21.5318 16.0522 23.4594 16.0061L23.4833 17.0059ZM15.6275 21.4775C12.5241 22.5617 9.88552 23.114 7.23128 23.114C4.57703 23.114 1.93848 22.5617 -1.16491 21.4775L-0.835091 20.5334C2.20064 21.594 4.72381 22.114 7.23128 22.114C9.73874 22.114 12.2619 21.594 15.2976 20.5334L15.6275 21.4775ZM-0.5 21.0054V65H-1.5V21.0054H-0.5ZM-1 64.5H100V65.5H-1V64.5ZM99.5 65V55.5012H100.5V65H99.5Z" fill="#CF1317"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_284_201" x1="49.5" y1="2" x2="49.5" y2="65" gradientUnits="userSpaceOnUse">
      <stop stop-color="#CF1317" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#CF1317" stop-opacity="0"/>
      </linearGradient>
      <clipPath id="clip0_284_201">
      <rect width="98" height="64" fill="white"/>
      </clipPath>
      </defs>
      </svg>`;
      break;
    default:
      break;
  }

  p.textContent = `${el.count}`;
  smallP.textContent = `${el.count}`;

  contentMain.append(p, smallP);
  itemContent.append(contentMain);
  // leftTop area
  leftTitleAreas.innerHTML =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4V10H7" stroke="#010101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M23 20V14H17" stroke="#010101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.49 9C19.9828 7.56678 19.1209 6.2854 17.9845 5.27542C16.8482 4.26543 15.4745 3.55976 13.9917 3.22426C12.5089 2.88875 10.9652 2.93434 9.50481 3.35677C8.04437 3.77921 6.71475 4.56471 5.64 5.64L1 10M23 14L18.36 18.36C17.2853 19.4353 15.9556 20.2208 14.4952 20.6432C13.0348 21.0657 11.4911 21.1112 10.0083 20.7757C8.52547 20.4402 7.1518 19.7346 6.01547 18.7246C4.87913 17.7146 4.01717 16.4332 3.51 15" stroke="#010101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  span.textContent = `${el.title}`;
  leftTitleAreas.append(span);
  RightTitleAreas.innerHTML =
    '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 10.5C1 8.85563 1.38621 7.23424 2.12752 5.76645C2.86882 4.29865 3.9445 3.02548 5.26791 2.04949L6.62245 3.88621C5.58669 4.65007 4.74481 5.64651 4.16462 6.79528C3.58444 7.94405 3.28217 9.21303 3.28217 10.5H1Z" fill="#010101"/><path d="M21 10.5C21 8.85563 20.6138 7.23424 19.8725 5.76645C19.1312 4.29865 18.0555 3.02548 16.7321 2.04949L15.3775 3.88621C16.4133 4.65007 17.2552 5.64651 17.8354 6.79528C18.4156 7.94405 18.7178 9.21303 18.7178 10.5H21Z" fill="#010101"/><path d="M19 18.19L6.84 5.64L4.27 2.99L3 4.26L5.8 7.06V7.07C5.28 8.06 5 9.23 5 10.49V15.49L3 17.49V18.49H16.73L18.73 20.49L20 19.22L19 18.19ZM11 21.5C12.11 21.5 13 20.61 13 19.5H9C9 20.61 9.89 21.5 11 21.5ZM17 14.18V10.5C17 7.42 15.36 4.86 12.5 4.18V3.5C12.5 2.67 11.83 2 11 2C10.17 2 9.5 2.67 9.5 3.5V4.18C9.35 4.21 9.21 4.26 9.08 4.3C8.98 4.33 8.88 4.37 8.78 4.41H8.77C8.76 4.41 8.76 4.41 8.75 4.42C8.52 4.51 8.29 4.62 8.07 4.73C8.07 4.73 8.06 4.73 8.06 4.74L17 14.18Z" fill="#010101"/></svg> <svg class="infoBtn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.25" fill="white" /><path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM12 6C12.2225 6 12.44 6.06598 12.625 6.1896C12.81 6.31321 12.9542 6.48891 13.0394 6.69448C13.1245 6.90005 13.1468 7.12625 13.1034 7.34448C13.06 7.56271 12.9528 7.76316 12.7955 7.9205C12.6382 8.07783 12.4377 8.18498 12.2195 8.22838C12.0013 8.27179 11.7751 8.24951 11.5695 8.16436C11.3639 8.07922 11.1882 7.93502 11.0646 7.75002C10.941 7.56501 10.875 7.3475 10.875 7.125C10.875 6.82663 10.9935 6.54048 11.2045 6.3295C11.4155 6.11853 11.7016 6 12 6ZM15 18.0938H9V16.4062H11.1563V12.0938H9.75V10.4062H12.8438V16.4062H15V18.0938Z"fill="#010101"/></svg>';
  itemTitle.append(leftTitleAreas, RightTitleAreas);
  child.append(itemTitle, itemContent);

  infoHere.textContent = el.description;
  infoItemArea.append(infoHere, child);

  mainItems.appendChild(infoItemArea);
  // adding click on number
  p.addEventListener("click", (e) => {
    setTimeout(() => {
      document.getElementById(`item${i}_wrapper`).style.display = "block";
    }, 5);
  });
});

// table part
const forCreatingTable = document.getElementById("forCReatingTableHere");
dataInfo.map((el, i) => {
  let table = document.createElement("table");
  table.setAttribute("id", `item${i}`);
  table.classList.add("myDataTable");
  table.style.maxWidth = "1200px";
  forCreatingTable.append(table);
  let columns = [];
  el.headings.map((elem) => {
    columns.push({ title: elem, data: elem });
  });

  $(document).ready(function () {
    $(`#item${i}`).DataTable({
      data: el.data,
      columns: columns,
      searching: false,
      // lengthChange: false
    });

    $(`#item${i}`).parent().css("background-color", "#ccc");
  });
});

setTimeout(() => {
  let mainTable = document.querySelectorAll(".dataTables_wrapper");
  mainTable?.forEach((el, i) => {
    el.style.position = "absolute";
    el.style.top = 100;
    el.style.left = "30%";
    el.style.zIndex = 100;
    el.style.backgroun = "#ccc";
    el.style.display = "none";
    let forCloseDiv = document.createElement("div");
    forCloseDiv.classList.add("forCloseDiv");
    let closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.classList.add("closeBtn");
    forCloseDiv.append(closeBtn);
    el.append(forCloseDiv);

    //window close function
    closeBtn.addEventListener("click", () => {
      setTimeout(() => {
        document.getElementById(`item${i}_wrapper`).style.display = "none";
      }, 3);
    });
  });
}, 2);

const infoBtn = document.querySelectorAll(".infoBtn");
infoBtn.forEach((elem) => {
  elem.addEventListener("mouseover", () =>
    elem.parentNode.parentNode.parentNode.parentNode.childNodes[0].classList.add(
      "hoveriseInfoHere"
    )
  );
  elem.addEventListener("mouseleave", () => {
    elem.parentNode.parentNode.parentNode.parentNode.childNodes[0].classList.remove(
      "hoveriseInfoHere"
    );
  });
});

// creating map area
// let map = null;
// let allMarkers = [];
// function DisplayModalMap(item) {
//   let ajaxdata = carddatadetails[item];

//   let html = $("#template-card-map").html();
//   let output = Mustache.render(html, ajaxdata);
//   $("body").append(output);
//   try {
//     map = new google.maps.Map(document.getElementById("map-" + item), {});
//     let i = 0;
//     //var markers = [];//some array
//     bounds = new google.maps.LatLngBounds();
//     ajaxdata.locations.forEach(function (position) {
//       if (position.lat == -90 && position.lng == 0) return;

//       let stringTitle = "tit";
//       if (ajaxdata.data[i].Label == null || ajaxdata.data[i].length == 0)
//         stringTitle = ajaxdata.data[i].IMEI;
//       else
//         stringTitle =
//           ajaxdata.data[i].Label + " (" + ajaxdata.data[i].IMEI + ")";

//       const myLatLng = { lat: position.lat, lng: position.lng };
//       //console.log(i,position.lat, position.lng);
//       bounds.extend(myLatLng);

//       let marker = new google.maps.Marker({
//         position: myLatLng,
//         map,
//         title: stringTitle,
//       });
//       allMarkers.push(marker);

//       let infowindowtemplate = $("#template-card-map-infowindow").html();
//       let infowindowcontent = Mustache.render(
//         infowindowtemplate,
//         ajaxdata.data[i]
//       );

//       let infowindow = new google.maps.InfoWindow({
//         content: infowindowcontent,
//         maxWidth: 200,
//       });
//       google.maps.event.addListener(marker, "click", function () {
//         infowindow.open(map, marker);
//       });
//       i++;
//     });
//     $("#hidden-" + item).modal("show");
//     $("#hidden-" + item).on("shown.bs.modal", function () {
//       map.fitBounds(bounds);
//     });
//   } catch (exception) {
//     //display_alert("Popup Error", "Failed to load tabular data");
//     console.log(exception);
//   }
// }