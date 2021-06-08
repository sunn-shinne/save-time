import "./NavBar.css";
import { useState } from "react";
import iconPlus from "../../img/icons8-плюс.svg";
import iconBell from "../../img/icons8-напоминания-50.svg";
import { ProfileModal } from "../UI/ProfileModal/ProfileModal";
import { Notifications } from "../UI/Notifications/Notifications";
import { AddTask } from "../AddTask/AddTask";
import {useSelector} from "react-redux";

export const NavBar = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isNotificationsVisible, setNotificationsVisible] = useState(false);
  const [isAddTaskVisible, setAddTaskVisible] = useState(false);

  const auth = useSelector((store) => store.auth);
  const {profile} = auth;

  return (
    <div className={"nav-bar"}>
      <div className={"icons"}>
        <img
          alt={""}
          src={iconPlus}
          onClick={() => setAddTaskVisible(!isAddTaskVisible)}
        />
        <img
          alt={""}
          src={iconBell}
          onClick={() => setNotificationsVisible(!isNotificationsVisible)}
        />
      </div>

      <div
        className={"avatar"}
        onClick={() => setModalVisible(!isModalVisible)}
      >
        <span>{profile.username.substring(0, 1).toUpperCase()}</span> {/* первая буква имени */}
      </div>

      <ProfileModal isVisible={isModalVisible} setIsVisible={setModalVisible} />
      <Notifications
        isVisible={isNotificationsVisible}
        setIsVisible={setNotificationsVisible}
      />
      <AddTask isVisible={isAddTaskVisible} setIsVisible={setAddTaskVisible} />
    </div>
  );
};
