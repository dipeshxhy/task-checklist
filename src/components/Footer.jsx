import { FaGithub, FaGlobe, FaTasks } from 'react-icons/fa';

const socialLinks = [
  {
    id: 1,
    name: 'Github',
    icon: <FaGithub className="fill-current" size={'2em'} />,
    url: 'https://github.com/dipeshxhy',
  },
  {
    id: 2,
    name: 'portfolio',
    icon: <FaGlobe className="fill-current" size={'2em'} />,
    url: 'https://dipeshchaudhary.dev',
  },
];

const Footer = () => {
  return (
    <div className="">
      <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-8">
        <aside class="grid-flow-col items-center">
          <a className="btn btn-ghost text-xl font-extrabold">
            <FaTasks className="mr-2 text-amber-300" />
            TasksChecker
          </a>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          {socialLinks.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
};
export default Footer;
