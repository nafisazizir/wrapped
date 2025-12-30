import {
  WrappedPage,
  Hero,
  Footer,
} from "@/components/wrapped/layout/WrappedPage";
import { TextInterlude } from "@/components/wrapped/moments/TextInterlude";
import { PolaroidCluster } from "@/components/wrapped/moments/PolaroidCluster";
import { FeatureMoment } from "@/components/wrapped/moments/FeatureMoment";
import { Section } from "@/components/wrapped/layout/Section";
import { Polaroid } from "@/components/wrapped/decorative/Polaroid";
import { VideoPlayer } from "@/components/wrapped/media/VideoPlayer";
import type { MediaItem } from "@/components/wrapped/data/types";

// ============================================================================
// CONTENT DATA - All months with labels
// ============================================================================

const january: MediaItem[] = [
  {
    timestamp: "2025-01-01T22:12:16",
    path: "2025/2025-01-01-22-12-16.jpg",
    label: "NYE Dinner",
    type: "image",
    hint: "(late) new year dinner",
  },
  {
    timestamp: "2025-01-04T13:20:47",
    path: "2025/2025-01-04-13-20-47.jpg",
    label: "Burleigh",
    type: "image",
    hint: "beach day with mates",
  },
  {
    timestamp: "2025-01-11T13:22:24",
    path: "2025/2025-01-11-13-22-24.jpg",
    label: "The Basecamp",
    type: "image",
    hint: "apartment basecamp setup",
  },
  {
    timestamp: "2025-01-16T16:31:29",
    path: "2025/2025-01-16-16-31-29.jpg",
    label: "Locked Out",
    type: "image",
    hint: "forgot access card again",
  },
  {
    timestamp: "2025-01-16T17:08:00",
    path: "2025/2025-01-16-17-08-00.jpg",
    label: "Every Time",
    type: "image",
    hint: "where I left my card",
  },
  {
    timestamp: "2025-01-27T13:37:14",
    path: "2025/2025-01-27-13-37-14.jpg",
    label: "Movie Setup",
    type: "image",
    hint: "monitor moved to bed",
  },
];

const february: MediaItem[] = [
  {
    timestamp: "2025-02-07T10:01:01",
    path: "2025/2025-02-07-10-01-01.jpg",
    label: "Moving Day",
    type: "image",
    hint: "leaving the apartment",
  },
  {
    timestamp: "2025-02-07T10:42:01",
    path: "2025/2025-02-07-10-42-01.jpg",
    label: "Move In Things",
    type: "image",
    hint: "van with roommate",
  },
  {
    timestamp: "2025-02-08T07:48:26",
    path: "2025/2025-02-08-07-48-26.jpg",
    label: "Packing Up",
    type: "image",
    hint: "stuff to be moved",
  },
  {
    timestamp: "2025-02-08T10:26:01",
    path: "2025/2025-02-08-10-26-01.jpg",
    label: "Last Shot",
    type: "image",
    hint: "last picture in apartment",
  },
  {
    timestamp: "2025-02-22T10:21:46",
    path: "2025/2025-02-22-10-21-46.jpg",
    label: "New Cafe",
    type: "image",
    hint: "exploring local coffee shop",
  },
  {
    timestamp: "2025-02-22T10:42:05",
    path: "2025/2025-02-22-10-42-05.jpg",
    label: "The Spot",
    type: "image",
    hint: "my new fav coffee shop",
  },
  {
    timestamp: "2025-02-28T18:05:54",
    path: "2025/2025-02-28-18-05-54.jpg",
    label: "Neighbor Note",
    type: "image",
    hint: "ramadan notice to neighbors",
  },
];

const march: MediaItem[] = [
  {
    timestamp: "2025-03-01T04:21:37",
    path: "2025/2025-03-01-04-21-37.jpg",
    label: "First Sahur",
    type: "image",
    hint: "first sahur of ramadan",
  },
  {
    timestamp: "2025-03-04T19:17:50",
    path: "2025/2025-03-04-19-17-50.jpg",
    label: "Cyclone Prep",
    type: "image",
    hint: "Alfred cyclone panic buying",
  },
  {
    timestamp: "2025-03-16T19:32:21",
    path: "2025/2025-03-16-19-32-21.jpg",
    label: "Buka Bersama",
    type: "image",
    hint: "hosted iftar with friends",
  },
  {
    timestamp: "2025-03-20T19:17:14",
    path: "2025/2025-03-20-19-17-14.jpg",
    label: "The Match",
    type: "image",
    hint: "Indonesia vs Australia in Sydney",
  },
  {
    timestamp: "2025-03-21T14:25:50",
    path: "2025/2025-03-21-14-25-50.jpg",
    label: "Sydney Trail",
    type: "image",
    hint: "hitting the trail",
  },
  {
    timestamp: "2025-03-21T14:52:50",
    path: "2025/2025-03-21-14-52-50.jpg",
    label: "Coastal Walk",
    type: "image",
    hint: "beautiful coastal cliff",
  },
  {
    timestamp: "2025-03-21T15:12:01",
    path: "2025/2025-03-21-15-12-01.jpg",
    label: "Ocean View",
    type: "image",
    hint: "overseeing the ocean",
  },
  {
    timestamp: "2025-03-22T13:09:27",
    path: "2025/2025-03-22-13-09-27.jpg",
    label: "Bondi",
    type: "image",
    hint: "Bondi beach",
  },
  {
    timestamp: "2025-03-22T17:23:03",
    path: "2025/2025-03-22-17-23-03.jpg",
    label: "Waiting",
    type: "image",
    hint: "killing time before iftar",
  },
  {
    timestamp: "2025-03-31T09:12:28",
    path: "2025/2025-03-31-09-12-28.jpg",
    label: "Eid Prayer",
    type: "image",
    hint: "Eid in Brisbane with friends",
  },
  {
    timestamp: "2025-03-31T11:56:51",
    path: "2025/2025-03-31-11-56-51.jpg",
    label: "Eid Potluck",
    type: "image",
    hint: "hosted Eid gathering",
  },
];

const aprilMay: MediaItem[] = [
  {
    timestamp: "2025-04-22T17:47:01",
    path: "2025/2025-04-22-17-47-01.jpg",
    label: "Volunteering",
    type: "image",
    hint: "Brisbane Roar game",
  },
  {
    timestamp: "2025-04-25T19:46:36",
    path: "2025/2025-04-25-19-46-36.jpg",
    label: "Climbing",
    type: "image",
    hint: "wall climbing with friends",
  },
  {
    timestamp: "2025-05-09T02:55:53",
    path: "2025/2025-05-09-02-55-53.jpg",
    label: "Jakarta Night",
    type: "image",
    hint: "impromptu trip, friends all night",
  },
  {
    timestamp: "2025-05-09T17:07:02",
    path: "2025/2025-05-09-17-07-02.jpg",
    label: "Locked Out 2",
    type: "image",
    hint: "surprise visit, parents not home",
  },
  {
    timestamp: "2025-05-12T19:35:28",
    path: "2025/2025-05-12-19-35-28.jpg",
    label: "Life Catchup",
    type: "image",
    hint: "overdue catchup with friends",
  },
  {
    timestamp: "2025-05-12T23:00:26",
    path: "2025/2025-05-12-23-00-26.jpg",
    label: "Surabaya",
    type: "image",
    hint: "night out with homies",
  },
  {
    timestamp: "2025-05-14T22:02:13",
    path: "2025/2025-05-14-22-02-13.jpg",
    label: "The Crew",
    type: "image",
    hint: "hanging out with them",
  },
];

const june: MediaItem[] = [
  {
    timestamp: "2025-06-06T09:09:44",
    path: "2025/2025-06-06-09-09-44.jpg",
    label: "Eid Adha",
    type: "image",
    hint: "another Eid in Brisbane",
  },
  {
    timestamp: "2025-06-06T13:44:52",
    path: "2025/2025-06-06-13-44-52.jpg",
    label: "Hosting Again",
    type: "image",
    hint: "Eid gathering at our place",
  },
  {
    timestamp: "2025-06-11T13:33:04",
    path: "2025/2025-06-11-13-33-04.jpg",
    label: "Study Sesh",
    type: "image",
    hint: "finals prep",
  },
  {
    timestamp: "2025-06-16T13:56:58",
    path: "2025/2025-06-16-13-56-58.jpg",
    label: "The Grind",
    type: "image",
    hint: "another study session",
  },
  {
    timestamp: "2025-06-17T20:13:37",
    path: "2025/2025-06-17-20-13-37.jpg",
    label: "Last Exam",
    type: "image",
    hint: "celebration dinner after finals",
  },
  {
    timestamp: "2025-06-19T12:39:11",
    path: "2025/2025-06-19-12-39-11.jpg",
    label: "SF Arrival",
    type: "image",
    hint: "landed in San Francisco",
  },
  {
    timestamp: "2025-06-20T08:01:58",
    path: "2025/2025-06-20-08-01-58.jpg",
    label: "Crash Pad",
    type: "image",
    hint: "living room became bedroom",
  },
  {
    timestamp: "2025-06-20T13:56:01",
    path: "2025/2025-06-20-13-56-01.jpg",
    label: "Solstice",
    type: "image",
    hint: "summer solstice in SF",
  },
  {
    timestamp: "2025-06-20T19:06:12",
    path: "2025/2025-06-20-19-06-12.jpg",
    label: "SF Vibes",
    type: "image",
    hint: "I love this city",
  },
  {
    timestamp: "2025-06-21T14:11:44",
    path: "2025/2025-06-21-14-11-44.jpg",
    label: "SF Houses",
    type: "image",
    hint: "quirky architecture",
  },
  {
    timestamp: "2025-06-21T18:33:40",
    path: "2025/2025-06-21-18-33-40.jpg",
    label: "Best Quote",
    type: "image",
    hint: "best quote in SF",
  },
  {
    timestamp: "2025-06-22T17:20:58",
    path: "2025/2025-06-22-17-20-58.jpg",
    label: "Golden Gate",
    type: "image",
    hint: "picnic at Golden Gate park",
  },
  {
    timestamp: "2025-06-24T13:54:51",
    path: "2025/2025-06-24-13-54-51.jpg",
    label: "Tourist Mode",
    type: "image",
    hint: "playing tourist",
  },
  {
    timestamp: "2025-06-25T14:49:02",
    path: "2025/2025-06-25-14-49-02.jpg",
    label: "Berkeley",
    type: "image",
    hint: "company event with Patrick",
  },
  {
    timestamp: "2025-06-30T13:37:04",
    path: "2025/2025-06-30-13-37-04.jpg",
    label: "Yosemite",
    type: "image",
    hint: "road trip to Yosemite",
  },
  {
    timestamp: "2025-06-30T14:52:12",
    path: "2025/2025-06-30-14-52-12.jpg",
    label: "Upper Falls",
    type: "image",
    hint: "incredible views while sick",
  },
  {
    timestamp: "2025-06-30T15:42:00",
    path: "2025/2025-06-30-15-42-00.JPG",
    label: "With Patrick",
    type: "image",
    hint: "Upper Yosemite Falls",
  },
];

const julyYosemite: MediaItem[] = [
  {
    timestamp: "2025-07-01T09:24:23",
    path: "2025/2025-07-01-09-24-23.jpg",
    label: "The Trail",
    type: "image",
    hint: "view along the trail",
  },
  {
    timestamp: "2025-07-01T12:15:03",
    path: "2025/2025-07-01-12-15-03.jpg",
    label: "Half Dome",
    type: "image",
    hint: "made it while sick",
  },
  {
    timestamp: "2025-07-01T12:42:00",
    path: "2025/2025-07-01-12-42-00.JPG",
    label: "Summit",
    type: "image",
    hint: "Half Dome with Patrick",
  },
  {
    timestamp: "2025-07-01T12:54:20",
    path: "2025/2025-07-01-12-54-20.jpg",
    label: "The View",
    type: "image",
    hint: "view from the dome",
  },
  {
    timestamp: "2025-07-01T12:59:46",
    path: "2025/2025-07-01-12-59-46.jpg",
    label: "Insane",
    type: "image",
    hint: "insane views up there",
  },
  {
    timestamp: "2025-07-01T14:55:01",
    path: "2025/2025-07-01-14-55-01.jpg",
    label: "Pondering",
    type: "image",
    hint: "could stare all day",
  },
];

const julyTahoe: MediaItem[] = [
  {
    timestamp: "2025-07-04T12:42:00",
    path: "2025/2025-07-04-12-42-00.jpg",
    label: "Lake Tahoe",
    type: "image",
    hint: "freezing summer beach",
  },
  {
    timestamp: "2025-07-04T20:52:22",
    path: "2025/2025-07-04-20-52-22.jpg",
    label: "4th of July",
    type: "image",
    hint: "celebration time",
  },
  {
    timestamp: "2025-07-04T22:42:00",
    path: "2025/2025-07-04-22-42-00.JPG",
    label: "Applebees",
    type: "image",
    hint: "Patrick took me, I hated it",
  },
  {
    timestamp: "2025-07-05T12:34:09",
    path: "2025/2025-07-05-12-34-09.jpg",
    label: "Big Breakfast",
    type: "image",
    hint: "American breakfast",
  },
  {
    timestamp: "2025-07-05T14:51:41",
    path: "2025/2025-07-05-14-51-41.jpg",
    label: "Biking",
    type: "image",
    hint: "biking around Tahoe",
  },
  {
    timestamp: "2025-07-06T17:37:33",
    path: "2025/2025-07-06-17-37-33.jpg",
    label: "Road Trip End",
    type: "image",
    hint: "end of road trip",
  },
];

const julySF: MediaItem[] = [
  {
    timestamp: "2025-07-07T12:59:11",
    path: "2025/2025-07-07-12-59-11.jpg",
    label: "SF Above",
    type: "image",
    hint: "SF from up above",
  },
  {
    timestamp: "2025-07-07T13:59:11",
    path: "2025/2025-07-07-13-59-11.jpg",
    label: "Startup Life",
    type: "image",
    hint: "learning about startups",
  },
  {
    timestamp: "2025-07-08T16:08:11",
    path: "2025/2025-07-08-16-08-11.jpg",
    label: "Hacker House",
    type: "image",
    hint: "YC founder & Aussie in SF",
  },
  {
    timestamp: "2025-07-09T10:47:12",
    path: "2025/2025-07-09-10-47-12.jpg",
    label: "Michael!",
    type: "image",
    hint: "catchup from Singapore days",
  },
  {
    timestamp: "2025-07-09T12:20:09",
    path: "2025/2025-07-09-12-20-09.jpg",
    label: "The Bridge",
    type: "image",
    hint: "mandatory Golden Gate",
  },
  {
    timestamp: "2025-07-09T19:51:26",
    path: "2025/2025-07-09-19-51-26.jpg",
    label: "Dolores Park",
    type: "image",
    hint: "thanks for everything",
  },
  {
    timestamp: "2025-07-10T23:29:11",
    path: "2025/2025-07-10-23-29-11.jpg",
    label: "Goodbye SF",
    type: "image",
    hint: "emotional departure",
  },
];

const julyAustralia: MediaItem[] = [
  {
    timestamp: "2025-07-13T17:05:46",
    path: "2025/2025-07-13-17-05-46.jpg",
    label: "Family Time",
    type: "image",
    hint: "picking up family in Sydney",
  },
  {
    timestamp: "2025-07-16T12:50:10",
    path: "2025/2025-07-16-12-50-10.jpg",
    label: "Bondi Fam",
    type: "image",
    hint: "Bondi with the family",
  },
  {
    timestamp: "2025-07-17T17:36:00",
    path: "2025/2025-07-17-17-36-00.JPG",
    label: "Graduation",
    type: "image",
    hint: "Graduation at UQ",
  },
  {
    timestamp: "2025-07-17T18:36:00",
    path: "2025/2025-07-17-18-36-00.jpg",
    label: "Bris Gang",
    type: "image",
    hint: "grad pics with the gang",
  },
  {
    timestamp: "2025-07-24T17:18:06",
    path: "2025/2025-07-24-17-18-06.jpg",
    label: "Debrief Spot",
    type: "image",
    hint: "park near home",
  },
  {
    timestamp: "2025-07-29T12:53:24",
    path: "2025/2025-07-29-12-53-24.jpg",
    label: "Straddie",
    type: "image",
    hint: "trip with roommate",
  },
  {
    timestamp: "2025-07-29T14:30:21",
    path: "2025/2025-07-29-14-30-21.jpg",
    label: "Sun Needed",
    type: "image",
    hint: "after chilly SF",
  },
  {
    timestamp: "2025-07-29T14:36:14",
    path: "2025/2025-07-29-14-36-14.jpg",
    label: "Fabulous",
    type: "image",
    hint: "just fabulous",
  },
  {
    timestamp: "2025-07-29T16:16:32",
    path: "2025/2025-07-29-16-16-32.jpg",
    label: "Kangaroo",
    type: "image",
    hint: "spotted a roo",
  },
  {
    timestamp: "2025-07-31T20:29:00",
    path: "2025/2025-07-31-20-29-00.jpg",
    label: "Penghunies",
    type: "image",
    hint: "celebration dinner",
  },
  {
    timestamp: "2025-07-31T22:28:00",
    path: "2025/2025-07-31-22-28-00.jpg",
    label: "The Squad",
    type: "image",
    hint: "another Penghunies shot",
  },
];

const august: MediaItem[] = [
  {
    timestamp: "2025-08-01T16:45:57",
    path: "2025/2025-08-01-16-45-57.jpg",
    label: "Uni Ball",
    type: "image",
    hint: "Science/Engineering Ball",
  },
  {
    timestamp: "2025-08-07T17:38:15",
    path: "2025/2025-08-07-17-38-15.jpg",
    label: "NZ Bound",
    type: "image",
    hint: "heading to New Zealand",
  },
  {
    timestamp: "2025-08-08T13:53:52",
    path: "2025/2025-08-08-13-53-52.jpg",
    label: "First Snow",
    type: "image",
    hint: "first time seeing snow",
  },
  {
    timestamp: "2025-08-08T14:05:56",
    path: "2025/2025-08-08-14-05-56.jpg",
    label: "Grateful",
    type: "image",
    hint: "grateful to be here",
  },
  {
    timestamp: "2025-08-08T18:14:34",
    path: "2025/2025-08-08-18-14-34.jpg",
    label: "Wakatipu",
    type: "image",
    hint: "sunset at the lake",
  },
  {
    timestamp: "2025-08-09T09:17:54",
    path: "2025/2025-08-09-09-17-54.jpg",
    label: "Alpaca",
    type: "image",
    hint: "on the way to Fiordland",
  },
  {
    timestamp: "2025-08-09T16:28:12",
    path: "2025/2025-08-09-16-28-12.jpg",
    label: "Queenstown",
    type: "image",
    hint: "view from above",
  },
  {
    timestamp: "2025-08-10T10:53:57",
    path: "2025/2025-08-10-10-53-57.jpg",
    label: "Otw to Fiordland",
    type: "image",
    hint: "on the way",
  },
  {
    timestamp: "2025-08-10T11:48:12",
    path: "2025/2025-08-10-11-48-12.jpg",
    label: "Best Time",
    type: "image",
    hint: "best time of my life",
  },
  {
    timestamp: "2025-08-10T12:00:53",
    path: "2025/2025-08-10-12-00-53.jpg",
    label: "Kea!",
    type: "image",
    hint: "spotted a Kea",
  },
  {
    timestamp: "2025-08-10T13:51:59",
    path: "2025/2025-08-10-13-51-59.jpg",
    label: "Milford",
    type: "image",
    hint: "Milford Sound",
  },
  {
    timestamp: "2025-08-10T14:22:15",
    path: "2025/2025-08-10-14-22-15.jpg",
    label: "The Sound",
    type: "image",
    hint: "another Milford shot",
  },
  {
    timestamp: "2025-08-11T18:13:26",
    path: "2025/2025-08-11-18-13-26.jpg",
    label: "Wanaka",
    type: "image",
    hint: "sunset hits different",
  },
  {
    timestamp: "2025-08-13T12:45:02",
    path: "2025/2025-08-13-12-45-02.jpg",
    label: "First Ski",
    type: "image",
    hint: "skiing for first time",
  },
  {
    timestamp: "2025-08-13T16:08:50",
    path: "2025/2025-08-13-16-08-50.jpg",
    label: "Cardrona",
    type: "image",
    hint: "ski resort",
  },
  {
    timestamp: "2025-08-14T09:37:25",
    path: "2025/2025-08-14-09-37-25.jpg",
    label: "Lindis Pass",
    type: "image",
    hint: "beautiful drive",
  },
  {
    timestamp: "2025-08-14T14:07:50",
    path: "2025/2025-08-14-14-07-50.jpg",
    label: "Sealy Tarns",
    type: "image",
    hint: "blown away moment",
  },
  {
    timestamp: "2025-08-14T16:26:44",
    path: "2025/2025-08-14-16-26-44.jpg",
    label: "Hooker Valley",
    type: "image",
    hint: "first bridge crossing",
  },
  {
    timestamp: "2025-08-14T22:10:35",
    path: "2025/2025-08-14-22-10-35.jpg",
    label: "Milky Way",
    type: "image",
    hint: "best starry night ever",
  },
  {
    timestamp: "2025-08-15T08:08:05",
    path: "2025/2025-08-15-08-08-05.jpg",
    label: "Mt Cook",
    type: "image",
    hint: "hostel at Mt Cook",
  },
  {
    timestamp: "2025-08-15T09:27:07",
    path: "2025/2025-08-15-09-27-07.jpg",
    label: "Tasman",
    type: "image",
    hint: "Tasman Glacier",
  },
  {
    timestamp: "2025-08-15T12:10:27",
    path: "2025/2025-08-15-12-10-27.jpg",
    label: "Hooker Me",
    type: "image",
    hint: "Hooker Valley with me",
  },
  {
    timestamp: "2025-08-15T17:35:50",
    path: "2025/2025-08-15-17-35-50.jpg",
    label: "Tekapo",
    type: "image",
    hint: "St John circuit",
  },
  {
    timestamp: "2025-08-16T01:17:30",
    path: "2025/2025-08-16-01-17-30.jpg",
    label: "Dark Sky",
    type: "image",
    hint: "Tekapo stargazing",
  },
  {
    timestamp: "2025-08-16T01:40:53",
    path: "2025/2025-08-16-01-40-53.jpg",
    label: "Stars & Me",
    type: "image",
    hint: "stargazing selfie",
  },
  {
    timestamp: "2025-08-17T13:46:33",
    path: "2025/2025-08-17-13-46-33.jpg",
    label: "Skippers",
    type: "image",
    hint: "Skippers Canyon",
  },
  {
    timestamp: "2025-08-19T15:45:11",
    path: "2025/2025-08-19-15-45-11.jpg",
    label: "Ski Crew",
    type: "image",
    hint: "hostel friends skiing",
  },
  {
    timestamp: "2025-08-20T10:05:46",
    path: "2025/2025-08-20-10-05-46.jpg",
    label: "Bye QT",
    type: "image",
    hint: "goodbye Queenstown",
  },
  {
    timestamp: "2025-08-20T14:52:49",
    path: "2025/2025-08-20-14-52-49.jpg",
    label: "Alps",
    type: "image",
    hint: "Southern Alps from above",
  },
  {
    timestamp: "2025-08-24T07:41:50",
    path: "2025/2025-08-24-07-41-50.jpg",
    label: "Camping",
    type: "image",
    hint: "back home, camping trip",
  },
];

const september: MediaItem[] = [
  {
    timestamp: "2025-09-08T22:41:42",
    path: "2025/2025-09-08-22-41-42.jpg",
    label: "Indo Game",
    type: "image",
    hint: "Indonesia soccer game",
  },
  {
    timestamp: "2025-09-10T10:09:58",
    path: "2025/2025-09-10-10-09-58.jpg",
    label: "Grad 2",
    type: "image",
    hint: "second graduation at UI",
  },
  {
    timestamp: "2025-09-10T10:11:08",
    path: "2025/2025-09-10-10-11-08.jpg",
    label: "",
    type: "image",
    hint: "grad pic",
  },
  {
    timestamp: "2025-09-10T14:29:33",
    path: "2025/2025-09-10-14-29-33.jpg",
    label: "",
    type: "image",
    hint: "another grad pic",
  },
  {
    timestamp: "2025-09-10T19:20:23",
    path: "2025/2025-09-10-19-20-23.jpg",
    label: "JKT Friends",
    type: "image",
    hint: "catchup with Jakarta friends",
  },
  {
    timestamp: "2025-09-11T12:57:27",
    path: "2025/2025-09-11-12-57-27.jpg",
    label: "High School",
    type: "image",
    hint: "old high school friends",
  },
  {
    timestamp: "2025-09-13T23:30:48",
    path: "2025/2025-09-13-23-30-48.jpg",
    label: "Late Talks",
    type: "image",
    hint: "no filter conversations",
  },
  {
    timestamp: "2025-09-14T02:37:00",
    path: "2025/2025-09-14-02-37-00.jpg",
    label: "Cenglu",
    type: "image",
    hint: "three on a motorbike",
  },
  {
    timestamp: "2025-09-14T03:30:42",
    path: "2025/2025-09-14-03-30-42.jpg",
    label: "4AM Meal",
    type: "image",
    hint: "early morning before flight",
  },
];

const octNovDec: MediaItem[] = [
  {
    timestamp: "2025-10-05T11:36:34",
    path: "2025/2025-10-05-11-36-34.jpg",
    label: "Climbing Trip",
    type: "image",
    hint: "back in Brisbane climbing",
  },
  {
    timestamp: "2025-10-05T15:04:42",
    path: "2025/2025-10-05-15-04-42.jpg",
    label: "Cedar Creek",
    type: "image",
    hint: "beautiful spot",
  },
  {
    timestamp: "2025-10-12T19:29:58",
    path: "2025/2025-10-12-19-29-58.jpg",
    label: "Hosting",
    type: "image",
    hint: "small dinner with friends",
  },
  {
    timestamp: "2025-11-05T05:37:16",
    path: "2025/2025-11-05-05-37-16.jpg",
    label: "New Bike",
    type: "image",
    hint: "bought a bike",
  },
  {
    timestamp: "2025-11-22T13:13:35",
    path: "2025/2025-11-22-13-13-35.jpg",
    label: "Farewell",
    type: "image",
    hint: "friends heading home",
  },
  {
    timestamp: "2025-11-23T18:00:09",
    path: "2025/2025-11-23-18-00-09.jpg",
    label: "Scenic Ride",
    type: "image",
    hint: "love this route",
  },
  {
    timestamp: "2025-11-30T12:40:21",
    path: "2025/2025-11-30-12-40-21.jpg",
    label: "Penghunies Hike",
    type: "image",
    hint: "day hike with the crew",
  },
  {
    timestamp: "2025-11-30T12:41:17",
    path: "2025/2025-11-30-12-41-17.jpg",
    label: "",
    type: "image",
    hint: "hike views",
  },
  {
    timestamp: "2025-11-30T17:25:41",
    path: "2025/2025-11-30-17-25-41.jpg",
    label: "Beach Dip",
    type: "image",
    hint: "beach after hike",
  },
  {
    timestamp: "2025-12-07T18:05:25",
    path: "2025/2025-12-07-18-05-25.jpg",
    label: "Bike Life",
    type: "image",
    hint: "another bike moment",
  },
  {
    timestamp: "2025-12-13T12:00:00",
    path: "2025/2025-12-13-12-00-00.jpg",
    label: "Friend Grad",
    type: "image",
    hint: "attended graduation",
  },
  {
    timestamp: "2025-12-14T14:56:37",
    path: "2025/2025-12-14-14-56-37.jpg",
    label: "Grad Party",
    type: "image",
    hint: "graduation party",
  },
  {
    timestamp: "2025-12-18T20:22:03",
    path: "2025/2025-12-18-20-22-03.jpg",
    label: "EOY Party",
    type: "image",
    hint: "end of year party",
  },
  {
    timestamp: "2025-12-19T21:07:43",
    path: "2025/2025-12-19-21-07-43.jpg",
    label: "Birthday",
    type: "image",
    hint: "birthday dinner",
  },
  {
    timestamp: "2025-12-19T21:22:03",
    path: "2025/2025-12-19-21-22-03.jpg",
    label: "Celebration",
    type: "image",
    hint: "birthday with friends",
  },
  {
    timestamp: "2025-12-23T17:07:51",
    path: "2025/2025-12-23-17-07-51.jpg",
    label: "JKT Visitor",
    type: "image",
    hint: "friend visiting from Jakarta",
  },
  {
    timestamp: "2025-12-24T08:38:15",
    path: "2025/2025-12-24-08-38-15.jpg",
    label: "Brunch",
    type: "image",
    hint: "brunch with visitor",
  },
  {
    timestamp: "2025-12-25T12:56:27",
    path: "2025/2025-12-25-12-56-27.jpg",
    label: "Xmas Burleigh",
    type: "image",
    hint: "Christmas at Burleigh",
  },
];

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function Page() {
  return (
    <WrappedPage>
      {/* ==================== HERO ==================== */}
      <Hero />

      {/* ==================== JANUARY ==================== */}
      <TextInterlude size="xl">
        <p className="text-muted-foreground">
          The year started quietly.
          <br />
          The apartment was mine for a while.
        </p>
      </TextInterlude>

      <PolaroidCluster items={january.slice(0, 2)} />

      <TextInterlude timeContext="Early January">
        <p>We did the New Year&apos;s dinner a day late. Classic.</p>
        <p className="mt-4 text-muted-foreground">
          And at this point, Burleigh is basically a second home.
        </p>
      </TextInterlude>

      <Section className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-center">
          <div className="w-70 md:w-85">
            <Polaroid
              src={january[2].path}
              alt={january[2].hint}
              caption={january[2].label}
              rotation={-2}
            />
          </div>
        </div>
      </Section>

      <TextInterlude>
        <p>
          When you have the whole place to yourself, you build a basecamp.
          Turned the couch to comfy bed with back rest, high chairs as tables.
          It worked.
        </p>
      </TextInterlude>

      <Section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="w-50 md:w-65">
            <Polaroid
              src={january[3].path}
              alt={january[3].hint}
              caption={january[3].label}
              rotation={3}
            />
          </div>
          <div className="w-50 md:w-65 mt-8">
            <Polaroid
              src={january[4].path}
              alt={january[4].hint}
              caption={january[4].label}
              rotation={-2}
            />
          </div>
        </div>
      </Section>

      <TextInterlude>
        <p>
          The apartment charged me a penalty fee more times than I&apos;d like
          to admit. Every single time, I&apos;d find the card right where I left
          it.
        </p>
      </TextInterlude>

      <FeatureMoment
        src={january[5].path}
        alt="Monitor setup"
        headline="Peak comfort engineering"
        description="Bored. Moved the monitor to bed. Movies hit different lying down."
        imagePosition="right"
      />

      {/* ==================== FEBRUARY ==================== */}
      <TextInterlude size="lg" timeContext="February">
        <p>Time to move.</p>
      </TextInterlude>

      <PolaroidCluster items={february.slice(0, 4)} />

      <TextInterlude>
        <p>
          New place, same-ish roommate. We loaded up the van and said goodbye to
          the old apartment. One chapter closed, another one opened.
        </p>
      </TextInterlude>

      <FeatureMoment
        src={february[4].path}
        alt="Coffee shop"
        headline="Finding new spots"
        description="Exploring the neighborhood. Found a new favorite coffee shop within weeks."
        imagePosition="left"
      />

      <Section className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-center">
          <div className="w-70 md:w-85">
            <Polaroid
              src={february[6].path}
              alt={february[6].hint}
              caption={february[6].label}
              rotation={2}
            />
          </div>
        </div>
      </Section>

      <TextInterlude>
        <p>
          The day before Ramadan, we wrote letters to our neighbors about the
          early morning noise. New place, new community.
        </p>
      </TextInterlude>

      {/* ==================== MARCH ==================== */}
      <TextInterlude size="lg" timeContext="March">
        <p>Ramadhan started. And so did the adventures.</p>
      </TextInterlude>

      <Section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="w-50 md:w-65">
            <Polaroid
              src={march[0].path}
              alt={march[0].hint}
              caption={march[0].label}
              rotation={-2}
            />
          </div>
          <div className="w-50 md:w-65 mt-6">
            <Polaroid
              src={march[1].path}
              alt={march[1].hint}
              caption={march[1].label}
              rotation={3}
            />
          </div>
        </div>
      </Section>

      <TextInterlude>
        <p>
          First sahur of the month. Made too much food, started too late.
          Meanwhile, Cyclone Alfred had Brisbane panic-buying everything.
        </p>
      </TextInterlude>

      <FeatureMoment
        src={march[2].path}
        alt="Buka bersama"
        headline="Buka bersama"
        description="Hosted iftar with friends at our new place. It's still unfurnished, sitting on the floor, full of food, so was the heart."
        imagePosition="right"
      />

      <TextInterlude timeContext="Late March">
        <p>
          Then we flew to Sydney to watch Indonesia vs Australia. Had to support
          the team.
        </p>
      </TextInterlude>

      <PolaroidCluster items={march.slice(3, 8)} />

      <TextInterlude>
        <p>
          While in Sydney, we hit the trails. Coastal walks, cliffsides, and
          Bondi. Fasting while traveling hits different.
        </p>
      </TextInterlude>

      <FeatureMoment
        src={march[9].path}
        alt="Eid"
        headline="Eid Mubarak"
        description="Back in Brisbane for Eid. Offered our place for the gathering. Good food, better company."
        imagePosition="left"
      />

      <Section className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-center">
          <div className="w-70 md:w-85">
            <Polaroid
              src={march[10].path}
              alt={march[10].hint}
              caption={march[10].label}
              rotation={2}
            />
          </div>
        </div>
      </Section>

      {/* ==================== APRIL - MAY ==================== */}
      <TextInterlude size="lg" timeContext="April - May">
        <p>Brisbane life. Then a quick trip home.</p>
      </TextInterlude>

      <PolaroidCluster items={aprilMay.slice(0, 2)} />

      <TextInterlude>
        <p>
          Volunteering at Brisbane Roar games. Wall climbing with friends. The
          usual routines that make a place feel like home.
        </p>
      </TextInterlude>

      <FeatureMoment
        src={aprilMay[2].path}
        alt="Jakarta night"
        headline="Impromptu trip home"
        description="This was so last minute. Flew back for a visa interview in JKT. Friends stayed up all night with me. Landed at midnight, interview in the morning. Then had to fly back home in the arvo."
        imagePosition="right"
      />

      <Section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="w-50 md:w-65">
            <Polaroid
              src={aprilMay[3].path}
              alt={aprilMay[3].hint}
              caption={aprilMay[3].label}
              rotation={-3}
            />
          </div>
          <div className="w-50 md:w-65 mt-8">
            <Polaroid
              src={aprilMay[4].path}
              alt={aprilMay[4].hint}
              caption={aprilMay[4].label}
              rotation={2}
            />
          </div>
        </div>
      </Section>

      <TextInterlude>
        <p>
          Tried to surprise my parents. Showed up at the house. They
          weren&apos;t home. Locked outside. Again.
        </p>
      </TextInterlude>

      <PolaroidCluster items={aprilMay.slice(5, 7)} />

      <TextInterlude>
        <p>
          Surabaya nights with the homies. Overdue catchups, late night talks.
          The kind of time you can&apos;t plan.
        </p>
      </TextInterlude>

      {/* ==================== JUNE - BRISBANE ==================== */}
      <TextInterlude size="lg" timeContext="June">
        <p>June was a lot.</p>
      </TextInterlude>

      <PolaroidCluster items={june.slice(0, 4)} />

      <TextInterlude>
        <p>
          Another Eid Adha hosted at our place. Then straight into finals mode.
          Library sessions, late nights, the usual grind.
        </p>
        <p className="mt-4 text-muted-foreground">
          One last exam. One celebration dinner. Then I got on a plane.
        </p>
      </TextInterlude>

      {/* ==================== SF - THE TRIP ==================== */}
      <TextInterlude size="xl">
        <p className="text-muted-foreground">
          The next morning, I was in San Francisco.
        </p>
      </TextInterlude>

      <FeatureMoment
        src={june[5].path}
        alt="SF arrival"
        headline="San Francisco"
        description="Crashing at Patrick's place. Living room became my bedroom. The gap between wanting something and achieving it isn't as wide as it seems."
        imagePosition="left"
        priority
      />

      <TextInterlude>
        <p className="text-sm text-muted-foreground">
          I wrote about this trip.{" "}
          <a
            href="https://www.nafisazizi.com/blog/debrief-episode-1-crossing-impossible-distances"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Read the full story →
          </a>
        </p>
      </TextInterlude>

      <PolaroidCluster items={june.slice(6, 11)} />

      <TextInterlude>
        <p>
          Summer solstice. Quirky Victorian houses. Golden Gate picnics. I
          walked this city until my legs gave up. Worth it.
        </p>
      </TextInterlude>

      <FeatureMoment
        src={june[14].path}
        alt="Yosemite"
        headline="Road trip to Yosemite"
        description="Patrick drove. I was already getting sick. COVID, probably. But we made it to Upper Yosemite Falls."
        imagePosition="right"
      />

      {/* ==================== JULY - HALF DOME ==================== */}
      <TextInterlude size="xl" timeContext="July 1st">
        <p className="text-muted-foreground">Then came Half Dome.</p>
      </TextInterlude>

      <FeatureMoment
        src={julyYosemite[1].path}
        alt="Half Dome"
        headline="I made it"
        description="Sick. Probably COVID. Body weak, out of breath, coughing. Patrick went ahead. Then I encountered a bear on the trail, alone. I didn't think I'd make it past halfway. But I did."
        imagePosition="left"
        layout="full"
      />

      <PolaroidCluster items={julyYosemite.slice(2, 6)} />

      <TextInterlude>
        <p>
          The view from the top was insane. I could&apos;ve stayed up there
          forever. Still don&apos;t know how I pulled that off.
        </p>
      </TextInterlude>

      {/* ==================== JULY - TAHOE ==================== */}
      <TextInterlude size="lg" timeContext="4th of July">
        <p>Next stop: Lake Tahoe. Glassy Water.</p>
      </TextInterlude>

      <PolaroidCluster items={julyTahoe.slice(0, 3)} />

      <Section className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:pt-14">
        <VideoPlayer
          src="/2025/2025-07-04-21-42-00.MOV"
          className="max-w-md md:max-w-2xl mx-auto"
          aspectRatio="aspect-9/16 md:aspect-video"
          objectPosition="object-cover md:object-[50%_65%]"
          caption="4th of July fireworks at Lake Tahoe"
        />
      </Section>

      <TextInterlude>
        <p>
          Summer in Tahoe was freezing. Everyone on the beach in puffer jackets.
          Patrick took me to Applebees after the fireworks, he said it&apos;s
          part of learning the American culture. I hated it.
        </p>
      </TextInterlude>

      <Section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="w-50 md:w-65">
            <Polaroid
              src={julyTahoe[3].path}
              alt={julyTahoe[3].hint}
              caption={julyTahoe[3].label}
              rotation={-2}
            />
          </div>
          <div className="w-50 md:w-65 mt-6">
            <Polaroid
              src={julyTahoe[4].path}
              alt={julyTahoe[4].hint}
              caption={julyTahoe[4].label}
              rotation={3}
            />
          </div>
        </div>
      </Section>

      {/* ==================== JULY - BACK IN SF ==================== */}
      <TextInterlude timeContext="Back in SF">
        <p>
          This city taught me a lot. Met founders, visited hacker houses,
          learned about the startup scene. The energy here is different.
        </p>
      </TextInterlude>

      <PolaroidCluster items={julySF.slice(0, 4)} />

      <FeatureMoment
        src={julySF[4].path}
        alt="Golden Gate"
        headline="The mandatory shot"
        description="You can't leave SF without it."
        imagePosition="right"
      />

      <Section className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-center">
          <div className="w-70 md:w-85">
            <Polaroid
              src={julySF[6].path}
              alt={julySF[6].hint}
              caption={julySF[6].label}
              rotation={-2}
            />
          </div>
        </div>
      </Section>

      <TextInterlude>
        <p>
          Leaving SF was emotional. Never thought I could pull off a trip like
          this. Still don&apos;t know how I afforded it.
        </p>
      </TextInterlude>

      {/* ==================== JULY - FAMILY & GRADUATION ==================== */}
      <TextInterlude size="xl" timeContext="Mid July">
        <p className="text-muted-foreground">
          Landed in Brisbane. Dropped off my bag.
          <br />
          Next morning, flew to Sydney.
        </p>
      </TextInterlude>

      <PolaroidCluster items={[julyAustralia[0], julyAustralia[1]]} />

      <TextInterlude>
        <p>
          Family flew in from Indonesia. Spent a few days exploring Sydney
          together. Bondi, city walks, the usual tourist things.
        </p>
        <p className="mt-4 text-muted-foreground">
          Then we flew back to Brisbane. Because graduation was coming.
        </p>
      </TextInterlude>

      <FeatureMoment
        src={julyAustralia[2].path}
        alt="Graduation"
        headline="Graduated"
        description="Four years of work. One ceremony. Family in the crowd. The Brisbane gang showed up. This one meant everything."
        imagePosition="left"
        layout="full"
      />

      <Section className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="flex justify-center">
          <div className="w-70 md:w-85">
            <Polaroid
              src={julyAustralia[3].path}
              alt={julyAustralia[3].hint}
              caption={julyAustralia[3].label}
              rotation={-2}
            />
          </div>
        </div>
      </Section>

      <TextInterlude>
        <p>
          Grad pics with the gang. The week felt surreal. Then family flew back
          home.
        </p>
      </TextInterlude>

      <TextInterlude timeContext="Late July">
        <p>After the chaos, Straddie with the roommate.</p>
      </TextInterlude>

      <PolaroidCluster items={julyAustralia.slice(5, 9)} />

      <div className="mb-30" />

      <FeatureMoment
        src={julyAustralia[10].path}
        alt="Penghunies"
        headline="Penghunies dinner"
        description="Celebration dinner with the crew. The people who made Brisbane feel like home."
        imagePosition="right"
        layout="full"
      />

      {/* ==================== AUGUST - NEW ZEALAND ==================== */}
      <TextInterlude size="xl" timeContext="August">
        <p className="text-muted-foreground">Then I flew to New Zealand.</p>
        <p className="text-base text-muted-foreground mt-6 tracking-tight">
          Part of the grad trip series.{" "}
          <a
            href="https://www.nafisazizi.com/blog/debrief-episode-2-finding-the-adventurer-within"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            The adventure
          </a>
          {" · "}
          <a
            href="https://www.nafisazizi.com/blog/debrief-episode-3-hostel-chronicles"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            The hostels
          </a>
        </p>
      </TextInterlude>

      <FeatureMoment
        src={august[2].path}
        alt="First snow"
        headline="First time seeing snow"
        description="With my own eyes. Not on a screen. Real snow. If I didn't go while I had the chance, I knew I'd regret it forever."
        imagePosition="left"
      />

      <PolaroidCluster items={august.slice(3, 7)} />

      <TextInterlude>
        <p>
          Lake Wakatipu at sunset. Alpacas on the road. Queenstown from above.
          Every turn was another postcard.
        </p>
      </TextInterlude>

      <FeatureMoment
        src={august[10].path}
        alt="Milford Sound"
        headline="Milford Sound"
        description="Didn't take many photos here. Just sat and watched. Some moments are better lived than captured."
        imagePosition="right"
      />

      <PolaroidCluster items={august.slice(7, 10)} />

      <TextInterlude timeContext="Wanaka to Mt Cook">
        <p>
          Wanaka sunset hit different. Then the drives through Lindis Pass to Mt
          Cook.
        </p>
      </TextInterlude>

      <Section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="w-50 md:w-65">
            <Polaroid
              src={august[12].path}
              alt={august[12].hint}
              caption={august[12].label}
              rotation={-2}
            />
          </div>
          <div className="w-50 md:w-65 mt-8">
            <Polaroid
              src={august[13].path}
              alt={august[13].hint}
              caption={august[13].label}
              rotation={3}
            />
          </div>
        </div>
      </Section>

      <FeatureMoment
        src={august[18].path}
        alt="Milky Way"
        headline="The best starry night"
        description="Mt Cook parking lot. So dark. So bright. The Milky Way was right there. Best night sky of my life."
        imagePosition="left"
      />

      <PolaroidCluster items={august.slice(14, 17)} />

      <FeatureMoment
        src={august[17].path}
        alt="Hooker Valley"
        headline="Blown away"
        description="There's something about hiking that connects you to a place unlike other activities. This was one of those moments."
        imagePosition="right"
      />

      <PolaroidCluster items={august.slice(20, 23)} />

      <TextInterlude>
        <p>
          Sealy Tarns. Hooker Valley. Tasman Glacier. Tekapo Dark Sky Reserve.
          Two weeks of non-stop wonder.
        </p>
      </TextInterlude>

      <Section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="w-50 md:w-65">
            <Polaroid
              src={august[23].path}
              alt={august[23].hint}
              caption={august[23].label}
              rotation={2}
            />
          </div>
          <div className="w-50 md:w-65 mt-6">
            <Polaroid
              src={august[24].path}
              alt={august[24].hint}
              caption={august[24].label}
              rotation={-3}
            />
          </div>
        </div>
      </Section>

      <TextInterlude>
        <p>
          Stargazing in Tekapo. First time skiing at Cardrona. Met people at
          hostels who became ski buddies.
        </p>
      </TextInterlude>

      <FeatureMoment
        src={august[28].path}
        alt="Southern Alps"
        imagePosition="right"
        layout="full"
        objectPosition="center"
      />

      <FeatureMoment
        src={august[27].path}
        alt="Goodbye Queenstown"
        headline="Goodbye Queenstown"
        description="Two weeks felt like a lifetime. Left a piece of myself in the Southern Alps."
        imagePosition="right"
      />

      {/* ==================== SEPTEMBER ==================== */}
      <TextInterlude size="lg" timeContext="September">
        <p>Back to Indonesia. Time for graduation number two.</p>
      </TextInterlude>

      <FeatureMoment
        src={september[1].path}
        alt="UI Graduation"
        headline="Graduated. Again."
        description="UI this time. Different country, same feeling. Two degrees in one year."
        imagePosition="left"
        layout="full"
      />

      <PolaroidCluster items={september.slice(2, 5)} />

      <TextInterlude>
        <p>
          Caught up with Jakarta friends. High school crew. Late night talks
          with no filter.
        </p>
      </TextInterlude>

      <Section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="w-50 md:w-65">
            <Polaroid
              src={september[6].path}
              alt={september[6].hint}
              caption={september[6].label}
              rotation={-2}
            />
          </div>
          <div className="w-50 md:w-65 mt-8">
            <Polaroid
              src={september[7].path}
              alt={september[7].hint}
              caption={september[7].label}
              rotation={3}
            />
          </div>
        </div>
      </Section>

      <TextInterlude>
        <p>
          Three on a motorbike at 2am. 4am breakfast. The kind of goodbye that
          stays with you.
        </p>
      </TextInterlude>

      {/* ==================== OCT - DEC ==================== */}
      <TextInterlude size="lg" timeContext="October - December">
        <p>Back in Brisbane. Settling into whatever comes next.</p>
      </TextInterlude>

      <PolaroidCluster items={octNovDec.slice(0, 3)} />

      <TextInterlude>
        <p>
          Climbing trips. Hosting dinners. The rhythm of Brisbane life resumed.
        </p>
      </TextInterlude>

      <FeatureMoment
        src={octNovDec[3].path}
        alt="New bike"
        headline="New wheels"
        description="Bought a bike. Started riding the scenic routes around Brisbane."
        imagePosition="right"
      />

      <PolaroidCluster items={octNovDec.slice(5, 9)} />

      <TextInterlude>
        <p>
          Day hikes with Penghunies. Beach dips after. Friends heading home for
          good. The crew was changing.
        </p>
      </TextInterlude>

      <Section className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        <PolaroidCluster items={octNovDec.slice(10, 13)} />
      </Section>

      <TextInterlude timeContext="December">
        <p>
          Attended friends&apos; graduations. End of year parties. Birthday
          dinner. Friends visiting from Jakarta.
        </p>
      </TextInterlude>

      <PolaroidCluster items={octNovDec.slice(13, 16)} />

      <FeatureMoment
        src={octNovDec[17].path}
        alt="Christmas at Burleigh"
        headline="Christmas at Burleigh"
        description="Full circle. Started the year with beach days at Burleigh. Ended it the same way."
        imagePosition="left"
      />

      {/* ==================== CLOSING ==================== */}
      <TextInterlude size="xl" className="py-24 md:py-32">
        <p className="text-center">
          From Brisbane to San Francisco.
          <br />
          From Yosemite to Queenstown.
          <br />
          Two graduations. Countless memories.
        </p>
        <p className="text-center text-muted-foreground mt-8">
          2025 was a lot. In the best way.
        </p>
        <p className="text-center text-muted-foreground">
          It was too good to be true.
        </p>
        
      </TextInterlude>

      <Footer />
    </WrappedPage>
  );
}
