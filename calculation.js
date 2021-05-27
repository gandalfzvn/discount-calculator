
let $myForm = $(".myForm");

$myForm.on("submit", function(event){
  event.preventDefault();

  let price = this.price.value;
  let discount = this.discount.value;

  try {
    let newPrice = price * (1 - (discount/100));
    newPrice = newPrice.toFixed(2);
    let savings = price - newPrice;
    savings = savings.toFixed(2);

    $("#priceAfterDiscount").text(newPrice + " €");
    $("#savings").text("Du sparar " + savings + " €");
  }
  catch(err) {

  }

})
