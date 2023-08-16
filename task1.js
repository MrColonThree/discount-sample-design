
document.getElementById('btn-apply').addEventListener('click', function(){
  // Price
  const priceInput = document.getElementById('price');
  const priceString = priceInput.innerText;
  const price = parseFloat(priceString);
  // console.log(price);
  // Percentage
  const percentageInput = document.getElementById('percentage');
  const percentageString = percentageInput.innerText;
  const percentage = parseFloat(percentageString);
  // console.log(percentage);

  // Calculate discount

  const discountPrice = price - (price * (percentage / 100));
  // console.log(discountPrice);

  const newText= document.createElement('h4')
  newText.innerText = 'Please Pay : ' + discountPrice+'$';
  
  const discountOutput = document.getElementById('discount-output');
  if (discountOutput.childElementCount === 0) {
    discountOutput.appendChild(newText);
  }
})