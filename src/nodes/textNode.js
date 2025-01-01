// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    // <BaseNode
    //   id={id}
    //   title={"Text"}
    //   fields={[
    //     {
    //       label: "Text",
    //       value: currText,
    //       onChange: (e) => setCurrText(e.target.value),
    //     },
    //   ]}
    //   handles={[{ type: "source", position: "Right", id: `${id}-output` }]}
    // />
    <div style={{width: 200, height: 80, border: '1px solid black'}}>
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <input
            type="text"
            value={currText}
            onChange={handleTextChange}
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};
