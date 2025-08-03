import { Link } from "react-router";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
    	<div className="container">
    		<header className="header">
    			<div className="logo"><a href="#!/"><svg id="path" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300"><defs><linearGradient id="linear-gradient" x1="150.5" y1="0.907" x2="150.5" y2="300.907" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f16267"/><stop offset="1" stop-color="#ef4765"/></linearGradient></defs><title>logo</title><polygon points="300.5 300 0.5 300 0.5 0 150.5 112.5 300.5 0 300.5 300" fill="url(#linear-gradient)"/></svg></a></div>
          <nav className="nav">
            <ul>
    					<li className="nav_sub fewd"><a href="#">Web Development</a></li>
              <li>
                <ul>
                  <li className="nav_link"><a href="#!/gctavatar">GCTAvatar</a></li>
                  <li className="nav_link"><a href="#!/lab3d">Lab<sub>3</sub>D</a></li>          
                  <li className="nav_link"><a href="#!/cocktailsquiz">Cocktails Quiz</a></li>
                  <li className="nav_link"><a href="#!/shoppinglist">Shopping List</a></li>
                  <li className="nav_link"><a href="#!/symptomsleuth">Symptom Sleuth</a></li>
                </ul>
              </li>
    					<li className="nav_sub"><a href="#">Design &amp; Visual Communication</a></li>
              <li>
                <ul>
                  <li className="nav_link"><a href="#!/apliaredesign">Aplia redesign</a></li>
                  <li className="nav_link"><a href="#!/naturecover">Nature cover</a></li>
                </ul>
              </li>              
    					<li className="nav_link"><a href="#!/writingandspeaking">Writing &amp; Speaking</a></li>
    				</ul>
    			</nav>
    		</header>
    		<section className="content" ng-view></section>
    	</div>
    {children}
      <footer className="footer">
          <ul className="social-media">
            <li><a href="mailto:melanie.brgr@gmail.com" target="_blank">email</a></li>
            <li><a href="https://twitter.com/melaniebrgr" target="_blank">twitter</a></li>
            <li><a href="https://github.com/melaniebrgr" target="_blank">github</a></li>
            <li><a href="http://codepen.io/melaniebrgr/" target="_blank">codepen</a></li>
            <li><a href="https://medium.com/@melaniebrgr" target="_blank">medium</a></li>
            <li><a href="https://www.behance.net/melanieburger" target="_blank">behance</a></li>
            <li><a href="img/CV.pdf" download>CV</a></li>
          </ul>
          <div className="headshot">
              <img src="img/headshot-1.png" alt="Illustration of me" />
          </div>
          <ul className="copyright">
            <li>&copy; 2025 Melanie Burger</li>
          </ul>
      </footer>
    </>
  );
}


