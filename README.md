# Form UI 

To run this project 

```npm install ```

and then run 

```npm run dev```

on localhost:8080

Or view the project [Here](http://form-ui.surge.sh/)

## Notes & Features

### Form Validation

I threw in some really basic validation - aka user cannot submit the form if the fields are empty and the will be notified inline. The structure is in place to set up more advanced validation, but I don't really know what this form would require given the limited context. 

### Add / Remove Roles

The user can add roles so long as that role does not already exist.  I took some inspiration from [Material Design ](https://www.google.com/design/spec/material-design/introduction.html) for developing the dropdown styles ()

### Label Bindings / Messaging

I wanted to give the user ample feedback about what they can expect from taking an action, as well as feedback that they have completed the action. As the user clicks the checkboxes and submits the form, they are given feedback about those actions.

### Responsive 

Kind of a given today, but I just kept things simple from a layout perspective so that it naturally responds to mobile. 