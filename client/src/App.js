import React, {Component} from 'react';
import classNames from 'classnames';
import {AppTopbar} from './components/other/AppTopbar';
import {AppFooter} from './components/other/AppFooter';
import {AppMenu} from './components/other/AppMenu';
import {AppProfile} from './components/other/AppProfile';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ClientDashboard} from './components/pages/ClientDashboard/ClientDashboard';
import {AdminDashboard} from './components/pages/AdminDashboard/AdminDashboard'
import {CreateBooking} from './components/pages/CreateBooking/CreateBooking';
import {EmptyPage} from './components/pages/EmptyPage/EmptyPage';
import {About} from "./components/pages/About/About";
import User from './components/pages/User';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './layout/layout.scss';
import './App.scss';

class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'light',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false
        };

        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.createMenu();
    }

    onWrapperClick(event) {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }

    onToggleMenu(event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.state.layoutMode === 'overlay') {
                this.setState({
                    overlayMenuActive: !this.state.overlayMenuActive
                });
            }
            else if (this.state.layoutMode === 'static') {
                this.setState({
                    staticMenuInactive: !this.state.staticMenuInactive
                });
            }
        }
        else {
            const mobileMenuActive = this.state.mobileMenuActive;
            this.setState({
                mobileMenuActive: !mobileMenuActive
            });
        }
       
        event.preventDefault();
    }

    onSidebarClick(event) {
        this.menuClick = true;
    }

    onMenuItemClick(event) {
        if(!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            })
        }
    }

    createMenu() {
        this.menu = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', command: () => {window.location = '/'}},
            {
                label: 'Components', icon: 'pi pi-fw pi-globe',
                items: [
                    {label: 'Create a booking', icon: 'pi pi-fw pi-file', to: '/create-booking'},
                    // {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
                ]
            }
            // {
            //     label: 'Template Pages', icon: 'pi pi-fw pi-file',
            //     items: [
            //         {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
            //     ]
            // },
            // {label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => {window.location = "#/documentation"}},
            // {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = "https://github.com/primefaces/sigma"}}
        ];
    }

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    componentDidUpdate() {
        if (this.state.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    }

    render() {
        const logo = this.state.layoutColorMode === 'dark' ? 'assets/layout/images/Booth-Pros-White@0,1x.png': 'assets/layout/images/Booth-Pros@0,1x.png';

        const wrapperClass = classNames('layout-wrapper', {
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.state.mobileMenuActive
        });

        const sidebarClassName = classNames("layout-sidebar", {
            'layout-sidebar-dark': this.state.layoutColorMode === 'dark',
            'layout-sidebar-light': this.state.layoutColorMode === 'light'
        });

        return (
            <Router>
                <div className={wrapperClass} onClick={this.onWrapperClick}>
                    <AppTopbar onToggleMenu={this.onToggleMenu}/>

                    <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}>
                        <div className="layout-logo">
                            <img alt="Logo" src={logo} />
                        </div>
                        <AppProfile />
                        <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
                    </div>

                    <div className="layout-main">
                        <Route exact path="/" component={About} />
                        <Route path="/login" component={User} />
                        <Route path="/client-dashboard" component={ClientDashboard} />
                        <Route path="/admin-dashboard" component={AdminDashboard} />
                        <Route path="/create-booking" component={CreateBooking} />
                        <Route path="/empty" component={EmptyPage} />
                    </div>

                    <AppFooter />

                    <div className="layout-mask"></div>
                </div>
            </Router>
        );
    }
}

export default App;
