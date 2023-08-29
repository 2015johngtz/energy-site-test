import { NavBar, Footer, NewAddressBox } from '../../common'
import './ProvidersStyles.scss'

export default function Providers() {
    return (
        <>
            <NavBar />
            <div className="providers-back-img">
                <h2>TXU Energy rates, plans,
                    and reviews</h2>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
                <NewAddressBox />
            </div>
            <div className="container">
                <div className="providers-mid-div col-12">
                    <h2>
                        Providers
                    </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                   of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="providers-table col-12">
                    <h2>TXU Energy rates</h2>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Plan Name</th>
                                <th scope="col">Plan Length</th>
                                <th scope="col">Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">TXU Energy - Smart Edge 12</td>
                                <td>12 months</td>
                                <td>$0.099 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TXU Energy - Smart Edge 24</td>
                                <td>24 months</td>
                                <td>$0.109 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TXU Energy - Smart Deal 12</td>
                                <td>12 months</td>
                                <td>$0.138 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TXU Energy - Flex Rewards</td>
                                <td>1 month</td>
                                <td>$0.140 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TXU Energy - Solar Club 12</td>
                                <td>12 months</td>
                                <td>$0.144 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TXU Energy - Free Nights & Solar Days 12</td>
                                <td>12 months</td>
                                <td>$0.145 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TXU Energy - Season Pass 12</td>
                                <td>12 months</td>
                                <td>$0.145 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TXU Energy - Solar Saver 12</td>
                                <td>12 months</td>
                                <td>$0.145 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TXU Energy - Smart Deal 24</td>
                                <td>24 months</td>
                                <td>$0.151 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TXU Energy - Free Nights & Solar Day 24</td>
                                <td>24 months</td>
                                <td>$0.156 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TXU Energy - Smart Deal 36</td>
                                <td>36 months</td>
                                <td>$0.158 / kWh</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="provider-plans col-12">
                    <h2>TXU Energy Plans</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <Footer />

        </>
    )
}