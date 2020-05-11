import { UpCircleOutlined, DeploymentUnitOutlined } from "@ant-design/icons";

import { useMovement } from "./useMovement";

export default ({ x, y, rotation }) => {
  // const position = useMovement(tick);
  return (
    <DeploymentUnitOutlined
      style={{
        fontSize: "3em",
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
      }}
      rotate={rotation}
    />
  );
};
