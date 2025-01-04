import React from 'react';
import { useReactFlow } from 'reactflow';

export const SubmitButton = () => {
  const { getNodes, getEdges } = useReactFlow();

  const handleSubmit = async () => {
    const nodes = getNodes();
    const edges = getEdges();

    const payload = { nodes, edges };

    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const { num_nodes, num_edges, is_dag } = await response.json();
        alert(
          `Pipeline Analysis:
          - Number of Nodes: ${num_nodes}
          - Number of Edges: ${num_edges}
          - Is Directed Acyclic Graph (DAG): ${is_dag ? 'Yes' : 'No'}`
        );
      } else {
        alert('Failed to analyze the pipeline. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting pipeline:', error);
      alert('An error occurred while submitting the pipeline.');
    }
  };

  return (
    <button
      onClick={handleSubmit}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Submit Pipeline
    </button>
  );
};
