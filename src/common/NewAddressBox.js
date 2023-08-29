import './commonsStyles.scss'

export function NewAddressBox() {
    return (
        <div className="addressBox">
            <div className="container">
                <div className="checkboxes">
                    <label className="mainLabel">Are you moving to a new address?</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Yes
                         </label>
                         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            No
                        </label>
                    </div>
                       

                </div>
                <div class="input-group ">
                    <input type="text" class="form-control" placeholder="Enter ZIP code"
                        aria-label="Enter ZIP code" aria-describedby="basic-addon2" />
                        <button type="button">For Business</button>
                </div>
            </div>
        </div>
    )
}