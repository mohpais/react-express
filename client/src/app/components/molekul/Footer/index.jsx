import React from 'react';
import { logo1, fb, ig, dc, tw, gt } from '../../../../assets';
import './footer.scss'

const Icon = ({img, alt}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt={alt} srcset=""/>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="">
            <div className="footer-app">
                <div className="">
                    <img className="logo-footer" src={logo1} alt="my-logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={fb} alt="facebook" />
                    <Icon img={ig} alt="instagram" />
                    <Icon img={dc} alt="discord" />
                    <Icon img={gt} alt="github" />
                    <Icon img={tw} alt="twitter" />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
