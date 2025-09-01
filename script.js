function fetchBill() {
  const mobile = document.getElementById('mobileNumber').value.trim();
  if (!/^\d{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // 🔹 Mock database
  const billDatabase = {
    "8800392483": {
      name: "John",
      amount: 45451441,
      dueDate: "2025-09-10"
    },
    "9123456789": {
      name: "Priya Sharma",
      amount: 300.00,
      dueDate: "2025-09-05"
    }
  };

  const bill = billDatabase[mobile];

  if (bill) {
    document.getElementById('billMobile').textContent = mobile;
    document.getElementById('billName').textContent = bill.name;
    document.getElementById('billAmount').textContent = bill.amount.toFixed(2);
    document.getElementById('billDueDate').textContent = bill.dueDate;
    document.getElementById('billSection').classList.remove('hidden');
  } else {
    alert("No bill found for this mobile number.");
    document.getElementById('billSection').classList.add('hidden');
  }
}



