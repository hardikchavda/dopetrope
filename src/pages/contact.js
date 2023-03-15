import axios from "axios";
import { Component } from "react"

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            res_message: ''
        }

        this.form = this.handleSubmit.bind(this)
        this.name = this.onNameChange.bind(this)
        this.email = this.onEmailChange.bind(this)
        this.message = this.onMessageChange.bind(this)

    }
    handleSubmit(e) {
        e.preventDefault()
        axios.post('https://hardikchavda.in/webservices/contact.php', JSON.stringify(this.state))
            .then(res => {
                // console.log(res.data.status);
                if (res.data.status == "empty") {
                    // console.log("One or More field is empty.");
                    this.setState({ res_message: <h4 style={{ color: "red" }}>One or More field is empty.</h4> });
                } else if (res.data.status == "success") {
                    this.setState({ res_message: <h4 style={{ color: "green" }}>Data Submitted Successfully.</h4> });
                } else if (res.data.status == "fail") {
                    this.setState({ res_message: <h4 style={{ color: "red" }}>Data has some errors.</h4> });
                }
            })
        // fetch('https://hardikchavda.in/webservices/contact.php', {            
        //     method: 'POST',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((response) => {
        //         console.log(response)
        //         if (response.status === '1') {
        //             console.log("Message Sent.")
        //             this.resetForm()
        //         } else if (response.status === '0') {
        //             console.log("Message failed to send.")
        //         }
        //     });
        // console.log(JSON.stringify(this.state))
    }
    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    render() {
        const { name, email, message } = this.state
        return (
            <section id="main">
                <div className="container">

                    <article className="box post">
                        <a href="#" className="image featured">
                            <img src="images/pic01.jpg" alt="" />
                        </a>
                        <header>
                            <h2>Contact</h2>
                            <p>Become one of us</p>
                        </header>
                        <form id="contact-form" onSubmit={this.form} method="POST">

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={this.name} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="email" value={email} onChange={this.email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="5" id="message" value={message} onChange={this.message} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            {this.state.res_message}
                        </form>
                    </article>
                </div>
            </section >
        )
    }
}

export default Contact