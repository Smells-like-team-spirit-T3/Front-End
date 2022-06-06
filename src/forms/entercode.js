import './style.css';
import { Component } from 'react';
import { Link } from "react-router-dom";

export default class EnterCode extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className='container'>
                <main>
                    <h1 className="title">
                        Enter your code
                    </h1>
                    <br/>
                
                    <form>
                        <input type="text" id="code" name="code"
                        value={this.state.value} onChange={this.handleChange}
                        style={{width: 400 + "px", margin: 10 + "px"}}
                        min="100000" max="999999"/>

                    <Link to={`/trip/${this.state.value}`}>
                        <button className="btn btn-primary btn-submit">Enter</button>
                    </Link>
                    </form>
                </main> 

                <footer>
                    Powered by{' '} Team Three
                </footer>

            </div> 
        )
    }
}