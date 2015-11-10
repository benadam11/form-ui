# Form UI 

##  Background

Doing the HackerRank challenge was an interesting experience for me.  I didn't really know what to expect, and budgeting my time was more of a challenge than I thought it would be (Especially when it came to designing that form).  I felt like I fumbled around for a while trying to make sense of what I wanted to accomplish.  At the end of the day I kind of hacked together a basic form that didn't really have any functionality. 

For the second portion of this interview, I wanted to add some more functionality to the form.  **Caveat - I still don't have a lot of context about how this form fits into the "rest of  (hypothetical) experience", and what the jobs that the user needs to accomplish are.  So the interactions demonstrated are a little bit contrived and may not actually represent "good UX".  

On a final note, as part of my growth as a designer, I have been pushing myself to grow in my Javascript skills.  One framework I have enjoyed lately is Veu.js.  It has a number of similar ideas to React (data down - actions up, component based design, optimized for speed and performance ).  I chose it because as a designer, it is more comfortable to deal with HTML templates and have a little bit more separation between your HTML and JS. Vue's API is incredibly simple and is something that can really be learned in a weekend, and thus seemed like a nice fit for this project. 

## Project Details

View the project [Here](http://axosoft-form-ui.surge.sh/)

## Notes & Features

1. Form Validation

I threw in some really basic validation - aka user cannot submit the form if the fields are empty and the will be notified inline. The structure is in place to set up more advanced validation, but I don't really know what this form would require given the limited context. 

2. Add / Remove Roles

The user can add roles so long as that role does not already exist.  I took some inspiration from [Material Design ](https://www.google.com/design/spec/material-design/introduction.html) for developing the dropdown styles ()

3. Label Bindings / Messaging

I wanted to give the user ample feedback about what they can expect from taking an action, as well as feedback that they have completed the action. As the user clicks the checkboxes and submits the form, they are given feedback about those actions.

4. Responsive 

Kind of a given today, but I just kept things simple from a layout perspective so that it naturally responds to mobile. 