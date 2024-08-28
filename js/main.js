document.addEventListener("DOMContentLoaded", function () {
  let currentStep = 1;
  const totalSteps = 5;
  function showStep(step) {
    document.querySelectorAll(".step").forEach((element) => {
      element.classList.add("d-none");
    });
    document.querySelector(`.step-${step}`).classList.remove("d-none");
    updateStepper(step);
  }
  function updateStepper(step) {
    document.querySelectorAll(".stepper-item").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector(`#stepper-${step}`).classList.add("active");
  }

  document.querySelectorAll(".next-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  document.querySelectorAll(".prev-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  document.querySelector(".submit-btn").addEventListener("click", () => {
    alert("Form submitted!");
  });
});

const packages = document.querySelectorAll(".package");

if (packages) {
  packages.forEach((packageDiv) => {
    packageDiv.addEventListener("click", function () {
      packages.forEach((pkg) => pkg.classList.remove("active"));

      this.classList.add("active");
    });
  });
}
