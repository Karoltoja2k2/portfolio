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
                category: "c#",
                mainImg: gogif_main,
            },
            {
                title: "Chmura dokumentów",
                category: "c#",
                mainImg: chmura_main,
            },
            {
                title: "Windows10",
                category: "JS",
                mainImg: windows10_main,
                repo: "https://github.com/Karoltoja2k2/Saper-cSharp",
            },
            {
                title: "Pathfinding",
                category: "c#",
                mainImg: pathfinding_main
            },
            {
                title: "Saper",
                category: "JS",
                mainImg: saper_main,
                repo: "https://github.com/Karoltoja2k2/Saper-cSharp",
            },
            {
                title: "Sortowanie",
                category: "c#",
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