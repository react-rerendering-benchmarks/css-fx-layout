import { useRef } from "react";
import { memo } from "react";
import React from "react";
import CodeBlock from '@theme/CodeBlock';
import example1 from "./example1";
import example2 from "./example2";
import example3 from "./example3";
import example4 from "./example4";
import example5 from "./example5";
import example6 from "./example6";
import example7 from "./example7";
import example8 from "./example8";
import example9 from "./example9";
import example10 from "./example10";
import BrowserOnly from "@docusaurus/BrowserOnly";
const examples = [example1, example2, example3, example4, example5, example6, example7, example8, example9, example10];
export const Examples = memo(function Examples() {
  console.log(window.globalCount++);
  return <BrowserOnly>{() => {
      console.log(window.globalCount++);
      let selectorFromLocalStorage = localStorage.getItem("css-fx-layout-preferred-selector") || "attributes";
      const currentSelector = React.useState(selectorFromLocalStorage);
      React.useEffect(() => {
        localStorage.setItem("css-fx-layout-preferred-selector", currentSelector.current);
      }, [currentSelector.current]);
      return <div className="examples">
						<div className="type-buttons" data-layout="row" data-layout-gap="4px">
							<button className={"button button--" + (currentSelector.current === "attributes" ? "primary" : "secondary")} onClick={() => currentSelector.current = "attributes"}>Attributes</button>
							<button className={"button button--" + (currentSelector.current === "classes" ? "primary" : "secondary")} onClick={() => currentSelector.current = "classes"}>Classes</button>
						</div>
						<div>
							{examples.map(ex => {
            console.log(window.globalCount++);
            return <div key={ex.title} className="example-container">
										<h2>{ex.title}</h2>
										<p>{ex.description}</p>
										<CodeBlock language="html">
											{currentSelector.current === "attributes" ? ex.attributes : ex.classes}
										</CodeBlock>
										<div className="example">
											<GetCode code={currentSelector.current === "attributes" ? ex.attributes : ex.classes} />
										</div>
									</div>;
          })}
						</div>
					</div>;
    }}</BrowserOnly>;
});
function GetCode(opts) {
  console.log(window.globalCount++);
  return <div dangerouslySetInnerHTML={{
    __html: opts["code"]
  }}></div>;
}