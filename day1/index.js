function BuildCard(user) {
  let card = document.createElement("div");
  card.classList.add("card");

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");

  let img = document.createElement("img");
  img.classList.add("user-image");
  img.src = user.picture.large;
  cardHeader.appendChild(img);

  let userInfo = document.createElement("div");
  userInfo.classList.add("user-info");

  let userName = document.createElement("h2");
  userName.classList.add("user-name");
  userName.textContent = user.name.first + " " + user.name.last;
  userInfo.appendChild(userName);

  let userEmail = document.createElement("p");
  userEmail.classList.add("user-email");
  userEmail.textContent = user.email;
  userInfo.appendChild(userEmail);

  cardHeader.appendChild(userInfo);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let userAge = document.createElement("p");
  userAge.classList.add("user-age");
  let agespan = document.createElement("span");
  agespan.textContent = "Age: ";
  userAge.appendChild(agespan);
  userAge.append(user.dob.age);

  let userGender = document.createElement("p");
  userGender.classList.add("user-gender");
  let Genderspan = document.createElement("span");
  Genderspan.textContent = "Gender: ";
  userGender.appendChild(Genderspan);
  userGender.append(user.gender);

  let userAddress = document.createElement("p");
  userAddress.classList.add("user-address");
  let Addressspan = document.createElement("span");
  Addressspan.textContent = "Address: ";
  userAddress.appendChild(Addressspan);
  userAddress.append(user.location.city + "," + user.location.state);

  let userPhone = document.createElement("p");
  userPhone.classList.add("user-phone");
  let Phonespan = document.createElement("span");
  Phonespan.textContent = "Phone: ";
  userPhone.appendChild(Phonespan);
  userPhone.append(user.phone);

  cardBody.appendChild(userAge);
  cardBody.appendChild(userGender);
  cardBody.appendChild(userAddress);
  cardBody.appendChild(userPhone);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);

  return card;
}


function getUsers(){
    // Clear existing cards
    document.querySelector(".container").innerHTML = "";
    // Fetch random user data
    fetch("https://randomuser.me/api/?results=4")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((user) => {
      let card = BuildCard(user);
      document.querySelector(".container").appendChild(card);
    });
  })
  .catch((error) => console.error("Error:", error));
}

getUsers();

// Add event listener to filter users by gender
document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    getUsers();
});

