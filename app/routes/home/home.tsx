export default function Home() {
  return (
    <>
      <div className="feature">
        <header className="headline">
          <h1>Melanie 🍔's Website</h1>
        </header>
      </div>
      <article>
        <h3>Changelog:</h3>
        <p className="date">Aug 29, 2016</p>
        <p>
          Welcome my portfolio website. I enjoy creating at the intersection of art, science, and technology, and organizing community events on behalf of the{" "}
          <a href="https://bmc.med.utoronto.ca/bmc/alumni/bmcaa/" target="_blank" rel="noopener noreferrer">
            BMCAA
          </a>
          . I live in Toronto, Canada 🇨🇦.
        </p>
        <p className="date">May 10, 2020</p>
        <p>
          A few changes since my last update. This website was original built with gulp, angular 1 and sass, and rebooting it after 3 years of working in React was ... humbling. I used to know to work with the CSS style cascade. Sufficed to say I have a new appreciation for component driven development. Also check out the hashbangs in the url. Remember when that was a thing?
        </p>
        <p>
          Currently I'm a front-end developer at Rangle.io. I work on React and React Native projects from medical devices to e-commerce sites. I am interested in understanding how to create "pits of success" architecture that lead to robust and maintainable code. Over the past couple years I've also instructed and mentored for Bridgeschool.io a non-for-profit that skills up women breaking into tech. I currently live in Amsterdam, (The) Netherlands 🇳🇱.
        </p>
      </article>
    </>
  );
}