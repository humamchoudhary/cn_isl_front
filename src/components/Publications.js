import Head from 'next/head';
import Container from './Container';
import Link from 'next/link';


const publications = [
  {
    id: 1,
    authors: "Omar Ansari, Muhammad Amin, Abrar Ahmad",
    title: "Analyzing Physical Layer Security of Antenna Subset Modulation as Block Encryption Ciphers",
    journal: "IEEE Access",
    year: 2019,
    impactFactor: 4.098
  },
  {
    id: 2,
    authors: "Batool, Syeda Iram, Muhammad Amin, and Hafiz Muhammad Waseem",
    title: "Public key digital contents confidentiality scheme based on quantum spin and finite state automation.",
    journal: "Physica A: Statistical Mechanics and its Applications 537 (2020): 122677",
    year: 2020,
    impactFactor: 2.5
  },
  {
    id: 3,
    authors: "Firdousi, Faiza, Syeda Iram Batool, and Muhammad Amin",
    title: "A novel construction scheme for nonlinear component based on quantum map.",
    journal: "International Journal of Theoretical Physics 58, no. 11 (2019): 3871-3898",
    year: 2019,
    impactFactor: 1.121
  },{
    id: 4,
    authors: "Batool, Syeda Iram, and Hafiz Muhammad Waseem",
    title: "A novel image encryption scheme based on Arnold scrambling and Lucas series.",
    journal: "Multimedia Tools and Applications 78, no. 19 (2019): 27611-27637",
    year: 2019,
    impactFactor: 2.101
},
{
    id: 5,
    authors: "Arshad, Usman, Syeda Iram Batool, and Muhammad Amin",
    title: "A novel image encryption scheme based on Walsh compressed quantum spinning chaotic Lorenz system.",
    journal: "International Journal of Theoretical Physics 58, no. 10 (2019): 3565-3588",
    year: 2019,
    impactFactor: 1.121
},
{
    id: 6,
    authors: "Alghafis, Abdullah, Hafiz Muhammad Waseem, and Majid Khan",
    title: "A hybrid cryptosystem for digital contents confidentiality based on rotation of quantum spin states.",
    journal: "Physica A: Statistical Mechanics and its Applications",
    year: 2019,
    impactFactor: 2.5
},
{
    id: 7,
    authors: "Khan, Majid, Fawad Masood, and Abdullah Alghafis",
    title: "Secure image encryption scheme based on fractals key with Fibonacci series and discrete dynamical system.",
    journal: "Neural Computing and Applications (2019): 1-21",
    year: 2019,
    impactFactor: 4.667
},
{
    id: 8,
    authors: "Khan, Majid, Iqtadar Hussain, Sajjad Shaukat Jamal, and Muhammad Amin",
    title: "A privacy scheme for digital images based on quantum particles.",
    journal: "International Journal of Theoretical Physics 58, no. 12 (2019): 4293-4310",
    year: 2019,
    impactFactor: ""
},
{
    id: 9,
    authors: "Arshad, Usman, Majid Khan, Sajjad Shaukat, Muhammad Amin, and Tariq Shah",
    title: "An efficient image privacy scheme based on nonlinear chaotic system and linear canonical transformation.",
    journal: "Physica A: Statistical Mechanics and its Applications (2019)",
    year: 2019,
    impactFactor: 2.5
},
{
    id: 10,
    authors: "Ali, Khawaja Muhammad, and Majid Khan",
    title: "A new construction of confusion component of block ciphers.",
    journal: "Multimedia Tools and Applications 78, no. 22 (2019): 32585-32604",
    year: 2019,
    impactFactor: 2.101
},
{
    id: 11,
    authors: "Ali, Khawaja Muhammad, and Majid Khan",
    title: "Application based construction and optimization of substitution boxes over 2D mixed chaotic maps.",
    journal: "International Journal of Theoretical Physics 58, no. 9 (2019): 3091-3117",
    year: 2019,
    impactFactor: 1.121
},
{
    id: 12,
    authors: "Waseem, Hafiz Muhammad, and Majid Khan",
    title: "A new approach to digital content privacy using quantum spin and finite-state machine.",
    journal: "Applied Physics B 125, no. 2 (2019): 27",
    year: 2019,
    impactFactor: 1.769
},
{
    id: 13,
    authors: "Khan, Majid, Fawad Masood, Abdullah Alghafis, Muhammad Amin, and Syeda Iram Batool Naqvi",
    title: "A novel image encryption technique using hybrid method of discrete dynamical chaotic maps and Brownian motion.",
    journal: "PloS one 14, no. 12 (2019)",
    year: 2019,
    impactFactor: 2.776
},
{
    id: 14,
    authors: "Waqas, Umer Aziz, Majid Khan, and Syeda Iram Batool",
    title: "A new watermarking scheme based on Daubechies wavelet and chaotic map for quick response code images.",
    journal: "Multimedia Tools and Applications (2019): 1-24",
    year: 2019,
    impactFactor: 2.101
},
{
    id: 15,
    authors: "Khan, Majid, and Hafiz Muhammad Waseem",
    title: "A novel digital contents privacy scheme based on Kramer’s arbitrary spin.",
    journal: "International Journal of Theoretical Physics 58, no. 8 (2019): 2720-2743",
    year: 2019,
    impactFactor: 1.121
},
{
    id: 16,
    authors: "Khan, Majid, and Fawad Masood",
    title: "A novel chaotic image encryption technique based on multiple discrete dynamical maps.",
    journal: "Multimedia Tools and Applications 78, no. 18 (2019): 26203-26222",
    year: 2019,
    impactFactor: 2.101
},
{
    id: 17,
    authors: "Khan, Majid, and Noor Munir",
    title: "A novel image encryption technique based on generalized advanced encryption standard based on field of any characteristic.",
    journal: "Wireless Personal Communications 109, no. 2 (2019): 849-867",
    year: 2019,
    impactFactor: 0.929
},
{
    id: 18,
    authors: "Waseem, Hafiz Muhammad, Majid Khan, and Tariq Shah",
    title: "Image privacy scheme using quantum spinning and rotation.",
    journal: "Journal of Electronic Imaging 27, no. 6 (2018): 063022",
    year: 2018,
    impactFactor: ""
},
{
    id: 19,
    authors: "Younas, Irfan, and Majid Khan",
    title: "A new efficient digital image encryption based on inverse left almost semi group and Lorenz chaotic system.",
    journal: "Entropy 20, no. 12 (2018): 913",
    year: 2018,
    impactFactor: ""
},
{
    id: 20,
    authors: "Waseem, Hafiz Muhammad, and Majid Khan",
    title: "Information confidentiality using quantum spinning, rotation and finite state machine.",
    journal: "International Journal of Theoretical Physics 57, no. 11 (2018): 3584-3594",
    year: 2018,
    impactFactor: 1.121
}
];



export default function Publications() {
  return (
    <div id='publications'>
      

      <Container className={"py-24"} >
        <h1 className="text-4xl font-bold text-center text-dark dark:text-white mb-16">List of Publications</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" style={{ width: "5%" }}>S.#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" style={{ width: "20%" }}>Author(s)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" style={{ width: "25%" }}>Title of Paper</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" style={{ width: "25%" }}>Title of Journal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" style={{ width: "10%" }}>Year</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" style={{ width: "15%" }}>Impact Factor</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
              {publications.map((publication) => (
                <tr key={publication.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{publication.id}</td>
                  <td className="px-6 py-4 whitespace-wrap">{publication.authors}</td>
                  <td className="px-6 py-4 whitespace-wrap">{publication.title}</td>
                  <td className="px-6 py-4 whitespace-wrap">{publication.journal}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{publication.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{publication.impactFactor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h1 className="text-4xl font-bold text-center text-dark dark:text-white mt-16 mb-16">News & Advisories</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" style={{ width: "5%" }}>S.#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" style={{ width: "40%" }}>Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" style={{ width: "25%" }}>Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" style={{ width: "20%" }}>View</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
              
                <tr >
                  <td className="px-6 py-4 whitespace-nowrap">1.</td>
                  <td className="px-6 py-4 whitespace-wrap">Espionage Campaign to Track Location of Strategic Sites</td>
                  <td className="px-6 py-4 whitespace-wrap">	June 26, 2023</td>
                  <td className="px-6 py-4 text-prim hover:underline whitespace-nowrap"><Link href={"/"}>View</Link></td>
                </tr>
              
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}
