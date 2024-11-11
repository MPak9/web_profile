import React from "react";
import Gusda_Thumbnail from '../Images/GUSDA_Thumnail.png'
import Toasty_Thumbnail from '../Images/ToastyThumbnail.png'
import MP_Thumbnail from '../Images/MP_Cover.png'
import Wrigley_Thumbnail from '../Images/Wrigley.png'

const Featured = 'Featured';
//const CSS = 'CSS';
const HTML = 'HTML/CSS';
const React_JS = 'React JS';
const Figma = 'Figma';
const SquareSpace = 'SquareSpace';
const All = 'All';

export const project_tags = [Featured, HTML, Figma, SquareSpace, React_JS, All]

export const projects = [
   
    {
        name: 'Personal Portfolio',
        tag: [CSS, HTML, React_JS, Figma],
        cover:MP_Thumbnail,
        link:'',
        color:'black'
        
    },
    {
        name: 'Wrigley',
        tag: [Featured, SquareSpace, Figma],
        cover: Wrigley_Thumbnail,
        link:'/Project/Wrigley',
        color:'black'
        
    },
    {
        name: 'GUSDA Website',
        tag: [Featured, SquareSpace],
        cover: Gusda_Thumbnail,
        link:'/Project/GUSDA',
        color:'#4B207F'
    },
    {
        name: 'Toasty Website',
        tag: [Featured, CSS, HTML, React_JS, Figma],
        cover:Toasty_Thumbnail,
        link:'/Project/Toasty',
        color:'#4682B4'
    },
]