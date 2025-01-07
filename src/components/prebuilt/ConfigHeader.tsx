import { PCConfig } from "../prebuilt/types";

interface ConfigHeaderProps {
  config: PCConfig;
}

const ConfigHeader = ({ config }: ConfigHeaderProps) => {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold text-forge-orange">{config.name}</h2>
      <p className="text-2xl font-semibold">{config.price}€</p>
    </div>
  );
};

export default ConfigHeader;