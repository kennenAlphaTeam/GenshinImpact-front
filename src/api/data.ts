import axios from 'axios';

export async function getCookieData(userCookie: string): Promise<any> {
  const res = await axios.post<DataProfile>(
    'http://localhost:3030/api/private-user',
    {
      cookie: userCookie,
    },
  );
  return res.data;
}

export async function getResinData(): Promise<any> {
  const res = await axios.get<DataProfile>(
    'http://localhost:3030/api/private-resin',
  );
  return res.data;
}

export interface DataProfile {
  server?: string;
  role_id?: string;
  profile?: object;
  dailynote: object;
  characters?: object;
  handbook?: object;
  resin?: string;
}
