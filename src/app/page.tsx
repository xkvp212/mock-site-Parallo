import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

const Header: React.FC = () => (
  <header className="header">
    <div className="logo">
      {/* Your Company Logo Component */}
      <Image src="/parallo-logo.png" alt="Company Logo" width={210} height={80} />
    </div>
    <nav className="navigation">
      <ul>
        <li><Link href="#team">Team</Link></li>
        <li><Link href="#solutions">Solutions</Link></li>
        <li><Link href="#resources">Resources</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#careers">Careers</Link></li>
        <li><Link href="#contact">Contact</Link></li>
        <li><Link href="#login">Login</Link></li>
      </ul>
    </nav>
  </header>
);

const Home: React.FC = () => (
  <div className="container">
    <Header />
    <div className="content">
      <div className="text">
        <h1>Kevin Pacis</h1>
        <h4> Junior DevOps/Cloud Engineer</h4>
        <p className="quote-p">&quot;So you&apos;re telling me, I have to get experience before I get experience?&quot; -Every junior in Tech</p>
        <p> Kevin is an aspiring junior DevOps/Cloud engineer dedicated to completing AWS or Azure certifications while actively engaging in cloud projects and hands-on exploration of the cloud console. Proficient in troubleshooting and fostering collaboration, he excels in cloud platforms and Infrastructure as Code (IaC) technologies like AWS CloudWatch and Azure Resource Manager. Kevin&apos;s expertise extends to automation tools like AWS OpsWorks, kubernetes and Docker, emphasizing operational efficiency and security best practices.

</p>
        <p> Adaptable and forward-thinking, Kevin remains at the forefront of emerging technologies, bringing a comprehensive skill set to the table. 
From CI/CD pipelines to version control and monitoring tools, he is well-equipped to contribute meaningfully to the dynamic field of cloud engineering.</p>
        <p>When he&apos;s not coding or on the cloud, Kevin is passionate about his family and hobbies. 
          He loves spreading positivity with his candlemaking. 
          He grows his favorite protein source, Oyster Mushrooms!
          He&apos;s voraciously consuming parenting books, and enjoys spending time with his wife, family, and friends.</p>
      </div>
      <div className="image">
        {/* Your Image Component */}
        <Image src="/IMG_0537-removebg-preview.png" alt="Company Image" width={300} height={350} />
      </div>
    </div>
  </div>
);

export default Home;
