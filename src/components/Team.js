"use client";
import React, { useState } from "react";
import Container from "./Container";
import OptImage from "./OptImage";

const team = [
  {
    id: 1,
    name: "Faran Mahmood",
    imageSrc: "https://www.ist.edu.pk/images/cisl/faran.jpg",
    title: "Incharge CISL",
    description:
      "Faran Mahmood is currently working as Incharge / Manager (Cyber Lab) at IST and is a graduate of University of Cambridge, UK in Systems Engineering with executive management courses from Judge Business School (UK) and National University of Singapore. He was awarded President’s gold medal by Chairman of the Joint Chiefs of Staff Committee General Tariq Majid and Pakistan Telecom Authority's (PTA) gold medal in ICT4D. He has received numerous awards including UK Trade&Investment (UKTI) runner up award for innovation.",
    socials: [
      {
        name: "LinkedIn",
        url: "#",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "#",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
  {
    id: 2,
    name: "Haroon Ibrahim",
    imageSrc: "https://www.ist.edu.pk/images/cisl/haroon.jpg",
    title: "Core Member",
    description:
      "Haroon Ibrahim is Lecturer at Department of Electrical Engineering at Institute of Space and Technology, Islamabad, Pakistan. He received his MS degree in Signal and Image Processing from Institute of Space Technology Islamabad, Pakistan.. His area of specialization is Communicationsand Signal Image Processing.",
    socials: [
      {
        name: "LinkedIn",
        url: "#",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "#",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
  {
    id: 3,
    name: "Ahmed Raheeq Sultan",
    imageSrc: "https://www.ist.edu.pk/images/cisl/raheeq.jpg",
    title: "Core Member",
    description:
      "Ahmed Raheeq Sultan is Lecturer at Department of Electrical Engineering at Institute of Space and Technology, Islamabad, Pakistan. He received his MS degrees in Information Security from NUST University. His area of specialization is Electronic Design, Network Security, Forensics and Cryptography.",
    socials: [
      {
        name: "LinkedIn",
        url: "#",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "#",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
  {
    id: 4,
    name: "Dr. Muhammad Amin",
    imageSrc: "https://www.ist.edu.pk/images/cisl/amin.jpg",
    title: "Professor",
    description: "Avionics Engineering Dept",
    socials: [
      {
        name: "LinkedIn",
        url: "#",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "#",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
  {
    id: 5,
    name: "Dr. Majid Khan",
    imageSrc: "https://www.ist.edu.pk/images/cisl/majid.jpg",
    title: "Associate Professor",
    description: "Applied Mathematics and Statistics Dept",
    socials: [
      {
        name: "LinkedIn",
        url: "#",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "#",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
  {
    id: 6,
    name: "Dr. Haider Abbas, IET Fellow",
    imageSrc: "https://dummyimage.com/150x150/d4d4d4/171717",
    title: "HoD Research, NUST",
    description:
      "Haider Abbas (SMIEEE) is a cyber-security scientist who took professional trainings and certifications from Massachusetts Institute of Technology (MIT), USA, Stockholm University, Sweden, IBM and EC-Council. His professional services include - Journal Editorships, Industry Consultations, Workshops Chair, TPC Member and Invited/Keynote Speaker for several international conferences. Dr. Abbas has received several grants and working on scientific projects in USA, EU, KSA and Pakistan.",
    socials: [
      {
        name: "LinkedIn",
        url: "#",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "#",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
  {
    id: 7,
    name: "Prof. Dr. Seong Oun Hwang",
    imageSrc: "https://dummyimage.com/150x150/d4d4d4/171717",
    title:
      "Department of Software and Communications Engineering College of Science and Technology, Hongik University (Sejong), Korea",
    description:
      "Prof. Dr. Seong Oun Hwang received the B.S. degree in Mathematics in 1993 from Seoul National University, M.S. degree in Computer and Communications Engineering in 1998 from Pohang University of Science and Technology, and Ph. D. degree in Computer Science from Korea Advanced Institute of Science and Technology, all in Korea. He worked as Software Engineer at LG-CNS Systems, Inc. from 1994 to 1996. Between 1998 and 2007, I worked for ETRI (Electronics and Telecommunications Research Institute) for ten years as Senior Researcher. Since March 2008, I have been with Hongik University as Professor in Department of Software and Communications Engineering. His research interests include cryptography, network and machine learning.",
    socials: [
      {
        name: "LinkedIn",
        url: "#",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "#",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
  {
    id: 8,
    name: "Prof. Dr. Tariq Shah",
    imageSrc: "https://dummyimage.com/150x150/d4d4d4/171717",
    title: "Department of Mathematics, Quaid-i-Azam University, Islamabad",
    description:
      "Dr. Tariq Shah currently serving as Professor in department of Mathematics at Quaid-i-Azam University. His topics of research are commutative algebra, algebraic coding theory, cryptography, wireless communication, generalization of algebraic structure, fuzzy and soft structures in development of economics.",
    socials: [
      {
        name: "LinkedIn",
        url: "#",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "#",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
  {
    id: 9,
    name: "Dr. Hassan Mahmood",
    imageSrc: "https://dummyimage.com/150x150/d4d4d4/171717",
    title:
      "Associate Professor and Chairperson Department of Electronics, Quaid-i-Azam University.",
    description:
      "Dr. Hassan Mahmood received the M.Sc. degree in electronics from Quaid-i-Azam University, Islamabad, Pakistan, in 1991, the M.S. degree in electrical engineering from the University of Ulm, Germany, in 2002, and the Ph.D. degree in electrical engineering from the Stev ens Institute of Technology, Hoboken, NJ, USA, in 2007. From 1994 to 2000, he was a Faculty Member with the Department of Electronics, Quaid-i-Azam University, where he is currently an Associate Professor and HoD at Department of Electronics.",
    socials: [
      {
        name: "LinkedIn",
        url: "#",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "#",
        icon: GitHubIcon,
      },
      {
        name: "X",
        url: "#",
        icon: XIcon,
      },
    ],
  },
];

const MAX_DESCRIPTION_LENGTH = 150;

export default function Team() {
  const [expandedMember, setExpandedMember] = useState(null);

  const toggleDescription = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <Container className={"py-24"}>
      <div
        id="members"
        className="mx-auto flex max-w-3xl flex-col space-y-7 text-center"
      >
        <h3 className="text-lg font-medium uppercase tracking-wide text-dark dark:text-light">
          Empowering Excellence, Collaboratively
        </h3>

        <h2 className="text-4xl font-bold leading-tight tracking-wide text-dark dark:text-light xl:text-5xl">
          Members and Collaborators
        </h2>

        <p className="text-lg text-dark dark:text-white">
          Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
          nunc in eros scelerisque sed.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
        {team.map((member) => (
          <div key={member.id} className="flex flex-col space-y-6 text-center">
            <div>
              <OptImage
                src={member.imageSrc}
                alt={member.name}
                width={150}
                height={150}
                className="mx-auto h-20 w-20 rounded-full"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold leading-tight text-dark dark:text-light">
                {member.name}
              </h3>
              <p className="mt-2 text-base font-medium text-dark_sec dark:text-light">
                {member.title}
              </p>
            </div>

            <div className="mx-auto mt-2 max-w-md text-base text-justify text-dark dark:text-light  ">
              {expandedMember === member.id
                ? member.description
                : member.description.length > MAX_DESCRIPTION_LENGTH
                ? `${member.description.substring(
                    0,
                    MAX_DESCRIPTION_LENGTH
                  )}...`
                : member.description}
              {member.description.length > MAX_DESCRIPTION_LENGTH && (
                <button
                  onClick={() => toggleDescription(member.id)}
                  className="text-prim font-bold hover:underline focus:outline-none"
                >
                  {expandedMember === member.id ? "Read Less" : "Read More"}
                </button>
              )}
            </div>

            <div className="flex justify-center space-x-4">
              {member.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="nonzero"
        d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
      ></path>
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 300 271" {...props}>
      <path d="M236 0h46L181 115l118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123L-1.1 0h94.9l65.5 86.6L236 0zm-16.1 244h25.5L80.4 26H53l166.9 218z"></path>
    </svg>
  );
}
