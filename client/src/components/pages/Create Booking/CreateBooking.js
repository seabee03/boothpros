import React, { Component } from 'react';
import {CountryService} from '../../../service/CountryService';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
// import {AutoComplete} from 'primereact/autocomplete';
// import {MultiSelect} from 'primereact/multiselect';
import {Calendar} from 'primereact/calendar';
// import {Chips} from 'primereact/chips';
import {Checkbox} from 'primereact/checkbox';
import {RadioButton} from 'primereact/radiobutton';
// import {InputSwitch} from 'primereact/inputswitch';
// import {Dropdown} from 'primereact/dropdown';
// import {Password} from 'primereact/password';
// import {Spinner} from 'primereact/spinner';
// import {Slider} from 'primereact/components/slider/Slider';
// import {ListBox} from 'primereact/listbox';
// import {Rating} from 'primereact/rating';
// import {ColorPicker} from 'primereact/colorpicker';
// import {Editor} from 'primereact/editor';
// import {ToggleButton} from 'primereact/togglebutton';
// import {SelectButton} from 'primereact/selectbutton';
import {Button} from 'primereact/button';
// import {SplitButton} from 'primereact/splitbutton';
import {InputMask} from 'primereact/inputmask';


export class CreateBooking extends Component {

    constructor() {
        super();
        this.state = {
            countriesData: [],
            cars: [],
            selectedType: null,
            chipsValue: [],
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            checkboxValue: [],
            radioValue: null,
            inputSwitchValue: false,
            dropdownCity: null,
            spinnerValue: null,
            sliderValue: [20,80],
            listBoxCity: null,
            ratingValue: null,
            colorPickerValue: null,
            inputGroupValue: null,
            carOptions: [
                {label: 'Audi', value: 'Audi'},
                {label: 'BMW', value: 'BMW'},
                {label: 'Fiat', value: 'Fiat'},
                {label: 'Honda', value: 'Honda'},
                {label: 'Jaguar', value: 'Jaguar'},
                {label: 'Mercedes', value: 'Mercedes'},
                {label: 'Renault', value: 'Renault'},
                {label: 'VW', value: 'VW'},
                {label: 'Volvo', value: 'Volvo'}
            ],
            cities: [
                {label: 'Select City', value: null},
                {label: 'New York', value: 'New York'},
                {label: 'Rome', value: 'Rome'},
                {label: 'London', value: 'London'},
                {label: 'Istanbul', value: 'Istanbul'},
                {label: 'Paris', value: 'Paris'}
            ],
            listBoxCities: [
                {label: 'Madrid', value: 'Madrid'},
                {label: 'Geneva', value: 'Geneva'},
                {label: 'Los Angeles', value: 'Los Angeles'},
                {label: 'Monaco', value: 'Monaco'},
                {label: 'Berlin', value: 'Berlin'}
            ],
            types: [
                {label: 'Apartment', value: 'Apartment'},
                {label: 'House', value: 'House'},
                {label: 'Studio', value: 'Studio'}
            ],
            splitButtonItems: [
                {label: 'Update', icon: 'pi pi-refresh'},
                {label: 'Delete', icon: 'pi pi-times'},
                {label: 'Home', icon: 'pi pi-home', url: 'http://www.primefaces.org/primereact'}
            ]
        };

        this.countryService = new CountryService();
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.filterCountry = this.filterCountry.bind(this);
        this.filterBrands = this.filterBrands.bind(this);
        this.autoCompleteItemTemplate = this.autoCompleteItemTemplate.bind(this);
    }

    componentDidMount(){
        this.setState({countriesData: this.countryService.getCountries(this)})
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo'];
    }

    filterCountry(event) {
        let results = this.state.countriesData.filter((country) => {
            return country.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
        this.setState({ filteredCountries: results });
    }

    filterBrands(event) {
        setTimeout(() => {
            let results;

            if (event.query.length === 0) {
                results = [...this.brands];
            }
            else {
                results = this.brands.filter((brand) => {
                    return brand.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredBrands: results });
        }, 250);
    }

    autoCompleteItemTemplate(brand) {
        if (!brand) {
            return;
        }

        return (
                <div className="p-clearfix">
                    <img alt={brand} src={`assets/demo/images/car/${brand}.png`} style={{ width: '32px', display: 'inline-block', margin: '5px 0 2px 5px' }} />
                    <div style={{ fontSize: '18px', float: 'right', margin: '10px 10px 0 0' }}>{brand}</div>
                </div>
        );
    }

    onCheckboxChange(event){
        let selected = [...this.state.checkboxValue];
        if (event.checked)
            selected.push(event.value);
        else
            selected.splice(selected.indexOf(event.value), 1);

        this.setState({checkboxValue: selected});
    }

    render() {
        return (
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-lg-6">
                    <div className="card card-w-title">
                        <h1>Contact Information</h1>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-4">
                                <InputText required={true} placeholder="Name"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="E-mail Address"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputMask mask="(999) 999-9999? x99999" placeholder="Phone Number" value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="E-mail Address"/>
                            </div>                            
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Address Line 1" />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Address Line 2" />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="City" />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputMask mask="aa" placeholder="State" value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputMask mask="99999" placeholder="Zip Code" value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                            </div>
                        </div>
                    </div>

                    <div className="card card-w-title">
                        <h1>Venue Information</h1>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Venue Name"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Venue Contact Name"/>
                            </div>
                            <div className="p-col-12 p-md-4">
                            <InputMask mask="(999) 999-9999? x99999" placeholder="Venue Phone Number" value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Venue Address Line 1" />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Venue Address Line 2" />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText placeholder="Venue City" />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputMask mask="aa" placeholder="Venue State" value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputMask mask="99999" placeholder="Venue Zip Code" value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                            </div>
                        </div>
                    </div>
                    <div className="card card-w-title">
                        <h1>Date and time of the event.</h1>
                        {/* <Calendar value={this.state.date1} onChange={(e) => this.setState({date1: e.value})} inline={true} /> */}
                        <p>This is the time of the event. Not the time that the photo booth will be running.</p>
                        <div className="p-grid-m" style={{marginTop:'20px'}}>
                            {/* <div className="p-col-12">
                                <Calendar placeholder="Popup" value={this.state.date2} onChange={(e) => this.setState({date2: e.value})}/>
                            </div> */}
                            {/* <div className="p-col-12">
                                <Calendar placeholder="DateTime" showTime={true} dateFormat="mm/dd/yy" value={this.state.date3} onChange={(e) => this.setState({date3: e.value})}/>
                            </div> */}
                            <div className="p-col-12">
                                <Calendar placeholder="Date" showIcon={true} value={this.state.date5} onChange={(e) => this.setState({date5: e.value})}/>
                            </div>
                            <div className="p-col-12">
                                <Calendar placeholder="Start time" timeOnly={true} showTime={true} value={this.state.date4} onChange={(e) => this.setState({date4: e.value})}/>
                            </div>
                            <div className="p-col-12">
                                <Calendar placeholder="End time" timeOnly={true} showTime={true} value={this.state.date4} onChange={(e) => this.setState({date4: e.value})}/>
                            </div>
                            {/* <div className="p-col-12">
                                <Calendar readOnly={true} placeholder="Multiple Months" numberOfMonths={3} value={this.state.date6} onChange={(e) => this.setState({date6: e.value})}/>
                            </div> */}
                            {/* <div className="p-col-12">
                                <Calendar readOnly={true} dateFormat="mm/yy" placeholder="Month Picker" view="month" value={this.state.date7} onChange={(e) => this.setState({date7: e.value})}/>
                            </div> */}
                        </div>
                    </div>
                    <div className="card card-w-title">
                        <h1>Date and time the photo booth will run.</h1>
                        {/* <Calendar value={this.state.date1} onChange={(e) => this.setState({date1: e.value})} inline={true} /> */}
                        <p>This is the time range that the photo booth will be on for guests.</p>
                        <div className="p-grid-m" style={{marginTop:'20px'}}>
                            {/* <div className="p-col-12">
                                <Calendar placeholder="Popup" value={this.state.date2} onChange={(e) => this.setState({date2: e.value})}/>
                            </div> */}
                            {/* <div className="p-col-12">
                                <Calendar placeholder="DateTime" showTime={true} dateFormat="mm/dd/yy" value={this.state.date3} onChange={(e) => this.setState({date3: e.value})}/>
                            </div> */}
                            <div className="p-col-12">
                                <Calendar placeholder="Date" showIcon={true} value={this.state.date5} onChange={(e) => this.setState({date5: e.value})}/>
                            </div>
                            <div className="p-col-12">
                                <Calendar placeholder="Start time" timeOnly={true} showTime={true} value={this.state.date4} onChange={(e) => this.setState({date4: e.value})}/>
                            </div>
                            <div className="p-col-12">
                                <Calendar placeholder="End time" timeOnly={true} showTime={true} value={this.state.date4} onChange={(e) => this.setState({date4: e.value})}/>
                            </div>
                            {/* <div className="p-col-12">
                                <Calendar readOnly={true} placeholder="Multiple Months" numberOfMonths={3} value={this.state.date6} onChange={(e) => this.setState({date6: e.value})}/>
                            </div> */}
                            {/* <div className="p-col-12">
                                <Calendar readOnly={true} dateFormat="mm/yy" placeholder="Month Picker" view="month" value={this.state.date7} onChange={(e) => this.setState({date7: e.value})}/>
                            </div> */}
                        </div>
                    </div>
                    

                    {/* <div className="card card-w-title">
                        <h1>MultiSelect</h1>
                        <MultiSelect value={this.state.cars} options={this.state.carOptions} onChange={event => this.setState({cars: event.value})} filter={true}/>
                    </div> */}

                </div>
                <div className="p-col-12 p-lg-6">
        
                    <div className="card card-w-title">
                        <h1>Is the event inside or outside?</h1>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-4">
                                <RadioButton value="Inside" inputId="rb1" onChange={event => this.setState({radioValue: event.value})} checked={this.state.radioValue === "Inside"}/>
                                <label htmlFor="rb1" className="p-radiobutton-label">Inside</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <RadioButton value="Outside" inputId="rb2" onChange={event => this.setState({radioValue: event.value})} checked={this.state.radioValue === "Outside"}/>
                                <label htmlFor="rb2" className="p-radiobutton-label">Outside</label>
                            </div>
                        </div>
                    </div>

                    <div className="card card-w-title">
                        <h1>Will there be power provided?</h1>
                        <div className="p-grid">
                            <p>The photo booth must be within 5 ft. to 8 ft. of a power source for safety reasons. If no, we will work with the venue to provide a safe way to power the photo booth.</p>
                            <div className="p-col-12 p-md-4">
                                <RadioButton value="Yes" inputId="rb1" onChange={event => this.setState({radioValue: event.value})} checked={this.state.radioValue === "Yes"}/>
                                <label htmlFor="rb1" className="p-radiobutton-label">Yes</label>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <RadioButton value="No" inputId="rb2" onChange={event => this.setState({radioValue: event.value})} checked={this.state.radioValue === "No"}/>
                                <label htmlFor="rb2" className="p-radiobutton-label">No</label>
                            </div>
                        </div>
                    </div>

                    <div className="card card-w-title">
                        <h1>Questions, comments, or concerns?</h1>
                        <InputTextarea rows={3} cols={30} placeholder="Your Message" autoResize={true} />
                    </div>
                <div className="card card-w-title">
                    <h1>Deposit</h1>
                    <div className="p-grid">
                        <p>I understand that once a quote is approved that I am responsible for the deposit. The deposit will reserve the date and time of the event.</p>
                        <div className="p-col-12 p-md-6">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon p-inputgroup-addon-checkbox">
                                    <Checkbox checked={this.state.inputGroupValue} onChange={event => this.setState({inputGroupValue: event.checked})} autoResize={true} />
                                </span>
                                <InputText placeholder="Confirm"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                    
                    {/* <div className="card card-w-title">
                        <h1>InputSwitch</h1>
                        <InputSwitch checked={this.state.inputSwitchValue} onChange={event => this.setState({inputSwitchValue: event.value})} />
                    </div> */}
            
                    {/* <div className="card card-w-title">
                        <h1>Dropdown</h1>
                        <Dropdown options={this.state.cities} value={this.state.dropdownCity} onChange={event => this.setState({dropdownCity: event.value})} autoWidth={false} />
                    </div> */}
            
                    {/* <div className="card card-w-title">
                        <h1>Password</h1>
                        <Password/>
                    </div> */}
            
                    {/* <div className="card card-w-title">
                        <h1>Spinner</h1>
                        <Spinner value={this.state.spinnerValue} onChange={event => this.setState({spinnerValue: event.value})} />
                    </div> */}
        
                    {/* <div className="card card-w-title">
                        <h1>Slider</h1>
                        <Slider range={true} value={this.state.sliderValue} onChange={event => this.setState({sliderValue: event.value})} />
                    </div> */}
            
                    {/* <div className="card card-w-title">
                        <h1>ListBox</h1>
                        <ListBox options={this.state.listBoxCities} value={this.state.listBoxCity} onChange={event => this.setState({listBoxCity: event.value})} filter={true} />
                    </div> */}

                    {/* <div className="card card-w-title">
                        <h1>Rating</h1>
                        <Rating value={this.state.ratingValue} onChange={event => this.setState({ratingValue: event.value})} />
                    </div> */}
            
                    {/* <div className="card card-w-title">
                        <h1>ColorPicker</h1>
                        <ColorPicker inline={true} value={this.state.colorPickerValue} onChange={event => this.setState({colorPickerValue: event.value})} />
                    </div> */}
                </div>

                {/* <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>Input Groups</h1>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-6">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon"><i className="pi pi-user" /></span>
                                    <InputText placeholder="Username"/>
                                </div>
                            </div>

                            <div className="p-col-12 p-md-6">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon"><i className="pi pi-clock" /></span>
                                    <span className="p-inputgroup-addon"><i className="pi pi-star"></i></span>
                                    <InputText placeholder="Payment"/>
                                    <span className="p-inputgroup-addon">$</span>
                                    <span className="p-inputgroup-addon">.00</span>
                                </div>
                            </div>

                            <div className="p-col-12 p-md-6">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Search"/>
                                    <Button icon="pi pi-search"/>
                                </div>
                            </div>

                            <div className="p-col-12 p-md-6">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon p-inputgroup-addon-checkbox">
                                        <Checkbox checked={this.state.inputGroupValue} onChange={event => this.setState({inputGroupValue: event.checked})} />
                                    </span>
                                    <InputText placeholder="Confirm"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>Editor</h1>
                        <Editor style={{height:'320px'}} />
                    </div>
                </div> */}

                <div className="p-col-12 p-nogutter">
                    <div className="p-grid">
                        <div className="p-col-12 p-lg-6">
                            <div className="card card-w-title">

                                <div className="p-grid">
                                    <div className="p-col-12"></div>
                                    <div className="p-col-12"><Button label="Submit for Quote" onClick={this.handleClick} /></div>
                                    {/* <div className="p-col-12">ToggleButton</div> */}
                                    {/* <div className="p-col-12">
                                        <ToggleButton checked={this.state.toggleButtonValue} onChange={event => this.setState({toggleButtonValue: event.value})} />
                                    </div> */}
                            
                                    {/* <div className="p-col-12">SelectButton</div> */}
                                    {/* <div className="p-col-12">
                                        <SelectButton value={this.state.selectedType} options={this.state.types} onChange={event => this.setState({selectedType: event.value})} />
                                    </div> */}
                            
                                    {/* <div className="p-col-12">Button</div>
                                    <div className="p-col-12">
                                        <Button label="Bookmark"/>
                                    </div> */}

                                    {/* <div className="p-col-12">Left Icon</div>
                                    <div className="p-col-12">
                                        <Button label="Clear" icon="pi pi-times" />
                                    </div> */}
                            
                                    {/* <div className="p-col-12">Right Icon</div>
                                    <div className="p-col-12">
                                        <Button label="Clear" icon="pi pi-times" iconPos="right"/>
                                    </div> */}

                                    {/* <div className="p-col-12">Icon Only</div>
                                    <div className="p-col-12">
                                        <Button icon="pi pi-check"/>
                                    </div> */}

                                    {/* <div className="p-col-12">Link</div>
                                    <div className="p-col-12"><a href="http://www.primefaces.org">Homepage</a></div> */}

                                    {/* <div className="p-col-12">SplitButton</div>
                                    <div className="p-col-12">
                                        <SplitButton label="Save" icon="pi pi-plus" model={this.state.splitButtonItems} />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="p-col-12 p-lg-6">
                            <div className="card card-w-title">
                                <h1>Colored Buttons</h1>
                                <p>Flat buttons with various color alternatives.</p>
                                
                                <div className="p-grid"> */}
                                    {/* <div className="p-col-12 p-md-4" style={{textAlign:'center'}}>
                                        <Button label="Primary" style={{marginBottom:'10px'}} />
                                        <Button label="Secondary" style={{marginBottom:'10px'}} className="p-button-secondary" />
                                        <Button label="Success" style={{marginBottom:'10px'}} className="p-button-success" />
                                        <Button label="Info" style={{marginBottom:'10px'}} className="p-button-info" />
                                        <Button label="Warning" style={{marginBottom:'10px'}} className="p-button-warning" />
                                        <Button label="Danger" style={{marginBottom:'10px'}} className="p-button-danger" />
                                    </div> */}
                                    {/* <div className="p-col-12 p-md-4" style={{textAlign:'center'}}>
                                        <Button label="Primary" style={{marginBottom:'10px'}} className="p-button-raised"/>
                                        <Button label="Secondary" style={{marginBottom:'10px'}} className="p-button-secondary p-button-raised" />
                                        <Button label="Success" style={{marginBottom:'10px'}} className="p-button-success p-button-raised" />
                                        <Button label="Info" style={{marginBottom:'10px'}} className="p-button-info p-button-raised" />
                                        <Button label="Warning" style={{marginBottom:'10px'}} className="p-button-warning p-button-raised" />
                                        <Button label="Danger" style={{marginBottom:'10px'}} className="p-button-danger p-button-raised" />
                                    </div> */}
                                    {/* <div className="p-col-12 p-md-4" style={{textAlign:'center'}}>
                                        <Button label="Primary" style={{marginBottom:'10px'}}  className="p-button-rounded"/>
                                        <Button label="Secondary" style={{marginBottom:'10px'}} className="p-button-secondary p-button-rounded" />
                                        <Button label="Success" style={{marginBottom:'10px'}} className="p-button-success p-button-rounded" />
                                        <Button label="Info" style={{marginBottom:'10px'}} className="p-button-info p-button-rounded" />
                                        <Button label="Warning" style={{marginBottom:'10px'}} className="p-button-warning p-button-rounded" />
                                        <Button label="Danger" style={{marginBottom:'10px'}} className="p-button-danger p-button-rounded" />
                                    </div> */}
                                {/* </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}