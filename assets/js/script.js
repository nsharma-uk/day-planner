//declare working hours array
const workingHours = [
  { label: "9am", key: 9 },
  { label: "10am", key: 10 },
  { label: "11am", key: 11 },
  { label: "12pm", key: 12 },
  { label: "1pm", key: 13 },
  { label: "2pm", key: 14 },
  { label: "3pm", key: 15 },
  { label: "4pm", key: 16 },
  { label: "5pm", key: 17 },
];

//render date using moment.js in header
const renderDate = () => {
  const currentDate = moment().format("dddd,  Do of MMMM YYYY");
  console.log(currentDate);
  $("#currentDay").append(currentDate);
};

const readFromLocalStorage = (key, defaultValue) => {
  // get from LS using key name
  const dataFromLS = localStorage.getItem(key);

  // parse data from LS
  const parsedData = JSON.parse(dataFromLS);

  if (parsedData) {
    return parsedData;
  } else {
    return defaultValue;
  }
};

const writeToLocalStorage = (key, value) => {
  // convert value to string
  const stringifiedValue = JSON.stringify(value);

  // set stringified value to LS for key name
  localStorage.setItem(key, stringifiedValue);
};

const getEventForTimeBlock = (workingHours) => {};

const renderTimeBlocks = () => {
  //for each working hour create and append time block time blocks

  const renderTimeBlock = (workingHours) => {
    console.log(workingHours);
    //create time blocks dynamically
    const timeBlocks = $("#time-block");
    const timeBlock = `<div class="row p-2 future my 2 ${getClassName(
      workingHours
    )}">
    <div class="col-md-1 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">${
      workingHours.label
    }</div>
    <textarea class="col-md-9 col-sm-12" rows="3">${getEventForTimeBlock(
      workingHours.key
    )}</textarea>
    <div class="col-md-2 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">
      <button type="button" class="btn btn-success">Save</button>
    </div>`;

    //append to parent time block
    timeBlocks.append(timeBlock);
  };

  workingHours.forEach(renderTimeBlock);
};

const onReady = () => {
  renderDate();
  renderTimeBlocks();
};

$(document).ready(onReady);

const getClassName = (workingHours) => {
  const currentHour = moment().hour();
  //if workingHour is present
  if (workingHours === currentHour) {
    return "present";
  }
  //if workingHours is future
  if (workingHours > currentHour) {
    return "future";
  }
  //else workingHours is past
  return "past";
  //else past
};

