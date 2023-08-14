const nextStepButtons = document.querySelectorAll(".next-step");
const goBackButtons = document.querySelectorAll(".go-back");
const formTabContainers = document.querySelectorAll("fieldset");
const sidebarIcons = document.querySelectorAll(
  ".sidebar-container > div > p:first-child"
);

// Changes active tab and sidebar visuals. Direction is default for next tab or -1 for step back.
const changeTabs = (currentTabIndex, direction = 1) => {
  formTabContainers[currentTabIndex].classList.remove("active-tab");
  formTabContainers[currentTabIndex + direction].classList.add("active-tab");

  sidebarIcons[currentTabIndex].classList.remove("active-tab-number");
  sidebarIcons[currentTabIndex + direction].classList.add("active-tab-number");
};

const emailCheck = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const phoneNumberCheck = (tel) => {
  return /^\+(\s)?\d{1,3}(\s)?\d{3}(\s)?\d{3}(\s)?\d{3}$/.test(tel);
};

// Checks if all Personal data are filled and returns true/false, adds .missing-input to according labels
// if not valid.
const personalDataValid = (e) => {
  const nameSection = document.querySelector("#user-name");
  const emailSection = document.querySelector("#email");
  const phoneNumberSection = document.querySelector("#tel");
  let isDataValid = true;

  // Remove any error message classes that could already be set.
  nameSection.classList.remove("missing-input");
  emailSection.classList.remove("missing-input");
  phoneNumberSection.classList.remove("missing-input");

  // Check inputs and apply error message class if it doesn't pass.
  if (!document.querySelector("input[name='name']").value) {
    nameSection.classList.add("missing-input");
    isDataValid = false;
  }
  if (!emailCheck(document.querySelector("input[name='email']").value)) {
    emailSection.classList.add("missing-input");
    isDataValid = false;
  }
  if (!phoneNumberCheck(document.querySelector("input[name='tel']").value)) {
    phoneNumberSection.classList.add("missing-input");
    isDataValid = false;
  }

  return isDataValid;
};

// Tab 2 Next Step button on click event handler.
const handleNextStep2 = () => {
  e.preventDefault();
};

// Attach events to Next Step buttons, validate data where needed.
nextStepButtons[0].addEventListener("click", (e) => {
  e.preventDefault();
  if (personalDataValid()) {
    changeTabs(0);
  }
});
nextStepButtons[1].addEventListener("click", (e) => {
  e.preventDefault();
  changeTabs(1);
});
nextStepButtons[2].addEventListener("click", (e) => {
  e.preventDefault();
  changeTabs(2);
});
