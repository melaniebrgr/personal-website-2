export default function Home() {
  return (
    <>
      <div className="feature">
      <header className="headline">
        <h1>
          <img src="/logo.svg" alt="logo" className="headline__logo" />
          <img src="/logo.svg" alt="logo" className="headline__logo headline__logo--rotated" />
          's Website
        </h1>
      </header>
      </div>
      <article>
        <h3>Changelog:</h3>
        <p className="date">August 10, 2025</p>
        <p>I built this portfolio website in 2016 at the conclusion of a bootcamp, "Thinkful" in order to market myself and land my first web development position. Then in 2020 I sparsely updated the landing page content and linked my CV, but wasn't inclined to modernise the stack, so my personal site remained a time capsule of 2016 web development trends: Angular 1, gulp, and bower.</p>
        <p>Now in 2025, we have AI, and I wanted to see if, with AI, I could update the stack quickly and conveniently. The approach was to start from a clean slate repo with a fresh react router starter application, then ask AI to sequentially convert pages. With a back a forth with Cursor AI I succeeded in a day to migrate the site to React, React Router, and Vite.</p>
        <p className="date">May 10, 2020</p>
        <p>A few changes since my last update. This website was original built with gulp, angular 1 and sass, and rebooting it after 3 years of working in React was nostaligic. I have a new appreciation for component driven development and perspective on the CSS style cascade andt the§ maintainability of gobal styles.</p>
        <p>Currently I'm a front-end developer at Rangle.io. I work on React and React Native projects from medical devices to e-commerce sites. I am interested in understanding how to create "pits of success" architecture that lead to robust and maintainable code. Over the past couple years I've also instructed and mentored for Bridgeschool.io a non-for-profit that skills up women breaking into tech. I currently live in Amsterdam, Netherlands 🇳🇱.</p>
        <p className="date">Aug 29, 2016</p>
        <p>Welcome my portfolio website. I enjoy creating at the intersection of art, science, and technology, and organizing community events on behalf of the <a href="https://bmc.med.utoronto.ca/bmc/alumni/bmcaa/" target="_blank">BMCAA</a>. I live in Toronto, Canada 🇨🇦.</p>
      </article>
    </>
  );
}
