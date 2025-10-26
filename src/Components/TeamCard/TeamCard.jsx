import React from 'react'
import './TeamCard.css'

const TeamCard = ({
    name = "Ash Ketchum",
    domain = "UI/UX",
    image = "https://tecnoesis.co.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdgnlmdkyq%2Fimage%2Fupload%2Fv1761037096%2FScreenshot_2025-10-19_230423_gspyiq.webp&w=640&q=75",
    facebook="",
    github="",
    codeforces="",
    linkedin="",
}) => {
    return (
        <div className='relative bg-[url(/images/teams/BasicCard.svg)] bg-no-repeat bg-cover h-[444px] w-[320px] flex flex-col items-center justify-center gap-4'>
            <img
                src="/images/teams/hacksLogo.svg"
                alt="Logo"
                className='absolute top-1 right-1 z-2 h-14 w-14'
            />
            <img
                src="/images/teams/Stage.svg"
                alt="Stage"
                className='absolute top-0 left-1 z-2  w-30'
            />

            <div className='flex flex-col justify-between'>
                <img
                    src={image}
                    alt="profile"
                    className='h-[288px] w-[275px] rounded-lg padright'
                />
                <img src="/images/teams/border.svg" alt="border" className='pad' />
                <div className='willUp flex-1'>
                    <h3 className='mt-8 text-lg text-center font-bold'>{name}</h3>
                    <p className='text-sm text-gray-500 text-center'>{domain}</p>
                    <div className='flex justify-around socials'>
                        {facebook != "" &&
                            <a href={facebook} target="_blank" rel="noopener noreferrer"><img src="/images/teams/facebook.svg" alt="facebook" className='h-[20px] w-auto' /></a>
                        }
                        {github != "" &&
                            <a href={github} target="_blank" rel="noopener noreferrer"><img src="/images/teams/github.svg" alt="github" className='h-[20px] w-auto'/></a>
                        }
                        {codeforces != "" &&
                            <a href={codeforces} target="_blank" rel="noopener noreferrer"><img src="/images/teams/codeforces.svg" alt="codeforces" className='h-[20px] w-auto'/></a>
                        }
                        {linkedin != "" &&
                            <a href={linkedin} target="_blank" rel="noopener noreferrer"><img src="/images/teams/linkedin.svg" alt="linkedin" className='h-[20px] w-auto'/></a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
