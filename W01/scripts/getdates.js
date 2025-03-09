const yearSpan = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastMod = document.querySelector('#lastModified');
lastMod.textContent = document.lastModified;