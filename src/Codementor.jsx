import moment from "moment";

const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

const Codementor = () => {
  const [totalCost, setCost] = useState(0);
  // const [totalSessions, setSessions] = useState(0);
  const [sessionList, setSessionlist] = useState([]);
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
        const orderedSessions = response.data.sort(
          (a, b) => a.finished_at > b.finished_at
        );
        setSessionlist(orderedSessions);
      });
  };
  useEffect(() => {
    getAllSessions();
  }, []);
  return (
    <>
      <h2 className="mt-3">Total Sessions: {sessionList.length}</h2>
      <hr />
      <h2>Total Cost: {totalCost.toFixed(1)}</h2>
      <hr />
      <h2>After Cuttings: {(totalCost * 0.82).toFixed(1)}</h2>
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
    </>
  );
};

export default Codementor;
