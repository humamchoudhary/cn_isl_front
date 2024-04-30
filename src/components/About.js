    import {NewspaperIcon , FolderArrowDownIcon, WrenchScrewdriverIcon} from "@heroicons/react/24/outline"
    import Container from "./Container"
    import Link from "next/link";


    const contents = [
        {
          name: 'Newsletter',
          description: 'Please find our first newsletter, published in December 2022.',
          details: 'June, 21, 2023 - 439.58 KB - 161 Downloads',
          downloadLink: '/newsletter-download',
          icon: NewspaperIcon,
        },
        {
          name: 'CISL Workshop',
          description: 'Hosting a workshop on reverse engineering of cyberweapons from March 25-26, 2024.',
          discussions: [
            'Static/dynamic analysis',
            'Case studies',
          ],
          icon: WrenchScrewdriverIcon,
        },
        {
          name: 'Downloads',
          description: 'Documents and info available for download.',
          downloads: [
            'Poster',
            'Brochure',
          ],
          icon: FolderArrowDownIcon,
        },
      ];
      
      export default function About() {
        return (
          <div id="about" className="bg-dark py-24 sm:py-32">
            <Container>
              <div className="flex flex-col items-center justify-between mx-auto  px-6 lg:px-8">
                {/* Title and Description */}
                <div className="mx-auto  lg:text-center">
                  <h2 className="text-2xl font-semibold leading-7 text-light mb-8">About</h2>
                  <h1 className="my-8 text-9xl text-center font-bold tracking-wide text-prim sm:text-4xl">
                    Cyber and Information Security Lab
                  </h1>
                  <p className="mt-10  text-lg text-justify leading-8 text-light">
                    The Cyber and Information Security Lab (CISL) is a multi-disciplinary state-of-the-art research lab located within the Department of Electrical Engineering and Computer Science at the Institute of Space Technology, Islamabad. The lab is staffed with several research fellows - pursuing PhDs in Electrical Engineering, Mathematics, Communications, and Information hiding with faculty members of Computer Science, Electrical Engineering, Avionics, and Applied Mathematics Department. The research at CISL encompasses the design and development of network applications related to cybersecurity, mobile networks, and information hiding. In addition, CISL offers different courses, workshops, and seminars related to computer networks, cryptography, information assurance, computer forensics, and network security.<br /><br />The mission of the CIS Lab is to promote cutting-edge research in finding security vulnerabilities in systems, computer network application development with a security perspective, and to train young professionals from national and international organizations in the field of network security.
                  </p>
                </div>
                
                {/* contents */}
                <div className="mx-auto sm:mt-20 lg:mt-24 ">
                  <dl className="grid  grid-cols-1 gap-x-10 gap-y-15  lg:grid-cols-3 lg:gap-y-12">
                    {contents.map((content) => (
                      <div key={content.name} className="relative p-8 pl-20 rounded-xl bg-dark_sec hover:bg-dark_sec duration-200 ">
                        <dt className="text-base font-semibold leading-7 text-prim">
                          <div className="absolute left-5 top-10 flex h-8 w-8 items-center justify-center rounded-lg bg-dark_sec">
                            <content.icon className="h-5 w-5 text-prim  font-bold" aria-hidden="true" />
                          </div>
                          {content.name}
                        </dt>
                        <dd className="mt-2  text-base leading-7 text-light">
                          {content.description}<br /><br />
                          {content.details && <span>{content.details} | <Link href={content.downloadLink} className="font-bold hover:underline text-prim">Download</Link></span>}
                          {content.discussions && (
                            <ul className="list-disc list-inside">
                              {content.discussions.map((discussion, index) => (
                                <li className="font-bold " key={index}><span className="text-prim">{discussion}</span> </li>
                              ))}
                            </ul>
                          )}
                          {content.downloads && (
                            <ul className="list-disc list-inside">
                              {content.downloads.map((download, index) => (
                                <li key={index}><Link className="font-bold text-prim hover:underline" href="/downloads"> {download}</Link></li>
                              ))}
                            </ul>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Container>
          </div>
        );
      }