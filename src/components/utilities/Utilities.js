import { NavBar, Footer, NewAddressBox } from '../../common'
import './utilitiesStyles.scss'

export default function Utilities() {
    return (
        <>
            <NavBar />
            <div className="providers-back-img">
                <h2>AEP Texas Central</h2>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
                <NewAddressBox />
            </div>
            <div className="container">
                <div className="providers-mid-div col-12">
                    <h2>
                        About AEP Texas Central
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
                                <td scope="row">Express Energy - Flash 12 - with Auto Pay</td>
                                <td>12 months</td>
                                <td>$0.059 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Pulse Power - Texas Saver 12</td>
                                <td>24 months</td>
                                <td>$0.063 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">4Change Energy - Maxx Saver 12</td>
                                <td>12 months</td>
                                <td>$0.064 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Chariot Energy - GridEdge 12</td>
                                <td>1 month</td>
                                <td>$0.064 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Just Energy - Power Plus 12</td>
                                <td>12 months</td>
                                <td>$0.079 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Gexa Energy - Gexa Saver Supreme 12</td>
                                <td>12 months</td>
                                <td>$0.080 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Frontier Utilities - Beat the Heat 12</td>
                                <td>12 months</td>
                                <td>$0.086 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Constellation - 12 Month Usage Bill Credit</td>
                                <td>12 months</td>
                                <td>$0.089 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Cirro - Smart Value 12 Online</td>
                                <td>12 months</td>
                                <td>$0.092 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Discount Power - Value Plus 12</td>
                                <td>12 months</td>
                                <td>$0.108 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TXU Energy - Smart Edge 12</td>
                                <td>12 months</td>
                                <td>$0.109 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Green Mountain - Pollution Free e-Plus 36 Preferred</td>
                                <td>36 months</td>
                                <td>$0.112 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">First Choice Power - You Got This 36</td>
                                <td>36 months</td>
                                <td>$0.113 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Direct Energy - Live Brighter 36</td>
                                <td>36 months</td>
                                <td>$0.114 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">TriEagle Energy - Golden Eagle</td>
                                <td>36 months</td>
                                <td>$0.114 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Reliant - Secure Advantage 18</td>
                                <td>18 months</td>
                                <td>$0.118 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Iberdrola Texas - Wind By TX 36</td>
                                <td>36 months</td>
                                <td>$0.120 / kWh</td>
                            </tr>
                            <tr>
                                <td scope="row">Payless Power - SmarTricity Premier 12 - Prepaid Plan</td>
                                <td>12 months</td>
                                <td>$0.148 / kWh</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="provider-plans col-12">
                    <h2>TXU Energy Plans</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="provider-plans2 col-12">
                    <h2>Understanding energy deregulation in Texas</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>

            <Footer />

        </>
    )
}