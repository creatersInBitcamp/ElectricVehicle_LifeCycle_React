import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../../assets/images/icon/logo.png'

const logoStyle = {
    weight: "179px", height: "45px"
}

const LogoImage = props => {
    return <Link to={`${process.env.PUBLIC_URL}/`} >
        {/*<img src={`${process.env.PUBLIC_URL}/assets/images/icon/${props.logo}`} alt="" className="img-fluid" />*/}
        <img src={Logo} style={logoStyle} alt="team logo"/>
    </Link>
}

export default LogoImage