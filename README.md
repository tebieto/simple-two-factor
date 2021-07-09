# Simple Two Factor by Terry Ebieto

## Technology

- Language: TypeScript
- Backend: Express
- Frontend: React
- Test: No Test
- Linter: No Linter
- Database: No Database
- Container: Docker
- Axios

## Run Backend

- cd /server
- yarn install
- yarn dev

## Run Frontend

- cd /client
- yarn install
- yarn start

## Run In Container(DOCKER)

- install docker locally or any remote provider
- RUN docker-compose build
- RUN docker-compose up

## Frontend Thought Process

- Authenticate user by validating phone number using otp
- User add their phone number in an input form
- Use submit phone number
- Phone number was posted to backend using axios
- Response was received from backend

* Note that response contained otp which I logged for test purpose. Ideally I should use a third party service like Twillio to send OTP to user submitted phone number

- User enter sent otp in an input form
- user submit otp
- otp is sent to backend for validation
- backend returns true or false depending on the correctness of the otp
- user is logged in if otp is correct
- error is thrown if otp is incorrect

## Backend Thought Process

- Receive phone number submitted by user to /authenticate endpoint
- generate OTP, and send to user phone number
- Receive OTP submitted by user to /validate endpoint
- Validate OTP and send result

## Improvements

- Validate inputs sent to backend
- Write unit test and e2e tests
