const TREM = require("../../constant");

const fetchData = require("../../utils/fetch");

module.exports = async () => {
  const url = TREM.constant.URL.API[Math.floor(Math.random() * TREM.constant.URL.API.length)];
  const ans = await fetchData(`https://${url}/api/v1/trem/rts`);

  if (ans) return await ans.json();
  return null;
};