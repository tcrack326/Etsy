$(document.ready)


//Prepare variables for the product list and container
var container = $('#productList'),
    titleTag,imageTag, priceTag, currencyTag, shopTag;

var productArray = products.results;

//add the products to the list
productArray.forEach(function(product){
  var title = product.title;
  var image = product.Images[0].url_fullxfull;
  var price = product.price;
  var currency = product.currency_code;
  var shop = product.Shop.shop_name;

  // Build Image Tag for Each Product
  imageTag = "<img class='image' src='" + image + "' />";

  // Build Title tag
  titleTag = "<span class='title'>" + title + "</p>";

  // Build Price tag
  priceTag = "<span class='price'>" + price + "</span>";

  // Build Currency tag
  currencyTag = "<span class='currency'>" + currency +   "</span>";

  // Build Shop tag
  shopTag = "<span class='shop'>" + shop + "</span>";



  // Build Each Product Display
  productDisplay = "<li>" + "<div class='productBox'>" + imageTag + "<div class='productInfo'>" + titleTag + shopTag + priceTag + currencyTag + "</div></div></li>";

  // Append Each Product To my Products List
  container.append(productDisplay);
});
