

const hamIcon = document.querySelector('.ham-icon');
const navBar = document.querySelector('.nav-menu')
hamIcon.addEventListener('click', ()=>{
    navBar.classList.toggle("active");

});

// ====== TREATMENT SEARCH FUNCTIONALITY ======
// ====== TREATMENT SEARCH FUNCTIONALITY ======
document.addEventListener("DOMContentLoaded", function () {
  const treatmentInput  = document.getElementById("treatment");   // may be null
  const departmentInput = document.getElementById("Department");  // may be null
  const searchButton    = document.querySelector(".search-btn");  // may be null
  const treatmentCards  = document.querySelectorAll(".cards");

  function filterTreatments() {
    const treatmentValue  = (treatmentInput?.value || "").toLowerCase().trim();
    const departmentValue = (departmentInput?.value || "").toLowerCase().trim();

    let anyVisible = false;

    treatmentCards.forEach(card => {
      const name       = (card.dataset.name || "").toLowerCase();
      const department = (card.dataset.department || "").toLowerCase();

      const matchesTreatment  = !treatmentValue  || name.includes(treatmentValue);
      const matchesDepartment = !departmentValue || department.includes(departmentValue);

      const show = matchesTreatment && matchesDepartment;
      card.style.display = show ? "flex" : "none";
      if (show) anyVisible = true;
    });

    if (!anyVisible) alert("No matching treatments found!");
  }

  if (searchButton)    searchButton.addEventListener("click", filterTreatments);
  if (treatmentInput)  treatmentInput.addEventListener("keypress", e => { if (e.key === "Enter") filterTreatments(); });
  if (departmentInput) departmentInput.addEventListener("keypress", e => { if (e.key === "Enter") filterTreatments(); });
});







// Toggle dropdown sections (like Bumrungrad tabs)
document.querySelectorAll('.cta-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const targetBox = document.getElementById(targetId);
    const isOpen = targetBox.classList.contains('open');

    // Close all boxes
    document.querySelectorAll('.dropbox').forEach(box => box.classList.remove('open'));
    document.querySelectorAll('.cta-btn').forEach(btn => btn.classList.remove('active'));

    // Reopen only if previously closed
    if (!isOpen) {
      targetBox.classList.add('open');
      button.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    } else {
      button.setAttribute('aria-expanded', 'false');
    }
  });
});
