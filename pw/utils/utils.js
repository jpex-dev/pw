//Abre o modal
function open() {
  const button = document.getElementById("myModal");
  button.style.display = "block";
}
//faz fetch,e dá display nos cards, adiciona tambem função ao input para pesquisa
function jsonget() {
  document.getElementById("searchInput").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll(".filtered-list li");

    items.forEach(function (item) {
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });

  const cardsContainer = document.getElementById("cardsContainer");
  let cardCount = 0;

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        if (cardCount < 3) {
          const card = document.createElement("div");
          card.classList.add("card");

          const title = document.createElement("h3");
          title.textContent = item.title;

          const body = document.createElement("p");
          body.textContent = item.body;

          card.appendChild(title);
          card.appendChild(body);

          cardsContainer.appendChild(card);

          cardCount++;
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

//Faz aparecer o Hello wolrd
function helloworld() {
  alert("Hello world");
  const hellowolrdContainer = document.getElementById("helloworldContainer");
  const hellowolrd = document.createElement("div");
  hellowolrd.id = "hellowolrd";
  hellowolrd.textContent = "Hello, World";
  hellowolrd.style.marginTop = "50px";
  hellowolrdContainer.appendChild(hellowolrd);
}

// função para aparição do modal
function modal() {
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("myBtn");

  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// função de display do mapa
function map() {
  initMap();

  const mapContainer = document.getElementById("map");
  mapContainer.style.display = "none";

  const toggleCheckbox = document.getElementById("toggleCheckbox");
  toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      mapContainer.style.display = "block";
      mymap.invalidateSize();
    } else {
      mapContainer.style.display = "none";
    }
  });
}

//inicializa o mapa
function initMap() {
  var mymap = L.map("map").setView([41.5503, -8.4201], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(mymap);
}

// função change backgorund do botão ao clicar
function clicked() {
  const body = document.getElementById("buttoncolor");
  body.style.transition = "background-color 0.3s ease";
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  body.style.backgroundColor = randomColor;
}

// função de submeter form
function submited() {
  var form = document.getElementById("loginForm");
  form.onsubmit = function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  };
}

//função validar campos do form
function validateForm() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");
  var isValid = true;

  usernameError.textContent = "";
  passwordError.textContent = "";

  if (username.value.trim() === "") {
    usernameError.textContent = "Username is required";
    isValid = false;
    username.style.borderColor = "red";
    username.style.boxShadow = "red";
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
    password.style.borderColor = "red";
    password.style.boxShadow = "red";
  } else if (password.value.length < 2) {
    passwordError.textContent = "Password must be at least 2 characters long";
    isValid = false;
    password.style.borderColor = "red";
    password.style.boxShadow = "red";
  }

  return isValid;
}

//Abri página sem atualizar
function openTab(evt, tabName) {
  //document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");

  var body = document.querySelector("body");
  switch (tabName) {
    case "tab1":
      //body.style.backgroundImage = "url('Imagens/praia.jpeg')";
      body.style.backgroundColor = "red";
      break;
    case "tab2":
      //body.style.backgroundImage = "url('Imagens/praia.jpeg')";
      body.style.backgroundColor = "blue";
      break;
    case "tab3":
      //body.style.backgroundImage = "url('Imagens/praia.jpeg')";
      body.style.backgroundColor = "green";
      break;
    default:
      break;
  }
}
// adicionar tarefa
function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText !== "") {
    let listItem = document.createElement("li");
    listItem.innerHTML = `
            <input type="checkbox" class="complete-btn">
            <span class="task-text">${taskText}</span>
            <span class="delete-btn">❌</span>
        `;
    taskList.appendChild(listItem);
    taskInput.value = "";
    attachDeleteListener(listItem);
    attachCompleteListener(listItem);
  } else {
    alert("Please enter a task.");
  }
}
//apagar tarefa
function deleteTask(event) {
  let listItem = event.target.parentElement;
  listItem.remove();
}
//dar event ao botão de apagar do todo
function attachDeleteListener(listItem) {
  let deleteBtn = listItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteTask);
}
//todo feito
function completeTask(event) {
  let taskText = event.target.nextElementSibling;
  if (event.target.checked) {
    taskText.style.textDecoration = "line-through";
  } else {
    taskText.style.textDecoration = "none";
  }
}
function attachCompleteListener(listItem) {
  let completeBtn = listItem.querySelector(".complete-btn");
  completeBtn.addEventListener("change", completeTask);
}
