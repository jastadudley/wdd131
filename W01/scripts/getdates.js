
const yearSpan = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastMod = document.querySelector('#lastmodified');
lastMod.textContent = "Last Modified: " + document.lastModified;