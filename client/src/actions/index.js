import { getActiveProfile,
         getCurrentUser,
         finishSignup } from './userActions';
import { getNewsFeed, getNewsLikes, postNewsLike } from './newsActions';
import { getFollowing, getFollowers } from './followActions';
import { getTimeline, getStatusLikes, postStatus, postStatusLike } from './statusActions';

const actions = {
  getActiveProfile,
  getCurrentUser,
  getNewsFeed,
  getNewsLikes,
  postNewsLike,
  finishSignup,
  getFollowing,
  getFollowers,
  getTimeline,
  getStatusLikes,
  postStatus,
  postStatusLike
};

export default actions;