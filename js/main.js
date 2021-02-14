const selectedAll = document.querySelectorAll(".selected");

selectedAll.forEach((selected) => {
  const optionsContainer = selected.previousElementSibling;
  const searchBox = selected.nextElementSibling;

  const optionsList = optionsContainer.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    if (optionsContainer.classList.contains("active")) {
      optionsContainer.classList.remove("active");
    } else {
      let currentActive = document.querySelector(".options-container.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      optionsContainer.classList.add("active");
    }

    searchBox.value = "";
    filterList("");

    if (optionsContainer.classList.contains("active")) {
      searchBox.focus();
    }
  });

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
  const filterList = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach((option) => {
      let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
      if (label.indexOf(searchTerm) != -1) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  };
});

var numbers = document.getElementById("box");
for (var a = 0; a < 6; a++) {
  var span = document.createElement("span");
  span.textContent = a;
  numbers.appendChild(span);
}
var num = numbers.getElementsByTagName("span");
var index = 0;
function nextNum() {
  num[index].style.display = "none";
  index = (index + 1) % num.length;
  num[index].style.display = "initial";
}
function prevNum() {
  num[index].style.display = "none";
  index = (index - 1 + num.length) % num.length;
  num[index].style.display = "initial";
}
