async function sendReminder(email) {
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log(`Reminder sent to ${email}`);
}
const users = ['haniazanawayelign@gmail.com', 'mildredosebeochoki@gmail.com', 'rutagengwakezaqueen@gmail.com'];

users.forEach(async user => {
  await sendReminder(user);
});

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

    

 