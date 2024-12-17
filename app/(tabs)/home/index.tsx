import HomeScreen from "./home-screen";
import { Text } from "react-native";

const hotelsData = [
  {
      _id: '1',
      title: 'The lead',
      image: 'https://thumbs.dreamstime.com/b/luxury-hotel-room-master-bedroom-creative-ai-design-background-instagram-facebook-wall-painting-photo-wallpaper-backgrounds-325040660.jpg',
  },
  {
      _id: '2',
      title: 'Prestige',
      image: 'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI='
  },
  {
      _id: '3',
      title: 'Marriott',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/620719916.webp?k=616cefe723433fd501f4fe89c7f415ce49822b10d769c7a725f8e35b39be66af&o='
  }
]

const segments = {
  "Getting There": <Text>Coming Soon</Text>,
  "Discover": <Text>Coming Soon</Text>,
  "Events": <Text>Coming Soon</Text>,
  "Peace & Prosperity": <Text>Coming Soon</Text>,
  "Blog": <Text>Coming Soon</Text>,
}

export default function Index() {
  return (
    <HomeScreen props={{
      segments,
      hotelsData
    }}/>
  )
}