🧠 DOM Manipulation Mind Map (Step-by-Step)

1. BASICS OF DOM
What is DOM (Document Object Model)?
DOM tree structure → Document → HTML → Elements → Attributes → Text
Difference between:
document vs window
Node vs Element

2. ACCESSING ELEMENTS
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
Modern ways:
document.querySelector()
document.querySelectorAll()

3. TRAVERSING THE DOM
Parent → parentNode / parentElement
Child → children, firstElementChild, lastElementChild
Siblings → nextElementSibling, previousElementSibling

4. MANIPULATING THE DOM
Changing content:
innerText, textContent, innerHTML
Changing attributes:
getAttribute(), setAttribute(), removeAttribute()
Changing styles:
element.style.property
classList.add(), classList.remove(), classList.toggle()

5. CREATEING AND REMOVING THE ELEMENTS 
Create:
document.createElement()
appendChild()
append(), prepend()
Insert before/after:
insertBefore()
insertAdjacentHTML()

Remove:
removeChild()
element.remove()

6. EVENTS
Inline events vs JS events
addEventListener()
Common events: click, mouseover, keydown, submit, etc.
Event Object (event.target, event.type)
Event bubbling & capturing
Event delegation

7. FORMS AND INPUTS
Accessing form values → value
Handling checkboxes, radio buttons, dropdowns
Validating form inputs

8. ADVANCED DOM
documentFragment (performance)
cloneNode()
Template literals with DOM
Mutation Observer (for watching changes in DOM)
Intersection Observer (scroll-based events)

9. BEST PRACTICESS
Avoid innerHTML when possible (XSS risk)
Use querySelector() over old methods
Batch DOM updates (minimize reflows/repaints)
Use event delegation for multiple child elements