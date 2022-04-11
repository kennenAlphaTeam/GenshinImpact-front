import axios from 'axios';

export async function setCookieData(userCookie: string): Promise<any> {
  const res = await axios.put<DataProfile>('api/user/me/cookie', {
    cookie: userCookie,
  });
  return res.data;
  //유저 고유 Cookie값을 서버로 넘겨줌
}

export async function getDailyData(): Promise<any> {
  const res = await axios.get<DailyProfile>('api/mihoyo/me/daily-note');
  return res.data;
  //유저 UID와 고유 Cookie값이 일치할 시 데이타를 반환해줌 api
}

export async function getProfileData(userUID: string): Promise<any> {
  const res = await axios.get<DataProfile>(`api/mihoyo/profile/${userUID}`);
  return res.data;
  //유저 UID 관련된 데이타를 반환해주는 api
}

export async function getMyProfileData(): Promise<any> {
  const res = await axios.get<DataProfile>(`api/mihoyo/me/profile`);
  return res.data;
  //유저 UID 관련된 데이타를 반환해주는 api
}

export async function getIDCardData(): Promise<any> {
  const res = await axios.get<{ genshinUid: string; nickname: string }>(
    'api/user/me/genshinIdCard',
  );
  return res.data;
}

export async function getMyCharacterData(): Promise<object> {
  const res = await axios.get<CharacterProfile>('/api/mihoyo/character');
  return res.data;
}

export interface DailyProfile {
  current_resin: number;
  max_resin: 160;
  resin_recovery_time: string;
  finished_task_num: number;
  total_task_num: number;
  is_extra_task_reward_received: boolean;
  remain_resin_discount_num: number;
  resin_discount_num_limit: number;
  current_expedition_num: number;
  max_expedition_num: number;
  expeditions: Array<{
    avatar_side_icon: string;
    status: string;
    remained_time: string;
  }>;
  current_home_coin: number;
  max_home_coin: number;
  home_coin_recovery_time: string;
  calendar_url: string;
}

export interface DataProfile {
  role: null;
  avatars: Array<{
    id: number;
    image: string;
    name: string;
    element: string;
    fetter: number;
    level: number;
    rarity: number;
    actived_constellation_num: number;
    card_image: string;
    is_chosen: boolean;
  }>;
  stats: {
    activate_day_number: number;
    achevement_number: number;
    win_rate: number;
    anemoculus_number: number;
    avatar_number: number;
    way_point_number: number;
    domain_number: number;
    spiral_abyss: string;
    precious_chest_number: number;
    luxurious_chest_number: number;
    exquisite_chest_number: number;
    common_chest_number: number;
    electroculus_number: number;
    magic_chest_number: number;
  };
  city_explorations?: [];
  world_explorations: Array<{
    level: number;
    exploration_percentage: number;
    icon: string;
    name: string;
    type: string;
    offerings: Array<{ name: string; level: number }>;
    id: number;
  }>;
  homes: Array<{
    level: number;
    visit_num: number;
    comfort_num: number;
    item_num: number;
    name: string;
    icon: string;
    comfort_level_name: string;
    comfort_level_icon: string;
  }>;
  genshinUid?: string;
  nickname?: string;
}

interface Reliquaries {
  id: number;
  name: string;
  icon: string;
  pos: number;
  rarity: number;
  level: number;
  set: {
    id: number;
    name: string;
    affixes: Array<{ activation_number: number; effect: string }>;
  };
  pos_name: string;
}

export interface Character {
  id: number;
  image: string;
  icon: string;
  name: string;
  element: string;
  fetter: number;
  level: number;
  rarity: number;
  weapon: {
    id: number;
    name: string;
    icon: string;
    type: number;
    rarity: number;
    level: number;
    promote_level: number;
    type_name: string;
    desc: string;
    affix_level: number;
  };
  reliquaries: Array<Reliquaries>;
  constellations: Array<{
    id: number;
    name: string;
    icon: string;
    effect: string;
    is_actived: boolean;
    pos: number;
  }>;
}

export interface CharacterProfile {
  avatars: Array<Character>;
}
