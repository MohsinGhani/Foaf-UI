const mediaBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const API = {
  SEND_EMAIL: `${mediaBaseUrl}/api/add_interests`,
};
module.exports = {
  API,
};
