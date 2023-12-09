# ostofit

Technologies used:
* ReactJS
* NodeJS
* HTML+CSS
* Microsoft SQL Server

Social media platform - create account, edit profile, upload videos. Follow other users, like and comment and much more! Check out my video about the project: https://www.youtube.com/watch?v=r_vxXj6xh84&amp;ab_channel=RobertOstovic


1. You'll need to make a 'ostofit' schema in your MS SQL Server database
2. You'll need to make user 'kek' with password '123456'
		- Open MS SQL Server
		- Connect to local database
		- Make user in 'Security'-> 'Logins'
3. Launch script, make sure to use schema 'ostofit'
4. Make sure to install all dependencies with:
	npm install --save
   (in both front-end and back-end)
5. Launch back-end with 'node index.js'
6. Launch front-end with 'npm run start'

Optional: Create new account

7. Type in username: emilje
	   password: 123

8. Check if you have right BACKEND_URL in your front-end (localhost is probably commented, just comment other and uncomment localhost)
