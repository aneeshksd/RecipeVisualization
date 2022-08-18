import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Step.css";
import Activities from "../Activities/Activities";

export default function Step({ recipeData }) {
  const [activityList, setActivityList] = useState();
  const onStepClick = (i, j) => {
    setActivityList([...recipeData.values[i].values[j].valueObj.activities]);
  };

  useEffect(() => {}, [recipeData]);

  useEffect(() => {}, [activityList]);

  return (
    <div>
      <div className="left ">
        {recipeData &&
          recipeData.values.map((processItem, processIndex) => {
            return (
              <>
                {processItem.values.map((stepItem, stepIndex) => {
                  return (
                    <>
                      <div>
                        <svg
                          height="80"
                          onClick={(e) => onStepClick(processIndex, stepIndex)}
                        >
                          <rect
                            x="10"
                            y="0"
                            height="80"
                            width={"100%"}
                            // stroke="white"
                            // stroke-width="8px"
                            className="step-color"
                          />
                          <text
                            x="50%"
                            y="50%"
                            dominant-baseline="middle"
                            fill="black"
                            fontWeight="bold"
                            text-anchor="middle"
                          >
                            {stepItem?.name}
                          </text>
                          {/* <svg className="arrow_right" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M24 12l-11-8v6h-13v4h13v6z"/></svg>                    */}

                        </svg>
                      </div>
                    </>
                    // <p>hi</p>
                  )
                })}
              </>
            )
          })}
      </div>
      {activityList && <Activities steps={activityList} />}
    </div>
  );
}
