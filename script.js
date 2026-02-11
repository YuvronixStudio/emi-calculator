const loanInput = document.getElementById("loanAmount");
const rateInput = document.getElementById("interestRate");
const tenureInput = document.getElementById("tenure");

const emiEl = document.getElementById("emi");
const interestEl = document.getElementById("totalInterest");
const totalEl = document.getElementById("totalPayment");

const CURRENCY = "₹"; // ← EASY CUSTOMIZATION

function calculateEMI() {
  const P = parseFloat(loanInput.value);
  const annualRate = parseFloat(rateInput.value);
  const N = parseInt(tenureInput.value);

  if (!P || !N || P <= 0 || N <= 0) {
    resetValues();
    return;
  }

  // Monthly interest rate
  const R = annualRate ? annualRate / 12 / 100 : 0;

  let emi;

  if (R === 0) {
    emi = P / N;
  } else {
    emi = (P * R * Math.pow(1 + R, N)) /
          (Math.pow(1 + R, N) - 1);
  }

  const totalPayment = emi * N;
  const totalInterest = totalPayment - P;

  emiEl.textContent = CURRENCY + format(emi);
  totalEl.textContent = CURRENCY + format(totalPayment);
  interestEl.textContent = CURRENCY + format(totalInterest);
}

function format(num) {
  return num.toFixed(2);
}

function resetValues() {
  emiEl.textContent = CURRENCY + "0";
  interestEl.textContent = CURRENCY + "0";
  totalEl.textContent = CURRENCY + "0";
}

// Instant calculation
[loanInput, rateInput, tenureInput].forEach(input =>
  input.addEventListener("input", calculateEMI)
);
