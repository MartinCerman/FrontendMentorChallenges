// Next Step buttons.
const nextStepButtons = document.querySelectorAll(".next-step");

// Form tab containers.
const formTabs = document.querySelectorAll("fieldset");

// Sidebar icons.
const sideIcons = document.querySelectorAll(".sidebar-container > div > p:first-child")

// Changes active tab and sidebar visuals. Direction is default for next tab or -1 for step back.
const changeTabs = (currentTabIndex, direction = 1)=>{
    formTabs[currentTabIndex].classList.remove("active-tab");
    formTabs[currentTabIndex + direction].classList.add("active-tab");

    sideIcons[currentTabIndex].classList.remove("active-tab-number");
    sideIcons[currentTabIndex + direction].classList.add("active-tab-number");
}

const emailCheck = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const phoneNumberCheck = (tel) => {
  return /^\+(\s)?\d{1,3}(\s)?\d{3}(\s)?\d{3}(\s)?\d{3}$/.test(tel);
};

// Tab 1 Next Step button on click event handler.
// Checks if all Personal data are filled, adds .missing-input to according labels
// and prevents next step if not.
const handleNextStep1 = (e) => {
  e.preventDefault();

  const nameSection = document.querySelector("#user-name");
  const emailSection = document.querySelector("#email");
  const phoneNumberSection = document.querySelector("#tel");
  let preventNextStep = false;

  // Remove any error message classes that could already be set.
  nameSection.classList.remove("missing-input");
  emailSection.classList.remove("missing-input");
  phoneNumberSection.classList.remove("missing-input");

  // Check inputs and apply error message class if it doesn't pass.
  if (!document.querySelector("input[name='name']").value) {
    nameSection.classList.add("missing-input");
    preventNextStep = true;
  }
  if (!emailCheck(document.querySelector("input[name='email']").value)) {
    emailSection.classList.add("missing-input");
    preventNextStep = true;
  }
  if (!phoneNumberCheck(document.querySelector("input[name='tel']").value)) {
    phoneNumberSection.classList.add("missing-input");
    preventNextStep = true;
  }

  // Remove .active-tab from the current tab and add it to the next one.
  if(!preventNextStep){
    changeTabs(0)
  }
};

nextStepButtons[0].addEventListener("click", handleNextStep1);
