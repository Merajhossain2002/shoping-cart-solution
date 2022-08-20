document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    updateValue("phone-number-field", true, 1219, "phone-total");
    subtotal(
      "phone-total",
      "case-total",
      "sub-total",
      "tax-amount",
      "final-total"
    );
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    updateValue("phone-number-field", false, 1219, "phone-total");
    subtotal(
      "phone-total",
      "case-total",
      "sub-total",
      "tax-amount",
      "final-total"
    );
  });
