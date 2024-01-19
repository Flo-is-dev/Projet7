// initialisation du tableau utilisé dans la fonction "usentsilesSet()"
let usentsilesSet;
let ingredientAPorteGlobale;
// initaliser "filterDeRecipes" pour avoir un tableau réduit issu des premières recherches
let filterDeRecipes = recipes;

// variable qui va recevoir le mot recherché
// let search = 50;
let search;

let NumberRecettes = recipes.length;

const searchedWord = () => {
  search = searchInput.value;
  search = search.toLocaleLowerCase().trim();
  return search;
};

const searchDisplay = () => {
  let search = searchedWord();
  testVariable = searchFunction(search);
  const filteredArrayZero = searchFunction(search);

  //   Filtration de filteredArray grace au tagArrayList
  //   Fonction qui transform "filteredArrayZero => filteredArray"
  if (tagArrayList.length !== 0) {
    // Utiliser la methode filter (comme V2) pour parcourir le tableau de recette. Nuance: search n'est pas une string mais un tableau de string
    // Pour chacune des recettes , aller chercher dans ingrédients si on a un des élémeents du tableau "tagArrayListIngredients" , puis reproduire avec appliance et ustensiles.
    // Return True si on trouve sinon False.

    let filteredArray = filteredArrayZero.filter((item) => {
      const searchTerms = tagArrayList.map((el) => el.toLowerCase());
      return searchTerms.some((el) =>
        item.description.toLowerCase().includes(el)
      );
    });

    console.log("TADAMM", filteredArray);

    console.log("filteredArrayZero", filteredArrayZero) ||
      filteredArrayZero.appliance ||
      filteredArrayZero.ustensiles;
  }

  const filteredArray = searchFunction(search);
  NumberRecettes = filteredArray.length;
  console.log(NumberRecettes);
  numberOfRecette(NumberRecettes);

  // *-------AFFICHAGE DEs RECETTEs CARD
  const cardSection = document.querySelector(".card-section");
  cardSection.innerHTML = ``;

  if (filteredArray.length == 0) {
    cardDisplayHtmlError();
  } else if (filteredArray.length > 0) {
    for (let i = 0; i < filteredArray.length; i++) {
      cardDisplayHtml(filteredArray[i]);
    }
  } else {
    console.log("Erreur d'affichage de la recherche,ERROR value filteredArray");
  }

  // *-------CROIX QUI s'affiche & REINITIALISE LA SEARCH
  const removeSearch = document.getElementById("removeSearch");
  removeSearch.style.display = "block";
  removeSearch.addEventListener("click", reinitSearch);

  // *-------INJECTION DES VALUE DE FILTERARRAY DANS CHAQUE TRI

  const functionModel = (filteredArray) => {
    const ustensilsData = usentsilesSetFunction(filteredArray);
    displayTriUstensiles(ustensilsData);

    const appareilsData = appareilsSetFunction(filteredArray);
    displayTriAppareils(appareilsData);

    const ingredientsData = ingredientsSetFunction(filteredArray);
    displayTriIngredients(ingredientsData);
  };

  functionModel(filteredArray);

  //  **j'appel la fonction qui gère la création des tag au click**
  triListElementFunction();
  console.log("tagArrayList", tagArrayList);
};

// Je déclare ma variable qui va recevoir ma fonction settimeout
let timeoutSearch;

const searchInput = document.getElementById("searchInput");
const searchInputIngredients = document.getElementById("ingredients");
const searchInputAppareils = document.getElementById("appareils");
const searchInputUstensiles = document.getElementById("ustensiles");

searchInput.addEventListener("keyup", () => {
  // On annule le délai precedent si il en existe deja un
  clearTimeout(timeoutSearch);

  timeoutSearch = setTimeout(() => {
    searchedWord();
    console.log(search);

    if (search.length >= 3) {
      searchDisplay();
    } else {
      console.log("Veuillez taper au moins 3 caractères");
      cardDisplayHtmlShort();
    }
  }, 500);
});

// fonction qui joue l'affichage des Tris et apès la 2nd recherche

// Keyup X 3 avec un search , on exploite le (e)
searchInputIngredients.addEventListener("keyup", (e) => {
  //   je met en variable la valeur du tableau globale
  //    Si il n'y a pas de tableau deja trié avec la recherche principale alors j'utilise le tableau initiale recipes
  let filteredArray;
  search == undefined
    ? (filteredArray = recipes)
    : (filteredArray = searchFunction(search));
  let IAUSet = ingredientsSetFunction(filteredArray);

  const resultTriArray = searchTri(e, IAUSet);

  // je gère l'affichage du TRI

  displayTriIngredients(resultTriArray);
  triListElementFunction();
});

// Keyup X 3 avec un search , on exploite le (e)
// Keyup X 3 avec un search gobale, on exploite le (e)

// ! interdependance?

// -----------------------
// --CROIX QUI REINITIALISE LA SEARCH
// -----------------------

const reinitSearch = () => {
  // Affichage Input
  searchInput.value = null;
  // vidange de la section card
  const cardSection = document.querySelector(".card-section");
  cardSection.innerHTML = null;
  // Affichage des cards
  recipes.forEach((recipe) => {
    cardDisplayHtml(recipe);
  });
  //   Affichage du nombre de recette
  NumberRecettes = recipes.length;
  numberOfRecette(NumberRecettes);
  //   Disparition de la croix
  removeSearch.style.display = "none";
};
