import moment from "moment";

const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

const Codementor = () => {
  const [totalCost, setCost] = useState(0);
  const [totalSessions, setSessions] = useState(0);
  const getAllSessions = () => {
    axios
      .get("https://authenticate-node.herokuapp.com/sessions")
      .then((response) => {
        const start = moment() - moment().startOf("week");
        const total = response.data.data.reduce((i, session) => {
          const end = moment() - moment(session.finished_at);
          if (start < end) {
            i += session.amount_before_platform_fee;
          }
          return i;
        }, 0);

        setCost(total);
        setSessions(response.data.data.length);
      });
  };
  useEffect(() => {
    getAllSessions();
  }, []);
  return (
    <>
      <h2>Total Sessions: {totalSessions}</h2>
      <hr />
      <h2>Total Cost: {totalCost.toFixed(1)}</h2>
      <hr />
      <h2>After Cuttings: {(totalCost * 0.82).toFixed(1)}</h2>
    </>
  );
};

export default Codementor;
