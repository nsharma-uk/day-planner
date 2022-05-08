//declare working hours array
const workingHour = [
  { timeLabel: "9am", key: 9 },
  { timeLabel: "10am", key: 10 },
  { timeLabel: "11am", key: 11 },
  { timeLabel: "12pm", key: 12 },
  { timeLabel: "1pm", key: 13 },
  { timeLabel: "2pm", key: 14 },
  { timeLabel: "3pm", key: 15 },
  { timeLabel: "4pm", key: 16 },
  { timeLabel: "5pm", key: 17 },
];

//render date using moment.js in header
const renderDate = () => {
  const currentDate = moment().format("dddd,  Do of MMMM YYYY");
  console.log(currentDate);
  $("#currentDay").append(currentDate);
};

const renderTimeBlocks = () => {
  //for each working hour create and append time block time blocks

  const renderTimeBlock = (workingHour) => {
    console.log(workingHour);
    //create time blocks
    const timeBlock = `<div class="row p-2">
    <!-- div for the text: 9am -->
    <div class="col-md-1 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">9am</div>
    <!-- a div for where you write your text -->
    <textarea class="col-md-9 col-sm-12" rows="3"></textarea>
    <!-- a button to press save -->
    <div class="col-md-2 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">
      <button type="button" class="btn btn-success">Save</button>
    </div>`;

    //append to parent  timeblocks
    renderTimeBlocks.append(timeBlock);
  };

  workingHours.forEach(renderTimeBlock);
};

const onReady = () => {
  renderDate();
};

$(document).ready(onReady);
