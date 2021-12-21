const mediaBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const API = {
  BACKGROUND_IMAGE: `${mediaBaseUrl}/post/api/get_background_image`,
  CREATE_STATUS: `${mediaBaseUrl}/post/api/create_status`,
  CREATE_VIDEO_STATUS: `${mediaBaseUrl}/post/api/create_video_status`,
  CREATE_AUDIO_STATUS: `${mediaBaseUrl}/post/api/create_audio_status`,
};
module.exports = {
  API,
};
