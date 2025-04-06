const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Tucson Arizona",
    location: "Tucson, Arizona, United States",
    dedicated: "2017, August, 13",
    area: 38000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tucson-arizona/400x250/tucson-arizona-temple-lds-1782442-wallpaper.jpg"
  },
  {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona, United States",
    dedicated: "2014, March, 2",
    area: 85700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/400x250/gilbert-arizona-temple-lds-1401619-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-utah/400x250/salt-lake-temple-lds-449874-wallpaper.jpg"
  }
];

const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");
menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const templeGrid = document.querySelector(".temple-grid");

function renderTemples(templesArray) {
  templeGrid.innerHTML = "";
  templesArray.forEach((temple) => {
    const card = document.createElement("figure");
    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}">
    `;
    templeGrid.appendChild(card);
  });
}

renderTemples(temples);


function filterOldTemples() {
  const result = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  renderTemples(result);
}

function filterNewTemples() {
  const result = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  renderTemples(result);
}

function filterLargeTemples() {
  const result = temples.filter((temple) => temple.area > 90000);
  renderTemples(result);
}

function filterSmallTemples() {
  const result = temples.filter((temple) => temple.area < 10000);
  renderTemples(result);
}

const navLinks = document.querySelectorAll(".navigation a");

navLinks[0].addEventListener("click", (e) => {
  e.preventDefault();
  renderTemples(temples);
});

navLinks[1].addEventListener("click", (e) => {
  e.preventDefault();
  filterOldTemples();
});

navLinks[2].addEventListener("click", (e) => {
  e.preventDefault();
  filterNewTemples();
});

navLinks[3].addEventListener("click", (e) => {
  e.preventDefault();
  filterLargeTemples();
});

navLinks[4].addEventListener("click", (e) => {
  e.preventDefault();
  filterSmallTemples();
});

document.getElementById("2025").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
