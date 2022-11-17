import React, {FC} from 'react';
import CustomSection from '../CustomSection';
import styled from 'styled-components';
import Image from 'next/image';
import Button from '../UI/Button';

interface AboutMeProps {
    title?: string;
    padTop?: string;
}

const AboutMe: FC<AboutMeProps> = ({title, padTop}) => {
  return (
    <CustomSection padTop={padTop} title={title}>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <AboutMeText>
            <div>Hi, I&rsquo;m Daniel!</div>
            <p>
                <span>I am a frontend developer, I live in Nizhny Novgorod,</span> 
                <span>Russia. I can develop responsive websites from</span>
                <span>scratch and turn them into a modern user-friendly web interface.</span>
            </p>
            <p style={{marginBottom: '80px'}}>
                <span>I&rsquo;ve been doing web development for over a year now.</span>
                <span>I always strive to learn about the latest</span> 
                <span>technologies and frameworks</span>
            </p>
            <Button>Read more</Button>
        </AboutMeText>
        <AboutImage>
            <Image alt="Picture of the author" src='/aboutMe.png' width={339} height={507}></Image>
            <Image alt="dots" src='/Dots.svg' width={0} height={0} style={{position: 'absolute', top: '20px', right: '270px' , width: '84px', height: '84px'}}></Image>
            <Image alt="dots" src='/Dots.svg' width={0} height={0} style={{position: 'absolute', top: '300px', right: '80px' , width: '84px', height: '84px'}}></Image>
        </AboutImage>
        </div>
    </CustomSection>
  )
}

const AboutMeText = styled.div`
    & > p{
        padding-top: 25px;
    }
`
const AboutImage = styled.div`
    position: relative;
    @media (max-width: 1024px){
        display: none;  
    }
`

export default AboutMe