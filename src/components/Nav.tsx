import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages DONE
  return (
    <div className='nav-i'>
      <Link to="/" className='nav-link-i'>Home</Link>
      <Link to="/SavedCandidates" className='nav-link-i'>Potential Candidates</Link>
    </div>
  )
};

export default Nav;
