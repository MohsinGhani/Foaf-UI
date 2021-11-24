// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mediaBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const API = {
  SEARCH_ALL: `${mediaBaseUrl}/api/search_all`,
};
module.exports = {
  API,
};