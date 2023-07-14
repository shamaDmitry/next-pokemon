import Link from "next/link";

const About = () => {
  return (
    <>
      <h1>
        About
      </h1>

      <ul>
        <li>
          <Link
            className="font-bold text-blue-600 hover:text-blue-800 hover:underline"
            target="_blank"
            href="https://nextjs.org/"
          >
            Next.js
          </Link>
        </li>

        <li>
          <Link
            className="font-bold text-blue-600 hover:text-blue-800 hover:underline"
            target="_blank"
            href="https://dribbble.com/shots/15128634-Pokemon-Pokedex-Website-Redesign-Concept/attachments/6864101?mode=media"
          >
            Design
          </Link>
        </li>

        <li>
          <Link
            className="font-bold text-blue-600 hover:text-blue-800 hover:underline"
            target="_blank"
            href="https://pokeapi.co/docs/v2"
          >
            API
          </Link>
        </li>
      </ul>
    </>
  );
}

export default About;
