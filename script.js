function fetchBill() {
  const mobile = document.getElementById('mobileNumber').value.trim();
  if (!/^\d{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  // 🔹 Mock database
  const billDatabase = {
    "8800392483": {    name: "adi", amount: 100, },
    "8860614053": {    name: "satpal", amount: 200, },
     "7290900267": {    name: "JAI", amount: 582, },
     "9811397271": {    name: "KHUSH", amount: 892, },
     "8800392483": {    name: "John", amount: 354, },
     "8800392483": {    name: "John", amount: 782, },
     "8800392483": {    name: "John", amount: 45451441, },
     "8800392483": {    name: "John", amount: 45451441, },
     "8800392483": {    name: "John", amount: 45451441, },
     "8800392483": {    name: "John", amount: 45451441, },
     "8800392483": {    name: "John", amount: 45451441, },
     "8800392483": {    name: "John", amount: 45451441, },
     "8800392483": {    name: "John", amount: 45451441, },
    "8800392483": {    name: "John", amount: 45451441, },    
  };

  const bill = billDatabase[mobile];

  if (bill) {
    document.getElementById('billMobile').textContent = mobile;
    document.getElementById('billName').textContent = bill.name;
    document.getElementById('billAmount').textContent = bill.amount.toFixed(2);
    document.getElementById('billSection').classList.remove('hidden');
  } else {
    alert("No bill found for this mobile number.");
    document.getElementById('billSection').classList.add('hidden');
  }
}




