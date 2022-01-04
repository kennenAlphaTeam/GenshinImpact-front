let characters;
let profiles;
const axios = require('axios');
const { createHmac } = import('crypto');
const uuid = require('uuid');

(async () => {
  const targetUID = localStorage.getItem('UID').toString(); //'825460402'
  const server = getServer(targetUID);
  const cookie = `G_AUTHUSER_H=0; mi18nLang=ko-kr; ${uuid.v4()}; _gcl_au=1.1.666413328.1635596533; _gcl_aw=GCL.1635596533.CjwKCAjw2vOLBhBPEiwAjEeK9mh-SKUkuB0xTLvV8lfXBw5Unot28R1lVAadYch0SO24iyYNnnstNRoCDE4QAvD_BwE; _gac_UA-115635327-41=1.1635596534.CjwKCAjw2vOLBhBPEiwAjEeK9mh-SKUkuB0xTLvV8lfXBw5Unot28R1lVAadYch0SO24iyYNnnstNRoCDE4QAvD_BwE; cto_bundle=hV4W0l94S3ltWnkxVUZobWNXMXlQdHM2MFMweTUxUCUyQnI5TDUwc1JESXRHSHNkNFBFMmtVVFlNb1Y1JTJGcGx4VGt2MklKU1BXT3ZTRzJCOTVleVpEZCUyQm5ydGNZajhiJTJGT1Rwck80SWhRRnJnTVNSVkJrUXZwWllYZEE0VE1Cc04zTXNjbno4d1hYY1ZtRFJZb3pNMTZrQ3pnSHA5USUzRCUzRA; G_ENABLED_IDPS=google; _ga_6ZT27XS0C9=GS1.1.1636264105.6.1.1636264175.0; ltoken=qkNt9Ca8yME1jbWU5Q6H6SH8e4QfowbBBv9fkuLF; ltuid=118341597; cookie_token=s9cvpLgg5hJbmb2Ea1dKFsgTPeSS5yJajRgEBoqr; account_id=118341597; _gid=GA1.2.850880863.1640160709; _ga_54PBK3QDF4=GS1.1.1640176418.1.1.1640176607.0; _ga=GA1.2.972803241.1635596534; _gat_gtag_UA_201411121_1=1`;
  const dataMachine = axios.create({
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
      Cookie: cookie,
      Accept: 'application/json;charset=utf-8',
      Referrer: 'https://webstatic-sea.mihoyo.com/',
      'x-rpc-language': 'ko-kr',
      'x-rpc-client_type': '4', //모바일
      'x-rpc-app_version': '1.5.0',
      DS: generateDSToken(),
    },
  });

  dataMachine.interceptors.request.use((config) => {
    config.headers.DS = generateDSToken();
    return config;
  });

  const profile = await dataMachine
    .get(
      `https://bbs-api-os.mihoyo.com/game_record/genshin/api/index?server=${server}&role_id=${targetUID}`,
    )
    .then((res) => res.data);
  if (profile.retcode !== 0) {
    return undefined;
  }

  const character = await dataMachine
    .post(`https://bbs-api-os.mihoyo.com/game_record/genshin/api/character`, {
      character_ids: profile.data.avatars.map((c) => c.id),
      role_id: targetUID,
      server,
    })
    .then((res) => res.data.data);

    characters = character;
    profiles = profile;
})();

function parseCookie(cookies) {
  const output = {};
  try {
    cookies.split(/\s*;\s*/).forEach((pair) => {
      pair = pair.split(/\s*=\s*/);
      output[pair[0]] = pair.splice(1).join('=');
    });
    return output;
  } catch {
    return undefined;
  }
} //cookie안의 데이터에서 uid만 따로 추출


function generateDSToken() {
  const time = Math.floor(Date.now() / 1000);
  const DS_SALT = '6cqshh5dhw73bzxn20oexa9k516chk7s';
  const randomChar = randomString(6);
  const data = `salt=${DS_SALT}&t=${time}&r=${randomChar}`;
  const hash = createHmac('md5').update(data).digest('hex');
  console.log(`DS token is ${time},${randomChar},${hash}`);
  return `${time},${randomChar},${hash}`;
}

function randomString(len = 6, an) {
  an = an && an.toLowerCase();
  let str = '';
  let i = 0;
  let min = an === 'a' ? 10 : 0;
  let max = an === 'n' ? 10 : 62;
  for (; i++ < len; ) {
    let r = (Math.random() * (max - min) + min) << 0;
    str += String.fromCharCode((r += r > 9 ? (r < 36 ? 55 : 61) : 48));
  }
  return str;
}

function getServer(uid) {
  const serverList = {
    6: 'os_usa',
    7: 'os_euro',
    8: 'os_asia',
    9: 'os_cht',
  };
  return serverList[uid[0]];
}

export {characters, profiles}
