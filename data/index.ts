interface LinksPortfolioProps {
    name: string;
    path: string;
}

export const LinksPortfolio: LinksPortfolioProps[] = [
    { name: 'home', path: '/'}, 
    { name: 'works', path: 'works'},
    { name: 'about-me', path: 'aboutMe'},
    { name: 'contacts', path: 'contacts'},
];

export interface ProjectsProps {
    name: string;
    deploy?: string;
    options: string[];
    subtitle: string;
    image: string;
    gitHub: string;
}

export interface SkillsProps {
    name: string;
    options: string[];
}

export const projects: ProjectsProps[] = [
    {name: 'SorterGame', gitHub: 'https://github.com/Danu-IT/SorterGame', deploy: 'https://sorter.vercel.app/', options: ['typescript', 'styled-components', 'reactjs', 'nextjs'], image: '', subtitle: 'A game for sorting numbers or letters in ascending or descending order'},
    {name: 'Basket', gitHub: 'https://github.com/Danu-IT/neoflexInviteTest', deploy: 'https://danu-it.github.io/neoflexInviteTest/',options: ['reactjs', 'redux-tolkit'], image: '', subtitle: 'The functionality of implementing a basket of goods using the state manager redux-tolkit'}
]

export const simpleProject: ProjectsProps[] = [
    {name: 'ToDo', gitHub: 'https://github.com/Danu-IT/ToDo', options: ['typescript', 'reactjs', 'tailwindcss'], image: '', subtitle: 'The usual to-do list'},
]

export const skills: SkillsProps[] = [
    {name: 'languages', options: ['JavaScript', 'TypeScript']},
    {name: 'tools', options: ['VSCode', 'Figma', 'Git', 'Photoshop']},
    {name: 'other', options: ['HTML', 'CSS', 'SCSS', ]},
    {name: 'frameworks', options: ['React', 'Vue']},
];

export const facts: string[] = ['I like winter more than summer', 'I have been to Egypt, the Dominican Republic and Turkey', 'My favorite movie is Lord of the Rings']