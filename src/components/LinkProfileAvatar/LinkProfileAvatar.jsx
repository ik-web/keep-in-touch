import { NavLink } from "react-router-dom";

import { SmallAvatar } from "components/UI";

export const LinkProfileAvatar = ({ src, ...props}) => {
  return (
    <NavLink {...props}>
      <SmallAvatar src={src} />
    </NavLink>
  );
};
