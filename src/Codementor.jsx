import moment from "moment";

const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

const Codementor = () => {
  const [totalCost, setCost] = useState(0);
  // const [totalSessions, setSessions] = useState(0);
  const [sessionList, setSessionlist] = useState([]);
  const [cuttings, setCuttings] = useState(19);
  const getAllSessions = () => {
    axios
      .get("https://authenticate-node.herokuapp.com/sessions")
      .then((response) => {
        const start = moment() - moment().startOf("week");
        const total = response.data.reduce((i, session) => {
          const end = moment() - moment(session.finished_at);
          if (start < end) {
            i += session.amount_before_platform_fee;
          }
          return i;
        }, 0);

        setCost(total);

        let calculatedCutting = 22;
        if (total >= 1500) {
          calculatedCutting = 13;
        } else if (total >= 750) {
          calculatedCutting = 15;
        } else if (total >= 300) {
          calculatedCutting = 18;
        } else if (total >= 50) {
          calculatedCutting = 19;
        }
        setCuttings(calculatedCutting);
        const orderedSessions = response.data.sort(
          (a, b) => a.finished_at > b.finished_at
        );
        setSessionlist(orderedSessions);
      });
  };
  useEffect(() => {
    getAllSessions();
  }, []);

  const rate = (100 - cuttings) / 100;
  return (
    <div className="my-3">
      <h2 className="mt-3">Total Sessions: {sessionList.length}</h2>
      <hr />
      <h2>Total Cost: {totalCost.toFixed(1)}</h2>
      <hr />
      <h2>After Cuttings: {(totalCost * rate).toFixed(1)}</h2>
      <h2>After Cuttings (INR): {(totalCost * rate * 73).toFixed(1)}</h2>
      <hr />
      <input
        type="number"
        value={cuttings}
        onChange={(e) => setCuttings(e.target.valueAsNumber)}
      />
      <ul className="mt-3 list-group col-12">
        {sessionList.map((s) => {
          return (
            <li className="list-group-item d-flex justify-content-between">
              <span className="badge">{s.client.name}</span>
              <span className="badge badge-info">
                {s.amount_before_platform_fee}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Codementor;
