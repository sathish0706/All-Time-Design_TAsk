import React, { useState } from "react";

export default function Task() {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [click, setClick] = useState(false);

  const handleChange = (e) => {
    setDesc(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleCancel = () => {
    setDate("");
    setDesc("");
    setTime("");
  };

  console.log(time);

  return (
    <>
      {click ? (
        <CompleteTask
          desc={desc}
          date={date}
          time={time}
          setClick={setClick}
          setDesc={setDesc}
          setDate={setDate}
          setTime={setTime}
        />
      ) : (
        <div className="task-container">
          <div className="card">
            <h3>Task description</h3>
            <input
              className="task-desc"
              type="text"
              value={desc}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <div className="date time">
              <div>
                <b>Date</b>
                <input
                  type="date"
                  className="date-input"
                  value={date}
                  onChange={(e) => handleDate(e)}
                />
              </div>
              <div>
                <b>Time</b>

                <input
                  type="time"
                  className="date-input"
                  value={time}
                  onChange={(e) => handleTime(e)}
                />
              </div>
            </div>
            <h3>Assign User</h3>
            <select name="Plan user" className="task-desc">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
            </select>
            <div className="button">
              <button id="button-1" onClick={() => handleCancel()}>
                Cancel
              </button>
              <button id="button-2" onClick={() => setClick(true)}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const CompleteTask = ({
  date,
  desc,
  time,
  setClick,
  setDesc,
  setDate,
  setTime,
}) => {
  //   const [edit, setEdit] = useState(false);
  let arr = [];

  arr.push(time, date, desc);

  const handleDelete = () => {
    setDesc();
    setDate();
    setTime();
  };

  return (
    <div className="task-card">
      {/* <i class="fa-duotone fa-user"></i> */}
      <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;
      <div>
        <b>{arr[2] ? arr[2] : "Description"}</b>
        <br />
        <span>{arr[1] ? arr[1] : "dd/mm/yyyy"}</span>&nbsp;at&nbsp;
        <spam>{arr[0] ? arr[0] : "-- --"}</spam>
      </div>
      <i class="fa-solid fa-pen" onClick={() => setClick(false)}></i>
      <i class="fa-solid fa-check"></i>
      <i class="fa-sharp fa-solid fa-trash" onClick={() => handleDelete()}></i>
    </div>
  );
};
