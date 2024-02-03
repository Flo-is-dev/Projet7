// ! -- On parcour trois tableau qu'on va concaténer une fois les tris effecrtués sur chacun des tbaleau.
// !-- on obtien en sortie un tableau avec l'id de l'element trouvé

const searchFunction = (search) => {
  console.log("ON RECHERCHE", search);

  //   on map le tableau en y ajoutant un id pour chaque valeur
  let resultNameArray = nameArray
    .map((item, id) => {
      return { id, value: item };
    })
    .filter((item) => {
      return item.value.includes(search);
    });
  //   console.log("resultNameArray", resultNameArray);

  let resultIngredientArray = ingredientArray
    .map((item, id) => {
      return { id, value: item };
    })
    .filter((item) => {
      return item.value.some((ingredient) => ingredient.includes(search));
    });
  //   console.log("resultIngredientArray =", resultIngredientArray);

  let resultDescriptionArray = descriptionArray
    .map((item, id) => {
      return { id, value: item };
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

  // on utilise filter avec une boucle "for" pour filtrer les id en doublon
  let filteredAllResult = allResult.filter((current, currentId, array) => {
    // On vérifie si l'id est déjà présent avant l'id courant dans le tableau
    for (let i = 0; i < currentId; i++) {
      if (array[i].id === current.id) {
        return false;
      }
    }

    // Si l'id n'est pas déjà présent, on le conserve
    return true;
  });

  //   tableau globale après filtre
  console.log("tableau globale après filtre", filteredAllResult);

  //   obtenons les ID sous forme de tableau
  const keepedIds = filteredAllResult.map((obj) => obj.id);

  // Filtrer filterDeRecipes pour ne conserver que les objets avec des ids présents dans idsToKeep
  const resultArray = filterDeRecipes.filter((obj) =>
    keepedIds.includes(obj.id - 1)
  );
  console.log("tableau globale + ajout'ID", resultArray);

  return resultArray;
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
