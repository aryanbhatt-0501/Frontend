// llmNode.js

// import { Handle, Position } from 'reactflow';
import { BaseNode } from './baseNode';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode
      id={id}
      title="LLM"
      subtitle={'This is a LLM'}
      fields={[]}
      handles={[
        { type: 'target', position: 'Left', id: `${id}-system`, style: { top: `${100 / 3}%` } },
        { type: 'target', position: 'Left', id: `${id}-prompt`, style: { top: `${200 / 3}%` } },
        { type: 'source', position: 'Right', id: `${id}-response` },
      ]}
    />
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-system`}
    //     style={{top: `${100/3}%`}}
    //   />
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-prompt`}
    //     style={{top: `${200/3}%`}}
    //   />
    //   <div>
    //     <span>LLM</span>
    //   </div>
    //   <div>
    //     <span>This is a LLM.</span>
    //   </div>
    //   <Handle
    //     type="source"
    //     position={Position.Right}
    //     id={`${id}-response`}
    //   />
    // </div>
  );
}
