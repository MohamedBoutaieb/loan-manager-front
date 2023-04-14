import axios from 'axios';

const data = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com'
};

axios.post('https://api.example.com/user', data)
  .then(response => {
    // handle success
    console.log(response.data);
  })
  .catch(error => {
    // handle error
    console.log(error);
  });