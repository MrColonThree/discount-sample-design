document
  .getElementById("btn-coupon-apply")
  .addEventListener("click", function () {
    // Price
    const itemPriceInput = document.getElementById("item-price");
    const itemPriceString = itemPriceInput.innerText;
    const itemPrice = parseFloat(itemPriceString);
    // console.log(price);
    // Percentage
    const couponPercentageInput = document.getElementById("coupon-percentage");
    const enteredCouponCode = couponPercentageInput.value;
    // Get the value of the input

    if (enteredCouponCode !== "DISC30") {
      alert("Invalid Coupon!");
      
    } else {
      const couponDiscountPrice = itemPrice - (itemPrice * (30 / 100));
      console.log(couponDiscountPrice);
      // Proceed with further actions using the couponDiscountPrice
      

      const couponNewText = document.createElement("h4");
      couponNewText.innerText = "Please Pay : " + couponDiscountPrice + "$";

      const couponDiscountOutput = document.getElementById(
        "coupon-discount-output"
      );
      if (couponDiscountOutput.childElementCount === 0) {
        couponDiscountOutput.appendChild(couponNewText);
      }
    }
    couponPercentageInput.value = "";
  });
