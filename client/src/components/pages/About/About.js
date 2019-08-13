import React, {Component} from 'react';

export class About extends Component {

    render () {
        return (
            <div className = "p-grid">
                <div className = "p-col-12">
                    <div className = "card">
                        <h1>
                            Welcome to Booth Pros!
                        </h1>
                        <p>
                            We are a one stop shop for your photo booth needs.
                        </p>
                        <p>
                            Whether you are a customer that is booking a photo booth or you're a photo booth owner, Booth Pros has you covered. 
                        </p>
                    </div>
                    <div className = "card">
                        <h1>
                            Features for customers
                        </h1>
                        <p>
                            Booth Pros is different from other photo booth apps because we offer more services.
                        </p>
                        <ul> <h3>Customers</h3>
                            <li>Client Dashboard</li>
                            <li>File storing - upload contracts, artwork, invoices and more!</li>
                            <li>Messaging - message the photo booth company if you have any questions or concerns</li>
                            <li>Calendar - keep an eye on your bookings</li>
                            <li>The ability to create more bookings from the dashboard</li>
                        </ul>
                        <ul><h3>Coming soon!</h3>
                            <li>Gallery - all of your photos from events will be listed in the gallery</li>
                            <li>Accounting - do all of your invoicing or billing within the app</li>
                        </ul>
                    </div>
                    <div className = "card">
                        <h1>
                            Features for photo booth owners
                        </h1>
                        <p>
                            Booth Pros offers more apps in once place for a better price. Stop paying for different software/apps just to run your business. 
                        </p>
                        <ul> <h3>Owners</h3>
                            <li>Admin Dashboard</li>
                            <li>File storing - upload contracts, artwork, invoices, checklists and more!</li>
                            <li>Messaging - message your customers from within the app</li>
                            <li>Calendar - keep an eye on upcoming events</li>
                        </ul>
                        <ul><h3>Coming soon!</h3>
                            <li>Gallery - all of your customers photos from events will be listed in the gallery</li>
                            <li>Accounting - do all of your invoicing or billing within the app</li>
                            <li>Employees - Assign photo booth operators to events</li>
                            <li>GPS capabilities - the app will be able to calculate the distance and charge for milieage if the location is outside your set mileage area</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}