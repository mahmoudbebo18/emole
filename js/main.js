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

  const nextBtn = document.querySelectorAll(".next-btn");

  if (nextBtn) {
    nextBtn.forEach((button) => {
      button.addEventListener("click", () => {
        if (currentStep < totalSteps) {
          currentStep++;
          showStep(currentStep);
        }
      });
    });
  }


  const prevBtns = document.querySelectorAll(".prev-btn");

  if (prevBtns) {
    prevBtns.forEach((button) => {
      button.addEventListener("click", () => {
        if (currentStep > 1) {
          currentStep--;
          showStep(currentStep);
        }
      });
    });
  }



  const subBtn = document.querySelector(".submit-btn")
  if (subBtn) {
    subBtn.addEventListener("click", () => {
      alert("Form submitted!");
    });
  }
})

const packages = document.querySelectorAll(".package");

if (packages) {
  packages.forEach((packageDiv) => {
    packageDiv.addEventListener("click", function () {
      packages.forEach((pkg) => pkg.classList.remove("active"));

      this.classList.add("active");
    });
  });
}




$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 20,
    rtl: true,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
      '<img src="/images/next_owl.svg" alt="Previous">',
      '<img src="/images/prev_owl.svg" alt="Next">'
    ],
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const otpInputs = document.querySelectorAll('.otp-input');
  function focusFirstInput() {
    console.log(otpInputs[0]);
    otpInputs[0].focus();
  }

  function updateInputStyles() {
    otpInputs.forEach(input => {
        if (input.value.length > 0) {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    });
}

  if (otpInputs) {
    otpInputs.forEach((input, index) => {
      input.addEventListener('input', function (e) {
        const value = e.target.value;
        updateInputStyles();
        if (value.length === 1 && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
        if (index === otpInputs.length - 1) {
          otpInputs[index].blur();
        }
      });
    });
    focusFirstInput();
  }

});

