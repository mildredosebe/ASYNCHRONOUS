//Define async function sendReminder that takes in email as parameter.
//The function should wait 5seconds 
//After the wait log "Reminder send to [email]"
//Use setTimeout in promise to allow await based delay in an async function.  
//Create an array for 3 email addresses
//For each reminder email, call sendReminder(email).
async function sendReminder(email) {
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log(`Reminder sent to ${email}`);
}
const users = ['haniazanawayelign@gmail.com', 'mildredosebeochoki@gmail.com', 'rutagengwakezaqueen@gmail.com'];

users.forEach(async user => {
  await sendReminder(user);
});

//Create a function attemptLogin() that returns a promise which resolve only on the 3rd time
//After each attempt ,there's a 1-second delay using setTimeout
//If login is successful on the 3rd try, we log "Login successful"
//Else after 3 failed attempts, we log "login fails after 3 attempts"
function tryLogin() {
let loginAttempt = 0;
 return new Promise((resolve, reject) => {
function attemptLogin() {
 loginAttempt++;
setTimeout(() => {
if (loginAttempt < 3) {
console.log(`Attempt ${loginAttempt}: Login failed`);
attemptLogin();
 } else if (loginAttempt === 3) {
console.log("Login successful");
resolve();
}
 }, 1000);
 }
attemptLogin();
    });
}

tryLogin()
    .catch(() => {
    });
// Initialize a variable count to 5
//Use setInterval to create a timer that runs a function every 1 second
//log the current value of the count 
//Check if count is 0 
//Stop the interval using clear Interval
//log "Time's up "
function countDown(){
let count = 5;
let interval =0;
 interval = setInterval(()=>{
    console.log(count);
    
count--;
if (count <0){
    clearInterval(interval);
    console.log('Times up');
}
},1000);  


 }   
 countDown();
 
//Define a function wait that returns a promise which resolves  after seconds.
//Define an async function  loadPage()
//This ensures each page loads sequentially with the specific delays.
async function loadPage(){

 await new Promise(resolve => setTimeout(resolve));
  console.log('loading header...');
await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('loading content...');
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('loading footer...');
  await new Promise(resolve => setTimeout(resolve, 1000));
 await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('page fully loaded...');
 }
loadPage();
//Define a function fetchPrice(symbol)
//Inside the promise,Use setTimeout to stimulate 2 seconds delay.
//After 2seconds resolve the promise with message "Price foy [symbol] retrieved" 
//Define an async function getPrices() to fetch prices sequentially
//Inside getPrices(),Use wait to call fetchPrice('AAPL) and log the price
//Then use the await to call fetchPrice("GOOG") and log the price
//call getPrice()
function fetchPrice(symbol) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Price for ${symbol} retrieved`);
        }, 2000);
    });
}
async function price() {
    const result1 = await fetchPrice("AAPL");
    console.log(result1);
    const result2 = await fetchPrice("GOOG");
    console.log(result2);
}
price();

