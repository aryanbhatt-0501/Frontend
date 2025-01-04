import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import './index.css';

function App() {
  return (
    <ReactFlowProvider>
      <div>
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </div>
    </ReactFlowProvider>
  );
}

export default App;
