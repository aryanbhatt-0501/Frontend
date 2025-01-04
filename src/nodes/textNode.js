import React, { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

const VARIABLE_REGEX = /{{\s*([\w$]+)\s*}}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 200, height: 80 });
  const textMeasureRef = useRef();

  // Update dimensions when text changes
  useEffect(() => {
    if (textMeasureRef.current) {
      const { offsetWidth, offsetHeight } = textMeasureRef.current;
      setDimensions({
        width: Math.max(200, offsetWidth + 20),
        height: Math.max(80, offsetHeight + 20),
      });
    }
  }, [currText]);

  // Extract variables from text
  useEffect(() => {
    const matches = Array.from(currText.matchAll(VARIABLE_REGEX));
    const variableNames = matches.map((match) => match[1]);
    setVariables(variableNames);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div
      style={{
        width: dimensions.width,
        height: dimensions.height,
        border: '1px solid black',
        padding: '10px',
        position: 'relative',
        backgroundColor: 'white',
      }}
    >
      <div className="text-sm font-semibold text-gray-700">Text Node</div>
      <div className='text-label'>
        <label>
          Text:
          <textarea
            value={currText}
            onChange={handleTextChange}
            style={{
              width: '100%',
              minHeight: '40px',
              resize: 'none',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
        </label>
      </div>
      {/* Measure text dimensions */}
      <div
        ref={textMeasureRef}
        style={{
          visibility: 'hidden',
          position: 'absolute',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
        }}
      >
        {currText}
      </div>
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${(index + 1) * 30}px`,
          }}
        />
      ))}
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </div>
  );
};
