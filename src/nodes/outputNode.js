// outputNode.js

import { useState } from "react";
import { BaseNode } from "./baseNode";
// import { Handle, Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  // const handleNameChange = (e) => {
  //   setCurrName(e.target.value);
  // };

  // const handleTypeChange = (e) => {
  //   setOutputType(e.target.value);
  // };

  return (
    <BaseNode
      id={id}
      title="Output"
      fields={[
        {
          label: "Name",
          value: currName,
          onChange: (e) => setCurrName(e.target.value),
        },
        {
          label: "Type",
          value: outputType,
          onChange: (e) => setOutputType(e.target.value),
          type: "select",
          options: ["Text", "Image"],
        },
      ]}
      handles={[{ type: "target", position: "Left", id: `${id}-value` }]}
    />
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-value`}
    //   />
    //   <div>
    //     <span>Output</span>
    //   </div>
    //   <div>
    //     <label>
    //       Name:
    //       <input
    //         type="text"
    //         value={currName}
    //         onChange={handleNameChange}
    //       />
    //     </label>
    //     <label>
    //       Type:
    //       <select value={outputType} onChange={handleTypeChange}>
    //         <option value="Text">Text</option>
    //         <option value="File">Image</option>
    //       </select>
    //     </label>
    //   </div>
    // </div>
  );
};
