# API-mailchimp-db
here i have used mailchimp api and created a login page and sended all the login information to the mailchimp audience.
make sure to install express via npm install express
make sure to install body parser
make sure to create package.json by using node init

to deploy the app in heroku :

=> Create account in Heroku 
=> Instal heroku CLI
=> then in app.js add "app.listen(process.env.PORT || 3000, ()=>{
console.log("server is up and started @3k");
}

Then go to hyper terminal and add following commands:
=> git init
=> git add .
=> git commit -m "First Commit"
=> git push heroku master

Then if you face any problem make saure to check using this command:

"heroku logs" it will twll us our mistake;

then to change it again :
=> git add .
=> git commit -m " second "
=> git push heroku master
