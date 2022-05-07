//declare working hours array 
const workingHours = [

    { timeLabel: "9am", 
    key: 9 },
    { timeLabel: "10am", 
    key: 10 },
    { timeLabel: "11am", 
    key: 11 },
    { timeLabel: "12pm", 
    key: 12 },
    { timeLabel: "1pm", 
    key: 13 },
    { timeLabel: "2pm", 
    key: 14 },
    { timeLabel: "3pm", 
    key: 15 },
    { timeLabel: "4pm", 
    key: 16 },
    { timeLabel: "5pm", 
    key: 17 },
    
  ];

//using moment.js to display date

const renderDate = () => {
    
    get
// get the current date time stamp
const currentDateTimeStamp = moment();
console.log(currentDateTimeStamp);

// format my date time stamp
// Tue, 3rd May, 2022 7:11PM
const formattedTime = currentDateTimeStamp.format("ddd, Do MMM, YYYY h:mmA");

console.log(formattedTime);