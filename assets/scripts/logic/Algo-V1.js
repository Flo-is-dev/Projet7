// ! -- On parcour trois tableau qu'on va concaténer une fois les tris effecrtués sur chacun des tbaleau.
// !-- on obtien en sortie un tableau avec l'index de l'element trouvé

// TODO (l 61)filteredAllResult doit etre comparé à RECIPES pour ressortir le resultArray

const searchFunction = (search) => {
  console.log("ON RECHERCHE", search);

  //   on map le tableau en y ajoutant un index pour chaque valeur
  let resultNameArray = nameArray
    .map((item, index) => {
      return { index, value: item };
    })
    .filter((item) => {
      return item.value.includes(search);
    });
  //   console.log("resultNameArray", resultNameArray);

  let resultIngredientArray = ingredientArray
    .map((item, index) => {
      return { index, value: item };
    })
    .filter((item) => {
      return item.value.some((ingredient) => ingredient.includes(search));
    });
  //   console.log("resultIngredientArray =", resultIngredientArray);

  let resultDescriptionArray = descriptionArray
    .map((item, index) => {
      return { index, value: item };
    })
    .filter((item) => {
      return item.value.includes(search);
    });
  //   console.log("resultDescriptionArray", resultDescriptionArray);

  //  * tableau gloable avant filtre
  allResult = [
    ...resultNameArray,
    ...resultIngredientArray,
    ...resultDescriptionArray,
  ];
  console.log("Array GLOBAL", allResult);

  // on utilise filter avec une boucle "for" pour filtrer les index en doublon
  let filteredAllResult = allResult.filter((current, currentIndex, array) => {
    // On vérifie si l'index est déjà présent avant l'index courant dans le tableau
    for (let i = 0; i < currentIndex; i++) {
      if (array[i].index === current.index) {
        return false;
      }
    }

    // Si l'index n'est pas déjà présent, on le conserve
    return true;
  });

  //   tableau globale après filtre
  console.log("Filtered allResult", filteredAllResult);

  return filteredAllResult;
};

// -----------------------
//   ----création de 3 listes (tableau)--------------
// -----------------------

let nameArray = filterDeRecipes.map((obj) => {
  return obj.name.toLowerCase();
});
// console.log(nameArray);

let ingredientArray = filterDeRecipes.map((obj) => {
  return obj.ingredients.map((item) => {
    return item.ingredient.toLowerCase();
  });
});
// console.log(ingredientArray);

let descriptionArray = filterDeRecipes.map((obj) => {
  return obj.description.toLowerCase();
});
// console.log(descriptionArray);
