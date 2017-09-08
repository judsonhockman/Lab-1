console.log("Name: " + "judson hockman".toUpperCase());

console.log("Career Path: Full-Stack Developer");

console.log("Self-Assessment: I am a fully committed follower of Jesus Christ. I am a loyal, trustworthy team player who always tries to do the next right thing in every endeavor.");

console.log("Interests/Hobbies: I enjoy outdoor activities a great deal. My favorite pasttime is fishing.");

console.log("Former Employers: ");

function displayPosition(companyName, dates, jobTitle, description) {
 console.log("I worked for " + companyName + " from " + dates + " as a " + jobTitle + "."); 
}

displayPosition("the U.S. Army", "2008 - 2017", "Civilian Advisor");

displayPosition("Land Rover North America", "1996-2008", "Master Mechanic");

displayPosition("NASA", "1985 - 1996", "Shuttle Pilot");

console.log("My Skills: ")
function displaySkill(coolSkillSet, skillName) {
   
if (coolSkillSet === true) {
    console.log("* BAM: " + skillName);
} else {
    console.log("*: " + skillName);
}
}
displaySkill(true, "I can fly a spaceship.");
displaySkill(false, "I know which end of the screwdriver to hold.");
displaySkill(true, "Able to work outside 12 hours a day in 130 degree ambient temperature");
displaySkill(false, "HTML5, CSS3, JavaScript");
displaySkill(true, "Can drift a 20-ton vehicle at 60 KPH");



