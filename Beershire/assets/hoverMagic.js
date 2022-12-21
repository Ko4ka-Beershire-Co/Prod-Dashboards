// Hover magic

// This script is used to make the hover effect on the h2 elements
// we get all buttons with the class "card-data", which are the h2 elements
const priceBtns = document.querySelectorAll(".card-data");

// On hover
// we check if priceBtns is not empty, if it is not empty we loop through all the elements
priceBtns &&
  priceBtns.forEach((priceBtn) => {
    priceBtn.addEventListener("mouseover", (e) => {
      const span = document.createElement("span");
      span.classList.add("toolBox");
      span.textContent = "Загрузка ....";
      priceBtn.appendChild(span);


      // Fetch JSON file with 2 columns: Number and Prompt value (text)
      fetch(
        "https://opensheet.elk.sh/14ePg5bfMRZpy7tQZCI2K8CXreXBN97BkDYTj8nedYH4/API-out"
      )
        .then((response) => response.json())
        .then((data) => {
          
          // Here
          span.textContent = `Среднее: % / мес`;

          
        })
        .catch((err) => {
          span.textContent = "Oops, something went wrong";
          //   console.log(err);
        });
    });
  });

// On mouse leave
// we check if priceBtns is not empty again, if it is not empty we loop through all the elements
priceBtns &&
  priceBtns.forEach((priceBtn) => {
    priceBtn.addEventListener("mouseout", (e) => {
      const span = e.target.querySelector(".toolBox");
      console.log(span);
      priceBtn.removeChild(span);
    });
  });
