// building part in crash page
const crashItems = document.getElementById("crashItems");

const crashItem = document.createElement("div");
crashItem.classList.add("crashItem");

const topMain = document.createElement("div");
topMain.classList.add("topMain");

const crashP = document.createElement("p");
crashP.classList.add("crashP");

const crashIconArea = document.createElement("div");
crashIconArea.classList.add("crashIconArea");

const bottomMain = document.createElement("div");
bottomMain.classList.add("bottomMain");

// builder part
// function crateNewCrashElements(arr) {
crashIconArea.innerHTML =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.25" fill="white" /><path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM12 6C12.2225 6 12.44 6.06598 12.625 6.1896C12.81 6.31321 12.9542 6.48891 13.0394 6.69448C13.1245 6.90005 13.1468 7.12625 13.1034 7.34448C13.06 7.56271 12.9528 7.76316 12.7955 7.9205C12.6382 8.07783 12.4377 8.18498 12.2195 8.22838C12.0013 8.27179 11.7751 8.24951 11.5695 8.16436C11.3639 8.07922 11.1882 7.93502 11.0646 7.75002C10.941 7.56501 10.875 7.3475 10.875 7.125C10.875 6.82663 10.9935 6.54048 11.2045 6.3295C11.4155 6.11853 11.7016 6 12 6ZM15 18.0938H9V16.4062H11.1563V12.0938H9.75V10.4062H12.8438V16.4062H15V18.0938Z" fill="#010101"/></svg> <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75593 8.12713C7.35716 8.58759 6.64284 8.58759 6.24407 8.12713L0.638743 1.65465C0.0778675 1.00701 0.537921 0 1.39467 0L12.6053 0C13.4621 0 13.9221 1.00701 13.3613 1.65465L7.75593 8.12713Z" fill="#010101"/></svg>';
crashP.textContent = `some text`;
topMain.append(crashP, crashIconArea);
crashItem.append(topMain);
crashItems.appendChild(crashItem);
// }
