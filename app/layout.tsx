import { NavLink, Outlet } from "react-router";
import { useEffect } from "react";
import $ from "jquery";

export default function Layout() {
  useEffect(() => {
    // jQuery code - equivalent to $(document).ready()
    $('.nav_sub').off('click').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next().toggleClass('open');
    });
    
    $('.nav_link').off('click').on('click', function(e) {
      $('.nav_link.active').removeClass('active');
      $(this).addClass('active');
    });
    
    const bodyWidth = $('body').width();
    if (bodyWidth && bodyWidth > 701) {
      $('.nav_sub.fewd').trigger('click');
    }

    // Cleanup function to remove event listeners
    return () => {
      $('.nav_sub').off('click');
      $('.nav_link').off('click');
    };
  }, []);
  return (
    <>
    	<div className="container">
    		<header className="header">
    			<div className="logo"><NavLink to="/"><img src="/logo.svg" alt="logo" /></NavLink></div>
          <nav className="nav">
            <ul>
    					<li className="nav_sub fewd"><a href="#">Web Development</a></li>
              <li>
                <ul>
                   <li className="nav_link"><NavLink to="/gctavatar">GCTAvatar</NavLink></li>
                   <li className="nav_link"><NavLink to="/lab3d">Lab<sub>3</sub>D</NavLink></li>          
                   <li className="nav_link"><NavLink to="/cocktailsquiz">Cocktails Quiz</NavLink></li>
                   <li className="nav_link"><NavLink to="/shoppinglist">Shopping List</NavLink></li>
                   <li className="nav_link"><NavLink to="/symptomsleuth">Symptom Sleuth</NavLink></li>
                 </ul>
              </li>
    					<li className="nav_sub"><a href="#">Design &amp; Visual Communication</a></li>
              <li>
                <ul>
                  <li className="nav_link"><NavLink to="/apliaredesign">Aplia redesign</NavLink></li>
                  <li className="nav_link"><NavLink to="/naturecover">Nature cover</NavLink></li>
                </ul>
              </li>              
    					<li className="nav_link"><NavLink to="/writingandspeaking">Writing &amp; Speaking</NavLink></li>
    				</ul>
    			</nav>
    		</header>
    		<section className="content"><Outlet /></section>
    	</div>
      <footer className="footer">
          <ul className="social-media">
            <li><a href="https://www.linkedin.com/in/melaniebrgr/" target="_blank">linkedin</a></li>
            <li><a href="https://github.com/melaniebrgr" target="_blank">github</a></li>
            <li><a href="https://pearreviewer.substack.com" target="_blank">substack</a></li>
            <li><a href="https://medium.com/@melaniebrgr" target="_blank">medium</a></li>
            <li><a href="http://codepen.io/melaniebrgr/" target="_blank">codepen</a></li>
            <li><a href="https://www.behance.net/melanieburger" target="_blank">behance</a></li>
          </ul>
            <div className="headshot">
              <img src="/headshot-1.png" alt="Illustration of me" />
           </div>
          <ul className="copyright">
            <li>&copy; {new Date().getFullYear()} melanie.brgr@gmail.com</li>
          </ul>
        </footer>
    </>
  );
}


