import {Link} from 'react-router-dom'
function Nav() {
return (
    <div>
        <Link to="/Home">Home</Link>
        <Link to="/users/ronaldo">Ronaldo</Link>
        <Link to="/users/messi">Messi</Link>
        <Link to="/users/br4gg">David Bragg</Link>
    </div>
)
}
export default Nav