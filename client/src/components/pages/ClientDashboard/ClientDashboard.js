import React, { Component } from 'react';
import {CarService} from '../../../service/CarService';
import {Panel} from 'primereact/panel';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {FullCalendar} from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

export class ClientDashboard extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            city: null,
            selectedCar: null,
            lineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#007be5'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#20d077'
                    }
                ]
            },
            cities: [
                {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
                {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
                {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
                {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
                {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
            ],
            fullcalendarOptions: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultDate: '2019-08-01',
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                editable: true
            },
            events: [
                {
                    "id": 1,
                    "title": "Booking #123",
                    "start": "2019-08-01T16:00:00",
                    "end": "2019-08-01T18:00:00"
                },
                {
                    "id": 2,
                    "title": "Booking #456",
                    "start": "2019-08-24T17:00:00",
                    "end": "2019-08-24T20:00:00"
                }
            ]
        };

        this.onTaskChange = this.onTaskChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.carservice = new CarService();
    }

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if(e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({tasks: selectedTasks});
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({cars: data}));
    }

    render() {        
        return (
            <div className="p-grid p-fluid dashboard">
                {/* <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Users</span>
                        <span className="detail">Number of visitors</span>
                        <span className="count visitors">12</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Sales</span>
                        <span className="detail">Number of bookings</span>
                        <span className="count purchases">4</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Revenue</span>
                        <span className="detail">Income for today</span>
                        <span className="count revenue">$3,200</span>
                    </div>
                </div> */}

                {/* <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#ef6262',color:'#a83d3b'}}><span>TI</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-question-circle"/>
                            <span>Total Issues</span>
                            <span className="count">81</span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#20d077',color:'#038d4a'}}><span>OI</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-filter"/>
                            <span>Open Issues</span>
                            <span className="count">21</span>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-3">
                    <div className="highlight-box">
                        <div className="initials" style={{backgroundColor:'#f9c851',color:'#b58c2b'}}><span>CI</span></div>
                        <div className="highlight-details ">
                            <i className="pi pi-check"/>
                            <span>Closed Issues</span>
                            <span className="count">60</span>
                        </div>
                    </div>
                </div> */}
                <div className="p-col-12 p-md-6 p-lg-4">
                    <Panel header="Notifications" style={{height: '100%'}}>
                        <ul className='task-list'>
                            <li>
                                <Checkbox value="task1" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task1')>-1?true:false}></Checkbox>
                                <span className="task-name">Deposit for Booking #123 is due</span>
                                <i className="pi pi-dollar" />
                            </li>
                            <li>
                                <Checkbox value="task2" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task2')>-1?true:false}></Checkbox>
                                <span className="task-name">Payment for Booking # 456 due in two days</span>
                                <i className="pi pi-dollar" />
                            </li>
                            <li>
                                <Checkbox value="task3" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task3')>-1?true:false}></Checkbox>
                                <span className="task-name">John from Booth Company has sent you a message</span>
                                <i className="pi pi-user" />
                            </li>
                            <li>
                                <Checkbox value="task5" onChange={this.onTaskChange} checked={this.state.tasks.indexOf('task5')>-1?true:false}></Checkbox>
                                <span className="task-name">Film Strip Template for Booking#456 needs approval</span>
                                <i className="pi pi-image" />
                            </li>
                        </ul>
                    </Panel>
                </div>
                <div className="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
                    <Panel header="Contact Us">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Name" />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="E-mail" />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Booking ID" />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Message" />
                            </div>
                            <div className="p-col-12">
                                <Button type="button" label="Send" icon="fa-send"/>
                            </div>
                        </div>
                    </Panel>
                </div>

                <div className="p-col-12 p-lg-4 contacts">
                    <Panel header="Contacts">
                        <ul>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_1.png" width="35" alt="avatar1"/>
                                    <span className="name">Claire Williams</span>
                                    <span className="email">clare@pf-sigma.com</span>
                                </button>
                            </li>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_2.png" width="35" alt="avatar2"/>
                                    <span className="name">Jason Dourne</span>
                                    <span className="email">jason@pf-sigma.com</span>
                                </button>
                            </li>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_3.png" width="35" alt="avatar3"/>
                                    <span className="name">Jane Davidson</span>
                                    <span className="email">jane@pf-sigma.com</span>
                                </button>
                            </li>
                            <li>
                                <button className="p-link">
                                    <img src="assets/layout/images/avatar_4.png" width="35" alt="avatar4"/>
                                    <span className="name">Tony Corleone</span>
                                    <span className="email">tony@pf-sigma.com</span>
                                </button>
                            </li>
                        </ul>
                    </Panel>
                </div>
                <div className="p-col-12 p-lg-8">
                    <Panel header="Calendar" style={{height: '100%'}}> 
                        <FullCalendar events={this.state.events} options={this.state.fullcalendarOptions}></FullCalendar>
                    </Panel>
                </div>

                <div className="p-col-12 p-lg-4">
                    <Panel header="Activity" style={{height:'100%'}}>
                        <div className="activity-header">
                            <div className="p-grid">
                                <div className="p-col-6">
                                    <span style={{fontWeight:'bold'}}>Last Activity</span>
                                    <p>Updated 1 minute ago</p>
                                </div>
                                <div className="p-col-6" style={{textAlign:'right'}}>
                                    <Button label="Refresh" icon="pi pi-refresh" />
                                </div>
                            </div>
                        </div>

                        <ul className="activity-list">
                            <li>
                                <div className="count">$350</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Balance for Booking #123</div>
                                    <div className="p-col-6">5%</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{backgroundColor:'#f9c851'}}>$250</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Balance for Booking # 456</div>
                                    <div className="p-col-6">95%</div>
                                </div>
                            </li>
                            {/* <li>
                                <div className="count" style={{backgroundColor:'#20d077'}}>$125</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Invoices</div>
                                    <div className="p-col-6">55%</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{backgroundColor:'#f9c851'}}>$250</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Expenses</div>
                                    <div className="p-col-6">15%</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{backgroundColor:'#007be5'}}>$350</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Bonus</div>
                                    <div className="p-col-6">5%</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{backgroundColor:'#ef6262'}}>$500</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Revenue</div>
                                    <div className="p-col-6">25%</div>
                                </div>
                            </li> */}
                        </ul>
                    </Panel>
                </div>
            </div>
        );
    }
}