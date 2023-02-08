import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useAuthSelector, useProfileSelector } from "store/selectors";
import {
  fetchOnlineStatus,
  fetchProfile,
  fetchProfilePosts,
  setIsUserProfile,
} from "store/reducers";

import classes from "./Profile.module.scss";
import { Layout } from "components";
import { Loader } from "components/UI";
import { ProfileImages } from "./ProfileImages/ProfileImages";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfilePostCreating } from "./ProfilePostCreating/ProfilePostCreating";
import { ProfilePosts } from "./ProfilePosts/ProfilePosts";

export const Profile = () => {
  const dispatch = useDispatch();
  const { loading } = useProfileSelector();
  const { user } = useAuthSelector();
  const { profileId } = useParams();
  const handledProfileId = profileId ? profileId : user.id;
  const isUserProfile = !profileId;

  useEffect(() => {
    dispatch(fetchProfile(handledProfileId));
    dispatch(fetchProfilePosts(handledProfileId));
    dispatch(fetchOnlineStatus(handledProfileId));
    dispatch(setIsUserProfile(isUserProfile));
  }, [profileId]);

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={classes.profile}>
        <ProfileImages />

        <section className={classes.profile__info}>
          <ProfileInfo />
        </section>

        {isUserProfile && (
          <section className={classes.profile__postCreating}>
            <ProfilePostCreating />
          </section>
        )}

        <section className={classes.profile__posts}>
          <ProfilePosts isUserProfile={isUserProfile} />
        </section>
      </div>
    </Layout>
  );
};
