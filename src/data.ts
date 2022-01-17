import axios from 'axios';

export let data: Object = null;

export async function getPrivateData(userCookie: string): Promise<any> {
  await axios
    .post('http://localhost:3030/api/private-user', {
      cookie: userCookie,
    })
    .then((res) => (data = res.data));
  console.log('Response saved');
  console.log(data);
}
