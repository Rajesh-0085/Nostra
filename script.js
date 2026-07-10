//side navbar
var sidenavbar = document.querySelector(".side-navbar");
function showSideNavbar() {
    sidenavbar.style.display = "block";
}
function hideSideNavbar() {
    sidenavbar.style.display = "none";
}
// search

var collections = document.querySelector(".collection-items");
var search = document.querySelector(".search-input");
var collectionItems = collections.querySelectorAll(".collection-item");

search.addEventListener("keyup", function (event) {

    var enteredValue = event.target.value.toUpperCase();

    for (var i = 0; i < collectionItems.length; i++) {

        var collectionName = collectionItems[i]
            .querySelector("h2")
            .textContent
            .toUpperCase();

        if (collectionName.indexOf(enteredValue) > -1) {
            collectionItems[i].style.display = "block";
        } else {
            collectionItems[i].style.display = "none";
        }
    }

});



var buttons = document.querySelectorAll(".fashion-button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        var item = this.parentElement;

        if(item.querySelector("h2") && item.querySelector("p")){

            var name = item.querySelector("h2").textContent;
            var price = item.querySelector("p").textContent;

            var cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push({
                name: name,
                price: price
            });

            localStorage.setItem("cart", JSON.stringify(cart));

            alert(name + " Added to Cart");
        }

    });

});