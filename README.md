
React v16  is used as frontend and Node v6.11.3  is used as a server.


Steps for setup are as below :

STEP 1 :  git clone and run command npm install inside the directory to download the NodeJs and ReactJs dependencies.  

STEP 2 :  create a database and import the reactpractical SQL dump file into that database. (phpmyadmin recommended as the dump file was created using phpmyadmin)

STEP 3 :  change the database configurations (development)  in file  practical\server\config\config.js   as per your database connectivity detail.

STEP 4 :  run command npm start in command line interface. 

STEP 5 :  open URL   http://localhost:3000/    in the browser to load web application. 


Note: Here, ReactJs is running on port  3000   and NodeJs is running on port  4000,  so please be sure these port are available (no other program is using this port).
