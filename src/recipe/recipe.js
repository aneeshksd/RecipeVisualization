import React, { useEffect, useState } from "react";
import recipe_1 from "../recipe_1.json";
import recipe_2 from "../recipe_2.json";
import recipe_3 from "../recipe_3.json";
import "bootstrap/dist/css/bootstrap.css";
import "./recipe.css";
import Step from "../Steps/Step";

export default function Recipe({ recipeId }) {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipeDetails, setRecipeDetails] = useState();

  useEffect(() => {
    if (recipeId !== selectedRecipeId) {
      setSelectedRecipeId(recipeId);
      // call api to get the recipe details
      loadRecipeData(recipeId);
    }
  }, [recipeId]);

  const loadRecipeData = (recipeId) => {
    switch (recipeId) {
      case "recipe_1":
        setRecipeDetails({ ...recipe_1.data.recipe });
        break;
      case "recipe_2":
        setRecipeDetails({ ...recipe_2.data.recipe });
        break;
      case "recipe_3":
        setRecipeDetails({ ...recipe_3.data.recipe });
        break;
    }
  };

  return (
    <div>
      <div>
        <div className="recipe">
          {recipeDetails && (
            <svg width="300px" height="80">
              <rect
                x="0"
                y="0"
                width="100%"
                height="80px"
                fill="#f298a1"
                stroke="white"
                stroke-width="8px"
              />
              <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                fill="black"
                text-anchor="middle"
                fontWeight="bold"
              >
                {recipeDetails?.name}
              </text>
            </svg>
          )}
        </div>
        <svg
          className="recipe_arrow_down"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 24l-8-9h6v-15h4v15h6z" />
        </svg>
      </div>
      {recipeDetails && <Step recipeData={recipeDetails} />}
    </div>
  );
}
