import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./parameter.css";

export default function Activities(ActivityList) {
  useEffect(() => {}, [ActivityList]);

  return (
    <div style={{ width: "70%" }}>
      <div className="parameter">
        {ActivityList &&
          ActivityList?.ActivityList?.map((processItem) => {
            return (
              <>
                <>
                  {" "}
                  <div>
                    <svg height="80">
                      <rect
                        x="0"
                        y="0"
                        height="80"
                        width={"100%"}
                        className="parameter-color"
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
              </>
            );
          })}
      </div>
    </div>
  );
}
