import "./CardRademsResults.css";

function CardRademsResults({ operationRiskScore, responseCapabilityScore }) {
  const chartContent = [];

  for (let y = 9; y >= 0; y--) {
    for (let x = 0; x < 10; x++) {
      if (y === 9) {
        if (
          responseCapabilityScore === 10 &&
          operationRiskScore === 10 &&
          x === 9
        ) {
          chartContent.push(
            <div className="bottom-row">
              <div className="dot tenth-row tenth-column" />
            </div>
          );
        } else if (x === responseCapabilityScore && y === operationRiskScore) {
          chartContent.push(
            <div className="bottom-row">
              <div className="dot" />
            </div>
          );
        } else if (x === responseCapabilityScore && operationRiskScore === 10) {
          chartContent.push(
            <div className="bottom-row">
              <div className="dot tenth-row" />
            </div>
          );
        } else {
          chartContent.push(<div className="bottom-row" />);
        }
      } else {
        if (
          responseCapabilityScore === 10 &&
          y === operationRiskScore &&
          x === 9
        ) {
          chartContent.push(
            <div>
              <div className="dot tenth-column" />
            </div>
          );
        }
        if (x === responseCapabilityScore && y === operationRiskScore) {
          chartContent.push(
            <div>
              <div className="dot" />
            </div>
          );
        } else {
          chartContent.push(<div />);
        }
      }
    }
  }

  return (
    <section id="assessmentResultCard">
      <div className="card-subtitle left">
        <p>sar operation risk score</p>
      </div>
      <div className="card-subtitle bottom">
        <p>response capability score</p>
      </div>

      <div className="chart">{chartContent}</div>

      <div className="left-grid-scale first">10</div>
      <div className="left-grid-scale">8</div>
      <div className="left-grid-scale">6</div>
      <div className="left-grid-scale">4</div>
      <div className="left-grid-scale">2</div>

      <div className="lower-grid-scale first">0</div>
      <div className="lower-grid-scale">2</div>
      <div className="lower-grid-scale">4</div>
      <div className="lower-grid-scale">6</div>
      <div className="lower-grid-scale">8</div>
      <div className="lower-grid-scale">10</div>
    </section>
  );
}

export default CardRademsResults;
