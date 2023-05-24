//get total users and display 
const totalCountPageHeader = document.querySelector("div.page-header.cf");
const totalCountH3 = totalCountPageHeader.querySelector("h3");
totalCountH3.innerHTML = "Total: " + `${users.length}`;

// function to create list of users
const createListItem = (user) => {
  // create a new <li> element
  const listItem = document.createElement("li");
  listItem.className = "contact-item cf";

  // create new <div> for the contact details
  const contactDetails = document.createElement("div");
  contactDetails.className = "contact-details";

  // create an <img> element for the image
  const image = document.createElement("img");
  image.className = "avatar";
  image.src = user.image;

  // create a <span> element for the user's name
  const name = document.createElement("h3");
  name.textContent = user.name;

  // create contact email span
  const email = document.createElement("span");
  email.className = "email";
  email.textContent = user.name.replace(" ", ".") + "@example.com";

  // append image, name, and email to the contact details div
  contactDetails.appendChild(image);
  contactDetails.appendChild(name);
  contactDetails.appendChild(email);

  // create new <div> for the joined details
  const joinedDetails = document.createElement("div");
  joinedDetails.className = "joined-details";

  // create a <span> element for the user's join date
  const joinedDate = document.createElement("span");
  joinedDate.className = "date";
  joinedDate.textContent = "Joined " + user.joined;

  // append joined date to joined details div
  joinedDetails.appendChild(joinedDate);

  // append the divs element to the list item li
  listItem.appendChild(contactDetails);
  listItem.appendChild(joinedDetails);

  return listItem;
}


//pagination
const paginationNumbers = document.querySelector(".pagination");
const contactList = document.querySelector(".contact-list");
const itemsPerPage = 10;
const totalPageCount = Math.ceil(users.length / itemsPerPage);
let currentPage = 1;

const getPaginationNumbers = () => {
  for (let i = 1; i <= totalPageCount; i++) {
    const btn = paginationNumbersCreate(i);
    paginationNumbers.appendChild(btn);
  }
};

const paginationNumbersCreate = (page) => {
  
  const newButton = document.createElement("li");
  const a = document.createElement("a");
  a.innerText = page;
  newButton.appendChild(a);

  ///this is to set the active on the current page clicked
  if (currentPage === page){
    a.classList.add("active");
  }
  // listener
  newButton.addEventListener("click", () => {
    // set currentPage to clicked btn and display users
    currentPage = page;
    displayUsersList(users, currentPage);

    // remove the active on previous button
    const currentBtn = document.querySelector(".pagination > li a.active");
    currentBtn.classList.remove("active");

    // palce active on newly clicked button
    let clickedButton = newButton.querySelector("a");
    clickedButton.classList.add("active");
  });

  return newButton;
};


const displayUsersList = (usersList, currentPage) => {
  // to empty the page when switching
  contactList.innerHTML = "";

  const initRange = (currentPage - 1) * itemsPerPage;
  const newRange = initRange + itemsPerPage;

  for(i=initRange; i < newRange && i < usersList.length; i++){
    const user = usersList[i];
    const listItem = createListItem(user);
    contactList.appendChild(listItem);
  }
};

//initial display of 10 users
displayUsersList(users, currentPage);
getPaginationNumbers();
