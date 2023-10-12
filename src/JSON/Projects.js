import React from "react";

const CSS = 'CSS';
const HTML = 'HTML';
const React_JS = 'React JS';
const Figma = 'Figma';
const SquareSpace = 'SquareSpace';
const All = 'All';

export const project_tags = [CSS, HTML, Figma, SquareSpace, React_JS, All]

export const projects = [
   
    {
        name: 'Personal Portfolio',
        tag: [CSS, HTML, React_JS, Figma],
        cover:'',
        link:'/Project/Personal-Portfolio',
        color:'aliceBlue'
        
    },
    {
        name: 'Toasty Website',
        tag: [CSS, HTML, React_JS, Figma],
        cover:'https://cdn.discordapp.com/attachments/1075543412582924378/1156339438616596580/image.png?ex=65149c85&is=65134b05&hm=dbe378855a9454103c358cbaa8f58b5a20d8da821ddb7e5dfc209451e5182065&',
        link:'/Project/Toasty',
        color:'#4682B4'
    },
    {
        name: 'GUSDA Website',
        tag: [SquareSpace],
        cover:'https://cdn.discordapp.com/attachments/1075543412582924378/1156340193020874812/image.png?ex=65149d39&is=65134bb9&hm=55ad70b29474c8680daad81045206b75fbf22ddfcc2c015fac80f4e0a3746bd5&',
        link:'/Project/GUSDA',
        color:'#4B207F'
    }
]