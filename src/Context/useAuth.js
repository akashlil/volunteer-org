import { useContext } from "react";
import { allComponetDataPass } from "./AuthProvider";

const useAuth = () => {
  return useContext(allComponetDataPass);
};
export default useAuth;
