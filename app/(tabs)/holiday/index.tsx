import React from "react"
import { Text } from "react-native"
import HolidayScreen from "./holiday-screen"

const segments = {
  "Discover more": <Text>Coming Soon</Text>,
  "Out & about": <Text>Coming Soon</Text>,
  "Events": <Text>Coming Soon</Text>,
  "Must see & do": <Text>Coming Soon</Text>,
  "Travel knowledge": <Text>Coming Soon</Text>,
  "Blog": <Text>Coming Soon</Text>,
}

export default function Holiday() {
  return (
    <HolidayScreen props={{
      segments,
    }}/>
  )
};
