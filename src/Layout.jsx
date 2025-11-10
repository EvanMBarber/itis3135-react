import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>

        {/* External links at the very bottom */}
        <nav>
          <a href="https://github.com/EvanMBarber/EvanMBarber.github.io" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
          <a href="https://www.linkedin.com/in/evanmbarber/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
          <a href="https://evanmbarber.github.io/" target="_blank" rel="noopener noreferrer">GitHub.io</a> |{" "}
          <a href="https://webpages.charlotte.edu/ebarber8/" target="_blank" rel="noopener noreferrer">School Website</a> |{" "}
          <a href="https://webpages.charlotte.edu/ebarber8/itis3135/index.html" target="_blank" rel="noopener noreferrer">Course Homepage</a> |{" "}
          <a href="https://webpages.charlotte.edu/ebarber8/itis3135/enragedbarracuda/about.html" target="_blank" rel="noopener noreferrer">EnragedBarracuda</a> |{" "}
          <a href="https://webpages.charlotte.edu/ebarber8/itsc1110/components/stuff/QRGSERGV!!!.html" target="_blank" rel="noopener noreferrer">Crappy Page</a> |{" "}
          <a href="https://webpages.charlotte.edu/ebarber8/itis3135/hobby/index.html" target="_blank" rel="noopener noreferrer">Hobby</a> |{" "}
          <a href="https://webpages.charlotte.edu/ebarber8/itis3135/client/index.html" target="_blank" rel="noopener noreferrer">Client Project</a>
              </nav>
        <p><a href="">BarberEnterprise</a> ©2025</p>
      </footer>
    </>
  );
}