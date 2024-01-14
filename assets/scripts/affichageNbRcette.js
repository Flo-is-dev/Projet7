// * GERE L AFFICHAGE DU NOMBRE DE RECETTE EN DYNAMIQUE

const recetteNumber = document.getElementById("recetteNumber");

const numberOfRecette = (NumberRecettes) => {
  recetteNumber.innerHTML = `${NumberRecettes} Recettes`;
};

numberOfRecette(NumberRecettes);
