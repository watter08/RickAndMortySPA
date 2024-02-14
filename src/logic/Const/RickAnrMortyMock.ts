import type { Character } from "@/interface/types/RickAndMorty/CharacterTypes"

export const ColorPalleteByStatus: Record<string, string> = {
    'Alive': '#007849' ,
    'Dead': '#BC3D2F' ,
    'unknown': '#0B374D' 
}

export const ColorPalleteGender: Record<string, string> = {
    'Female': '#813772' ,
    'Male': '#07889B' ,
    'Genderless': '#A9A9A9' ,
    'unknown': '#233237' 
}

export const ColorPalleteSpecie: Record<string, string> = {
    'Human': '#4484CE' ,
    'Alien': '#B37D4E' ,
    'unknown': '#A5A5AF' 
}

export const RickAndMortyMultipleCharacters: Character[] = [
    {
        "Id": 1,
        "Name": "Rick Sanchez",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31",
            "https://rickandmortyapi.com/api/episode/32",
            "https://rickandmortyapi.com/api/episode/33",
            "https://rickandmortyapi.com/api/episode/34",
            "https://rickandmortyapi.com/api/episode/35",
            "https://rickandmortyapi.com/api/episode/36",
            "https://rickandmortyapi.com/api/episode/37",
            "https://rickandmortyapi.com/api/episode/38",
            "https://rickandmortyapi.com/api/episode/39",
            "https://rickandmortyapi.com/api/episode/40",
            "https://rickandmortyapi.com/api/episode/41",
            "https://rickandmortyapi.com/api/episode/42",
            "https://rickandmortyapi.com/api/episode/43",
            "https://rickandmortyapi.com/api/episode/44",
            "https://rickandmortyapi.com/api/episode/45",
            "https://rickandmortyapi.com/api/episode/46",
            "https://rickandmortyapi.com/api/episode/47",
            "https://rickandmortyapi.com/api/episode/48",
            "https://rickandmortyapi.com/api/episode/49",
            "https://rickandmortyapi.com/api/episode/50",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/1",
        "Created": "2017-11-04T18:48:46.25Z"
    },
    {
        "Id": 2,
        "Name": "Morty Smith",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31",
            "https://rickandmortyapi.com/api/episode/32",
            "https://rickandmortyapi.com/api/episode/33",
            "https://rickandmortyapi.com/api/episode/34",
            "https://rickandmortyapi.com/api/episode/35",
            "https://rickandmortyapi.com/api/episode/36",
            "https://rickandmortyapi.com/api/episode/37",
            "https://rickandmortyapi.com/api/episode/38",
            "https://rickandmortyapi.com/api/episode/39",
            "https://rickandmortyapi.com/api/episode/40",
            "https://rickandmortyapi.com/api/episode/41",
            "https://rickandmortyapi.com/api/episode/42",
            "https://rickandmortyapi.com/api/episode/43",
            "https://rickandmortyapi.com/api/episode/44",
            "https://rickandmortyapi.com/api/episode/45",
            "https://rickandmortyapi.com/api/episode/46",
            "https://rickandmortyapi.com/api/episode/47",
            "https://rickandmortyapi.com/api/episode/48",
            "https://rickandmortyapi.com/api/episode/49",
            "https://rickandmortyapi.com/api/episode/50",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/2",
        "Created": "2017-11-04T18:50:21.651Z"
    },
    {
        "Id": 3,
        "Name": "Summer Smith",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31",
            "https://rickandmortyapi.com/api/episode/32",
            "https://rickandmortyapi.com/api/episode/33",
            "https://rickandmortyapi.com/api/episode/34",
            "https://rickandmortyapi.com/api/episode/35",
            "https://rickandmortyapi.com/api/episode/36",
            "https://rickandmortyapi.com/api/episode/38",
            "https://rickandmortyapi.com/api/episode/39",
            "https://rickandmortyapi.com/api/episode/40",
            "https://rickandmortyapi.com/api/episode/41",
            "https://rickandmortyapi.com/api/episode/42",
            "https://rickandmortyapi.com/api/episode/43",
            "https://rickandmortyapi.com/api/episode/44",
            "https://rickandmortyapi.com/api/episode/45",
            "https://rickandmortyapi.com/api/episode/46",
            "https://rickandmortyapi.com/api/episode/47",
            "https://rickandmortyapi.com/api/episode/48",
            "https://rickandmortyapi.com/api/episode/49",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/3",
        "Created": "2017-11-04T19:09:56.428Z"
    },
    {
        "Id": 4,
        "Name": "Beth Smith",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31",
            "https://rickandmortyapi.com/api/episode/32",
            "https://rickandmortyapi.com/api/episode/33",
            "https://rickandmortyapi.com/api/episode/34",
            "https://rickandmortyapi.com/api/episode/35",
            "https://rickandmortyapi.com/api/episode/36",
            "https://rickandmortyapi.com/api/episode/38",
            "https://rickandmortyapi.com/api/episode/39",
            "https://rickandmortyapi.com/api/episode/40",
            "https://rickandmortyapi.com/api/episode/41",
            "https://rickandmortyapi.com/api/episode/42",
            "https://rickandmortyapi.com/api/episode/43",
            "https://rickandmortyapi.com/api/episode/44",
            "https://rickandmortyapi.com/api/episode/45",
            "https://rickandmortyapi.com/api/episode/46",
            "https://rickandmortyapi.com/api/episode/47",
            "https://rickandmortyapi.com/api/episode/48",
            "https://rickandmortyapi.com/api/episode/49",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/4",
        "Created": "2017-11-04T19:22:43.665Z"
    },
    {
        "Id": 5,
        "Name": "Jerry Smith",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/7",
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/12",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/20",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/23",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31",
            "https://rickandmortyapi.com/api/episode/32",
            "https://rickandmortyapi.com/api/episode/33",
            "https://rickandmortyapi.com/api/episode/35",
            "https://rickandmortyapi.com/api/episode/36",
            "https://rickandmortyapi.com/api/episode/38",
            "https://rickandmortyapi.com/api/episode/39",
            "https://rickandmortyapi.com/api/episode/40",
            "https://rickandmortyapi.com/api/episode/41",
            "https://rickandmortyapi.com/api/episode/42",
            "https://rickandmortyapi.com/api/episode/43",
            "https://rickandmortyapi.com/api/episode/44",
            "https://rickandmortyapi.com/api/episode/45",
            "https://rickandmortyapi.com/api/episode/46",
            "https://rickandmortyapi.com/api/episode/47",
            "https://rickandmortyapi.com/api/episode/48",
            "https://rickandmortyapi.com/api/episode/49",
            "https://rickandmortyapi.com/api/episode/50",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/5",
        "Created": "2017-11-04T19:26:56.301Z"
    },
    {
        "Id": 6,
        "Name": "Abadango Cluster Princess",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Abadango",
            "Url": "https://rickandmortyapi.com/api/location/2"
        },
        "Location": {
            "Name": "Abadango",
            "Url": "https://rickandmortyapi.com/api/location/2"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/27"
        ],
        "Url": "https://rickandmortyapi.com/api/character/6",
        "Created": "2017-11-04T19:50:28.25Z"
    },
    {
        "Id": 7,
        "Name": "Abradolf Lincler",
        "Status": "unknown",
        "Species": "Human",
        "Type": "Genetic experiment",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Testicle Monster Dimension",
            "Url": "https://rickandmortyapi.com/api/location/21"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11"
        ],
        "Url": "https://rickandmortyapi.com/api/character/7",
        "Created": "2017-11-04T19:59:20.523Z"
    },
    {
        "Id": 8,
        "Name": "Adjudicator Rick",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/8",
        "Created": "2017-11-04T20:03:34.737Z"
    },
    {
        "Id": 9,
        "Name": "Agency Director",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/24"
        ],
        "Url": "https://rickandmortyapi.com/api/character/9",
        "Created": "2017-11-04T20:06:54.976Z"
    },
    {
        "Id": 10,
        "Name": "Alan Rails",
        "Status": "Dead",
        "Species": "Human",
        "Type": "Superhuman (Ghost trains summoner)",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Worldender's lair",
            "Url": "https://rickandmortyapi.com/api/location/4"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/10",
        "Created": "2017-11-04T20:19:09.017Z"
    },
    {
        "Id": 11,
        "Name": "Albert Einstein",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/12"
        ],
        "Url": "https://rickandmortyapi.com/api/character/11",
        "Created": "2017-11-04T20:20:20.965Z"
    },
    {
        "Id": 12,
        "Name": "Alexander",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/12",
        "Created": "2017-11-04T20:32:33.144Z"
    },
    {
        "Id": 13,
        "Name": "Alien Googah",
        "Status": "unknown",
        "Species": "Alien",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "Url": "https://rickandmortyapi.com/api/character/13",
        "Created": "2017-11-04T20:33:30.779Z"
    },
    {
        "Id": 14,
        "Name": "Alien Morty",
        "Status": "unknown",
        "Species": "Alien",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/14",
        "Created": "2017-11-04T20:51:31.373Z"
    },
    {
        "Id": 15,
        "Name": "Alien Rick",
        "Status": "unknown",
        "Species": "Alien",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/15",
        "Created": "2017-11-04T20:56:13.215Z"
    },
    {
        "Id": 16,
        "Name": "Amish Cyborg",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/16",
        "Created": "2017-11-04T21:12:45.235Z"
    },
    {
        "Id": 17,
        "Name": "Annie",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/17",
        "Created": "2017-11-04T22:21:24.481Z"
    },
    {
        "Id": 18,
        "Name": "Antenna Morty",
        "Status": "Alive",
        "Species": "Human",
        "Type": "Human with antennae",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/18",
        "Created": "2017-11-04T22:25:29.008Z"
    },
    {
        "Id": 19,
        "Name": "Antenna Rick",
        "Status": "unknown",
        "Species": "Human",
        "Type": "Human with antennae",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/19",
        "Created": "2017-11-04T22:28:13.756Z"
    },
    {
        "Id": 20,
        "Name": "Ants in my Eyes Johnson",
        "Status": "unknown",
        "Species": "Human",
        "Type": "Human with ants in his eyes",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/20",
        "Created": "2017-11-04T22:34:53.659Z"
    },
    {
        "Id": 21,
        "Name": "Aqua Morty",
        "Status": "unknown",
        "Species": "Humanoid",
        "Type": "Fish-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/21",
        "Created": "2017-11-04T22:39:48.055Z"
    },
    {
        "Id": 22,
        "Name": "Aqua Rick",
        "Status": "unknown",
        "Species": "Humanoid",
        "Type": "Fish-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/22",
        "Created": "2017-11-04T22:41:07.171Z"
    },
    {
        "Id": 23,
        "Name": "Arcade Alien",
        "Status": "unknown",
        "Species": "Alien",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Immortality Field Resort",
            "Url": "https://rickandmortyapi.com/api/location/7"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/26"
        ],
        "Url": "https://rickandmortyapi.com/api/character/23",
        "Created": "2017-11-05T08:43:05.095Z"
    },
    {
        "Id": 24,
        "Name": "Armagheadon",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Cromulon",
        "Gender": "Male",
        "Origin": {
            "Name": "Signus 5 Expanse",
            "Url": "https://rickandmortyapi.com/api/location/22"
        },
        "Location": {
            "Name": "Signus 5 Expanse",
            "Url": "https://rickandmortyapi.com/api/location/22"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/24.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16"
        ],
        "Url": "https://rickandmortyapi.com/api/character/24",
        "Created": "2017-11-05T08:48:30.776Z"
    },
    {
        "Id": 25,
        "Name": "Armothy",
        "Status": "Dead",
        "Species": "unknown",
        "Type": "Self-aware arm",
        "Gender": "Male",
        "Origin": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Location": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/23"
        ],
        "Url": "https://rickandmortyapi.com/api/character/25",
        "Created": "2017-11-05T08:54:29.343Z"
    },
    {
        "Id": 26,
        "Name": "Arthricia",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Cat-Person",
        "Gender": "Female",
        "Origin": {
            "Name": "Purge Planet",
            "Url": "https://rickandmortyapi.com/api/location/9"
        },
        "Location": {
            "Name": "Purge Planet",
            "Url": "https://rickandmortyapi.com/api/location/9"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/26.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/20"
        ],
        "Url": "https://rickandmortyapi.com/api/character/26",
        "Created": "2017-11-05T08:56:46.165Z"
    },
    {
        "Id": 27,
        "Name": "Artist Morty",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/27.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/27",
        "Created": "2017-11-05T08:59:07.457Z"
    },
    {
        "Id": 28,
        "Name": "Attila Starwar",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/28.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/17"
        ],
        "Url": "https://rickandmortyapi.com/api/character/28",
        "Created": "2017-11-05T09:02:16.595Z"
    },
    {
        "Id": 29,
        "Name": "Baby Legs",
        "Status": "Alive",
        "Species": "Human",
        "Type": "Human with baby legs",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/29.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/29",
        "Created": "2017-11-05T09:06:19.644Z"
    },
    {
        "Id": 30,
        "Name": "Baby Poopybutthole",
        "Status": "Alive",
        "Species": "Poopybutthole",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/30.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "Url": "https://rickandmortyapi.com/api/character/30",
        "Created": "2017-11-05T09:13:16.483Z"
    },
    {
        "Id": 31,
        "Name": "Baby Wizard",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/31.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/31",
        "Created": "2017-11-05T09:15:11.286Z"
    },
    {
        "Id": 32,
        "Name": "Bearded Lady",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/32.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/32",
        "Created": "2017-11-05T09:18:04.184Z"
    },
    {
        "Id": 33,
        "Name": "Beebo",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Venzenulon 7",
            "Url": "https://rickandmortyapi.com/api/location/10"
        },
        "Location": {
            "Name": "Venzenulon 7",
            "Url": "https://rickandmortyapi.com/api/location/10"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/33.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/29"
        ],
        "Url": "https://rickandmortyapi.com/api/character/33",
        "Created": "2017-11-05T09:21:55.595Z"
    },
    {
        "Id": 34,
        "Name": "Benjamin",
        "Status": "Alive",
        "Species": "Poopybutthole",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/34.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/17"
        ],
        "Url": "https://rickandmortyapi.com/api/character/34",
        "Created": "2017-11-05T09:24:04.748Z"
    },
    {
        "Id": 35,
        "Name": "Bepisian",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Bepisian",
        "Gender": "unknown",
        "Origin": {
            "Name": "Bepis 9",
            "Url": "https://rickandmortyapi.com/api/location/11"
        },
        "Location": {
            "Name": "Bepis 9",
            "Url": "https://rickandmortyapi.com/api/location/11"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/35",
        "Created": "2017-11-05T09:27:38.491Z"
    },
    {
        "Id": 36,
        "Name": "Beta-Seven",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Hivemind",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/36.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/14"
        ],
        "Url": "https://rickandmortyapi.com/api/character/36",
        "Created": "2017-11-05T09:31:08.952Z"
    },
    {
        "Id": 37,
        "Name": "Beth Sanchez",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (C-500A)",
            "Url": "https://rickandmortyapi.com/api/location/23"
        },
        "Location": {
            "Name": "Earth (C-500A)",
            "Url": "https://rickandmortyapi.com/api/location/23"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/37.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/37",
        "Created": "2017-11-05T09:38:22.96Z"
    },
    {
        "Id": 38,
        "Name": "Beth Smith",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/38",
        "Created": "2017-11-05T09:48:44.23Z"
    },
    {
        "Id": 39,
        "Name": "Beth Smith",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Evil Rick's Target Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/34"
        },
        "Location": {
            "Name": "Earth (Evil Rick's Target Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/34"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/39.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/39",
        "Created": "2017-11-05T09:52:31.777Z"
    },
    {
        "Id": 40,
        "Name": "Beth's Mytholog",
        "Status": "Dead",
        "Species": "Mythological Creature",
        "Type": "Mytholog",
        "Gender": "Female",
        "Origin": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Location": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/40.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/18"
        ],
        "Url": "https://rickandmortyapi.com/api/character/40",
        "Created": "2017-11-05T10:02:26.701Z"
    },
    {
        "Id": 41,
        "Name": "Big Boobed Waitress",
        "Status": "Alive",
        "Species": "Mythological Creature",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Fantasy World",
            "Url": "https://rickandmortyapi.com/api/location/48"
        },
        "Location": {
            "Name": "Fantasy World",
            "Url": "https://rickandmortyapi.com/api/location/48"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/41.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/5"
        ],
        "Url": "https://rickandmortyapi.com/api/character/41",
        "Created": "2017-11-05T10:13:45.96Z"
    },
    {
        "Id": 42,
        "Name": "Big Head Morty",
        "Status": "unknown",
        "Species": "Human",
        "Type": "Human with giant head",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/42.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/42",
        "Created": "2017-11-05T10:15:53.349Z"
    },
    {
        "Id": 43,
        "Name": "Big Morty",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/43.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/43",
        "Created": "2017-11-05T10:17:04.997Z"
    },
    {
        "Id": 44,
        "Name": "Body Guard Morty",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/44.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/44",
        "Created": "2017-11-05T10:18:11.062Z"
    },
    {
        "Id": 45,
        "Name": "Bill",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/45.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/45",
        "Created": "2017-11-05T10:22:27.446Z"
    },
    {
        "Id": 46,
        "Name": "Bill",
        "Status": "unknown",
        "Species": "Animal",
        "Type": "Dog",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/46.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/2"
        ],
        "Url": "https://rickandmortyapi.com/api/character/46",
        "Created": "2017-11-05T10:24:38.089Z"
    },
    {
        "Id": 47,
        "Name": "Birdperson",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Bird-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "Bird World",
            "Url": "https://rickandmortyapi.com/api/location/15"
        },
        "Location": {
            "Name": "Planet Squanch",
            "Url": "https://rickandmortyapi.com/api/location/35"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/49",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/47",
        "Created": "2017-11-05T11:13:36.018Z"
    },
    {
        "Id": 48,
        "Name": "Black Rick",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/48.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/48",
        "Created": "2017-11-05T11:15:26.044Z"
    },
    {
        "Id": 49,
        "Name": "Blamph",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/49.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/49",
        "Created": "2017-11-05T11:18:26.702Z"
    },
    {
        "Id": 50,
        "Name": "Blim Blam",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Korblock",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/50.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/14"
        ],
        "Url": "https://rickandmortyapi.com/api/character/50",
        "Created": "2017-11-05T11:21:43.756Z"
    },
    {
        "Id": 51,
        "Name": "Blue Diplomat",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/51.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/51",
        "Created": "2017-11-05T11:24:49.688Z"
    },
    {
        "Id": 52,
        "Name": "Blue Footprint Guy",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Location": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/52.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/23"
        ],
        "Url": "https://rickandmortyapi.com/api/character/52",
        "Created": "2017-11-05T11:26:42.084Z"
    },
    {
        "Id": 53,
        "Name": "Blue Shirt Morty",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/53.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/53",
        "Created": "2017-11-05T11:28:38.627Z"
    },
    {
        "Id": 54,
        "Name": "Bobby Moynihan",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/54.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/54",
        "Created": "2017-11-05T11:31:26.348Z"
    },
    {
        "Id": 55,
        "Name": "Boobloosian",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Boobloosian",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/55.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/21"
        ],
        "Url": "https://rickandmortyapi.com/api/character/55",
        "Created": "2017-11-05T11:32:53.847Z"
    },
    {
        "Id": 56,
        "Name": "Bootleg Portal Chemist Rick",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/56.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/56",
        "Created": "2017-11-05T11:34:16.447Z"
    },
    {
        "Id": 57,
        "Name": "Borpocian",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Elephant-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/57.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/57",
        "Created": "2017-11-05T11:38:29.459Z"
    },
    {
        "Id": 58,
        "Name": "Brad",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/58.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/46"
        ],
        "Url": "https://rickandmortyapi.com/api/character/58",
        "Created": "2017-11-05T11:40:02.554Z"
    },
    {
        "Id": 59,
        "Name": "Brad Anderson",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/59.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/7"
        ],
        "Url": "https://rickandmortyapi.com/api/character/59",
        "Created": "2017-11-05T11:41:38.964Z"
    },
    {
        "Id": 60,
        "Name": "Calypso",
        "Status": "Dead",
        "Species": "Human",
        "Type": "Superhuman",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/60.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/60",
        "Created": "2017-11-05T11:52:45.852Z"
    },
    {
        "Id": 61,
        "Name": "Campaign Manager Morty",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/61.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/61",
        "Created": "2017-11-05T11:53:44.737Z"
    },
    {
        "Id": 62,
        "Name": "Canklanker Thom",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Gromflomite",
        "Gender": "Male",
        "Origin": {
            "Name": "Gromflom Prime",
            "Url": "https://rickandmortyapi.com/api/location/19"
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/62.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1"
        ],
        "Url": "https://rickandmortyapi.com/api/character/62",
        "Created": "2017-11-05T12:06:23.217Z"
    },
    {
        "Id": 63,
        "Name": "Centaur",
        "Status": "Alive",
        "Species": "Mythological Creature",
        "Type": "Centaur",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Mr. Goldenfold's dream",
            "Url": "https://rickandmortyapi.com/api/location/18"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/63.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/2"
        ],
        "Url": "https://rickandmortyapi.com/api/character/63",
        "Created": "2017-11-05T12:22:17.848Z"
    },
    {
        "Id": 64,
        "Name": "Chris",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Organic gun",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/64.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/12"
        ],
        "Url": "https://rickandmortyapi.com/api/character/64",
        "Created": "2017-11-05T12:25:03.541Z"
    },
    {
        "Id": 65,
        "Name": "Chris",
        "Status": "Alive",
        "Species": "Humanoid",
        "Type": "Microverse inhabitant",
        "Gender": "Male",
        "Origin": {
            "Name": "Rick's Battery Microverse",
            "Url": "https://rickandmortyapi.com/api/location/24"
        },
        "Location": {
            "Name": "Rick's Battery Microverse",
            "Url": "https://rickandmortyapi.com/api/location/24"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/65.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/17"
        ],
        "Url": "https://rickandmortyapi.com/api/character/65",
        "Created": "2017-11-30T11:02:41.935Z"
    },
    {
        "Id": 66,
        "Name": "Coach Feratu (Balik Alistane)",
        "Status": "Dead",
        "Species": "Mythological Creature",
        "Type": "Vampire",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/66.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/18"
        ],
        "Url": "https://rickandmortyapi.com/api/character/66",
        "Created": "2017-11-30T11:10:10.491Z"
    },
    {
        "Id": 67,
        "Name": "Collector",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Light bulb-Alien",
        "Gender": "Male",
        "Origin": {
            "Name": "The Menagerie",
            "Url": "https://rickandmortyapi.com/api/location/25"
        },
        "Location": {
            "Name": "The Menagerie",
            "Url": "https://rickandmortyapi.com/api/location/25"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/67.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/29"
        ],
        "Url": "https://rickandmortyapi.com/api/character/67",
        "Created": "2017-11-30T11:13:46.785Z"
    },
    {
        "Id": 68,
        "Name": "Colossus",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Location": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/68.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/23"
        ],
        "Url": "https://rickandmortyapi.com/api/character/68",
        "Created": "2017-11-30T11:17:32.733Z"
    },
    {
        "Id": 69,
        "Name": "Commander Rick",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/69.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/69",
        "Created": "2017-11-30T11:28:06.461Z"
    },
    {
        "Id": 70,
        "Name": "Concerto",
        "Status": "Dead",
        "Species": "Humanoid",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/70.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/24"
        ],
        "Url": "https://rickandmortyapi.com/api/character/70",
        "Created": "2017-11-30T11:31:41.926Z"
    },
    {
        "Id": 71,
        "Name": "Conroy",
        "Status": "Dead",
        "Species": "Robot",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/71.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/71",
        "Created": "2017-11-30T11:35:50.183Z"
    },
    {
        "Id": 72,
        "Name": "Cool Rick",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (K-83)",
            "Url": "https://rickandmortyapi.com/api/location/26"
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/72.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/72",
        "Created": "2017-11-30T11:41:11.542Z"
    },
    {
        "Id": 73,
        "Name": "Cop Morty",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/73.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/73",
        "Created": "2017-11-30T11:43:04.217Z"
    },
    {
        "Id": 74,
        "Name": "Cop Rick",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/74.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/74",
        "Created": "2017-11-30T11:48:18.95Z"
    },
    {
        "Id": 75,
        "Name": "Courier Flap",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Planet Squanch",
            "Url": "https://rickandmortyapi.com/api/location/35"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/75.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/21"
        ],
        "Url": "https://rickandmortyapi.com/api/character/75",
        "Created": "2017-11-30T12:12:57.553Z"
    },
    {
        "Id": 76,
        "Name": "Cousin Nicky",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/76.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/76",
        "Created": "2017-11-30T14:11:52.882Z"
    },
    {
        "Id": 77,
        "Name": "Cowboy Morty",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/77.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/77",
        "Created": "2017-11-30T14:13:17.371Z"
    },
    {
        "Id": 78,
        "Name": "Cowboy Rick",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/78.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/78",
        "Created": "2017-11-30T14:15:18.347Z"
    },
    {
        "Id": 79,
        "Name": "Crab Spider",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Animal",
        "Gender": "unknown",
        "Origin": {
            "Name": "Hideout Planet",
            "Url": "https://rickandmortyapi.com/api/location/27"
        },
        "Location": {
            "Name": "Hideout Planet",
            "Url": "https://rickandmortyapi.com/api/location/27"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/79.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/79",
        "Created": "2017-11-30T14:18:16.899Z"
    },
    {
        "Id": 80,
        "Name": "Creepy Little Girl",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Mr. Goldenfold's dream",
            "Url": "https://rickandmortyapi.com/api/location/18"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/80.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/2"
        ],
        "Url": "https://rickandmortyapi.com/api/character/80",
        "Created": "2017-11-30T14:20:35.772Z"
    },
    {
        "Id": 81,
        "Name": "Crocubot",
        "Status": "Dead",
        "Species": "Animal",
        "Type": "Robot-Crocodile hybrid",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Worldender's lair",
            "Url": "https://rickandmortyapi.com/api/location/4"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/81.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/81",
        "Created": "2017-11-30T14:23:41.053Z"
    },
    {
        "Id": 82,
        "Name": "Cronenberg Rick",
        "Status": "unknown",
        "Species": "Cronenberg",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Cronenberg Earth",
            "Url": "https://rickandmortyapi.com/api/location/12"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/82",
        "Created": "2017-11-30T14:28:54.596Z"
    },
    {
        "Id": 83,
        "Name": "Cronenberg Morty",
        "Status": "unknown",
        "Species": "Cronenberg",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Cronenberg Earth",
            "Url": "https://rickandmortyapi.com/api/location/12"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/83.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/83",
        "Created": "2017-11-30T20:02:29.204Z"
    },
    {
        "Id": 84,
        "Name": "Cult Leader Morty",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Hideout Planet",
            "Url": "https://rickandmortyapi.com/api/location/27"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/84.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/84",
        "Created": "2017-11-30T20:41:48.08Z"
    },
    {
        "Id": 85,
        "Name": "Cyclops Morty",
        "Status": "Alive",
        "Species": "Humanoid",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/85.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/85",
        "Created": "2017-11-30T20:49:52.133Z"
    },
    {
        "Id": 86,
        "Name": "Cyclops Rick",
        "Status": "Dead",
        "Species": "Humanoid",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/86",
        "Created": "2017-11-30T20:53:10.382Z"
    },
    {
        "Id": 87,
        "Name": "Cynthia",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Zigerion",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Zigerion's Base",
            "Url": "https://rickandmortyapi.com/api/location/46"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/87.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/4"
        ],
        "Url": "https://rickandmortyapi.com/api/character/87",
        "Created": "2017-11-30T21:08:32.534Z"
    },
    {
        "Id": 88,
        "Name": "Cynthia",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/88.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/88",
        "Created": "2017-11-30T21:16:35.633Z"
    },
    {
        "Id": 89,
        "Name": "Dale",
        "Status": "Dead",
        "Species": "Mythological Creature",
        "Type": "Giant",
        "Gender": "Male",
        "Origin": {
            "Name": "Giant's Town",
            "Url": "https://rickandmortyapi.com/api/location/14"
        },
        "Location": {
            "Name": "Giant's Town",
            "Url": "https://rickandmortyapi.com/api/location/14"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/89.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/5"
        ],
        "Url": "https://rickandmortyapi.com/api/character/89",
        "Created": "2017-12-01T10:32:08.34Z"
    },
    {
        "Id": 90,
        "Name": "Daron Jefferson",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Cone-nippled alien",
        "Gender": "Male",
        "Origin": {
            "Name": "Unity's Planet",
            "Url": "https://rickandmortyapi.com/api/location/28"
        },
        "Location": {
            "Name": "Unity's Planet",
            "Url": "https://rickandmortyapi.com/api/location/28"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/90.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/14"
        ],
        "Url": "https://rickandmortyapi.com/api/character/90",
        "Created": "2017-12-01T10:54:34.736Z"
    },
    {
        "Id": 91,
        "Name": "David Letterman",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-500A)",
            "Url": "https://rickandmortyapi.com/api/location/23"
        },
        "Location": {
            "Name": "Earth (C-500A)",
            "Url": "https://rickandmortyapi.com/api/location/23"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/91.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/91",
        "Created": "2017-12-01T11:12:25.105Z"
    },
    {
        "Id": 92,
        "Name": "Davin",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/92.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/6"
        ],
        "Url": "https://rickandmortyapi.com/api/character/92",
        "Created": "2017-12-01T11:20:51.247Z"
    },
    {
        "Id": 93,
        "Name": "Diablo Verde",
        "Status": "Dead",
        "Species": "Mythological Creature",
        "Type": "Demon",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Dorian 5",
            "Url": "https://rickandmortyapi.com/api/location/29"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/93.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/93",
        "Created": "2017-12-01T11:36:16.467Z"
    },
    {
        "Id": 94,
        "Name": "Diane Sanchez",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Rick's Memories",
            "Url": "https://rickandmortyapi.com/api/location/126"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/94.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/94",
        "Created": "2017-12-01T11:49:43.929Z"
    },
    {
        "Id": 95,
        "Name": "Dipper and Mabel Mortys",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/95.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/95",
        "Created": "2017-12-01T11:54:36.67Z"
    },
    {
        "Id": 96,
        "Name": "Tuberculosis",
        "Status": "Dead",
        "Species": "Disease",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Location": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/96.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/96",
        "Created": "2017-12-01T11:59:04.796Z"
    },
    {
        "Id": 97,
        "Name": "Gonorrhea",
        "Status": "Dead",
        "Species": "Disease",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Location": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/97.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/97",
        "Created": "2017-12-01T12:00:27.028Z"
    },
    {
        "Id": 98,
        "Name": "Hepatitis A",
        "Status": "Dead",
        "Species": "Disease",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Location": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/98.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/98",
        "Created": "2017-12-01T12:01:43.742Z"
    },
    {
        "Id": 99,
        "Name": "Hepatitis C",
        "Status": "Dead",
        "Species": "Disease",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Location": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/99.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/99",
        "Created": "2017-12-01T12:02:00.935Z"
    },
    {
        "Id": 100,
        "Name": "Bubonic Plague",
        "Status": "Dead",
        "Species": "Disease",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Location": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/100.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/100",
        "Created": "2017-12-01T12:02:21.611Z"
    },
    {
        "Id": 101,
        "Name": "E. Coli",
        "Status": "Dead",
        "Species": "Disease",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Location": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/101.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/101",
        "Created": "2017-12-01T12:03:31.433Z"
    },
    {
        "Id": 102,
        "Name": "Donna Gueterman",
        "Status": "Dead",
        "Species": "Robot",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Planet Squanch",
            "Url": "https://rickandmortyapi.com/api/location/35"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/102.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/21"
        ],
        "Url": "https://rickandmortyapi.com/api/character/102",
        "Created": "2017-12-01T12:21:21.357Z"
    },
    {
        "Id": 103,
        "Name": "Doofus Rick",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (J19ζ7)",
            "Url": "https://rickandmortyapi.com/api/location/31"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/103",
        "Created": "2017-12-01T12:29:27.984Z"
    },
    {
        "Id": 104,
        "Name": "Doom-Nomitron",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Shapeshifter",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Dorian 5",
            "Url": "https://rickandmortyapi.com/api/location/29"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/104.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/104",
        "Created": "2017-12-26T12:34:36.758Z"
    },
    {
        "Id": 105,
        "Name": "Dr. Glip-Glop",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "St. Gloopy Noops Hospital",
            "Url": "https://rickandmortyapi.com/api/location/16"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/105.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/105",
        "Created": "2017-12-26T12:39:22.855Z"
    },
    {
        "Id": 106,
        "Name": "Dr. Schmidt",
        "Status": "unknown",
        "Species": "Human",
        "Type": "Game",
        "Gender": "Male",
        "Origin": {
            "Name": "Roy: A Life Well Lived",
            "Url": "https://rickandmortyapi.com/api/location/32"
        },
        "Location": {
            "Name": "Roy: A Life Well Lived",
            "Url": "https://rickandmortyapi.com/api/location/32"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/106.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/13"
        ],
        "Url": "https://rickandmortyapi.com/api/character/106",
        "Created": "2017-12-26T12:46:48.805Z"
    },
    {
        "Id": 107,
        "Name": "Dr. Wong",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/107.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/41"
        ],
        "Url": "https://rickandmortyapi.com/api/character/107",
        "Created": "2017-12-26T12:55:58.449Z"
    },
    {
        "Id": 108,
        "Name": "Dr. Xenon Bloom",
        "Status": "Dead",
        "Species": "Humanoid",
        "Type": "Amoeba-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/108.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/108",
        "Created": "2017-12-26T13:14:12.157Z"
    },
    {
        "Id": 109,
        "Name": "Duck With Muscles",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/109.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/109",
        "Created": "2017-12-26T13:17:40.686Z"
    },
    {
        "Id": 110,
        "Name": "Eli",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Location": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/110.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/23"
        ],
        "Url": "https://rickandmortyapi.com/api/character/110",
        "Created": "2017-12-26T13:37:27.635Z"
    },
    {
        "Id": 111,
        "Name": "Eli's Girlfriend",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Location": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/111.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/23"
        ],
        "Url": "https://rickandmortyapi.com/api/character/111",
        "Created": "2017-12-26T13:38:47.115Z"
    },
    {
        "Id": 112,
        "Name": "Eric McMan",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/112.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/112",
        "Created": "2017-12-26T13:40:06.005Z"
    },
    {
        "Id": 113,
        "Name": "Eric Stoltz Mask Morty",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Eric Stoltz Mask Earth",
            "Url": "https://rickandmortyapi.com/api/location/33"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/113.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/113",
        "Created": "2017-12-26T13:43:29.296Z"
    },
    {
        "Id": 114,
        "Name": "Ethan",
        "Status": "unknown",
        "Species": "Human",
        "Type": "Cronenberg",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/114.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/114",
        "Created": "2017-12-26T16:01:13.904Z"
    },
    {
        "Id": 115,
        "Name": "Ethan",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/115.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/26"
        ],
        "Url": "https://rickandmortyapi.com/api/character/115",
        "Created": "2017-12-26T16:01:50.939Z"
    },
    {
        "Id": 116,
        "Name": "Evil Beth Clone",
        "Status": "Dead",
        "Species": "Human",
        "Type": "Clone",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/116.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/5"
        ],
        "Url": "https://rickandmortyapi.com/api/character/116",
        "Created": "2017-12-26T16:10:47.781Z"
    },
    {
        "Id": 117,
        "Name": "Evil Jerry Clone",
        "Status": "Dead",
        "Species": "Human",
        "Type": "Clone",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/117.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/5"
        ],
        "Url": "https://rickandmortyapi.com/api/character/117",
        "Created": "2017-12-26T16:11:15.395Z"
    },
    {
        "Id": 118,
        "Name": "Evil Morty",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/118.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/118",
        "Created": "2017-12-26T16:13:41.103Z"
    },
    {
        "Id": 119,
        "Name": "Evil Rick",
        "Status": "Dead",
        "Species": "Humanoid",
        "Type": "Robot",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/119.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/119",
        "Created": "2017-12-26T16:17:16.472Z"
    },
    {
        "Id": 120,
        "Name": "Evil Summer Clone",
        "Status": "Dead",
        "Species": "Human",
        "Type": "Clone",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/120.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/5"
        ],
        "Url": "https://rickandmortyapi.com/api/character/120",
        "Created": "2017-12-26T16:24:02.059Z"
    },
    {
        "Id": 121,
        "Name": "Eyehole Man",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/121.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/121",
        "Created": "2017-12-26T16:41:58.391Z"
    },
    {
        "Id": 122,
        "Name": "Fart",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Interdimensional gaseous being",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/122.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/13"
        ],
        "Url": "https://rickandmortyapi.com/api/character/122",
        "Created": "2017-12-26T17:19:40.474Z"
    },
    {
        "Id": 123,
        "Name": "Fat Morty",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/123.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/123",
        "Created": "2017-12-26T17:22:40.315Z"
    },
    {
        "Id": 124,
        "Name": "Father Bob",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/124.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/27"
        ],
        "Url": "https://rickandmortyapi.com/api/character/124",
        "Created": "2017-12-26T17:31:29.113Z"
    },
    {
        "Id": 125,
        "Name": "Flansian",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Flansian",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Planet Squanch",
            "Url": "https://rickandmortyapi.com/api/location/35"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/125.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/125",
        "Created": "2017-12-26T17:43:58.41Z"
    },
    {
        "Id": 126,
        "Name": "Fleeb",
        "Status": "unknown",
        "Species": "Alien",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/126.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/126",
        "Created": "2017-12-26T18:45:42.593Z"
    },
    {
        "Id": 127,
        "Name": "Frank Palicky",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/127.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1"
        ],
        "Url": "https://rickandmortyapi.com/api/character/127",
        "Created": "2017-12-26T19:22:48.474Z"
    },
    {
        "Id": 128,
        "Name": "Frankenstein's Monster",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/128.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/128",
        "Created": "2017-12-26T19:24:56.679Z"
    },
    {
        "Id": 129,
        "Name": "Fulgora",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/129.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/17"
        ],
        "Url": "https://rickandmortyapi.com/api/character/129",
        "Created": "2017-12-26T19:30:02.242Z"
    },
    {
        "Id": 130,
        "Name": "Galactic Federation President",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Gromflomite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/130.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/21"
        ],
        "Url": "https://rickandmortyapi.com/api/character/130",
        "Created": "2017-12-26T19:49:41.16Z"
    },
    {
        "Id": 131,
        "Name": "Gar Gloonch",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Zombodian",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/131.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/21"
        ],
        "Url": "https://rickandmortyapi.com/api/character/131",
        "Created": "2017-12-26T19:54:43.476Z"
    },
    {
        "Id": 132,
        "Name": "Gar's Mytholog",
        "Status": "Dead",
        "Species": "Mythological Creature",
        "Type": "Mytholog",
        "Gender": "Male",
        "Origin": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Location": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/132.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/18"
        ],
        "Url": "https://rickandmortyapi.com/api/character/132",
        "Created": "2017-12-26T20:02:38.033Z"
    },
    {
        "Id": 133,
        "Name": "Garblovian",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Garblovian",
        "Gender": "Male",
        "Origin": {
            "Name": "Glaagablaaga",
            "Url": "https://rickandmortyapi.com/api/location/36"
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/133.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/21"
        ],
        "Url": "https://rickandmortyapi.com/api/character/133",
        "Created": "2017-12-26T20:30:45.943Z"
    },
    {
        "Id": 134,
        "Name": "Garmanarnar",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/134.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/134",
        "Created": "2017-12-26T20:36:54.577Z"
    },
    {
        "Id": 135,
        "Name": "Garment District Rick",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/135.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/135",
        "Created": "2017-12-26T20:51:43.614Z"
    },
    {
        "Id": 136,
        "Name": "Gazorpazorpfield",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Gazorpian",
        "Gender": "Male",
        "Origin": {
            "Name": "Gazorpazorp",
            "Url": "https://rickandmortyapi.com/api/location/40"
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/136.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/13"
        ],
        "Url": "https://rickandmortyapi.com/api/character/136",
        "Created": "2017-12-27T17:59:59.058Z"
    },
    {
        "Id": 137,
        "Name": "Gene",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/137.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/49"
        ],
        "Url": "https://rickandmortyapi.com/api/character/137",
        "Created": "2017-12-27T18:14:57.885Z"
    },
    {
        "Id": 138,
        "Name": "General Nathan",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/138.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16"
        ],
        "Url": "https://rickandmortyapi.com/api/character/138",
        "Created": "2017-12-27T18:22:18.387Z"
    },
    {
        "Id": 139,
        "Name": "General Store Owner",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Cat-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "Purge Planet",
            "Url": "https://rickandmortyapi.com/api/location/9"
        },
        "Location": {
            "Name": "Purge Planet",
            "Url": "https://rickandmortyapi.com/api/location/9"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/139.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/20"
        ],
        "Url": "https://rickandmortyapi.com/api/character/139",
        "Created": "2017-12-27T18:41:03.124Z"
    },
    {
        "Id": 140,
        "Name": "Genital Washer",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Location": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/23"
        ],
        "Url": "https://rickandmortyapi.com/api/character/140",
        "Created": "2017-12-27T18:47:44.566Z"
    },
    {
        "Id": 141,
        "Name": "Ghost in a Jar",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Genderless",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/141.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/141",
        "Created": "2017-12-27T19:14:14.545Z"
    },
    {
        "Id": 142,
        "Name": "Gibble Snake",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Animal",
        "Gender": "unknown",
        "Origin": {
            "Name": "Resort Planet",
            "Url": "https://rickandmortyapi.com/api/location/37"
        },
        "Location": {
            "Name": "Resort Planet",
            "Url": "https://rickandmortyapi.com/api/location/37"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/142.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/26"
        ],
        "Url": "https://rickandmortyapi.com/api/character/142",
        "Created": "2017-12-27T20:16:32.187Z"
    },
    {
        "Id": 143,
        "Name": "Glasses Morty",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/143.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/143",
        "Created": "2017-12-27T20:37:26.134Z"
    },
    {
        "Id": 144,
        "Name": "Glenn",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Gromflomite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Customs",
            "Url": "https://rickandmortyapi.com/api/location/38"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/144.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1"
        ],
        "Url": "https://rickandmortyapi.com/api/character/144",
        "Created": "2017-12-29T10:37:48.319Z"
    },
    {
        "Id": 145,
        "Name": "Glenn",
        "Status": "Alive",
        "Species": "Human",
        "Type": "Eat shiter-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/145.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/145",
        "Created": "2017-12-29T11:03:43.118Z"
    },
    {
        "Id": 146,
        "Name": "Glexo Slim Slom",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/146.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/18"
        ],
        "Url": "https://rickandmortyapi.com/api/character/146",
        "Created": "2017-12-29T11:28:29.38Z"
    },
    {
        "Id": 147,
        "Name": "Gobo",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/147.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/29"
        ],
        "Url": "https://rickandmortyapi.com/api/character/147",
        "Created": "2017-12-29T11:38:29.578Z"
    },
    {
        "Id": 148,
        "Name": "Goddess Beth",
        "Status": "unknown",
        "Species": "Mythological Creature",
        "Type": "Goddess",
        "Gender": "Female",
        "Origin": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Location": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/148.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/18"
        ],
        "Url": "https://rickandmortyapi.com/api/character/148",
        "Created": "2017-12-29T11:40:25.135Z"
    },
    {
        "Id": 149,
        "Name": "Gordon Lunas",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/149.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/29"
        ],
        "Url": "https://rickandmortyapi.com/api/character/149",
        "Created": "2017-12-29T11:44:00.169Z"
    },
    {
        "Id": 150,
        "Name": "Cornvelious Daniel",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Gromflomite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Galactic Federation Prison",
            "Url": "https://rickandmortyapi.com/api/location/39"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/150.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/150",
        "Created": "2017-12-29T12:02:33.55Z"
    },
    {
        "Id": 151,
        "Name": "Gwendolyn",
        "Status": "unknown",
        "Species": "Robot",
        "Type": "Gazorpian reproduction robot",
        "Gender": "Female",
        "Origin": {
            "Name": "Gazorpazorp",
            "Url": "https://rickandmortyapi.com/api/location/40"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/151.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/7"
        ],
        "Url": "https://rickandmortyapi.com/api/character/151",
        "Created": "2017-12-29T12:31:50.388Z"
    },
    {
        "Id": 152,
        "Name": "Hammerhead Morty",
        "Status": "unknown",
        "Species": "Humanoid",
        "Type": "Hammerhead-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/152.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/152",
        "Created": "2017-12-29T15:20:16.842Z"
    },
    {
        "Id": 153,
        "Name": "Hamster In Butt",
        "Status": "Alive",
        "Species": "Animal",
        "Type": "",
        "Gender": "unknown",
        "Origin": {
            "Name": "Hamster in Butt World",
            "Url": "https://rickandmortyapi.com/api/location/41"
        },
        "Location": {
            "Name": "Hamster in Butt World",
            "Url": "https://rickandmortyapi.com/api/location/41"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/153.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/153",
        "Created": "2017-12-29T15:27:54.281Z"
    },
    {
        "Id": 154,
        "Name": "Hamurai",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/154.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/154",
        "Created": "2017-12-29T15:32:05.287Z"
    },
    {
        "Id": 155,
        "Name": "Harold",
        "Status": "Alive",
        "Species": "Cronenberg",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/155.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/6"
        ],
        "Url": "https://rickandmortyapi.com/api/character/155",
        "Created": "2017-12-29T15:41:18.773Z"
    },
    {
        "Id": 156,
        "Name": "Hemorrhage",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Location": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/156.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/23"
        ],
        "Url": "https://rickandmortyapi.com/api/character/156",
        "Created": "2017-12-29T15:44:40.083Z"
    },
    {
        "Id": 157,
        "Name": "Hole in the Wall Where the Men Can See it All",
        "Status": "unknown",
        "Species": "unknown",
        "Type": "Hole",
        "Gender": "Genderless",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/157.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/157",
        "Created": "2017-12-29T15:47:57.352Z"
    },
    {
        "Id": 158,
        "Name": "Hookah Alien",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Tuskfish",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Customs",
            "Url": "https://rickandmortyapi.com/api/location/38"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/158.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1"
        ],
        "Url": "https://rickandmortyapi.com/api/character/158",
        "Created": "2017-12-29T15:53:48.952Z"
    },
    {
        "Id": 159,
        "Name": "Hunter",
        "Status": "Dead",
        "Species": "Human",
        "Type": "Clone",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Giant Telepathic Spiders Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/42"
        },
        "Location": {
            "Name": "Earth (Giant Telepathic Spiders Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/42"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/159.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/17"
        ],
        "Url": "https://rickandmortyapi.com/api/character/159",
        "Created": "2017-12-29T16:03:28.792Z"
    },
    {
        "Id": 160,
        "Name": "Hunter's Father",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Giant Telepathic Spiders Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/42"
        },
        "Location": {
            "Name": "Earth (Giant Telepathic Spiders Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/42"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/160.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/17"
        ],
        "Url": "https://rickandmortyapi.com/api/character/160",
        "Created": "2017-12-29T16:07:04.04Z"
    },
    {
        "Id": 161,
        "Name": "Hydrogen-F",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Alphabetrian",
        "Gender": "Female",
        "Origin": {
            "Name": "Alphabetrium",
            "Url": "https://rickandmortyapi.com/api/location/43"
        },
        "Location": {
            "Name": "Alphabetrium",
            "Url": "https://rickandmortyapi.com/api/location/43"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/161.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16"
        ],
        "Url": "https://rickandmortyapi.com/api/character/161",
        "Created": "2017-12-29T16:10:40.29Z"
    },
    {
        "Id": 162,
        "Name": "Ice-T",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Alphabetrian",
        "Gender": "Male",
        "Origin": {
            "Name": "Alphabetrium",
            "Url": "https://rickandmortyapi.com/api/location/43"
        },
        "Location": {
            "Name": "Alphabetrium",
            "Url": "https://rickandmortyapi.com/api/location/43"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/162.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16"
        ],
        "Url": "https://rickandmortyapi.com/api/character/162",
        "Created": "2017-12-29T16:42:59.207Z"
    },
    {
        "Id": 163,
        "Name": "Ideal Jerry",
        "Status": "Dead",
        "Species": "Mythological Creature",
        "Type": "Mytholog",
        "Gender": "Male",
        "Origin": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Location": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/163.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/18"
        ],
        "Url": "https://rickandmortyapi.com/api/character/163",
        "Created": "2017-12-29T16:46:41.345Z"
    },
    {
        "Id": 164,
        "Name": "Insurance Rick",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/164.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/164",
        "Created": "2017-12-29T17:03:08.645Z"
    },
    {
        "Id": 165,
        "Name": "Investigator Rick",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/165.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/165",
        "Created": "2017-12-29T17:05:15.514Z"
    },
    {
        "Id": 166,
        "Name": "Invisi-trooper",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/166.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "Url": "https://rickandmortyapi.com/api/character/166",
        "Created": "2017-12-29T17:06:28.325Z"
    },
    {
        "Id": 167,
        "Name": "Izzy",
        "Status": "Alive",
        "Species": "Animal",
        "Type": "Cat",
        "Gender": "unknown",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/167.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/24"
        ],
        "Url": "https://rickandmortyapi.com/api/character/167",
        "Created": "2017-12-29T17:07:59.024Z"
    },
    {
        "Id": 168,
        "Name": "Jackie",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Gazorpian",
        "Gender": "Female",
        "Origin": {
            "Name": "Gazorpazorp",
            "Url": "https://rickandmortyapi.com/api/location/40"
        },
        "Location": {
            "Name": "Gazorpazorp",
            "Url": "https://rickandmortyapi.com/api/location/40"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/168.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/7"
        ],
        "Url": "https://rickandmortyapi.com/api/character/168",
        "Created": "2017-12-29T17:14:03.43Z"
    },
    {
        "Id": 169,
        "Name": "Jacob",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/169.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/169",
        "Created": "2017-12-29T17:20:52.037Z"
    },
    {
        "Id": 170,
        "Name": "Jacqueline",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/170.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/27"
        ],
        "Url": "https://rickandmortyapi.com/api/character/170",
        "Created": "2017-12-29T17:22:17.707Z"
    },
    {
        "Id": 171,
        "Name": "Jaguar",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/171.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/24"
        ],
        "Url": "https://rickandmortyapi.com/api/character/171",
        "Created": "2017-12-29T17:25:38.138Z"
    },
    {
        "Id": 172,
        "Name": "Jamey",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/172.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16"
        ],
        "Url": "https://rickandmortyapi.com/api/character/172",
        "Created": "2017-12-29T17:30:20.654Z"
    },
    {
        "Id": 173,
        "Name": "Jan-Michael Vincent",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/173.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/173",
        "Created": "2017-12-29T17:33:23.972Z"
    },
    {
        "Id": 174,
        "Name": "Jerry 5-126",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (5-126)",
            "Url": "https://rickandmortyapi.com/api/location/17"
        },
        "Location": {
            "Name": "Jerryboree",
            "Url": "https://rickandmortyapi.com/api/location/44"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/174.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/13"
        ],
        "Url": "https://rickandmortyapi.com/api/character/174",
        "Created": "2017-12-29T17:50:19.991Z"
    },
    {
        "Id": 175,
        "Name": "Jerry Smith",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/3",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/175",
        "Created": "2017-12-29T18:07:17.61Z"
    },
    {
        "Id": 176,
        "Name": "Celebrity Jerry",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-500A)",
            "Url": "https://rickandmortyapi.com/api/location/23"
        },
        "Location": {
            "Name": "Earth (C-500A)",
            "Url": "https://rickandmortyapi.com/api/location/23"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/176.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/176",
        "Created": "2017-12-29T18:25:11.93Z"
    },
    {
        "Id": 177,
        "Name": "Jerry Smith",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Evil Rick's Target Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/34"
        },
        "Location": {
            "Name": "Earth (Evil Rick's Target Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/34"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/177.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/177",
        "Created": "2017-12-29T18:28:19.424Z"
    },
    {
        "Id": 178,
        "Name": "Jerry's Mytholog",
        "Status": "Dead",
        "Species": "Mythological Creature",
        "Type": "Mytholog",
        "Gender": "Male",
        "Origin": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Location": {
            "Name": "Nuptia 4",
            "Url": "https://rickandmortyapi.com/api/location/13"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/178.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/18"
        ],
        "Url": "https://rickandmortyapi.com/api/character/178",
        "Created": "2017-12-29T18:29:31.279Z"
    },
    {
        "Id": 179,
        "Name": "Jessica",
        "Status": "Alive",
        "Species": "Cronenberg",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/179.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/6"
        ],
        "Url": "https://rickandmortyapi.com/api/character/179",
        "Created": "2017-12-29T18:34:37.806Z"
    },
    {
        "Id": 180,
        "Name": "Jessica",
        "Status": "Alive",
        "Species": "Human",
        "Type": "Time God",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/180.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/26",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/28",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/32",
            "https://rickandmortyapi.com/api/episode/39",
            "https://rickandmortyapi.com/api/episode/42"
        ],
        "Url": "https://rickandmortyapi.com/api/character/180",
        "Created": "2017-12-29T18:36:27.225Z"
    },
    {
        "Id": 181,
        "Name": "Jessica's Friend",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/27"
        ],
        "Url": "https://rickandmortyapi.com/api/character/181",
        "Created": "2017-12-29T18:47:23.345Z"
    },
    {
        "Id": 182,
        "Name": "Jim",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/182.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16"
        ],
        "Url": "https://rickandmortyapi.com/api/character/182",
        "Created": "2017-12-29T18:49:48.953Z"
    },
    {
        "Id": 183,
        "Name": "Johnny Depp",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-500A)",
            "Url": "https://rickandmortyapi.com/api/location/23"
        },
        "Location": {
            "Name": "Earth (C-500A)",
            "Url": "https://rickandmortyapi.com/api/location/23"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/183",
        "Created": "2017-12-29T18:51:29.693Z"
    },
    {
        "Id": 184,
        "Name": "Jon",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Gazorpian",
        "Gender": "Male",
        "Origin": {
            "Name": "Gazorpazorp",
            "Url": "https://rickandmortyapi.com/api/location/40"
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/184.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/184",
        "Created": "2017-12-29T18:54:04.572Z"
    },
    {
        "Id": 185,
        "Name": "Joseph Eli Lipkip",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/185.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/30"
        ],
        "Url": "https://rickandmortyapi.com/api/character/185",
        "Created": "2017-12-29T18:56:15.622Z"
    },
    {
        "Id": 186,
        "Name": "Joyce Smith",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/186.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/186",
        "Created": "2017-12-29T18:58:34.53Z"
    },
    {
        "Id": 187,
        "Name": "Juggling Rick",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/187.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/187",
        "Created": "2017-12-29T18:59:47.44Z"
    },
    {
        "Id": 188,
        "Name": "Karen Entity",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Unknown-nippled alien",
        "Gender": "Female",
        "Origin": {
            "Name": "Unity's Planet",
            "Url": "https://rickandmortyapi.com/api/location/28"
        },
        "Location": {
            "Name": "Unity's Planet",
            "Url": "https://rickandmortyapi.com/api/location/28"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/188.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/14"
        ],
        "Url": "https://rickandmortyapi.com/api/character/188",
        "Created": "2017-12-29T19:10:16.171Z"
    },
    {
        "Id": 189,
        "Name": "Katarina",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/189.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/24"
        ],
        "Url": "https://rickandmortyapi.com/api/character/189",
        "Created": "2017-12-29T19:13:57.07Z"
    },
    {
        "Id": 190,
        "Name": "Keara",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Krootabulan",
        "Gender": "Female",
        "Origin": {
            "Name": "Krootabulon",
            "Url": "https://rickandmortyapi.com/api/location/45"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/190.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/30"
        ],
        "Url": "https://rickandmortyapi.com/api/character/190",
        "Created": "2017-12-29T19:26:06.9Z"
    },
    {
        "Id": 191,
        "Name": "Kevin",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Zigerion",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Zigerion's Base",
            "Url": "https://rickandmortyapi.com/api/location/46"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/191.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/4"
        ],
        "Url": "https://rickandmortyapi.com/api/character/191",
        "Created": "2017-12-29T19:40:07.816Z"
    },
    {
        "Id": 192,
        "Name": "King Flippy Nips",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Plutonian",
        "Gender": "Male",
        "Origin": {
            "Name": "Pluto",
            "Url": "https://rickandmortyapi.com/api/location/47"
        },
        "Location": {
            "Name": "Pluto",
            "Url": "https://rickandmortyapi.com/api/location/47"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/192.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/9"
        ],
        "Url": "https://rickandmortyapi.com/api/character/192",
        "Created": "2017-12-29T19:49:29.297Z"
    },
    {
        "Id": 193,
        "Name": "King Jellybean",
        "Status": "Dead",
        "Species": "Mythological Creature",
        "Type": "Jellybean",
        "Gender": "Male",
        "Origin": {
            "Name": "Fantasy World",
            "Url": "https://rickandmortyapi.com/api/location/48"
        },
        "Location": {
            "Name": "Fantasy World",
            "Url": "https://rickandmortyapi.com/api/location/48"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/193.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/5"
        ],
        "Url": "https://rickandmortyapi.com/api/character/193",
        "Created": "2017-12-29T19:58:44.743Z"
    },
    {
        "Id": 194,
        "Name": "Kozbian",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Tentacle alien",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Planet Squanch",
            "Url": "https://rickandmortyapi.com/api/location/35"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/194.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/21"
        ],
        "Url": "https://rickandmortyapi.com/api/character/194",
        "Created": "2017-12-30T12:13:53.878Z"
    },
    {
        "Id": 195,
        "Name": "Kristen Stewart",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (C-500A)",
            "Url": "https://rickandmortyapi.com/api/location/23"
        },
        "Location": {
            "Name": "Earth (C-500A)",
            "Url": "https://rickandmortyapi.com/api/location/23"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/195.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/195",
        "Created": "2017-12-30T12:19:16.042Z"
    },
    {
        "Id": 196,
        "Name": "Krombopulos Michael",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Gromflomite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/196.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/13"
        ],
        "Url": "https://rickandmortyapi.com/api/character/196",
        "Created": "2017-12-30T12:28:52.954Z"
    },
    {
        "Id": 197,
        "Name": "Kyle",
        "Status": "Dead",
        "Species": "Humanoid",
        "Type": "Miniverse inhabitant",
        "Gender": "Male",
        "Origin": {
            "Name": "Zeep Xanflorp's Miniverse",
            "Url": "https://rickandmortyapi.com/api/location/49"
        },
        "Location": {
            "Name": "Kyle's Teenyverse",
            "Url": "https://rickandmortyapi.com/api/location/50"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/197.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/17"
        ],
        "Url": "https://rickandmortyapi.com/api/character/197",
        "Created": "2017-12-30T12:39:09.025Z"
    },
    {
        "Id": 198,
        "Name": "Lady Katana",
        "Status": "Dead",
        "Species": "Humanoid",
        "Type": "Cyborg",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Dorian 5",
            "Url": "https://rickandmortyapi.com/api/location/29"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/198.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/198",
        "Created": "2017-12-30T12:43:37.571Z"
    },
    {
        "Id": 199,
        "Name": "Larva Alien",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Larva alien",
        "Gender": "unknown",
        "Origin": {
            "Name": "Larva Alien's Planet",
            "Url": "https://rickandmortyapi.com/api/location/51"
        },
        "Location": {
            "Name": "Planet Squanch",
            "Url": "https://rickandmortyapi.com/api/location/35"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/199.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/19",
            "https://rickandmortyapi.com/api/episode/21"
        ],
        "Url": "https://rickandmortyapi.com/api/character/199",
        "Created": "2017-12-30T12:48:44.677Z"
    },
    {
        "Id": 200,
        "Name": "Lawyer Morty",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/200.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/200",
        "Created": "2017-12-30T12:49:52.971Z"
    },
    {
        "Id": 201,
        "Name": "Leonard Smith",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/201.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/201",
        "Created": "2017-12-30T12:51:27.835Z"
    },
    {
        "Id": 202,
        "Name": "Lighthouse Keeper",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Cat-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "Purge Planet",
            "Url": "https://rickandmortyapi.com/api/location/9"
        },
        "Location": {
            "Name": "Purge Planet",
            "Url": "https://rickandmortyapi.com/api/location/9"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/202.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/20"
        ],
        "Url": "https://rickandmortyapi.com/api/character/202",
        "Created": "2017-12-30T12:53:11.937Z"
    },
    {
        "Id": 203,
        "Name": "Lil B",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Snail alien",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/203.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/48"
        ],
        "Url": "https://rickandmortyapi.com/api/character/203",
        "Created": "2017-12-30T12:54:31.725Z"
    },
    {
        "Id": 204,
        "Name": "Lisa",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Immortality Field Resort",
            "Url": "https://rickandmortyapi.com/api/location/7"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/204.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/26"
        ],
        "Url": "https://rickandmortyapi.com/api/character/204",
        "Created": "2017-12-30T12:59:58.46Z"
    },
    {
        "Id": 205,
        "Name": "Little Dipper",
        "Status": "Alive",
        "Species": "Humanoid",
        "Type": "Tinymouth",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/205.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/205",
        "Created": "2017-12-30T13:03:12.366Z"
    },
    {
        "Id": 206,
        "Name": "Lizard Morty",
        "Status": "Alive",
        "Species": "Humanoid",
        "Type": "Lizard-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/206.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/206",
        "Created": "2017-12-30T13:06:09.094Z"
    },
    {
        "Id": 207,
        "Name": "Loggins",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Alligator-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/207.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/17"
        ],
        "Url": "https://rickandmortyapi.com/api/character/207",
        "Created": "2017-12-30T13:54:28.627Z"
    },
    {
        "Id": 208,
        "Name": "Logic",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Worldender's lair",
            "Url": "https://rickandmortyapi.com/api/location/4"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/208.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/208",
        "Created": "2017-12-30T13:58:41.417Z"
    },
    {
        "Id": 209,
        "Name": "Long Sleeved Morty",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/209.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/209",
        "Created": "2017-12-30T14:00:06.755Z"
    },
    {
        "Id": 210,
        "Name": "Lucy",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/210.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/11"
        ],
        "Url": "https://rickandmortyapi.com/api/character/210",
        "Created": "2017-12-30T14:01:23.319Z"
    },
    {
        "Id": 211,
        "Name": "Ma-Sha",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Gazorpian",
        "Gender": "Female",
        "Origin": {
            "Name": "Gazorpazorp",
            "Url": "https://rickandmortyapi.com/api/location/40"
        },
        "Location": {
            "Name": "Gazorpazorp",
            "Url": "https://rickandmortyapi.com/api/location/40"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/211.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/7"
        ],
        "Url": "https://rickandmortyapi.com/api/character/211",
        "Created": "2017-12-30T14:16:00.484Z"
    },
    {
        "Id": 212,
        "Name": "Magma-Q",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Alphabetrian",
        "Gender": "Male",
        "Origin": {
            "Name": "Alphabetrium",
            "Url": "https://rickandmortyapi.com/api/location/43"
        },
        "Location": {
            "Name": "Alphabetrium",
            "Url": "https://rickandmortyapi.com/api/location/43"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/212.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16"
        ],
        "Url": "https://rickandmortyapi.com/api/character/212",
        "Created": "2017-12-30T14:19:10.419Z"
    },
    {
        "Id": 213,
        "Name": "Magnesium-J",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Alphabetrian",
        "Gender": "Male",
        "Origin": {
            "Name": "Alphabetrium",
            "Url": "https://rickandmortyapi.com/api/location/43"
        },
        "Location": {
            "Name": "Alphabetrium",
            "Url": "https://rickandmortyapi.com/api/location/43"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/213.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16"
        ],
        "Url": "https://rickandmortyapi.com/api/character/213",
        "Created": "2017-12-30T14:21:16.121Z"
    },
    {
        "Id": 214,
        "Name": "Man Painted Silver Who Makes Robot Noises",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/214.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/214",
        "Created": "2017-12-30T14:24:57.993Z"
    },
    {
        "Id": 215,
        "Name": "Maximums Rickimus",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Rick's Memories",
            "Url": "https://rickandmortyapi.com/api/location/126"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/215",
        "Created": "2017-12-30T14:27:55.489Z"
    },
    {
        "Id": 216,
        "Name": "MC Haps",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/216.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/216",
        "Created": "2017-12-30T14:30:06.479Z"
    },
    {
        "Id": 217,
        "Name": "Mechanical Morty",
        "Status": "Dead",
        "Species": "Robot",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/217.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/23"
        ],
        "Url": "https://rickandmortyapi.com/api/character/217",
        "Created": "2017-12-30T14:32:17.158Z"
    },
    {
        "Id": 218,
        "Name": "Mechanical Rick",
        "Status": "unknown",
        "Species": "Robot",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/218.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/23"
        ],
        "Url": "https://rickandmortyapi.com/api/character/218",
        "Created": "2017-12-30T14:33:16.92Z"
    },
    {
        "Id": 219,
        "Name": "Mechanical Summer",
        "Status": "unknown",
        "Species": "Robot",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/219.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/23"
        ],
        "Url": "https://rickandmortyapi.com/api/character/219",
        "Created": "2017-12-30T14:33:49.392Z"
    },
    {
        "Id": 220,
        "Name": "Mega Fruit Farmer Rick",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/220.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/220",
        "Created": "2017-12-30T14:35:30.736Z"
    },
    {
        "Id": 221,
        "Name": "Melissa",
        "Status": "Alive",
        "Species": "Mythological Creature",
        "Type": "Monster",
        "Gender": "Female",
        "Origin": {
            "Name": "Mr. Goldenfold's dream",
            "Url": "https://rickandmortyapi.com/api/location/18"
        },
        "Location": {
            "Name": "Mr. Goldenfold's dream",
            "Url": "https://rickandmortyapi.com/api/location/18"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/221.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/2"
        ],
        "Url": "https://rickandmortyapi.com/api/character/221",
        "Created": "2017-12-30T14:38:04.718Z"
    },
    {
        "Id": 222,
        "Name": "Michael Denny and the Denny Singers",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/222.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/222",
        "Created": "2017-12-30T14:44:05.245Z"
    },
    {
        "Id": 223,
        "Name": "Michael Jenkins",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/223.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/223",
        "Created": "2017-12-30T14:44:51.373Z"
    },
    {
        "Id": 224,
        "Name": "Michael McLick",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/224.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/224",
        "Created": "2017-12-30T15:49:28.666Z"
    },
    {
        "Id": 225,
        "Name": "Michael Thompson",
        "Status": "Alive",
        "Species": "Humanoid",
        "Type": "Conjoined twin",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/225.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/225",
        "Created": "2017-12-30T15:59:31.558Z"
    },
    {
        "Id": 226,
        "Name": "Million Ants",
        "Status": "Dead",
        "Species": "Animal",
        "Type": "Sentient ant colony",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Worldender's lair",
            "Url": "https://rickandmortyapi.com/api/location/4"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/226.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/226",
        "Created": "2017-12-30T16:04:56.879Z"
    },
    {
        "Id": 227,
        "Name": "Mitch",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/227.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/27"
        ],
        "Url": "https://rickandmortyapi.com/api/character/227",
        "Created": "2017-12-30T16:08:38.157Z"
    },
    {
        "Id": 228,
        "Name": "Mohawk Guy",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Location": {
            "Name": "Post-Apocalyptic Earth",
            "Url": "https://rickandmortyapi.com/api/location/8"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/228.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/23"
        ],
        "Url": "https://rickandmortyapi.com/api/character/228",
        "Created": "2017-12-30T16:10:03.881Z"
    },
    {
        "Id": 229,
        "Name": "Morty Mart Manager Morty",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/229.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/229",
        "Created": "2017-12-30T16:12:33.382Z"
    },
    {
        "Id": 230,
        "Name": "Morty Jr.",
        "Status": "Alive",
        "Species": "Humanoid",
        "Type": "Human Gazorpian",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/230.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/7"
        ],
        "Url": "https://rickandmortyapi.com/api/character/230",
        "Created": "2017-12-30T16:20:51.391Z"
    },
    {
        "Id": 231,
        "Name": "Morty Rick",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/231.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/231",
        "Created": "2017-12-30T16:23:45.894Z"
    },
    {
        "Id": 232,
        "Name": "Morty Smith",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Evil Rick's Target Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/34"
        },
        "Location": {
            "Name": "Earth (Evil Rick's Target Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/34"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/232.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/232",
        "Created": "2017-12-30T16:29:27.863Z"
    },
    {
        "Id": 233,
        "Name": "Morty K-22",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (K-22)",
            "Url": "https://rickandmortyapi.com/api/location/52"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/233.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/233",
        "Created": "2017-12-30T16:33:49.577Z"
    },
    {
        "Id": 234,
        "Name": "Morty Smith",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/234.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/6"
        ],
        "Url": "https://rickandmortyapi.com/api/character/234",
        "Created": "2017-12-30T16:35:01.223Z"
    },
    {
        "Id": 235,
        "Name": "Mortytown Loco",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/235.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/235",
        "Created": "2017-12-30T16:37:07.15Z"
    },
    {
        "Id": 236,
        "Name": "Mr. Beauregard",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/236.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/236",
        "Created": "2017-12-30T17:28:28.409Z"
    },
    {
        "Id": 237,
        "Name": "Mr. Benson",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/237.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/12"
        ],
        "Url": "https://rickandmortyapi.com/api/character/237",
        "Created": "2017-12-30T17:30:31.757Z"
    },
    {
        "Id": 238,
        "Name": "Mr. Booby Buyer",
        "Status": "Alive",
        "Species": "Mythological Creature",
        "Type": "Boobie buyer reptilian",
        "Gender": "Male",
        "Origin": {
            "Name": "Fantasy World",
            "Url": "https://rickandmortyapi.com/api/location/48"
        },
        "Location": {
            "Name": "Fantasy World",
            "Url": "https://rickandmortyapi.com/api/location/48"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/238.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/5"
        ],
        "Url": "https://rickandmortyapi.com/api/character/238",
        "Created": "2017-12-30T17:36:12.853Z"
    },
    {
        "Id": 239,
        "Name": "Mr. Goldenfold",
        "Status": "Alive",
        "Species": "Cronenberg",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/239.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/6"
        ],
        "Url": "https://rickandmortyapi.com/api/character/239",
        "Created": "2017-12-30T17:42:11.894Z"
    },
    {
        "Id": 240,
        "Name": "Mr. Goldenfold",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/240.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/17",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/39"
        ],
        "Url": "https://rickandmortyapi.com/api/character/240",
        "Created": "2017-12-30T17:42:56.349Z"
    },
    {
        "Id": 241,
        "Name": "Mr. Marklovitz",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/241.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/4",
            "https://rickandmortyapi.com/api/episode/16"
        ],
        "Url": "https://rickandmortyapi.com/api/character/241",
        "Created": "2017-12-30T17:46:19.052Z"
    },
    {
        "Id": 242,
        "Name": "Mr. Meeseeks",
        "Status": "unknown",
        "Species": "Humanoid",
        "Type": "Meeseeks",
        "Gender": "Male",
        "Origin": {
            "Name": "Mr. Meeseeks Box",
            "Url": "https://rickandmortyapi.com/api/location/53"
        },
        "Location": {
            "Name": "Earth (Fascist Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/77"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/32"
        ],
        "Url": "https://rickandmortyapi.com/api/character/242",
        "Created": "2017-12-30T17:52:12.243Z"
    },
    {
        "Id": 243,
        "Name": "Mr. Needful",
        "Status": "Alive",
        "Species": "Humanoid",
        "Type": "The Devil",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/243.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/9"
        ],
        "Url": "https://rickandmortyapi.com/api/character/243",
        "Created": "2017-12-30T17:54:06.996Z"
    },
    {
        "Id": 244,
        "Name": "Mr. Poopybutthole",
        "Status": "Alive",
        "Species": "Poopybutthole",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/244.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15",
            "https://rickandmortyapi.com/api/episode/21",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/30",
            "https://rickandmortyapi.com/api/episode/31",
            "https://rickandmortyapi.com/api/episode/34",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/244",
        "Created": "2017-12-30T18:03:48.054Z"
    },
    {
        "Id": 245,
        "Name": "Mrs. Lipkip",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/245.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/30"
        ],
        "Url": "https://rickandmortyapi.com/api/character/245",
        "Created": "2017-12-30T18:05:59.999Z"
    },
    {
        "Id": 246,
        "Name": "Mrs. Pancakes",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Mr. Goldenfold's dream",
            "Url": "https://rickandmortyapi.com/api/location/18"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/246.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/2",
            "https://rickandmortyapi.com/api/episode/27"
        ],
        "Url": "https://rickandmortyapi.com/api/character/246",
        "Created": "2017-12-30T18:09:39.304Z"
    },
    {
        "Id": 247,
        "Name": "Amy Poopybutthole",
        "Status": "Alive",
        "Species": "Poopybutthole",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/247.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "Url": "https://rickandmortyapi.com/api/character/247",
        "Created": "2017-12-30T18:10:48.293Z"
    },
    {
        "Id": 248,
        "Name": "Mrs. Refrigerator",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/248.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/248",
        "Created": "2017-12-30T18:12:38.369Z"
    },
    {
        "Id": 249,
        "Name": "Mrs. Sanchez",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "unknown",
            "Url": ""
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/249.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/14",
            "https://rickandmortyapi.com/api/episode/30"
        ],
        "Url": "https://rickandmortyapi.com/api/character/249",
        "Created": "2017-12-30T18:18:10.965Z"
    },
    {
        "Id": 250,
        "Name": "Mrs. Sullivan",
        "Status": "Dead",
        "Species": "Human",
        "Type": "Cat controlled dead lady",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (C-500A)",
            "Url": "https://rickandmortyapi.com/api/location/23"
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/250.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/250",
        "Created": "2017-12-30T18:24:49.372Z"
    },
    {
        "Id": 251,
        "Name": "Nancy",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Female",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/251.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/6",
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/25",
            "https://rickandmortyapi.com/api/episode/29",
            "https://rickandmortyapi.com/api/episode/36"
        ],
        "Url": "https://rickandmortyapi.com/api/character/251",
        "Created": "2017-12-31T12:46:54.095Z"
    },
    {
        "Id": 252,
        "Name": "Noob-Noob",
        "Status": "Alive",
        "Species": "Poopybutthole",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Vindicator's Base",
            "Url": "https://rickandmortyapi.com/api/location/54"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/252.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/252",
        "Created": "2017-12-31T12:57:37.849Z"
    },
    {
        "Id": 253,
        "Name": "Numbericon",
        "Status": "unknown",
        "Species": "Alien",
        "Type": "Numbericon",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Alphabetrium",
            "Url": "https://rickandmortyapi.com/api/location/43"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/253.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16"
        ],
        "Url": "https://rickandmortyapi.com/api/character/253",
        "Created": "2017-12-31T13:04:01.585Z"
    },
    {
        "Id": 254,
        "Name": "Octopus Man",
        "Status": "Alive",
        "Species": "Humanoid",
        "Type": "Octopus-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/254.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/254",
        "Created": "2017-12-31T13:06:35.982Z"
    },
    {
        "Id": 255,
        "Name": "Orthodox Jew",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/255.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/16"
        ],
        "Url": "https://rickandmortyapi.com/api/character/255",
        "Created": "2017-12-31T13:19:29.825Z"
    },
    {
        "Id": 256,
        "Name": "Pat Gueterman",
        "Status": "Dead",
        "Species": "Robot",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Planet Squanch",
            "Url": "https://rickandmortyapi.com/api/location/35"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/256.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/21"
        ],
        "Url": "https://rickandmortyapi.com/api/character/256",
        "Created": "2017-12-31T13:23:08.567Z"
    },
    {
        "Id": 257,
        "Name": "Paul Fleishman",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Jerryboree",
            "Url": "https://rickandmortyapi.com/api/location/44"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/257.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/13"
        ],
        "Url": "https://rickandmortyapi.com/api/character/257",
        "Created": "2017-12-31T13:23:47.704Z"
    },
    {
        "Id": 258,
        "Name": "Pawnshop Clerk",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Pawn Shop Planet",
            "Url": "https://rickandmortyapi.com/api/location/55"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/258.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/7"
        ],
        "Url": "https://rickandmortyapi.com/api/character/258",
        "Created": "2017-12-31T13:30:33.611Z"
    },
    {
        "Id": 259,
        "Name": "Pencilvester",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/259.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/259",
        "Created": "2017-12-31T13:33:48.488Z"
    },
    {
        "Id": 260,
        "Name": "Phillip Jacobs",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/260.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/260",
        "Created": "2017-12-31T13:34:58.839Z"
    },
    {
        "Id": 261,
        "Name": "Photography Cyborg",
        "Status": "unknown",
        "Species": "Robot",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Planet Squanch",
            "Url": "https://rickandmortyapi.com/api/location/35"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/261.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/21"
        ],
        "Url": "https://rickandmortyapi.com/api/character/261",
        "Created": "2017-12-31T13:38:53.64Z"
    },
    {
        "Id": 262,
        "Name": "Photography Raptor",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "unknown",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/262.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/262",
        "Created": "2017-12-31T13:40:32.312Z"
    },
    {
        "Id": 263,
        "Name": "Pibbles Bodyguard",
        "Status": "Alive",
        "Species": "Alien",
        "Type": "Hairy alien",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "St. Gloopy Noops Hospital",
            "Url": "https://rickandmortyapi.com/api/location/16"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/263.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/263",
        "Created": "2017-12-31T13:43:30.513Z"
    },
    {
        "Id": 264,
        "Name": "Pichael Thompson",
        "Status": "Alive",
        "Species": "Humanoid",
        "Type": "Conjoined twin",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/264.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/264",
        "Created": "2017-12-31T13:44:43.176Z"
    },
    {
        "Id": 265,
        "Name": "Pickle Rick",
        "Status": "Alive",
        "Species": "unknown",
        "Type": "Pickle",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/265.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/24"
        ],
        "Url": "https://rickandmortyapi.com/api/character/265",
        "Created": "2017-12-31T13:47:10.617Z"
    },
    {
        "Id": 266,
        "Name": "Piece of Toast",
        "Status": "Alive",
        "Species": "unknown",
        "Type": "Bread",
        "Gender": "Genderless",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/266.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8",
            "https://rickandmortyapi.com/api/episode/17"
        ],
        "Url": "https://rickandmortyapi.com/api/character/266",
        "Created": "2017-12-31T13:48:58.85Z"
    },
    {
        "Id": 267,
        "Name": "Plumber Rick",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/267.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/267",
        "Created": "2017-12-31T13:50:57.337Z"
    },
    {
        "Id": 268,
        "Name": "Poncho",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/268.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/268",
        "Created": "2017-12-31T13:53:25.411Z"
    },
    {
        "Id": 269,
        "Name": "Presidentress of The Mega Gargantuans",
        "Status": "Alive",
        "Species": "Humanoid",
        "Type": "Mega Gargantuan",
        "Gender": "Female",
        "Origin": {
            "Name": "Mega Gargantuan Kingdom",
            "Url": "https://rickandmortyapi.com/api/location/56"
        },
        "Location": {
            "Name": "Mega Gargantuan Kingdom",
            "Url": "https://rickandmortyapi.com/api/location/56"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/269.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/31"
        ],
        "Url": "https://rickandmortyapi.com/api/character/269",
        "Created": "2017-12-31T14:01:44.995Z"
    },
    {
        "Id": 270,
        "Name": "Prince Nebulon",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Zigerion",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Zigerion's Base",
            "Url": "https://rickandmortyapi.com/api/location/46"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/270.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/4"
        ],
        "Url": "https://rickandmortyapi.com/api/character/270",
        "Created": "2017-12-31T14:05:24.406Z"
    },
    {
        "Id": 271,
        "Name": "Principal Vagina",
        "Status": "Alive",
        "Species": "Cronenberg",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/271.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/5",
            "https://rickandmortyapi.com/api/episode/6"
        ],
        "Url": "https://rickandmortyapi.com/api/character/271",
        "Created": "2017-12-31T14:08:43.602Z"
    },
    {
        "Id": 272,
        "Name": "Principal Vagina",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/272.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/9",
            "https://rickandmortyapi.com/api/episode/16",
            "https://rickandmortyapi.com/api/episode/18",
            "https://rickandmortyapi.com/api/episode/24",
            "https://rickandmortyapi.com/api/episode/27",
            "https://rickandmortyapi.com/api/episode/29"
        ],
        "Url": "https://rickandmortyapi.com/api/character/272",
        "Created": "2017-12-31T14:09:09.071Z"
    },
    {
        "Id": 273,
        "Name": "Purge Planet Ruler",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Cat-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "Purge Planet",
            "Url": "https://rickandmortyapi.com/api/location/9"
        },
        "Location": {
            "Name": "Purge Planet",
            "Url": "https://rickandmortyapi.com/api/location/9"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/273.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/20"
        ],
        "Url": "https://rickandmortyapi.com/api/character/273",
        "Created": "2017-12-31T14:13:54.909Z"
    },
    {
        "Id": 274,
        "Name": "Quantum Rick",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Rick's Memories",
            "Url": "https://rickandmortyapi.com/api/location/126"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/274.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/274",
        "Created": "2017-12-31T14:15:28.051Z"
    },
    {
        "Id": 275,
        "Name": "Randy Dicknose",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/275.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/19"
        ],
        "Url": "https://rickandmortyapi.com/api/character/275",
        "Created": "2017-12-31T14:16:45.776Z"
    },
    {
        "Id": 276,
        "Name": "Rat Boss",
        "Status": "Dead",
        "Species": "Animal",
        "Type": "Rat",
        "Gender": "unknown",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/276.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/24"
        ],
        "Url": "https://rickandmortyapi.com/api/character/276",
        "Created": "2017-12-31T14:17:21.782Z"
    },
    {
        "Id": 277,
        "Name": "Real Fake Doors Salesman",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/277.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/277",
        "Created": "2017-12-31T14:18:30.57Z"
    },
    {
        "Id": 278,
        "Name": "Regional Manager Rick",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/278.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/278",
        "Created": "2017-12-31T14:19:36.487Z"
    },
    {
        "Id": 279,
        "Name": "Regular Legs",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Interdimensional Cable",
            "Url": "https://rickandmortyapi.com/api/location/6"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/279.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/8"
        ],
        "Url": "https://rickandmortyapi.com/api/character/279",
        "Created": "2017-12-31T14:20:31.936Z"
    },
    {
        "Id": 280,
        "Name": "Reverse Giraffe",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Parasite",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/280.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/15"
        ],
        "Url": "https://rickandmortyapi.com/api/character/280",
        "Created": "2017-12-31T14:22:46.285Z"
    },
    {
        "Id": 281,
        "Name": "Reverse Rick Outrage",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/281.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/281",
        "Created": "2017-12-31T14:23:53.056Z"
    },
    {
        "Id": 282,
        "Name": "Revolio Clockberg Jr.",
        "Status": "unknown",
        "Species": "Alien",
        "Type": "Gear-Person",
        "Gender": "Male",
        "Origin": {
            "Name": "Gear World",
            "Url": "https://rickandmortyapi.com/api/location/57"
        },
        "Location": {
            "Name": "Gear World",
            "Url": "https://rickandmortyapi.com/api/location/57"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/282.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/13",
            "https://rickandmortyapi.com/api/episode/25"
        ],
        "Url": "https://rickandmortyapi.com/api/character/282",
        "Created": "2017-12-31T19:21:17.351Z"
    },
    {
        "Id": 283,
        "Name": "Rick D. Sanchez III",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/283.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/283",
        "Created": "2017-12-31T19:23:53.188Z"
    },
    {
        "Id": 284,
        "Name": "Rick Guilt Rick",
        "Status": "unknown",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/284.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/284",
        "Created": "2017-12-31T19:25:18.205Z"
    },
    {
        "Id": 285,
        "Name": "Rick Prime",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/285.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/285",
        "Created": "2017-12-31T19:45:46.47Z"
    },
    {
        "Id": 286,
        "Name": "Rick D-99",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (D-99)",
            "Url": "https://rickandmortyapi.com/api/location/58"
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/286.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/286",
        "Created": "2017-12-31T19:49:55.181Z"
    },
    {
        "Id": 287,
        "Name": "Rick D716",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (D716)",
            "Url": "https://rickandmortyapi.com/api/location/59"
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/287.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/287",
        "Created": "2017-12-31T19:51:33.244Z"
    },
    {
        "Id": 288,
        "Name": "Rick D716-B",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (D716-B)",
            "Url": "https://rickandmortyapi.com/api/location/60"
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/288.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/288",
        "Created": "2017-12-31T19:55:25.101Z"
    },
    {
        "Id": 289,
        "Name": "Rick D716-C",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (D716-C)",
            "Url": "https://rickandmortyapi.com/api/location/61"
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/289.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/289",
        "Created": "2017-12-31T19:57:36.546Z"
    },
    {
        "Id": 290,
        "Name": "Rick Sanchez",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Evil Rick's Target Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/34"
        },
        "Location": {
            "Name": "Earth (Evil Rick's Target Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/34"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/290.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/290",
        "Created": "2017-12-31T20:15:25.716Z"
    },
    {
        "Id": 291,
        "Name": "Rick J-22",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (J-22)",
            "Url": "https://rickandmortyapi.com/api/location/62"
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/291.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/291",
        "Created": "2017-12-31T20:16:52.337Z"
    },
    {
        "Id": 292,
        "Name": "Rick K-22",
        "Status": "Alive",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (K-22)",
            "Url": "https://rickandmortyapi.com/api/location/52"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/292.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/28"
        ],
        "Url": "https://rickandmortyapi.com/api/character/292",
        "Created": "2017-12-31T20:20:40.484Z"
    },
    {
        "Id": 293,
        "Name": "Rick Sanchez",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Location": {
            "Name": "Earth (Replacement Dimension)",
            "Url": "https://rickandmortyapi.com/api/location/20"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/293.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/6"
        ],
        "Url": "https://rickandmortyapi.com/api/character/293",
        "Created": "2017-12-31T20:22:29.032Z"
    },
    {
        "Id": 294,
        "Name": "Ricktiminus Sancheziminius",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Rick's Memories",
            "Url": "https://rickandmortyapi.com/api/location/126"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/294.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/22",
            "https://rickandmortyapi.com/api/episode/51"
        ],
        "Url": "https://rickandmortyapi.com/api/character/294",
        "Created": "2017-12-31T20:24:30.396Z"
    },
    {
        "Id": 295,
        "Name": "Riq IV",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10",
            "https://rickandmortyapi.com/api/episode/11",
            "https://rickandmortyapi.com/api/episode/22"
        ],
        "Url": "https://rickandmortyapi.com/api/character/295",
        "Created": "2017-12-31T20:25:28.554Z"
    },
    {
        "Id": 296,
        "Name": "Risotto Groupon",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Blue ape alien",
        "Gender": "Male",
        "Origin": {
            "Name": "Resort Planet",
            "Url": "https://rickandmortyapi.com/api/location/37"
        },
        "Location": {
            "Name": "Resort Planet",
            "Url": "https://rickandmortyapi.com/api/location/37"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/296.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/26"
        ],
        "Url": "https://rickandmortyapi.com/api/character/296",
        "Created": "2017-12-31T20:32:33.361Z"
    },
    {
        "Id": 297,
        "Name": "Risotto's Tentacled Henchman",
        "Status": "Dead",
        "Species": "Alien",
        "Type": "Tentacle alien",
        "Gender": "Male",
        "Origin": {
            "Name": "Resort Planet",
            "Url": "https://rickandmortyapi.com/api/location/37"
        },
        "Location": {
            "Name": "Resort Planet",
            "Url": "https://rickandmortyapi.com/api/location/37"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/297.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/26"
        ],
        "Url": "https://rickandmortyapi.com/api/character/297",
        "Created": "2017-12-31T20:34:58.394Z"
    },
    {
        "Id": 298,
        "Name": "Robot Morty",
        "Status": "unknown",
        "Species": "Robot",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/298.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/298",
        "Created": "2017-12-31T20:37:30.747Z"
    },
    {
        "Id": 299,
        "Name": "Robot Rick",
        "Status": "unknown",
        "Species": "Robot",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "unknown",
            "Url": ""
        },
        "Location": {
            "Name": "Citadel of Ricks",
            "Url": "https://rickandmortyapi.com/api/location/3"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/299.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/10"
        ],
        "Url": "https://rickandmortyapi.com/api/character/299",
        "Created": "2017-12-31T20:38:17.99Z"
    },
    {
        "Id": 300,
        "Name": "Roger",
        "Status": "Dead",
        "Species": "Human",
        "Type": "",
        "Gender": "Male",
        "Origin": {
            "Name": "Earth (C-137)",
            "Url": "https://rickandmortyapi.com/api/location/1"
        },
        "Location": {
            "Name": "Anatomy Park",
            "Url": "https://rickandmortyapi.com/api/location/5"
        },
        "Image": "https://rickandmortyapi.com/api/character/avatar/300.jpeg",
        "Episode": [
            "https://rickandmortyapi.com/api/episode/3"
        ],
        "Url": "https://rickandmortyapi.com/api/character/300",
        "Created": "2017-12-31T20:39:35.047Z"
    }
]