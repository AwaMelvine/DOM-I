const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Selectors
let headerLinks = document.getElementsByTagName("nav")[0].children;
let nav = document.querySelector("nav");

// Set navbar items link texts
[...headerLinks].forEach((link, index) => {
  link.innerText = siteContent.nav[`nav-item-${index + 1}`];
});
// Change navbar text to green
[...headerLinks].forEach(link => link.setAttribute("style", "color: green"));

// Add navbar items
const blog = document.createElement("a");
const blogText = document.createTextNode("Blog");
const projects = document.createElement("a");
const projectsText = document.createTextNode("Projects");

blog.appendChild(blogText);
blog.style.color = "green";
blog.style.cursor = "pointer";
projects.appendChild(projectsText);
projects.style.color = "green";
projects.style.cursor = "pointer";

nav.prepend(projects);
nav.appendChild(blog);

// cta section
const ctaText = document.querySelector(".cta-text h1");
const ctaBtn = document.querySelector(".cta-text button");
const ctaImage = document.querySelector("#cta-img");

ctaImage.setAttribute("src", siteContent.cta["img-src"]);
ctaText.innerHTML = siteContent.cta.h1
  .split(" ")
  .map((item, index) => (index > 0 ? `<br>${item}` : item))
  .join("");

ctaBtn.innerText = siteContent.cta.button;

// Top section
const topSection = document.querySelector(".top-content").children;
const featuresSection = topSection[0];
const aboutSection = topSection[1];

featuresSection.querySelector("h4").innerText =
  siteContent["main-content"]["features-h4"];
featuresSection.querySelector("p").innerText =
  siteContent["main-content"]["features-content"];

aboutSection.querySelector("h4").innerText =
  siteContent["main-content"]["about-h4"];
aboutSection.querySelector("p").innerText =
  siteContent["main-content"]["about-content"];

// Middle image
const middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Bottom section
const bottomSection = document.querySelector(".bottom-content").children;

servicesSection = bottomSection[0];
productSection = bottomSection[1];
visionSection = bottomSection[2];

// services
servicesSection.querySelector("h4").innerText =
  siteContent["main-content"]["services-h4"];
servicesSection.querySelector("p").innerText =
  siteContent["main-content"]["services-content"];

// product
productSection.querySelector("h4").innerText =
  siteContent["main-content"]["product-h4"];
productSection.querySelector("p").innerText =
  siteContent["main-content"]["product-content"];

// vision
visionSection.querySelector("h4").innerText =
  siteContent["main-content"]["vision-h4"];
visionSection.querySelector("p").innerText =
  siteContent["main-content"]["vision-content"];

// contact section
const contact = document.querySelector(".contact").children;

contact[0].innerText = siteContent.contact["contact-h4"];
contact[1].innerText = siteContent.contact.address;
contact[2].innerText = siteContent.contact.phone;
contact[3].innerText = siteContent.contact.email;

// footer
document.querySelector("footer p").innerText = siteContent.footer.copyright;
