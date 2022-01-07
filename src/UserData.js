async function userData(userUID) {
  const data = await fetch(`http://localhost:3030/api/${userUID}/userdata`)
  .then(res => res.json());
  return data;
}

async function characterData(userUID) {
  const data = await fetch(`http://localhost:3030/api/${userUID}/characters`)
  .then(res => res.json());
  return data;
}

export default async function allData(userUID) {
  return await Promise.all([userData(userUID), characterData(userUID)]);
}


