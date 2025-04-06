let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
      {
        section: 1,
        enrolled: 24,
        instructor: "Brother Mellado"
      },
      {
        section: 2,
        enrolled: 18,
        instructor: "Sister Dudley"
      }
    ]
  };
  
  function setCourseInfo(course) {
    const heading = document.getElementById("courseName");
    heading.textContent = `${course.code}: ${course.title}`;
  }
  
  function outputSections(course) {
    const tableBody = document.getElementById("sections");
    tableBody.innerHTML = "";
  
    course.sections.forEach((section) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${section.section}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  setCourseInfo(aCourse);
  outputSections(aCourse);