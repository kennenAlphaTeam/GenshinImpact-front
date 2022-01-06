let profile = [];
let characters = [];

export async function UserData(userUID) {
  fetch(`http://localhost:3030/api/${userUID}/userdata`)
  .then(res => res.json())
  .then(json => {
    profile = json;
  });
  fetch(`http://localhost:3030/api/${userUID}/characters`)
  .then(res => res.json())
  .then(json => {
    characters = json;
  });
}

export { profile, characters };
