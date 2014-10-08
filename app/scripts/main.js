$(document).ready(function(){


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
  var productPath = product.url;

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
  productDisplay = "<li><a href='" + productPath + "'><div class='productBox'>" + imageTag + "<div class='productInfo'>" + titleTag + shopTag + priceTag + currencyTag + "</div></div></a></li>";

  // Append Each Product To my Products List
  container.append(productDisplay);
});

//Add hover functionality with jQuery
var productItem = $('#productList li');


productItem.on({

  mouseenter: function () {
        //stuff to do on mouse enter
        var heartTag = "<a href='http://google.com' class='heart'><img src='../images/heart.png'></a>";

        var hamburgerTag = "<a href='http://google.com' class='hamburger'><img src='../images/hamburger.png'></a>";

      $(this).append(heartTag);
      $(this).append(hamburgerTag);

    },
    mouseleave: function () {
        //stuff to do on mouse leave
  $('.heart').remove();
  $('.hamburger').remove();
    }


});

});
