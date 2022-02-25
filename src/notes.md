## Personal design plan for this project
----

**This project styling must be based on this [figma design](https://www.figma.com/file/wOBITwRoJscsxpnSIwvO7r/Quizzical-App-(Copy)?node-id=0%3A1)**

### 1. Creating the starting page. ✔
### 2. Fetch the api and save it to a quiz state ✔
### 3. Save all questions, options, correct answer, etc.. into one array and pass it into the <Quiz /> component ✔
### 4. In the <Quiz /> component render the question and options (shuffled) . Each question and answer will be in its own seperate object. ✔
### 5. Button Logic. Must create a state which saves the values of the selected buttons. In each question set only one button will be selected. Can include option to deselect it.
### 6. Checking answer => check if the values of the selected buttons are equal to the respective answers . Will only work if you select all options .
### 7. Highlight  logic => remove the extra stylings. highlight the correct answers and *red-mark* the wrong ones. For each correct option , add 1 to the score state. 
### 8. Reset button . 