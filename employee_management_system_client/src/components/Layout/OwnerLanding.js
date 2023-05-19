
import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
return (
<section>
<div className="dark-overlay">
<div className="landing-inner">
<h1 className="x-large">Register your space</h1>
<p className="lead">
List your space for free, setting your pricing, preferences and when the space is available.
</p>
<div className="buttons">
<Link to="/OwnerRegister" className="btn btn-primary">Register </Link>
<Link to="/Login" className="btn btn">SignIn</Link>
</div>
</div>
</div>
</section>
)
}


export default Landing;