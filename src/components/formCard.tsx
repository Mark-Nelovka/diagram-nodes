import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

interface ICardProps {
  // data: any;
  isConnectable: any;
}

function TextUpdaterNode() {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="source"
        position={Position.Top}
        id="b"
        // isConnectable={isConnectable}
      />
      <div>
        <label htmlFor="text">ASFsfsf</label>
        <select id="text" name="text" onChange={onChange} className="nodrag">
          Виберіть значення
          <option value="value1">Значение 1</option>
          <option value="value2">Значение 2</option>
          <option value="value3">Значение 3</option>
        </select>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </div>
  );
}

export default TextUpdaterNode;
