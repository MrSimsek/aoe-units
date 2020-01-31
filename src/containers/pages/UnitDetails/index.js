import * as React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UnitDetails = () => {
  let { unitId } = useParams();

  const units = useSelector(state => state.units);

  const [unit, setUnit] = React.useState(null);

  React.useEffect(() => {
    const getUnit = () => {
      const unit = units.find(unit => unit.id === parseInt(unitId, 10));
      setUnit(unit);
    };

    getUnit();
  }, [units]);

  if (!unit) return <p>Getting the unit details...</p>;

  return (
    <div>
      <div>ID: {unit.id}</div>
      <div>Name: {unit.name}</div>
      <div>Description: {unit.description}</div>
      <div>Age: {unit.age}</div>
      <div>Attack: {unit.attack}</div>
      <div>Accuracy: {unit.accuracy}</div>
    </div>
  );
};
export default UnitDetails;
