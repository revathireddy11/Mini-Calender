const month = document.querySelector(".month-name");
const day = document.querySelector(".day-name");
const date = document.querySelector(".date");
const year = document.querySelector(".year");
const time = document.querySelector(".time")


const dateNumber = new Date();

const monthNumber = dateNumber.getMonth();

/*used to convert the date and time to a string using the specified options. 
In this case, "en" specifies the locale as English.*/

month.innerText = dateNumber.toLocaleString("en", {month: "long"});
  
day.innerText = dateNumber.toLocaleString("en", {weekday: "long",});
  
date.innerText = dateNumber.getDate();
  
year.innerText = dateNumber.getFullYear();

function updateTime() {
const options = {
    hour: "numeric",
    minute: "numeric"
  };
  
time.innerText = dateNumber.toLocaleString("en", options);
}

updateTime();

setInterval(updateTime, 1000);