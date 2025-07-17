'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// Project details functionality
const projectsContainer = document.querySelector("[data-projects-container]");
const projectDetails = document.querySelector("[data-project-details]");
const projectLinks = document.querySelectorAll(".project-link");
const backBtn = document.querySelector("[data-back-btn]");

// Project data
const projectsData = {
  "toko-online": {
    title: "Toko Online Product Digital",
    image: "./assets/images/project-1.png",
    category: "Web Development",
    description: "Website toko online untuk penjualan produk digital seperti voucher game, pulsa, dan layanan digital lainnya. Dibangun dengan teknologi modern dan memiliki sistem pembayaran yang terintegrasi.",
    source: "https://github.com/agusydk3/Toko-Online",
    demoUrl: "https://motachi.xyz"
  },
  "listrik-pascabayar": {
    title: "Website Listrik Pascabayar",
    image: "./assets/images/project-2.png",
    category: "Web Development",
    description: "Platform untuk pembayaran listrik pascabayar secara online. Memudahkan pengguna untuk melihat tagihan pembayaran listrik",
    source: "https://github.com/agusydk3/Aplikasi-Pembayaran-Listrik-Pascabayar",
    demoUrl: "https://www.nein.biz.id"
  },
  "resi-tracker": {
    title: "Resi Tracker",
    image: "./assets/images/project-3.png",
    category: "Applications",
    description: "Aplikasi mobile untuk melacak pengiriman paket dari berbagai jasa ekspedisi. Pengguna dapat dengan mudah memantau status pengiriman barang mereka.",
    source: "https://github.com/agusydk3/RTrack",
    demoUrl: "Unavailable"
  }
};

// Function to show project details
const showProjectDetails = function(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  // Set project details
  document.querySelector("[data-project-details-title]").textContent = project.title;
  document.querySelector("[data-project-details-img]").src = project.image;
  document.querySelector("[data-project-details-img]").alt = project.title;
  document.querySelector("[data-project-details-category]").textContent = project.category;
  document.querySelector("[data-project-details-description]").textContent = project.description;
  
  // Set source link
  const sourceLink = document.querySelector("[data-project-details-source]");
  sourceLink.href = project.source;
  
  // Set demo link
  const demoLink = document.querySelector("[data-project-details-demo]");
  if (project.demoUrl === "Unavailable") {
    demoLink.style.opacity = "0.5";
    demoLink.style.pointerEvents = "none";
    demoLink.href = "#";
    demoLink.querySelector("span").textContent = "Demo Unavailable";
  } else {
    demoLink.style.opacity = "1";
    demoLink.style.pointerEvents = "auto";
    demoLink.href = project.demoUrl;
    demoLink.querySelector("span").textContent = "View Live Demo";
  }

  // Hide projects list and show details
  projectsContainer.style.display = "none";
  projectDetails.style.display = "block";

  // Scroll to top of project details
  window.scrollTo(0, 0);
};

// Function to hide project details
const hideProjectDetails = function() {
  // Hide details and show projects list
  projectDetails.style.display = "none";
  projectsContainer.style.display = "block";
};

// Add click event to all project links
for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function(e) {
    e.preventDefault();
    const projectId = this.closest("[data-project-id]").dataset.projectId;
    showProjectDetails(projectId);
  });
}

// Add click event to back button
backBtn.addEventListener("click", hideProjectDetails);