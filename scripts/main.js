document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

let visitCount = localStorage.getItem("visitCount");

if (visitCount) {
  visitCount = Number(visitCount) + 1;
} else {
  visitCount = 1;
}

localStorage.setItem("visitCount", visitCount);


const welcomeMessages = [
  "Thanks for visiting us again! 🏡"
];

let messageIndex = (visitCount - 1) % welcomeMessages.length;
console.log(`${welcomeMessages[messageIndex]} This is visit #${visitCount}.`);
