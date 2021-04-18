const { useState } = require("react");

const data = [
  {
    name: "RAMMOHANA RAO BALAGA",
    age: 26,
    email: "ramanji.balaga@gmail.com",
    rollId: 1,
    mobile: "91237183",
    class: "XII",
    section: "A2"
  },
  {
    name: "RAMBABU MUDADLA",
    age: 26,
    email: "rambabu.mudadla@gmail.com",
    rollId: 2,
    class: "XII",
    section: "A2"
  },
  {
    name: "SURESH BALAGA",
    age: 26,
    email: "suresh.balaga@gmail.com",
    rollId: 3,
    class: "XII",
    section: "A2"
  },
  {
    name: "JUAN ALA",
    age: 26,
    email: "juan.ala@gmail.com",
    rollId: 4,
    class: "XII",
    section: "A2"
  },
  {
    name: "SUJANI PRATTIPATI",
    age: 26,
    email: "sujani.pratthipati@gmail.com",
    rollId: 5,
    class: "XII",
    section: "A2"
  }
];

const Students = () => {
  const [students, setStudents] = useState(data);
  const imgUrl =
    "http://www.adamanthr.com/wp-content/uploads/2016/04/dummy-man-570x570.png";
  const studentCard = (student) => {
    return (
      <div class="card ml-2" style={{ width: "18rem" }}>
        <img alt="student iamge" class="card-img-top" src={imgUrl} />
        <div class="card-body">
          <p class="card-text">{student.name}</p>
        </div>
      </div>
    );
  };
  return (
    <>
      <div>
        {/* {students.map((student) => studentCard(student))} */}
        <div class="my-3 p-3 bg-white rounded box-shadow">
          <h6 class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
          <div class="media text-muted pt-3">
            <img
              data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1"
              alt="32x32"
              class="mr-2 rounded"
              style={{ width: "32px", height: "32px" }}
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_178869a168b%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_178869a168b%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
              data-holder-rendered="true"
            />
            <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray align-left">
              <strong class="d-block text-gray-dark">@username</strong>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
