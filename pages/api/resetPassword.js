const mediaBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const API = {
  SEND_EMAIL: `${mediaBaseUrl}/api/password_reset`,
  SEND_MOBILE: `${mediaBaseUrl}/api/mobile-verify`,
  VERIFY_EMAIL: `${mediaBaseUrl}/api/confirm`,
  RESET_PASSWORD: `${mediaBaseUrl}/api/change_pass`,
};
module.exports = {
  API,
};
