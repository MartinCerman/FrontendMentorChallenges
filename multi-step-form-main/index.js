const nextStepButtons = document.querySelectorAll(".next-step");
const goBackButtons = document.querySelectorAll(".go-back");
const formTabContainers = document.querySelectorAll("fieldset");
const sidebarIcons = document.querySelectorAll(
  ".sidebar-container > div > p:first-child"
);
const form = document.querySelector("form");

// Changes current active tab. Positive changeBy goes forward by n steps,
// negative changeBy goes back by n steps.
const changeTabs = (currentTabIndex, changeBy = 1) => {
  formTabContainers[currentTabIndex].classList.remove("active-tab");
  formTabContainers[currentTabIndex + changeBy].classList.add("active-tab");
  console.log(currentTabIndex);
  // Prevents changing sidebar icon for second to last tab to last tab transition.
  if (currentTabIndex !== formTabContainers.length - 2) {
    sidebarIcons[currentTabIndex].classList.remove("active-tab-number");
    sidebarIcons[currentTabIndex + changeBy].classList.add("active-tab-number");
  }
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

// Events on Next Step buttons, validates data for text fields.
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

// Events on Go Back buttons, first Go Back is on tab at index 1.
for (let i = 0; i < goBackButtons.length; i++) {
  goBackButtons[i].addEventListener("click", (e) => {
    e.preventDefault();
    changeTabs(i + 1, -1);
  });
}

// Form submit event.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  changeTabs(3);
});
