import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import RangeSlider from "../../../components/RangeSlider/index.js";

import "./index.scss";

const isInRange = (unit, property, range) =>
  unit &&
  unit.cost &&
  unit.cost[property] &&
  unit.cost[property] < range.max &&
  unit.cost[property] > range.min;

const Units = () => {
  const units = useSelector(state => state.units);

  const [age, setAge] = React.useState("all");

  const [woodChecked, setWoodChecked] = React.useState(false);
  const [foodChecked, setFoodChecked] = React.useState(false);
  const [goldChecked, setGoldChecked] = React.useState(false);

  const [woodRange, setWoodRange] = React.useState({ min: 0, max: 200 });
  const [foodRange, setFoodRange] = React.useState({ min: 0, max: 200 });
  const [goldRange, setGoldRange] = React.useState({ min: 0, max: 200 });

  return (
    <div>
      <div>
        <h2>Ages</h2>
        <ul className="age-filters">
          <li
            className={age === "all" ? "active" : undefined}
            onClick={() => setAge("all")}
          >
            All
          </li>
          <li
            className={age === "dark" ? "active" : undefined}
            onClick={() => setAge("dark")}
          >
            Dark
          </li>
          <li
            className={age === "feudal" ? "active" : undefined}
            onClick={() => setAge("feudal")}
          >
            Feudal
          </li>
          <li
            className={age === "castle" ? "active" : undefined}
            onClick={() => setAge("castle")}
          >
            Castle
          </li>
          <li
            className={age === "imperial" ? "active" : undefined}
            onClick={() => setAge("imperial")}
          >
            Imperial
          </li>
        </ul>
      </div>

      <div>
        <h2>Costs</h2>
        <ul className="cost-filters">
          <li>
            <input
              checked={woodChecked}
              type="checkbox"
              name="wood"
              onChange={() => setWoodChecked(!woodChecked)}
            />{" "}
            Wood{" "}
            <RangeSlider
              setRange={setWoodRange}
              min={0}
              max={200}
              isDisabled={!woodChecked}
            />
            {woodRange.min} - {woodRange.max}
          </li>
          <li>
            <input
              checked={foodChecked}
              type="checkbox"
              name="food"
              onChange={() => setFoodChecked(!foodChecked)}
            />{" "}
            Food{" "}
            <RangeSlider
              setRange={setFoodRange}
              min={0}
              max={200}
              isDisabled={!foodChecked}
            />
            {foodRange.min} - {foodRange.max}
          </li>
          <li>
            <input
              type="checkbox"
              name="gold"
              checked={goldChecked}
              onChange={() => setGoldChecked(!goldChecked)}
            />{" "}
            Gold{" "}
            <RangeSlider
              setRange={setGoldRange}
              min={0}
              max={200}
              isDisabled={!goldChecked}
            />
            {goldRange.min} - {goldRange.max}
          </li>
        </ul>
      </div>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>costs</th>
          </tr>
        </thead>
        <tbody>
          {units
            .filter(
              unit =>
                (age !== "all" ? unit.age.toLowerCase() === age : age) &&
                (woodChecked ? isInRange(unit, "Wood", woodRange) : true) &&
                (foodChecked ? isInRange(unit, "Food", foodRange) : true) &&
                (goldChecked ? isInRange(unit, "Gold", goldRange) : true)
            )
            .map(unit => (
              <tr key={unit.id}>
                <td>{unit.id}</td>
                <td>
                  <Link to={`units/${unit.id}`}>{unit.name}</Link>
                </td>
                <td>{unit.age}</td>
                <td>
                  {unit.cost &&
                    Object.keys(unit.cost).map(
                      key => `${key}: ${unit.cost[key]}, `
                    )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Units;
