import React from 'react';
import Container from './Container';

const ResearchFellows = () => {
  const undergradStudents = [
    'Sameer, Dilawar working on “hardware-based solution to defeat keyloggers for mission critical applications such as internet banking”',
    'Hamza and Ghazala working on “Developing a Nielsen TV set box by piping/spoofing TV data – which will help us assign viewer ratings to various TV programmes in real-time”',
    'Zahid and Mudassir working on “Linux-based ARM processor machines for real-time object/vehicle tracking”',
    'Waleed working on “secure IoT based control panel for home automation”',
  ];

  const graduateStudents = [
    'Haroon Ibrahim (PhD-EE)',
    'Nazish Iqbal (PhD-EE)',
    'Lal Said (PhD-EE)',
    'Iqra Shehzadi (MS-EE)',
    'Habibah (MS-EE)',
    'Usman Arshad (MS-EE)',
    'Sidra Sultan (MS-EE)',
    'Umer Aziz Waqas (MS-EE)',
    'Fawad Masood (MS-EE)',
    'Khawaja Muhammad Ali (MS-EE)',
    'Hafiz Muhammad Waseem (MS-EE)',
    'Faiza Firdousi (MS-EE)',
  ];

  return (
    <div className='bg-dark'>
    <Container className={"py-24"}>
    <h1 className="text-4xl text-light font-bold text-center">Research Fellows</h1>

      <div className="flex flex-col md:flex-row gap-6 mt-16">
        <div className="flex-1">
          <h2 className="text-2xl text-prim font-semibold">Undergrad Students</h2>
          <ul className="list-disc list-inside mt-4">
            {undergradStudents.map((student, index) => (
              <li className='text-light' key={index}>{student}</li>
            ))}
          </ul>
        </div>
        <div className="flex-2">
          <h2 className="text-2xl text-prim font-semibold">Graduate Students</h2>
          <ul className="list-disc list-inside mt-4">
            {graduateStudents.map((student, index) => (
              <li className='text-light' key={index}>{student}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default ResearchFellows;
