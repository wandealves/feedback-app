import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa'

function AboutIconlink () {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconlink
