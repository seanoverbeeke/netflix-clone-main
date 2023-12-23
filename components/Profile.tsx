import { useRouter } from "next/router";

interface ProfileProps {
  avatar: string;
  name: string;
  onClick: any;
}

const Profile: React.FC<ProfileProps> = ({ avatar, name }) => {
  const router = useRouter();
  return (
    <div className="group flex-row w-44 mx-auto">
      <div
        onClick={() => {
          router.push("/");
        }}
      ></div>
      <div
        className="
            w-44
            h-44
            rounded-md
            flex
            items-center
            justify-center
            border-2
            border-transparent
            group-hover:cursor-pointer
            group-hover:border-white
            overflow-hidden
            "
      >
        <img src={avatar} alt={name} />
      </div>
      <div
        className="
      mt-4
      text-gray-400
      text-2xl
      text-center
      group-hover:text-white    
      "
      >
        {name}
      </div>
    </div>
  );
};
export default Profile;