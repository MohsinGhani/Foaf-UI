const mediaBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const API = {
  HOME_FEED: `${mediaBaseUrl}/events/api/fetch_home_feed`,
  GET_SINGLE_EVENT_POST: `${mediaBaseUrl}/events/api/fetch_event_by_id`,
  GET_SINGLE_ARTICLE_POST: `${mediaBaseUrl}/events/api/fetch_article`,
};
module.exports = {
  API,
};
