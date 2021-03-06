import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";

const { Panel } = Collapse;

const continents = [
  {
    _id: 1,
    name: "Africa",
  },
  {
    _id: 2,
    name: "America",
  },
  {
    _id: 3,
    name: "Asia",
  },
  {
    _id: 4,
    name: "Canada",
  },
  {
    _id: 5,
    name: "Australia",
  },
  {
    _id: 6,
    name: "Japan",
  },
  {
    _id: 7,
    name: "Russia",
  },
];

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.handleFilters(newChecked);
  };
  const renderCheckBoxList = () =>
    continents.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value._id)}
          type="checkbox"
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span style={{ paddingRight: "10px", paddingLeft: "3px" }}>
          {value.name}
        </span>
      </React.Fragment>
    ));
  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Panel header="Continents filter" key="1">
          {renderCheckBoxList()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
