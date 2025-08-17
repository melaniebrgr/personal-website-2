import CCCE2013 from './CCCE2013.pdf';
import CSC2015 from './CSC2015.pdf';
import FITC2015 from './FITC2015.pdf';
import GRC2013 from './GRC2013.pdf';

export default function publicationsandpresentations() {
  return (
    <>
      <div className="feature">
        <header className="headline">
          <h1>Publications &amp; Presentations</h1>
        </header>
      </div>
      <article className="publicationsandpresentations">
        <a href="http://jcheminf.springeropen.com/articles/10.1186/s13321-015-0085-3" target="_blank" className="section" rel="noopener noreferrer">
          <h5>ChemDoodle Web Components: HTML5 toolkit for chemical graphics, interfaces, and informatics <em>(Link)</em></h5>
          <span>Publication</span>
          <span>Journal of Cheminformatics</span>
          <span>July 2015</span>
        </a>

        <a href={CSC2015} download className="section">
          <h5>Creating visual content for the web @Imagineeringart <em>(Download PDF)</em></h5>
          <span>Presentation</span>
          <span>Canadian Chemistry Conference</span>
          <span>June 2015</span>
        </a>

        <a href={FITC2015} download className="section">
          <h5>Presentation notes from FITC 2015 <em>(Download PDF)</em></h5>
          <span>Notes</span>
          <span>FITC 2015</span>
          <span>April 2015</span>
        </a>     

        <a href="http://slides.com/mbrgr/how-to-molecule" target="_blank" className="section" rel="noopener noreferrer">
          <h5>How to get a molecule on your website <em>(Link)</em></h5>
          <span>Presentation</span>
          <span>BMCAA Unconference</span>
          <span>Nov 2014</span>
        </a>

        <a href="http://www.imagineeringart.com/two-challenges-of-molecular-visualization/" target="_blank" className="section" rel="noopener noreferrer">
          <h5>Two challenges of molecular visualization <em>(Link)</em></h5>
          <span>Blog post</span>
          <span>Imagineeringart.com blog</span> 
          <span>Sept 2014</span>
        </a>

        <a href="http://slides.com/mbrgr/icce2014" target="_blank" className="section" rel="noopener noreferrer">
          <h5>Organic chemistry reactions online <em>(Link)</em></h5>
          <span>Presentation</span>
          <span>IUPAC International Conference on Chemistry Education</span>
          <span>June 2014</span>
        </a>

        <a href={CCCE2013} download className="section">
          <h5>Lab<sub>3</sub>D: a new web-based resource of interactive, animated organic chemistry reactions <em>(Download PDF)</em></h5>
          <span>Publication</span>
          <span>ACS Committee on Computers in Chemical Education</span>
          <span>Oct 2013</span>
        </a>

        <a href={GRC2013} download className="section">
          <h5>Lab<sub>3</sub>D online interactive organic chemistry reactions a new molecular visualization resource for undergraduate students <em>(Download PDF)</em></h5>
          <span>Poster</span>
          <span>Gordon Research Conference</span>
          <span>July 2013</span>
        </a>
      </article>
    </>
  );
}