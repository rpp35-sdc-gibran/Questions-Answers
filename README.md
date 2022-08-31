# Ecommerce API

A backend API for an ecommerce application that manages data for product questions and answers provided by consumers.

## Features

-  Utilized Redis caching and AWS auto-scaling groups to decrease average request response time to 0.12 seconds
-  Performed stress and load testing with LoaderIO to maximize performace
-  Achieved 92% code coverage with Jest/Supertest tests on all API routes

## Diagram

-  View diagram created with Miro [here](https://miro.com/app/board/uXjVOhQ1O_M=/?share_link_id=335376414439)

## Tech Stack

This project was built with the following technologies:

<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" />
<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" />
<img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" />
<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white" />
<img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" />
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
<img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" />
<img src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white" />

## Setup/ Installation

-  Start server to begin listening for requests at port 8080:

```bash
npm start
```

## Testing

-  Run Jest/Supertest test suites while server is running:

```bash
npm test
```

## Resources (include useful or related links)

-  [PostgreSQL](https://www.postgresql.org/docs)
-  [Using DBeaver with PostgreSQL](https://superuser.com/questions/1405077/i-am-using-dbeaver-and-go-the-error-fatal-database-postgres-does-not-exist)
-  [PM2](https://pm2.io/docs/runtime/integration/transpilers/)
-  [Handling PostgreSQL errors on MacOS](https://stackoverflow.com/questions/39710384/cannot-connect-to-postgres-server-running-through-brew-services)
