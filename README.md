# SQL-Query-Generator
Building an SQL Query Generator using React, Node.js and OpenAI API

## Pre-requisites
- Install **node.js** in windows. Once, done check the availability
  - node -v, npm --version
- Update node package manager:
  - npm install npm --global
- Open the projects folder and open cmd here
  - Write this command : npx create-react-app typescript-sql-generator --template typescript
- Thus, the creation of typescript-sql-generator _**REACT APP**_ is ready!!!

## To run this application
1. Download this ZIP file.
2. Open the project in VSCode
3. Now, open the terminal in it and install these packages: 
```
 npm i cors express ts-node dotenv openai --save-dev @types/cors
```
4. Create .env file and paste the API_KEY in it
5. Run the ports of start:frontend - 3000 and start:backend - 8000
6. Open two terminals and run these commands

For Frontend:
  ```
  npm run start:frontend
  ```
For Backend:
  ```
  npm run start:backend
  ```

## Website Overview
#### Home Page
![image](https://github.com/Kowshik-407/SQL-Query-Generator/assets/66817358/7c047a7c-8732-421b-bdb2-98ff8f944a23)

#### Generate a query
![image](https://github.com/Kowshik-407/SQL-Query-Generator/assets/66817358/45b580ee-5fbd-4134-81c8-47b910c9ca80)

#### Prompt the question and view the SQL query
![sql-generator-gif](https://github.com/Kowshik-407/SQL-Query-Generator/assets/66817358/1ed54a90-d8a6-4d64-81c0-8f7e36b22e05)

#### View the History Window
![image](https://github.com/Kowshik-407/SQL-Query-Generator/assets/66817358/9c50ecd8-95b1-4e89-a200-9902c334f0c1)

#### Clear Chat
![clear-chat-gif](https://github.com/Kowshik-407/SQL-Query-Generator/assets/66817358/7be995fc-ce1f-4393-8e9f-bb2850aee624)
