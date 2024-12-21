import BusinessScreen from "./business-screen";
import { Text } from "react-native";

const segments = {
  "Business Info": <Text>Coming Soon</Text>,
  "Network": <Text>Coming Soon</Text>,
  "Market Place": <Text>Coming Soon</Text>,
  "After work": <Text>Coming Soon</Text>,
  "Travel Knowledge": <Text>Coming Soon</Text>,
  "Blog": <Text>Coming Soon</Text>,
}

export default function Index() {
  return (
    <BusinessScreen props={{
      segments
    }}/>
  )
}