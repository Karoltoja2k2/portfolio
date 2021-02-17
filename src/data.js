import { Hero, Skills, Projects, Contact } from "./sections";

import windows10_main from "./images/windows1.png"

import pathfinding_main from "./images/pathfinding1.png"

import sort_main from "./images/sort1.png"

import saper_main from "./images/saperweb1.png"

import gogif_main from "./images/gogift.jpg"

import chmura_main from "./images/chmura1.png"

export const data = [
    {
        language: "PL",
        sections: {
            hero: "Home",
            skills: "Umiejętności",
            projects: "Projekty",
            contact: "Kontakt"
        },
        projects:[
            {
                title: "GoGift",
                shortTitle: "gogift",
                categories: ["C#", "asp.net"],
                mainImg: gogif_main,
            },
            {
                title: "Chmura dokumentów",
                shortTitle: "cloud-docs",
                categories: ["C#", "asp.net"],
                mainImg: chmura_main,
            },
            {
                title: "Windows10",
                shortTitle: "win10",
                categories: ["JS", "TS", "React.js"],
                mainImg: windows10_main,
                repo: "https://github.com/Karoltoja2k2/Saper-cSharp",
            },
            {
                title: "Pathfinding",
                shortTitle: "path",
                categories: ["C#", "WPF"],
                mainImg: pathfinding_main
            },
            {
                title: "Saper",
                shortTitle: "saper",
                categories: ["JS", "TS"],
                mainImg: saper_main,
                repo: "https://github.com/Karoltoja2k2/Saper-cSharp",
            },
            {
                title: "Sortowanie",
                shortTitle: "sort",
                categories: ["C#", "WPF"],
                mainImg: sort_main,
                repo: "https://github.com/Karoltoja2k2/Saper-cSharp",
            },
        ]
    },
    {
        language: "EN",
        sections: {
            hero: "Home",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        }
    },
]