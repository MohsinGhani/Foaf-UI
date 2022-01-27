const mediaBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const API = {
  HOME_FEED: `${mediaBaseUrl}/events/api/fetch_home_feed`,
};
module.exports = {
  API,
};
