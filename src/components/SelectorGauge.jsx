import classes from "./SelectorGauge.module.css";

function SelectorGauge(props) {
  const { selectedOption, reversed, handleSelect } = props;

  function SelectionButton({ handleSelect, selected }) {
    return (
      <div className={classes["button-container"]}>
        <button
          onClick={handleSelect}
          className={
            selected
              ? classes["button-selected"]
              : classes["button-not-selected"]
          }
        ></button>
      </div>
    );
  }

  let elements = ["low", "moderate", "high"];
  if (reversed) elements = elements.reverse();

  return (
    <div className={classes["gauge-container"]}>
      <div className={classes["gauge-scale"]}>
        {elements.map((element) => (
          <div className="uppercase" key={element}>
            {element}
          </div>
        ))}
      </div>
      <div className={classes["gauge"]}>
        <div>
          <SelectionButton selected={selectedOption === 0} />
          <span>0</span>
        </div>
        <div>
          <SelectionButton selected={selectedOption === 1} />
          <span>1</span>
        </div>
        <div>
          <SelectionButton selected={selectedOption === 2} />
          <span>2</span>
        </div>
      </div>
    </div>
  );
}

export default SelectorGauge;
