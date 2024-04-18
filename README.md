# Pokedex 📚

This project is a Pokedex web application built using HTML, CSS, and JavaScript. It allows users to search for and view information about different Pokemon. 🌟

## Files 📁

The project has the following files:

- `index.html`: This file is the main HTML file for the Pokedex. It contains the structure and layout of the Pokedex user interface. 🖥️

- `css/styles.css`: This file is the CSS file for styling the Pokedex. It defines the styles for the HTML elements in the `index.html` file. 🎨

- `js/main.js`: This file is the JavaScript file for the Pokedex functionality. It handles fetching data from the PokeAPI and updating the UI dynamically. 🔄

## Usage 🚀

To run the Pokedex, follow these steps:

1. Clone the repository to your local machine. 🖥️

2. Open the `index.html` file in a web browser. 🌐

3. Use the search bar to enter the name or ID of a Pokemon. 🔍

4. Press the "Search" button or hit Enter to search for the Pokemon. 🔎

5. The Pokemon's information will be displayed on the screen. 📝

## Dependencies 📦

This project uses the PokeAPI (https://pokeapi.co/api/v2/pokemon?limit=151) to fetch Pokemon data. No additional libraries or dependencies are required. 🎉

## Contributing 🤝

Contributions to this project are welcome. If you find any issues or have any suggestions, please open an issue or submit a pull request. 🙌

## License 📄

This project is licensed under the [MIT License](LICENSE). 📜

Este fragmento de código es parte de un flujo de trabajo de GitHub Actions. Aquí está la explicación de lo que hace: 💡

runs-on: ubuntu-latest: Esta línea especifica que el flujo de trabajo se ejecutará en la última versión de Ubuntu disponible en GitHub Actions. 💻

steps:: Esta línea comienza la lista de pasos que se ejecutarán en el flujo de trabajo. 📋

- name: Checkout code: Este paso da un nombre al paso y el nombre es "Checkout code". 📥

uses: actions/checkout@v2: Este paso utiliza la acción actions/checkout@v2 para comprobar el código del repositorio actual en el corredor de GitHub Actions. 🔄

- name: Run HTMLProofer: Este paso da un nombre al paso y el nombre es "Run HTMLProofer". 🏃‍♂️

uses: chabad360/htmlproofer@v2: Este paso utiliza la acción chabad360/htmlproofer@v2 para ejecutar HTMLProofer en el código comprobado. 🛠️

with:: Esta línea comienza la lista de argumentos que se pasarán a la acción chabad360/htmlproofer@v2. 📝

directory: "./pokedex": Este argumento especifica que HTMLProofer debe ejecutarse en el directorio ./pokedex del código comprobado. 📂

HTMLProofer es una herramienta que comprueba los archivos HTML para asegurarse de que están bien formados. Comprueba cosas como si todas las imágenes tienen etiquetas alt, si las etiquetas están cerradas correctamente, si los enlaces internos están funcionando, etc. ✅