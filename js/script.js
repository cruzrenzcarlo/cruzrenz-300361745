//get total users and display 
const totalCountPageHeader = document.querySelector("div.page-header.cf");
const totalCountH3 = totalCountPageHeader.querySelector("h3");
totalCountH3.innerHTML = "Total: " + `${users.length}`;

//this is displaying all users
//get user list from data.js

// used to iterate for each users in user and append in the ul
function createListItem(user) {
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
    const btn = createPageNumberBtn(i);
    paginationNumbers.appendChild(btn);
  }
};

//below this is not working - pagination function to retrieve per 10
const createPageNumberBtn = (page) => {
  // create pageNumber btn
  const listBtn = document.createElement("li");
  const a = document.createElement("a");
  a.innerText = page;
  listBtn.appendChild(a);

  // add active className to current page
  if (currentPage === page) a.classList.add("active");

  // add onClick event listener to btn
  listBtn.addEventListener("click", () => {
    // set currentPage to clicked btn and display users
    currentPage = page;
    displayUsersList(users, currentPage);

    // remove active className of current active btn
    const currentBtn = document.querySelector(".pagination > li a.active");
 
    currentBtn.classList.remove("active");

    // add active className to clicked btn
    let itemBtn = listBtn.querySelector("a");
    itemBtn.classList.add("active");
  });

  return listBtn;
};


const displayUsersList = (usersList, currentPage) => {
  // empty list when switching page
  contactList.innerHTML = "";

  const initRange = (currentPage - 1) * itemsPerPage;
  const newRange = initRange + itemsPerPage;
  const newUsersList = usersList.slice(initRange, newRange);

  newUsersList.forEach((user) => {
    const listItem = createListItem(user);
    contactList.appendChild(listItem);
  });
};

displayUsersList(users, currentPage);
getPaginationNumbers();


//this is a new comment









// const handleActivePageNumber = () => {
//   document.querySelectorAll(".pagination").forEach((button) => {
//     button.classList.remove("active");
//     const pageIndex = Number(button.getAttribute("page-index"));
//     if (pageIndex == currentPage) {
//       button.classList.add("active");
//     }
//   });
// };


// const setCurrentPage = (pageNum) => {
//   currentPage = pageNum;
//   handleActivePageNumber();
//   const prevRange = (pageNum - 1) * itemsPerPage;
//   const currRange = pageNum * itemsPerPage;
//   listItemsPagination.forEach((item, index) => {
//     item.classList.add("hidden");
//     if (index >= prevRange && index < currRange) {
//       item.classList.remove("hidden");
//     }
//   });
// }

// window.addEventListener("load", () => {
//   getPaginationNumbers();
//   setCurrentPage(1);

//   document.querySelectorAll(".pagination").forEach((button) => {
//     const pageIndex = Number(button.getAttribute("page-index"));
//     if (pageIndex) {
//       button.addEventListener("click", () => {
//         setCurrentPage(pageIndex);
//       });
//     }
//   });
// });






