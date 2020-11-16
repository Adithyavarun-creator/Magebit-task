
MAGEBIT
JUNIOR WEB DEELOPER TEST

Task 2 – JavaScript

Based on Task 1 you have to create subscription input validation.
In this task, you must show your knowledge about writing fast and memory-efficient JavaScript.
Requirements:
- There is an error message under input that shows validation messages if:
1.Invalid email is added - “Please provide a valid e-mail address”
2. The checkbox is not marked - “You must accept the terms and conditions”
3. No email address is provided - “Email address is required”
4. Provided email is ending with .co - “We are not accepting subscriptions from Colombia
emails”.
5.Once validation has passed, the error disappears.
6.The button is disabled if the form is not valid.
7.On successful validation, a success message appears in the place of the form, as per design.
Advantages:
- You can use Vue.Js, React or similar technologies.
Design:
- Design link on Figma
- Style guide link on Figma



SOLUTIONS
//I have used some techniques of Node js 
//1.Invalid email is added - “Please provide a valid e-mail address”

Const validatorforemail = function(email){
Const chk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
Return chk.test(email);

Const userSchema = new mongoose.Schema({
Email :  {
Datatype : String,
Requiredtype : true,’Please provide your email’,
Lowercase : true,
Validate : [validatorforEmail , ‘Please provide an exact email address to login to your account’],
Match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, ‘Please enter a valid email address’]
}});

//2.	For checkbox
Function tickbox = (form,cond,tick) =>{
If(!form.cond.tick){
ShowAlert(‘Please tick the box to agree our company’s terms and conditions’);
isButton.style.visibility= “visible”;
Else {
isButton.style.visibility= “hidden”;
Return true;
}
}

The above code helps in clicking the checkbox if the user does not ticks for the terms and conditions, the visibility mode is been operated in this case.



//3.	If email address is not provided….


Email : {
Datatype : String,
Requiredtype : true,’Please provide your email’,
Lowercase : true,
Validate : [validator.isEmail , ‘Please provide an exact email address to login to your account’]
}

The above code .isEmail helps in evaluating to check whether email is given by user or not

//4.	Email ending with .co

Const validatorforemail = function(email){
Const chk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
Return chk.test(email);
Const userSchema = new mongoose.Schema({
Email :  {
Datatype : String,
Requiredtype : true,’Please provide your email’,
Lowercase : true,
Validate : [validatorforEmail , ‘Please provide an exact email address to login to your account’],
Match : [‘Please enter a valid email address’]
If(email.endsWith(“.co”){
Console.log(‘We are not accepting subscriptions from Colombia emails ’
Return email;
}});

The above code helps in identifying the .co word by using .endswith command in order to find the specific email id that ends with .co

//5.	Error disappears

Const validatorforemail = function(email){
Const chk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
Return chk.test(email);
Const userSchema = new mongoose.Schema({
Email :  {
Datatype : String,
Requiredtype : true,’Please provide your email’,
Lowercase : true,
Validate : [validatorforEmail , ‘Please provide an exact email address to login to your account’],
Match : [‘Please enter a valid email address’]
If(email.endsWith(“.co”){
Console.log(‘We are not accepting subscriptions from Colombia emails ’
Else{
Return email;
}});
This.validate = undefined;

The above code shows when the email id is given as .co , it consoles to the user to provide an email address without.co and displays user that it does not accepting subscriptions from Columbia emails.

//6.Button is disabled if form is not valid

Function formvalidate(field){
Const submit = document.getelementbyid(“submit-button”);
If(!field.value){
Submit.disabled = false;
}else{
Submit.disabled=true;
}
}

Assume that button is been created in html file as submit button, we make the button to work using DOM technique and allow it to disabled if form is not valid.

//7. On successful validation, a success message appears in the place of the form, as per design.
Function formvalidate(field){
Const submit = document.getelementbyid(“submit-button”);
Const alert =[];
If(!field.value){
Submit.disabled = false;
}else {
Submit.disabled=true;
alert(‘The validation is success’);
}
}

The above programming code explains that when the user gives his inputs, and clicks on submit, he gets an alert message that the given input is been taken and forwards a success message, in node js it can be given as :-
Res.status(200).json({
Status:’success in validation’,
Data : {
User : alert
}
});




Thank You

Adithyavarun Thambidurai
