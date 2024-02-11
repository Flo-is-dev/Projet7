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
// Injection html de l'ensemble des menus de Tri (ingredients/ appareils/ ustensils)
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
// -----GESTION TAG ARRAY LIST
// -------------------

// ---affichage des cliques sur les mots clés + Gestion tableau du tableau des tag - tagArrayList

let tagArrayList = [];
let tagArrayListIngredients = [];
let tagArrayListAppareils = [];
let tagArrayListUstensiles = [];

const triListElementFunction = () => {
  const triListElement = document.querySelectorAll(".tri-list > li");
  triListElement.forEach((item) => {
    item.addEventListener("click", (e) => {
      //   console.log("Test1", e.target);
      selectedBtn = e.target;
      // TODO----- le toggle ne fonctionne pas, peut etre un affichage ultérieure qui écrase la LI .selected?
      selectedBtn.classList.toggle("selected");
      item.classList.toggle("selected");

      // 2)-----------si pas dans la liste, je l'ajoute, sinon je le retire
      if (!tagArrayList.includes(selectedBtn.innerText)) {
        tagArrayList.push(selectedBtn.innerText);
        displayTagElement(tagArrayList);
        // searchDisplay(); retiré car pas d(utilité)
      } else if (tagArrayList.includes(selectedBtn.innerText)) {
        tagArrayList = tagArrayList.filter(
          (obj) => obj != selectedBtn.innerText
        );
        displayTagElement(tagArrayList);
        // searchDisplay();retiré
      } else {
        console.log("ERROR: tagArrayList");
      }

      console.log(tagArrayList);
      // 3)------------------- logic fonctionnement des tags
      //   tagRemoveFunction(); retirer car deja dans displayTagElement()
      // * on peut jouer cette fonction car elle prend en compte le cas ou les tagArrayList sont pleines
      searchDisplay();

      //   4) l'affichage des cards change
    });
  });
};

// ---------------
// ------------LOGIC de la croix de tri Searchbar
// ---------------
const btnRemoveTriSearch = document.querySelectorAll(".removeTri");

const btnRemoveTriDisplay = () => {
  btnRemoveTriSearch.forEach((item) =>
    item.addEventListener("click", (e) => {
      console.log();
    })
  );
};
