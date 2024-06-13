//document.getElementById("search")
   //.addEventListener("submit", function (event) {
   //  event.preventDefault();
    // const query = document.querySelector("#search input").value;
    //alert("You searched for: " + query);
    //this function will collect the info of what the user has searched for and tell them what they have searched
  // });

//Arrays
//Technically a list
//you store multiple values
// the question is, an array of what?
// array of flights
//inside array we have ojects
//var arrayNumbers = [1, 2, 3, 4, 5];
//var arrayStrting = ["lol", "here we go", "start"];

//object
//properties
//var keyboard = {
// keys: "abc",
//name: "Logitech",
//};

// var flights = [
//   {
//     name: "Uranus Uncharted",
//     price: 0,
//     discounted: 50000,
//     Shuttle: "The Endeavor",
//     Tags: "Uranus, Workshop, Adventure",
//     reviews: "12 customer reviews",
//     Date: "16 May - 19 July",
//     SKU: "SKU: SS735",
//     flightDescription:
//       "Embark on a cosmic adventure to Uranus with our 'Uranus Unveiled' tour. Explore its icy atmosphere and captivating moons. Experience thrilling zero-gravity excursions, witness mesmerizing auroras, and immerse yourself in celestial photography workshops. With luxury accommodations and expert guides, discover the wonders of Uranus in a journey of a lifetime",
//   },
//   {
//     name: "The Classic Mars Experience",
//     price: 50000,
//     discounted: 25000,
//     Shuttle: "The Endeavor",
//     Tags: "Uranus, Workshop, Adventure",
//     reviews: "36 customer review",
//     Date: "16 June - 19 July",
//     SKU: "SKU: SS001",
//     flightDescription:
//       "Embark on a Mars vacation: red deserts, ancient relics, and towering canyons await. Enjoy low-gravity hiking, rover trips to Olympus Mons, and stargazing under Phobos and Deimos. Unforgettable adventures beckonon the rust-colored landscapes of the Red Planet.",
//   },
// ];

var flightContainer = document.getElementById("flightsContainer");
//because array we want to loop
//what do we want to do in this function
//display we want to render.. where?

//map builds up another array of what we want it to be based on the array given
//for each (each element of array)
//for each flight, we want to create a div element

//created out function to display
//list of flights
//keyword list
//list === array
//run through array
// for each
// for each flight
// for each flight we want to add a template to the html

//flights.foreach(//what do we want to do with our individual flight)
//foreach(//what function to run inside)

//initial empty html string
//on each / for each flight we add out template string to html

//ternary operator

//what we want to do
//how are we going to add to cart
//local Storage
//session storage

//store cart items in session storage to access it anywhere
//(params)
//what are we passing into function

//store our cart items inside of the session storage
//new array to store our cart items
var cartItems = [];
function marsAddToCart() {
  var cartItem = {
    name: "The Classic Mars Experience",
    price: 25000,
    qta: 1,
  };

  cartItems.push(cartItem);
  //two params
  //identifier
  //value (value needs to be stored as string, number, boolean)

  //first check what is in that identifier
  var previousValue = JSON.parse(sessionStorage.getItem("CART"));
  //if  it is not in session then we add it
  if (previousValue !== null) {
    console.log(previousValue);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  } else {
    //if it is empty
    cartItems.push(cartItem);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  }
}

function neptuneAddToCart() {
  var cartItem = {
    name: "Neptune’s Cosmic Dive",
    price: 45000,
    qta: 1,
  };

  cartItems.push(cartItem);

  var previousValue = JSON.parse(sessionStorage.getItem("CART"));
  //if  it is not in session then we add it
  if (previousValue !== null) {
    console.log(previousValue);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  } else {
    //if it is empty
    cartItems.push(cartItem);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  }
}

function jupiterAddToCart() {
  var cartItem = {
    name: "The Giant’s Journey",
    price: 65000,
    qta: 1,
  };

  cartItems.push(cartItem);

  var previousValue = JSON.parse(sessionStorage.getItem("CART"));
  //if  it is not in session then we add it
  if (previousValue !== null) {
    console.log(previousValue);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  } else {
    //if it is empty
    cartItems.push(cartItem);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  }
}

function saturnAddToCart() {
  var cartItem = {
    name: "Ring Around a Saturn",
    price: 40000,
    qta: 1,
  };

  cartItems.push(cartItem);

  var previousValue = JSON.parse(sessionStorage.getItem("CART"));
  //if  it is not in session then we add it
  if (previousValue !== null) {
    console.log(previousValue);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  } else {
    //if it is empty
    cartItems.push(cartItem);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  }
}

function uranusAddToCart() {
  var cartItem = {
    name: "Uranus Uncharted",
    price: 50000,
    qta: 1,
  };

  cartItems.push(cartItem);

  var previousValue = JSON.parse(sessionStorage.getItem("CART"));
  //if  it is not in session then we add it
  if (previousValue !== null) {
    console.log(previousValue);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  } else {
    //if it is empty
    cartItems.push(cartItem);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  }
}

function moonAddToCart() {
  var cartItem = {
    name: "Moonlight Meander",
    price: 15000,
    qta: 1,
  };

  cartItems.push(cartItem);

  var previousValue = JSON.parse(sessionStorage.getItem("CART"));
  //if  it is not in session then we add it
  if (previousValue !== null) {
    console.log(previousValue);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  } else {
    //if it is empty
    cartItems.push(cartItem);
    sessionStorage.setItem("CART", JSON.stringify(cartItems));
  }
}

// function displayFlights() {
//   console.log("displayFlights");
//   var html = "";

//   var given = "apple";

//   var hasGivenApple =
//     given === "apple" ? "yes its an apple" : "no its not an apple";

//   flights.forEach(function (flight) {
//     html += `<section class="neptuneCon"><div class="flightLeft">
//         <img
//           src="../Assets/RedPlanetVentures/Assets/Images/flightMars.png"
//           height="100%"
//         />
//       </div>
//       <div class="flightRight">
//         <h1>${flight.name}</h1>
//         <h3>R ${flight.discounted} ${
//       flight.price === 0 ? "" : `<s>${flight.price}</s>`
//     } </h3>
//         <h5>${flight.reviews}</h5>
//         <p>
//             ${flight.flightDescription}
//         </p>
//         <div class="buttonCon">
//         <button2>- 1 +</button2>
//         <button onclick="addToCart("${JSON.stringify(
//           flight
//         )}")">Book Now</button></div>
//             <h5>SKU: SS001</h5>
//             <h5>Shuttle: The Opulence</h5>
//             <h5>Tags: Mars, Luxury, Sale </h5>
//             <h5>Date : 16 June - 19 July</h5>
//       </div>
// </section>`;
//   });
//   console.log(html);
//   flightContainer.innerHTML = html;
// }

//THINGS TO NOTE
//Html and Javascript read from top to bottom

//what do we want to do
//How are we going to open it
//Hide and show with class
//what are we referencing?
//if we are then assign id to div
//reference id from div (assign to variable)
//store html element in var
var cartModal = document.getElementById("cartModal");
var grandTotalElement = document.getElementById("grandTotal");

//assigning the function to the button
//what do we want to do inside of the function
//we want to add and remove the "hideModal" class

function OpenCartModal() {
  cartModal.classList.remove("hideModal");
  var html = "";

  //we call sessionStorage
  var cartItems = JSON.parse(sessionStorage.getItem("CART"));

  if (cartItems === null) {
    cartModal.innerHTML += `<p>No Cart Items</p>`;
  } else {
    cartItems.forEach((item) => {
      var cartItem = `<div class="CartItem">
        <h3>${item.name}</h3>
        price: R ${item.price} QTA: ${item.qta}
        <button onclick="removeCartItem('${item.name}')">remove</button>
      </div>`;

      html += cartItem;

      //values from items in cart
      //prices into array
      //loop through prices and add them up
      var allPrices = cartItems.map((cartItem) => cartItem.price);
      var total = 0;

      for (let index = 0; index < allPrices.length; index++) {
        total += allPrices[index];
      }

      // var sum = cartItems.reduce(
      //   (accumulator, cartItem) => accumulator + cartItem.price,
      //   0
      // );
      // console.log(sum);

      grandTotalElement.innerText = total;
    });
    cartModal.innerHTML += html;
  }
}

function removeCartItem(name) {
  //get all things from session storage
  var previousValue = JSON.parse(sessionStorage.getItem("CART"));

  var itemFromCartToRemove = previousValue.find(
    (cartItem) => cartItem.name === name
  );

  const newCartItems = previousValue.filter(function (cartItem) {
    return cartItem.name !== itemFromCartToRemove.name;
  });

  sessionStorage.setItem("CART", JSON.stringify(newCartItems));
}

//what do we want to do
//close modal
//Hide and show with class

function CloseModal() {
  cartModal.classList.add("hideModal");
}

function SubmitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name && email && subject && message) {
    alert(
      `Thank you ${name} for filling in your details. We will mail you at ${email}`
    );
  } else {
    alert("Please fill in all the fields");
  }
}