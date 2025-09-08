/*
1)Some examples of browser events :-
Click
Double Click
scrolls
Key press on keyboard
hover

monitorEvents(document); in console function
unmonitorEvents(document); in console function

2)what is EventTraget()?
EventListeners

3)basic syntax --  <event-type>.addEventListener(type, function-which represents action)

//How to add Event and EventListeners?
const chaneText = () => {
    const para = document.getElementById('para');
    para.textContent("Text you want to add")
    }
    para.addEventListener('click', changetext)

//How to remove Event and EventListeners?
    para.removeEventListener('click', changetext)

4)best practice : your action should be in a function with a reference. in event listeners always use reference of function(action) after event.

5)what is attachEvent ?
6) prevenDefault()?
7) stoppropagation()?



learn this for interviews - 
type - what types of event there?
timestamp - what is the the time of this event happening?
defultPrevent - how to prevent default behavour of an element?
toElement - 
srcElement -
client position : clientX clientY -
Offset position : screenX screenY -
events for tracking keys -



capturing phase     Bubbleing Phase
     |                      |
     |                      |
     |                      |  
          at target phase
*/