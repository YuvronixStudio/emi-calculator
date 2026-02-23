# EMI Calculator (Plug & Play)

A clean, lightweight, and fully responsive **EMI (Equated Monthly Installment) Calculator** built using **HTML, CSS, and vanilla JavaScript**.

Designed to be **plug-and-play** — upload the files and it works instantly.  
No frameworks. No dependencies. No setup pain.

---

## ✨ Features

- Instant EMI calculation (no page reloads)
- Calculates:
  - Monthly EMI
  - Total Interest Payable
  - Total Amount Payable
- Mobile-first & fully responsive UI
- Accurate EMI formula (bank-grade)
- Handles edge cases:
  - Empty inputs
  - Invalid values
  - 0% interest rate
- Clean, readable, and well-commented code
- Easy to customize (currency, colors, labels)

---

## 🧮 EMI Formula Used

EMI = [P × R × (1 + R)^N] / [(1 + R)^N − 1]


Where:
- **P** = Loan Amount  
- **R** = Monthly Interest Rate  
- **N** = Loan Tenure (in months)

---

## 🛠 Tech Stack

- HTML
- CSS
- Vanilla JavaScript

No libraries. Works everywhere.

---

## 📦 Project Structure

emi-calculator/
├── index.html
├── styles.css
├── script.js
├── README.md
└── LICENSE

---

## 🚀 How to Use

1. Download or clone this repository  
2. Upload all files to your website folder  
3. Open `index.html` in a browser  
4. Done — the calculator works instantly

---

## 🎨 Customization

### Change currency symbol
Open `script.js` and edit:
``` js
const CURRENCY = "₹";
Change colors or fonts
Edit styles.css

Change labels or text
Edit index.html

No advanced coding required.

📄 License
This project is licensed under the MIT License.
You are free to use it in personal or commercial projects.

💡 Use Cases
Finance & loan websites

Blogs & content sites

Student projects

Landing pages & micro-tools

WordPress sites (via iframe or embed)

⭐ Support
If you find this useful, consider giving it a ⭐
It helps the project grow.
