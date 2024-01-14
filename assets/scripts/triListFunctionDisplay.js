// -----------------------------------------------
// 1) création du tableau à injecter (ustensils)
// -----------------------------------------------

const usentsilesSetFunction = (filteredArray) => {
  let usentsilesArray = filteredArray.map((obj) => {
    return obj.ustensils;
  });
  // on concat tous les tableau de string ensemble
  let usentsilesConcat = [].concat(...usentsilesArray);
  usentsilesConcat = usentsilesConcat.map((ustensil) => ustensil.toLowerCase());
  //   console.log("usentsilesConcat", usentsilesConcat);
  // on supprime les doublons avec "Set"

  usentsilesSet = [...new Set(usentsilesConcat)];
  console.log("usentsilesSet", usentsilesSet);

  return usentsilesSet;
};

// fonction injection html

const displayTriUstensiles = (usentsilesSet) => {
  const triUstensiles = document.querySelector("#ustensiles .tri-list");

  if (usentsilesSet) {
    const tagElements = usentsilesSet.map(
      (item) => /*html*/ `<li>
            <div class="list-element">${item}<i class="fa-solid fa-circle-xmark"></i></div>
            </li>`
    );
    triUstensiles.innerHTML = tagElements.join("");
  } else {
    console.log("ERROR: usentsilesSet est undefined");
  }
};

// -----------------------------------------------
// création du tableau à injecter (appareils)
// -----------------------------------------------

const appareilsSetFunction = (filteredArray) => {
  let appareilsArray = filteredArray.map((obj) => {
    return obj.appliance.toLowerCase();
  });

  //   console.log("appareilsArray", appareilsArray);

  // on supprime les doublons avec "Set"

  appareilsSet = [...new Set(appareilsArray)];
  console.log("appareilsSet", appareilsSet);

  return appareilsSet;
};

// fonction injection html

const displayTriAppareils = (appareilsSet) => {
  const triAppareils = document.querySelector("#appareils .tri-list");

  if (appareilsSet) {
    const tagElements = appareilsSet.map(
      (item) => /*html*/ `<li>
              <div class="list-element">${item}<i class="fa-solid fa-circle-xmark"></i></div>
              </li>`
    );
    triAppareils.innerHTML = tagElements.join("");
  } else {
    console.log("ERROR: appareilsSet est undefined");
  }
};

// -----------------------------------------------
// création du tableau à injecter (ingrédients)
// -----------------------------------------------

const ingredientsSetFunction = (filteredArray) => {
  let ingredientsArray = filteredArray.map((obj) => {
    return obj.ingredients.map((item) => {
      return item.ingredient.toLowerCase();
    });
  });

  // on concat tous les tableau de string ensemble
  let ingredientsConcat = [].concat(...ingredientsArray);
  ingredientsConcat = ingredientsConcat.map((ingredients) =>
    ingredients.toLowerCase()
  );
  //   console.log("ingredientsConcat", ingredientsConcat);
  // on supprime les doublons avec "Set"

  ingredientsSet = [...new Set(ingredientsConcat)];
  console.log("ingredientsSet", ingredientsSet);

  return ingredientsSet;
};

// fonction injection html

const displayTriIngredients = (ingredientsSet) => {
  const triIngredients = document.querySelector("#ingredients .tri-list");

  if (ingredientsSet) {
    const tagElements = ingredientsSet.map(
      (item) => /*html*/ `<li>
                <div class="list-element">${item}<i class="fa-solid fa-circle-xmark"></i></div>
                </li>`
    );
    triIngredients.innerHTML = tagElements.join("");
  } else {
    console.log("ERROR: ingredientsSet est undefined");
  }
};

// -- TRI SEARCH FUNCTION

// Jy pass un tab de string et retour la string qui correspond, 2 paramètre , tableau et la chaine de string tapé. 3 Eventlistener

//  dénfition de fonction qui sera appelée par le EventListener keyUp et qui tri les tableau de Tri "Set"
const searchTriDisplay = (e, IAUSet) => {
  let searchWord = e.target.value;
  searchWord = searchWord.toLowerCase();

  const TriFilterArray = IAUSet.filter((item) =>
    item.toLowerCase().includes(searchWord)
  );
  console.log("***TriFilterArray", TriFilterArray);

  return TriFilterArray;
  // Diminuer la list d'ingrédientet non toutes les recettes.
};
