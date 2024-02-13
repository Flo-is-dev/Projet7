// * GERE L AFFICHAGE ET L ANIMATION DES TRI LISTS

const chevron = document.querySelectorAll(".tri-title i");

// console.log(chevron.classList);

const chevronToggleFunction = (e) => {
  const triContainer = e.target.closest(".tri-container");
  const triSearch = triContainer.querySelector(".tri-search");
  const triTag = triContainer.querySelector(".tri-tag");
  const triList = triContainer.querySelector(".tri-list");

  e.target.classList.toggle("fa-chevron-up");
  e.target.classList.toggle("fa-chevron-down");
  triSearch.classList.toggle("hidden-bloc");
  //   triTag.classList.toggle("hidden-bloc");
  triList.classList.toggle("hidden-bloc");
};

chevron.forEach((item) => {
  item.addEventListener("click", chevronToggleFunction);
});

// --------------------
// *Injection html de l'ensemble des menus de Tri (ingredients/ appareils/ ustensils)
// --------------------

const triDisplay = (recipe) => {
  const functionModel = (recipe) => {
    const ustensilsData = usentsilesSetFunction(recipe);
    displayTriUstensiles(ustensilsData);

    const appareilsData = appareilsSetFunction(recipe);
    displayTriAppareils(appareilsData);

    const ingredientsData = ingredientsSetFunction(recipe);
    displayTriIngredients(ingredientsData);
  };

  functionModel(recipe);
  triListElementFunction();
};

// -------------------
// *-----GESTION TAG ARRAY LIST
// -------------------

// ---affichage Gestion tableau du tableau des tag - tagArrayList

let tagArrayList = [];
let tagArrayListIngredients = [];
let tagArrayListAppareils = [];
let tagArrayListUstensiles = [];

const triListElementFunction = () => {
  const triListElement = document.querySelectorAll(".tri-list > li");
  triListElement.forEach((item) => {
    item.addEventListener("click", (e) => {
      selectedBtn = e.target;

      // TODO----- a retirer si le toogle n'est plus géré ici?
      //   selectedBtn.classList.toggle("selected");
      //   item.classList.toggle("selected");

      // 2)-----------si pas dans la liste, je l'ajoute, sinon je le retire
      if (!tagArrayList.includes(selectedBtn.innerText)) {
        tagArrayList.push(selectedBtn.innerText);
        displayTagElement(tagArrayList);
      } else if (tagArrayList.includes(selectedBtn.innerText)) {
        tagArrayList = tagArrayList.filter(
          (obj) => obj != selectedBtn.innerText
        );
        displayTagElement(tagArrayList);
      } else {
        console.log("ERROR: tagArrayList");
      }

      console.log(tagArrayList);
      // 3)-------------------

      // * on peut jouer cette fonction car elle prend en compte le cas ou les tagArrayList sont pleines
      searchDisplay();
    });
  });
};

// ---------------
// ------------LOGIC de la croix de tri Searchbar
// ---------------
// const btnRemoveTriSearch = document.querySelectorAll(".removeTri");

// const btnRemoveTriDisplay = () => {
//   btnRemoveTriSearch.forEach((item) =>
//     item.addEventListener("click", (e) => {
//       console.log();
//     })
//   );
// };
