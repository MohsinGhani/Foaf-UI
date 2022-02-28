const mediaBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const API = {
  reset_email: `${mediaBaseUrl}/api/password_reset`,
};
module.exports = {
  API,
};
