import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

const Header: React.FC = () => (
  <header className="header">
    <div className="logo">
      {/* Your Company Logo Component */}
      <Image src="/parallo-logo.png" alt="Company Logo" width={200} height={100} />
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
        <p> Kevin is an aspiring junior DevOps/Cloud engineer with a keen focus on obtaining AWS or Azure certifications.
           Proficient in cloud platforms, Kevin excels in troubleshooting and fostering effective collaboration between development and operations teams.
           Additionally, Kevin possesses skills in Infrastructure as Code technologies like AWS Cloudwatch and Azure Resource Manager.
            His expertise extends to automation tools like AWS OpsWorks and Docker, reflecting a dedication to optimizing operational efficiency with a strong emphasis on security best practices.
            Additionally, Kevin possesses skills in Infrastructure as Code (IaC) technologies like CloudWatch and Azure Resource Manager.</p>
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
