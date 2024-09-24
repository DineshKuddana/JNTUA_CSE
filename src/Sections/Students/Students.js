import { useState } from "react";
import "./Students.css";
import StudentData, { students } from "./StudentData";

function Students() {
  const [name, setName] = useState("");
  const [data1, setData] = useState([]);

  const datas = () => {
    setData(students);
  };

  return (
    <>
      <div className="main">
       
          <div class="geek1">
            {/* <h4>JNTUA College of Engineering Anantapur</h4> */}
            <h6>Computer Science Students Portal</h6>
          </div>
      </div>
      <label id="head">Admission Number</label>
      <br></br>
      <input
        id="inputData"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Admission Number"
        className="admission_no"
      />
      <br></br>
      <button id="button1" onClick={datas}>Submit</button>
      <div className="student">
        {
          // data(name)
          data1
            .filter((stu) => stu.Admission_no === name)
            .map((filterStudent) => (
              <div className="cardd">
                <ul>
                  <img src={filterStudent.img} className="imm"/>
                  <div className="details">
                    <li>
                      <span>Name :</span>
                      {filterStudent.name}
                    </li>
                    <li>
                      <span>Admission No:</span>
                      {filterStudent.Admission_no}
                    </li>
                    <li>
                      <span>Course :</span>
                      {filterStudent.course}
                    </li>
                    <li>
                      <span>Branch :</span>
                      {filterStudent.Branch}
                    </li>
                    <li>
                      <span>AadharNo : </span>
                      {filterStudent.AadharNo}
                    </li>
                  </div>
                </ul>
              </div>
            ))
        }
      </div>
    </>
  );
}
// export const data = (name)=>{
//   return
// }

export default Students;
