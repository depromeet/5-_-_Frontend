import Image from "next/image";
import ic_default_profile from "../../../../../img/ic_default_profile.png";

function ProfileIcon() {
    return (
        <Image 
            src={ic_default_profile}
            alt="사용자 프로필 이미지"/>
    );
}

export default ProfileIcon;

