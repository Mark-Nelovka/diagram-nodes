import React, { ReactElement, useCallback } from "react";
import ReactFlow, {
  addEdge,
  useEdgesState,
  useNodesState,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import TextUpdaterNode from "./components/formCard";

// import initialNodes from "./nodes.js";
// import initialEdges from "./edges.js";

interface IOverride {
  id: string;
  data: {
    label: ReactElement;
  };
  position: {
    x: number;
    y: number;
  };
}

const initialNodes: IOverride[] = [
  {
    id: "1",
    data: { label: <TextUpdaterNode /> },
    position: { x: 150, y: 0 },
  },
  {
    id: "2",
    data: { label: <TextUpdaterNode /> },
    position: { x: 0, y: 150 },
  },
  {
    id: "3",
    data: { label: <TextUpdaterNode /> },
    position: { x: 300, y: 150 },
  },
  {
    id: "4",
    data: { label: <TextUpdaterNode /> },
    position: { x: 200, y: 150 },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "step" },
  { id: "e2-3", source: "2", target: "3", type: "step" },
  { id: "e3-4", source: "3", target: "4", type: "step" },
];

const nodeTypes = { textUpdater: TextUpdaterNode };

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: any) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineStyle={{ stroke: "#0f0e0e", strokeWidth: 2 }}
      ></ReactFlow>
    </div>
  );
}

function Node(props: any) {
  return (
    <div className="card">
      {/* <Handle type="source" position={Position.Bottom} /> */}
      <div className="card-label">{props.type}</div>
      {/* <Handle type="target" position={Position.Top} /> */}
    </div>
  );
}

export default Flow;
