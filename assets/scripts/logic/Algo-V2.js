// ! -- On parcour un seul tableau à la fois dans l'ordre description => name > ingredient.
// !-- on obtien en sortie un tableau d'une structure similaire à recipes (tableau initial)

const searchFunction = (search) => {
  console.log("[SEARCH =>", `${search}]`);

  let resultArray = filterDeRecipes.filter((item) => {
    // Je gère une variable qui parcour le array des ingredients afin de pouvoir ensuite le trier avec includes
    let ingredientArray = item.ingredients.map((obj) => {
      //   console.log(obj.ingredient.toLowerCase());
      return obj.ingredient.toLowerCase();
    });

    return (
      item.description.toLowerCase().includes(search) ||
      item.name.toLowerCase().includes(search) ||
      ingredientArray.some((ingredient) => ingredient.includes(search))
    );
  });

  console.log("resultArray", resultArray);
  return resultArray;
};
