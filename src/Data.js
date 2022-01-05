let profile = [];
let characters = [];

export function GetUserData(userUID) {
  fetch(`http://localhost:3030/api/${userUID}/userdata`)
  .then(res => profile = res);
  fetch(`http://localhost:3030/api/${userUID}/characters`)
  .then(res => characters = res);
}

export {profile, characters};
