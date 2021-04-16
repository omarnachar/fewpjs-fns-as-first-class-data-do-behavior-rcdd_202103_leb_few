/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timegiven){
  let msg = '';
  let splt = timegiven.split(':');
  let hours = parseInt(splt[0]);
  let min = parseInt(splt[1]);
  if (hours < 12 && min < 59){
    msg = 'Good Morning';
  } else if (hours < 17 && min < 59 ){
    msg = 'Good Afternoon';
  } else{
    msg = 'Good Evening';
  }
  return msg;
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  let para = document.createElement('p');
  let t = document.createTextNode(message);
  para.appendChild(t);
  document.getElementById('greeting').appendChild(para);
}
