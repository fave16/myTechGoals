const currentTimeElement = document.getElementById("current-time");

function updateTime() {
    const now = new Date();
    const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "UTC"  
    };
    const formattedTime = now.toLocaleString("en-US", options);
    currentTimeElement.textContent = formattedTime;
}
updateTime();
setInterval(updateTime, 1000);
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];
const currentDate = new Date();
const currentDayOfWeek = currentDate.getDay();
const currentMonth = currentDate.getMonth();
const currentDayOfMonth = currentDate.getDate();
const formattedDate = `${daysOfWeek[currentDayOfWeek]}, ${monthsOfYear[currentMonth]} ${currentDayOfMonth}`;
const currentDateElement = document.getElementById("current-date");
currentDateElement.textContent = formattedDate;

const upddateImageDimension = () =>{
    const profileImage = document.querySelector('[data-testid="slackProfilePicture"]');
    if(profileImage){
        if(profileImage.complete){
            setImageDimensions();
        }else{
            profileImage.onload = setImageDimensions;
        }
    }
    function setImageDimensions(){
        const naturalWidth = profileImage.naturalWidth;
        const naturalHeight = profileImage.naturalHeight;
        profileImage.setAttribute('width' , naturalWidth);
        profileImage.setAttribute('height' , naturalHeight);
        console.log(`Natural dimensions: ${naturalWidth}x${naturalHeight}`);
    }
    upddateImageDimension();
}



        
