import { NavBar, Footer, NewAddressBox } from '../../common'
import './ResourcesStyles.scss'

export default function Resources() {
    return (
        <>
            <NavBar />
            <div className="resources-back-img">
                <h2>Energy Resources</h2>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
                <NewAddressBox />
            </div>
            <div className="container">
                <div className="providers-mid-div col-12">
                    <h2>
                    Learn more about deregulated energy
                    </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                   of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="resources-ul">
                        <ul class="list-group">
                            <li class="list-group-item blue-li">
                                <div className="row">
                                    <img src={require("../../assets/imgs/resources1.png")}/>
                                    <div className="head-text-div col-6">
                                        <h2>How switching works</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item white-li">
                            <div className="row">
                                    <img src={require("../../assets/imgs/resources2.png")}/>
                                    <div className="head-text-div col-6">
                                        <h2>Energy buying guide</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item blue-li">
                            <div className="row">
                                    <img src={require("../../assets/imgs/resources3.png")}/>
                                    <div className="head-text-div col-6">
                                        <h2>How to reduce your electricity bill</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item white-li">
                            <div className="row">
                                    <img src={require("../../assets/imgs/resources4.png")}/>
                                    <div className="head-text-div col-6">
                                        <h2>Energy glossary</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                </div>

            <Footer />

        </>
    )
}