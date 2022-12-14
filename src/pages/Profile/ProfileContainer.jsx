import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';

import {
  fetchOnlineStatus,
  fetchProfile,
  setIsAuthUserProfile
} from '../../store/reducers/profileReducer';
import { fetchProfilePosts } from '../../store/reducers/postsReducer';
import Preloader from '../../shared/Preloader/Preloader';
import Profile from './Profile';
import withLayout from '../../hocs/withLayout';
import withAuthUser from '../../hocs/withAuthUser';
import { getAuthUserId } from '../../store/selectors/authSelectors';
import { getIsProfile } from '../../store/selectors/profileSelectors';

const ProfileContainer = ({
  authUserId,
  isProfile,
  fetchProfile,
  fetchProfilePosts,
  setIsAuthUserProfile,
  fetchOnlineStatus
}) => {
  const params = useParams();
  const profileId = +params.userId;
  const isAuthUserProfile = profileId === authUserId;

  const setProfile = () => {
    setIsAuthUserProfile(isAuthUserProfile)
    fetchProfile(profileId);
    fetchOnlineStatus(profileId);
    fetchProfilePosts(profileId);
  };

  useEffect(() => {
    setProfile();
  }, [profileId]);

  return (
    <>
      {isProfile
        ? <Profile isAuthUserProfile={isAuthUserProfile} />
        : <Preloader />
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  authUserId: getAuthUserId(state),
  isProfile: getIsProfile(state)
});

const mapStateToDispatch = {
  fetchProfile,
  fetchProfilePosts,
  setIsAuthUserProfile,
  fetchOnlineStatus
};

export default compose(
  withAuthUser,
  withLayout,
  connect(mapStateToProps, mapStateToDispatch)
)(ProfileContainer);
