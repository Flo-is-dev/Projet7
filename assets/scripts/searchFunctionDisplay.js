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
  //   ? variable pour filteredArray à porter globale
  //   testVariable = searchFunction(search);

  let filteredArray = searchFunction(search);

  // *------Filtrage de filteredArray grace au tableau tagArrayList (tag cliqués)

  if (tagArrayList.length !== 0) {
    filteredArray = filteredArray.filter((item) => {
      const searchTerms = tagArrayList.map((el) => el.toLowerCase());

      const constResult = searchTerms.every((el) => {
        const applianceResult = item.appliance.toLowerCase().includes(el);
        const ustensilesResult = item.ustensils.some((element) =>
          element.toLowerCase().includes(el)
        );
        const ingredientsResultat = item.ingredients.some((element) =>
          element.ingredient.toLowerCase().includes(el)
        );

        return applianceResult || ustensilesResult || ingredientsResultat;
      });
      //   console.log("constResult", constResult);

      return constResult;
    });

    console.log("filteredArray après filtre TAG", filteredArray);
  }

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
  //   const removeSearch = document.getElementById("removeSearch");
  //   removeSearch.style.display = "block";
  //   removeSearch.addEventListener("click", reinitSearch);

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
    }

    const removeSearch = document.getElementById("removeSearch");
    console.log("longeur de search", search.length);
    if (search.length > 0) {
      removeSearch.style.display = "block";
      removeSearch.addEventListener("click", reinitSearch);
    }
    if (search.length == 0) {
      console.log("on repart à zéro", search.length);
      reinitSearch();
    }
  }, 500);
});

// --------------------
// !Keyup X 3 des Searchbar de Tri
// --------------------
const btnRemoveTriIngredients = document.getElementById("removeTriIngredients");
const btnRemoveTriAppareils = document.getElementById("removeTriAppareils");
const btnRemoveTriUstensiles = document.getElementById("removeTriUstensiles");
const inputIngredients = document.getElementById("inputIngredients");
const inputAppareils = document.getElementById("inputAppareils");
const inputUstensiles = document.getElementById("inputUstensiles");
let IAUSet;

// fonction globale qui gère la croix des 3 search tri
const removeTriClickFunction = (btnToRemove, inputField) => {
  console.log("je click sur la croix search Tri", inputField.value);
  btnToRemove.style.visibility = "hidden";

  inputField.value = "";
  SearchedWord = "";
  resultTriArray = searchTri(SearchedWord, IAUSet);

  if (btnToRemove == btnRemoveTriIngredients) {
    displayTriIngredients(resultTriArray);
  }
  if (btnToRemove == btnRemoveTriAppareils) {
    displayTriAppareils(resultTriArray);
  }
  if (btnToRemove == btnRemoveTriUstensiles) {
    displayTriUstensiles(resultTriArray);
  }

  triListElementFunction();
};

inputIngredients.addEventListener("keyup", (e) => {
  //   je met en variable la valeur du tableau globale
  //    Si il n'y a pas de tableau deja trié avec la recherche principale alors j'utilise le tableau initiale recipes
  let filteredArray;
  let SearchedWord = e.target.value;
  search == undefined
    ? (filteredArray = recipes)
    : (filteredArray = searchFunction(search));
  IAUSet = ingredientsSetFunction(filteredArray);

  let resultTriArray = searchTri(SearchedWord, IAUSet);

  // je gère l'affichage du TRI

  displayTriIngredients(resultTriArray);
  triListElementFunction();

  // ------------AFFICHAGE de la croix de tri Searchbar

  let triSearchValue = e.target.value;
  if (triSearchValue) {
    btnRemoveTriIngredients.style.visibility = "visible";
  } else {
    btnRemoveTriIngredients.style.visibility = "hidden";
  }
});

btnRemoveTriIngredients.addEventListener("click", () => {
  removeTriClickFunction(btnRemoveTriIngredients, inputIngredients);
});

searchInputAppareils.addEventListener("keyup", (e) => {
  let filteredArray;
  let SearchedWord = e.target.value;

  search == undefined
    ? (filteredArray = recipes)
    : (filteredArray = searchFunction(search));
  IAUSet = appareilsSetFunction(filteredArray);

  let resultTriArray = searchTri(SearchedWord, IAUSet);

  displayTriAppareils(resultTriArray);
  triListElementFunction();

  // ------------AFFICHAGE de la croix de tri Searchbar

  let triSearchValue = e.target.value;
  if (triSearchValue) {
    btnRemoveTriAppareils.style.visibility = "visible";
  } else {
    btnRemoveTriAppareils.style.visibility = "hidden";
  }
});

btnRemoveTriAppareils.addEventListener("click", () => {
  removeTriClickFunction(btnRemoveTriAppareils, inputAppareils);
});

searchInputUstensiles.addEventListener("keyup", (e) => {
  let filteredArray;
  let SearchedWord = e.target.value;

  search == undefined
    ? (filteredArray = recipes)
    : (filteredArray = searchFunction(search));
  IAUSet = usentsilesSetFunction(filteredArray);

  let resultTriArray = searchTri(SearchedWord, IAUSet);

  displayTriUstensiles(resultTriArray);
  triListElementFunction();

  // ------------AFFICHAGE de la croix de tri Searchbar

  let triSearchValue = e.target.value;
  if (triSearchValue) {
    btnRemoveTriUstensiles.style.visibility = "visible";
  } else {
    btnRemoveTriUstensiles.style.visibility = "hidden";
  }
});
btnRemoveTriUstensiles.addEventListener("click", () => {
  removeTriClickFunction(btnRemoveTriUstensiles, inputUstensiles);
});

// -----------------------
// --CROIX QUI REINITIALISE LA SEARCH
// -----------------------

const reinitSearch = () => {
  // Affichage Input
  searchInput.value = "";
  // vidange de la section card
  const cardSection = document.querySelector(".card-section");
  //   cardSection.innerHTML = null;
  // Affichage des cards
  //   recipes.forEach((recipe) => {
  //     cardDisplayHtml(recipe);
  //   });

  searchDisplay();
  //   Affichage du nombre de recette
  //   NumberRecettes = recipes.length;
  //   numberOfRecette(NumberRecettes);
  //   Disparition de la croix
  removeSearch.style.display = "none";
};
