export default function Home() {
  return (
    <>
      <div className="feature">
      <header className="headline">
        <h1>
          <img src="/logo.svg" alt="logo" className="headline__logo" />
          <img src="/logo.svg" alt="logo" className="headline__logo headline__logo--rotated" />log
        </h1>
      </header>
      </div>
      <article>
        <h3>Changelog</h3>
        <p className="date">August 10, 2025</p>
        <p>I built this portfolio website in 2016 to land a position as a web developer. Then, in 2020, I made minor updates to the landing page and linked an new CV (now removed). I didn't take the time to modernise the stack, so the site remained a time capsule of 2016 web development trends: Angular 1, Gulp, and Bower.</p>
        <p>Now in 2025, we have AI, and I wanted to see if I could update the stack quickly and conveniently the latest tools. The approach was to start from a fresh react router installation and then use AI to sequentially migrate pages. With some back and forth with claude-4-sonnet in Cursor, I succeeded to migrate the site to React, React Router, and Vite in a day.</p>
        <p>So the content may be old, but at least the stack is fresh, and a GitHub Action is now set up to automatically deploy to AWS, so frequent content updates are viable.</p>
        <p>I am currently the frontend lead on an AI-assisted learning platform at a 🇳🇱 EdTech.</p>
        <p className="date">May 10, 2020</p>
        <p>A few changes since my last update. This website was original built with Gulp, Angular 1 and Sass, and rebooting it after 3 years of working in React was both nostaligic and painful. I have a new appreciation for component driven development and perspective on the cascading part of CSS.</p>
        <p>Currently I'm a front-end developer at Rangle.io. I work on React and React Native projects from medical devices to e-commerce sites. I am interested in understanding how to create "pits of success" architecture that lead to robust and maintainable code. Over the past couple years I've also instructed and mentored for Bridgeschool.io a non-for-profit that skills up women breaking into tech. I currently live in Amsterdam, Netherlands 🇳🇱.</p>
        <p className="date">Aug 29, 2016</p>
        <p>Welcome my portfolio website. I enjoy creating at the intersection of art, science, and technology, and organizing community events on behalf of the <a href="https://bmc.med.utoronto.ca/bmc/alumni/bmcaa/" target="_blank">BMCAA</a>. I live in Toronto, Canada 🇨🇦.</p>
      </article>
    </>
  );
}
