import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Parameter from "../Parameters/parameter";
import "./Activities.css";

export default function Activities(steps) {
  const [parameter, setParameterList] = useState();
  const onActivityClick = (i) => {
    setParameterList([...steps.steps[i].valueObj.parameters]);
  };

  useEffect(() => {}, [steps]);

  useEffect(() => {}, [parameter]);

  return (
    <div className="activity_css">
      <div style={{ width: "28%" }}>
        {steps &&
          steps?.steps?.map((processItem, processIndex) => {
            return (
              <>
                <svg
                  className="arrow_down"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 24l-8-9h6v-15h4v15h6z" />
                </svg>
                <>
                  <div>
                    <svg
                      height="80"
                      onClick={(e) => onActivityClick(processIndex)}
                    >
                      {console.log(processIndex)}
                      <rect
                        x="0"
                        y="0"
                        height="80"
                        width={"100%"}
                        className="activity-color"
                        stroke="white"
                        stroke-width="8px"
                      />
                      <text
                        x="50%"
                        y="50%"
                        dominant-baseline="middle"
                        fill="black"
                        fontWeight="bold"
                        text-anchor="middle"
                      >
                        {processItem?.name}
                      </text>
                    </svg>
                  </div>
                </>
                <br></br>
              </>
            );
          })}
      </div>
      {parameter && <Parameter ActivityList={parameter} />}
    </div>
  );
}
