/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const fetch = require('node-fetch');

async function main(event) {
  try {
    const res = await fetch('https://randomuser.me/api');
    const resJson = await res.json();
    console.log('api response 👉', JSON.stringify(resJson, null, 4));
    return {body: JSON.stringify(resJson), statusCode: 200};
  } catch (error) {
    return {body: JSON.stringify({error})};
  }
}

module.exports = {main};
