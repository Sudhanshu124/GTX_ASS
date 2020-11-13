import React from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
// import datalist from './components/data';
import Form from "./components/Form";
const datalist = [
  {
    index: 0,
    name: "Aman kumar",
    designation: "Software Engineer"
  },
  {
    index: 1,
    name: "Anurag Mishra",
    designation: "Software Engineer"
  },
  {
    index: 2,
    name: "Aditya kumar",
    designation: "Cyber security Expert"
  }
];

function App() {
  const [data, setData] = React.useState(
    localStorage.getItem("mydata") !== null
      ? JSON.parse(localStorage.getItem("mydata"))
      : datalist
  );
  const [now, setTime] = React.useState(new Date().toLocaleTimeString());
  const [record, setRecord] = React.useState({
    index: "",
    name: "",
    designation: ""
  });
  setInterval(function () {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  function createCard(data) {
    return (
      <Card
        title={data.name}
        content={data.designation}
        id={data.index}
        onClick={updateData}
      />
    );
  }

  function updateData(event) {
    var arr = data.filter((num) => num.index != event.target.id);
    setData(arr);
    localStorage.setItem("mydata", JSON.stringify(arr));
  }

  function onchange(event) {
    var id = event.target.name;
    var value = event.target.value;
    if (id === "name") setRecord({ ...record, name: value });
    else setRecord({ ...record, designation: value });
    event.preventDefault();
  }
  function onsubmit(event) {
    var length = data.length;
    console.log("data length: " + length);
    setData([...data, { ...record, index: length }]);
    console.log("new data: " + data);
    localStorage.setItem(
      "mydata",
      JSON.stringify([...data, { ...record, index: length }])
    );
    setData([...data, { ...record, index: length }]);
    setRecord({ index: "", name: "", designation: "" });
    console.log(data);
    console.log("saved till here");
    event.preventDefault();
  }

  return (
    <div>
      <NavBar />
      <Form
        nameValue={record.name}
        desigValue={record.designation}
        onchange={onchange}
        onsubmit={onsubmit}
      />
      {data.map(createCard)}
    </div>
  );
}

export default App;
