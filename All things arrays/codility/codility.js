// You must only modify this function, add a new function, and update the last line of the code in the file. You should not change anything between.

function creatGreeting(person){
    const greeting = `${person.title}. ${person.first_name} ${person.last_name}`
    return greeting
}

function createMessage(personOne, personTwo, currentDate) {
    if (!personOne || !personTwo) {
      throw new Error("Both people must be specified");
    }
  
    const formattedDate = currentDate.toISOString().split("T")[0];
    let message = `From: Some company\nSent: ${formattedDate}\nSubject: Important notification\n`;
  
  
    message += `Hello ${creatGreeting(personOne)} + ${creatGreeting(personTwo)}\n`;
  
    if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
      message += "Sorry to bother you on a weekend.\n"
    }
  
    message += "There's an important message for you in your account."
  
    return message;
  }
  
  const personOne = {
    "title": "Mr",
    "first_name": "Ali",
    "last_name": "Khan",
  };
  
  const personTwo = {
    "title": "Mrs",
    "first_name": "Sara",
    "last_name": "Khan",
  };
  
  const greeting = createMessage(personOne, personTwo, new Date());
  console.log(greeting);
  
  // You must add your new function as a new key in the object below.
  // For instance, if you named your function findLowestNumber, the below line should read: export default {createMessage, findLowestNumber};
  export default {createMessage, creatGreeting};