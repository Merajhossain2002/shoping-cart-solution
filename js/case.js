document.getElementById("btn-case-plus").addEventListener("click", function () {
  updateValue("case-number-field", true, 59, "case-total");
  subtotal(
    "phone-total",
    "case-total",
    "sub-total",
    "tax-amount",
    "final-total"
  );
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    updateValue("case-number-field", false, 59, "case-total");
    subtotal(
      "phone-total",
      "case-total",
      "sub-total",
      "tax-amount",
      "final-total"
    );
  });
