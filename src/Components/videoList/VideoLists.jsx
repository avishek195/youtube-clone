import VideoCartList from "./VideoCartList/VideoCartList";

import pic1 from "../../../public/photo-1709038391881-db3e3024cd4a.jpg";
import pic2 from "../../../public/photo-1708907799720-ada1d839abb5.avif";
import pic3 from "../../../public/photo-1708958310998-90223b478216.avif";
import pic4 from "../../../public/photo-1708865746958-658369bdb6b4.avif";
import pic5 from "../../../public/photo-1708715812650-48b7eb25b303.avif";
import pic6 from "../../../public/photo-1690098520896-c47094fabc48.avif";
import pic7 from "../../../public/photo-1708648707687-83fd8839b416.avif";
import pic8 from "../../../public/photo-1708532399146-d0da2db7faea.avif";
import pic9 from "../../../public/photo-1708106068345-56d48763d39d.avif";
import profilePic from "../../../public/Mypic.jpeg";

const videoList = [
  {
    id: 1,
    thumnail: pic1,
    cheenalpic: profilePic,
    title: "This is a title",
    cheenalname: "ApnaCollage",
    views: "200k views",
    time: "2 weeks ago",
  },
  {
    id: 2,
    thumnail: pic2,
    cheenalpic: profilePic,
    title: "This is a title || pubg",
    cheenalname: "CodeWithHarry",
    views: "600k views",
    time: " 5 years ago",
  },
  {
    id: 3,
    thumnail: pic3,
    cheenalpic: profilePic,
    title: "This is a title || pubg",
    cheenalname: "CodeWithHarry",
    views: "600k views",
    time: " 5 years ago",
  },
  {
    id: 4,
    thumnail: pic4,
    cheenalpic: profilePic,
    title: "This is a title || pubg",
    cheenalname: "CodeWithHarry",
    views: "600k views",
    time: " 5 years ago",
  },
  {
    id: 5,
    thumnail: pic5,
    cheenalpic: profilePic,
    title: "This is a title || pubg",
    cheenalname: "CodeWithHarry",
    views: "600k views",
    time: " 5 years ago",
  },
  {
    id: 6,
    thumnail: pic6,
    cheenalpic: profilePic,
    title: "This is a title || pubg",
    cheenalname: "CodeWithHarry",
    views: "600k views",
    time: " 5 years ago",
  },
  {
    id: 7,
    thumnail: pic7,
    cheenalpic: profilePic,
    title: "This is a title || pubg",
    cheenalname: "CodeWithHarry",
    views: "600k views",
    time: " 5 years ago",
  },
  {
    id: 8,
    thumnail: pic8,
    cheenalpic: profilePic,
    title: "This is a title || pubg",
    cheenalname: "CodeWithHarry",
    views: "600k views",
    time: " 5 years ago",
  },
  {
    id: 9,
    thumnail: pic9,
    cheenalpic: profilePic,
    title: "This is a title || pubg",
    cheenalname: "CodeWithHarry",
    views: "600k views",
    time: " 5 years ago",
  },
];

const VideoLists = () => {
  return <VideoCartList videoList={videoList} />;
};

export default VideoLists;
