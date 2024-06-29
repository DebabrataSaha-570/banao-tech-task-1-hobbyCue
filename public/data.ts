import { FaUsers } from "react-icons/fa";
import { FaLocationDot, FaCalendarCheck } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi2";
import SignIn from "@/components/ui/Authentication/SignIn";
import JoinIn from "@/components/ui/Authentication/JoinIn";
export const resourcesData = [
  {
    id: 1,
    title: "People",
    description:
      "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator",
    buttonText: "Connect",
    icon: FaUsers,
    color: "#8064A2",
  },
  {
    id: 2,
    title: "Place",
    description:
      "Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through hobbycue",
    buttonText: "Meetup",
    icon: FaLocationDot,
    color: "#77933C",
  },

  {
    id: 3,
    title: "Product",
    description:
      "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members",
    buttonText: "Get it",
    icon: HiShoppingBag,
    color: "#C0504D ",
  },
  {
    id: 4,
    title: "Program",
    description:
      "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
    buttonText: "Attend",
    icon: FaCalendarCheck,
    color: "#0096C8",
  },
];

export const heroMenuItems = [
  {
    title: "Sign In",
    component: SignIn,
  },
  {
    title: "Join In",
    component: JoinIn,
  },
];
