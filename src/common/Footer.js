import { Entypo, EvilIcons, AntDesign } from 'react-web-vector-icons';
import { NavLink } from 'react-router-dom';
import './commonsStyles.scss'
export function Footer() {
    return (
        <>
            <div className="div9">
                <div className="container">
                    <div className="row">
                        <div className="div9-text">
                            <h5>Partners with us</h5>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:</p>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.</p>
                        </div>
                        <div className="div9-contactUs">
                            <h6>Contact Us</h6>
                            <div class="div9-inputs">
                                <input style={{ width: '100%' }} name="fullname" placeholder="Enter your full name" />
                                <div className="row">
                                    <input style={{ width: '45%', marginLeft: '15px', marginRight: '10px' }} name="email" placeholder="Email" />
                                    <input style={{ width: '44%' }} name="phone" placeholder="Phone" />
                                </div>
                                <textarea style={{ width: '100%', height: '65px' }} name="message" placeholder="Leave a message" />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="div10">
                <div className="container">

                    <div className="row">
                        <img style={{ marginLeft: '30px', marginTop: '10px' }}
                            src={require('../assets/imgs/logo.png')} height="31px" />
                        <ul>
                            <li><NavLink to="/home" activeClassName="active-footer">Home</NavLink></li>
                            <li><NavLink to="/serviceAreas" activeClassName="active-footer">Service Areas</NavLink></li>
                            <li><NavLink to="/providers" activeClassName="active-footer">Providers</NavLink></li>
                            <li><NavLink to="/utilities" activeClassName="active-footer">Utilities</NavLink></li>
                            <li><NavLink to="/resources" activeClassName="active-footer">Resources</NavLink></li>
                            <li><NavLink to="/aboutUs" activeClassName="active-footer">About us</NavLink></li>

                        </ul>

                        <div className="row" style={{ marginRight: '30px' }}>
                            <EvilIcons
                                name="sc-facebook"
                                size={25}
                                style={{ marginRight: '-11px', marginTop: '6px' }}
                            />
                            <AntDesign
                                name="instagram"
                                size={20}

                            />
                            <AntDesign
                                name="youtube"
                                size={20}

                            />
                            <AntDesign
                                name="twitter"
                                size={20}

                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <p>Copyright© 2007-2020 Texas Energy Consulting Services, LLC. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}