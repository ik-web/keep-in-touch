import { useSelector } from "react-redux";

export const useAuthSelector = () => useSelector((state) => state.authReducer);
export const useFollowSelector = () => useSelector((state) => state.followReducer);
export const usePostSelector = () => useSelector((state) => state.postReducer);
