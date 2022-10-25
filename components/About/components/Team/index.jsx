import React from 'react'
import TeamItem from './components/TeamItem';

function Team() {
    const data = [
        {
            name: "Name Surname",
            job: "Worker",
            pic: "/img/team1.png"
        },
        {
            name: "Name Surname",
            job: "Worker",
            pic: "/img/team2.png"
        },
        {
            name: "Name Surname",
            job: "Worker",
            pic: "/img/team3.png"
        },
        {
            name: "Name Surname",
            job: "Worker",
            pic: "/img/team4.png"
        },
        {
            name: "Name Surname",
            job: "Worker",
            pic: "/img/team5.png"
        },
        {
            name: "Name Surname",
            job: "Worker",
            pic: "/img/team6.png"
        },
        {
            name: "Name Surname",
            job: "Worker",
            pic: "/img/team7.png"
        },
        {
            name: "Name Surname",
            job: "Worker",
            pic: "/img/team8.png"
        },
        {
            name: "Name Surname",
            job: "Worker",
            pic: "/img/team9.png"
        }
    ];

  return (
    <div className='p-32 bg-light flex flex-col items-center'>
        <div className="text-bluelight">Our team</div>
        <div className="text-4xl font-bold text-dark-text">{"Let's meet"}</div>
        <div className="grid grid-cols-3 gap-10 mt-16">
            {
                data.map((teamer, index) =>(
                    <TeamItem teamer={teamer} key={index} />
                ))
            }
        </div>
    </div>
  )
}

export default Team