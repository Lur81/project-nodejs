//1 - Acceder a las películas

// const getMovies = async (url) => {
//   try {
//     const response = await fetch(url);
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.log(error);
//   }
// };


// const getMovies = async ("http://localhost:5500/movies") => {
//   try {
//     const response = await fetch("http://localhost:5500/movies");
//     const responseJson = await response.json();
//     return responseJson;
//   } catch (error) {
//     console.log(error);
//   }
// };

//2º Función donde están los datos que me voy a traer

const mapeo = (frontMovies) => {
  return frontMovies.map((frontMovie) => ({
    title: frontMovie.title,
    director: frontMovie.director,
    year: frontMovie.year,
    duration: frontMovie.duration,
    genre: frontMovie.genre,
    valoration: frontMovie.valoration,
    synopsis: frontMovie.synopsis,
    billboard: frontMovie.billboard,
  }));
};

// 3ª Pintamos

const drawing = (drawMovies) => {

  const moviesList = document.querySelector("#frontmovies");
  const drawing = (drawMovies) => {
    const movieCard = `
      <div class="card" id="${drawMovies.title}">
        <div class="card-image">
          <img src="${drawMovies.billboard}" alt="${drawMovies.title}" />
        </div>
        <div class="card-title">
          <h4>${drawMovies.title}</h4>
        </div>
        <div class="card-info">
          <h3>#${drawMovies.title}</h3>
        </div>
      </div>
    `;
    moviesList.innerHTML += movieCard;
  };



//Orden ejecución funciones
//const arrayFrontMovies = [];
// const init = async () => {
//   for (let index = 1; index <= (data.info.numTotal/data.info.limit) + 1; index++) {
//     // data.results[]
//     const fetchedMovies = await getMovies(
//       `http://localhost:5500/movies?page=${index}`
//     );
//     arrayFrontMovies.push(fetchedMovies);
//   }
//   const mapedMovies = mapeo(arrayFrontMovies);
//   for (const drawMovies of mapedMovies) {
//     drawing(drawMovies);
//   }
 };

// init();


const searcher = () => {
  const input$$ = document.querySelector("#moviesearch");
  const moviesList = document.querySelector("#frontmovies");
  //console.log(ol$$);
  for (let movie of ol$$.children) {
    if (movie.id.includes(input$$.value)) {
      movie.style.display = "inline-block";
    } else {
      movie.style.display = "none";
    }
  }
};

//acceso LoGIN

const form = document.querySelector("form");
const submitBtn = document.querySelector("#submit-btn");
console.log(submitBtn);

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del botón de envío

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  // console.log(email);
  // console.log(password);

  // Enviar los datos de inicio de sesión al servidor mediante una solicitud HTTP (por ejemplo, usando la API fetch())
  fetch("http://localhost:5500/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json"},
  })
    .then((response) => response.json())
    .then((data) => {
      // Realizar acciones en función de la respuesta del servidor (por ejemplo, redirigir a la página de inicio si el inicio de sesión es exitoso)
      console.log(data);
      errorBox = document.querySelector("#error-box");  // pintar caja con id error-box y mostrarla cuando ocurra un error con display o no con display: none
      errorBox.innerHTML =data.message;
    })
    .catch((error) => {
      console.log(error);
    });
});

