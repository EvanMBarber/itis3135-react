import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = "Evan Barber's Enraged Baracuda | Course Homepage";
  }, []);

  return (
    <section class='container'>
      <h2>3135 Course Homepage</h2>
      <p>Hello, this is the course home page for ITIS 3135.</p>
    </section>
  );
}
