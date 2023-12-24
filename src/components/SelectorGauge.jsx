import classes from "./SelectorGauge.module.css";

console.log("classes", classes);

function SelectorGauge(props) {
  const { selectedOption, reversed } = props;

  //   if ([0, 1, 2].indexOf(selectedOption) === -1) {
  //     throw new Error("Invalid selectedOption");
  //   }

  return (
    <div className={classes["gauge-container"]}>
      <div className={classes["gauge-scale"]}>
        <div className="uppercase">low</div>
        <div className="uppercase">moderate</div>
        <div className="uppercase">high</div>
      </div>
      <div className={classes["gauge"]}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  );
}

export default SelectorGauge;
