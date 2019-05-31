This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

blueprint for the JSON-server https://github.com/typicode/json-server 
`{
  "contacts": [
    {
      "id": 1,
      "name": "John",
      "phone_number": 9379992,
      "email": "john@gmail.com"
    },
    {
      "id": 2,
      "name": "John2",
      "phone_number": 9379993,
      "email": "john2@gmail.com"
    },
    {
      "id": 3,
      "name": "John3",
      "phone_number": 9379994,
      "email": "john3@gmail.com"
    },
    {
      "id": 4,
      "name": "John4",
      "phone_number": 9379995,
      "email": "john4@gmail.com"
    },
    {
      "id": 5,
      "name": "John5",
      "phone_number": 9379996,
      "email": "john5@gmail.com"
    },
    {
      "id": 6,
      "name": "John6",
      "phone_number": 9379997,
      "email": "john6@gmail.com"
    },
    {
      "id": 7,
      "name": "John7",
      "phone_number": 9379998,
      "email": "john7@gmail.com"
    }
  ]
}`

and routes:
`{
  "/api/*": "/$1"
}`