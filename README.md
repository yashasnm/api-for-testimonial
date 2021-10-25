# Backend API for testimonial Specifications

Created the backend for a crud and photo upload and get from s3 directory website. 

## Documentation
- Use Postman to create documentation
- Use aws s3 for image upload and fetch from frontend

[![DOCS](https://img.shields.io/badge/Documentation-see%20docs-green?style=for-the-badge&logo=appveyor)](https://documenter.getpostman.com/view/15808730/UV5c8uxd)

## Functionality

- testmonial crud with advance search query
- upload image to s3 and save img info to mongodb 

## Security
- Prevent NoSQL injections
- Add headers for security (helmet)
- Prevent cross site scripting - XSS
- Add a rate limit for requests of 100 requests per 10 minutes
- Protect against http param polution
- Use cors to make API public 


## Code Related Suggestions
- NPM scripts for dev and production env
- Config file for important constants
- Use controller methods with documented descriptions/routes

