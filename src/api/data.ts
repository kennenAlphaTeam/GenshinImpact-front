import axios from 'axios';

export async function setCookieData(userCookie: string): Promise<any> {
  const res = await axios.put<DataProfile>('api/user/me/cookie', {
    cookie: userCookie,
  });
  return res.data;
  //유저 고유 Cookie값을 서버로 넘겨줌
}

export async function getDailyData(): Promise<any> {
  const res = await axios.get<DataProfile>('api/mihoyo/me/daily-note');
  return res.data;
  //유저 UID와 고유 Cookie값이 일치할 시 데이타를 반환해줌 api
}

export async function getProfileData(userUID: string): Promise<any> {
  const res = await axios.get<DataProfile>(`api/mihoyo/profile/${userUID}`);
  return res.data;
  //유저 UID 관련된 데이타를 반환해주는 api
}

export async function getIDCardData(): Promise<any> {
  const res = await axios.get<DataProfile>('api/user/me/genshinIdCard');
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
