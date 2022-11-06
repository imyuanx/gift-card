const Base64 = require('js-base64').Base64;

/**
 * @desc 生成参数
 * @param code
 * @param title
 */
function generateParams(code, title) {
  let params = JSON.stringify({ code, title });
  params = Base64.encode(params);
  const url = `https://m-calendar-gift.yuanx.me/?p=${params}`
  console.log('your url:', url);
}


generateParams('NO.1', '米历纪念卡');
