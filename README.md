The Task List
1. create a pure function to filter array of numbers

2. create a function to return if the given input is palindrome or not

3. create a function for addition of 2 numbers  which will be called like this :
sum(20)(10) //outputs 30

4. give example of closure

5. give example of  mutations and function hoisting

6. call below function inside useEffect using async/await
function greetUser(){
return new Promise((resolve,)=>{
setTimeout(()=>{resolve("Hello User!!")},3000)})
}

7. create  quiz app  that has 5 queistions and each quetion has 4 options , if the user gives currect answer user will get 1 mark ,  if a user gives wrong answer ,0.5 mark will be reduced  from the total marks user has at the time (nagative marking system),
 add a functioality to review all the answered quetiions and their answers. user can skip the questions if that happens there wont be any marks reduced from the skipped questions

8. create a function to validate user input using the regex
  take 3 inputs email, name and mobile no;
    validate email - which is required and validate with this regex : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    name -  required
    mobile no -  is required and use below regex to validate:
                 /^([0-9-+]).{9,13}$/g; // Allow numbers 0 - 9 only & characters - + . min - 10, max - 14