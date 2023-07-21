import Link from 'next/link';
import {FaGithub} from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav>
      <div>
        <h1>
          <Link href="/">Ilyas El Mabrouki</Link>
        </h1>
        <div>
          <Link href="https://github.com/IlyasElMabrouki">
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
}
