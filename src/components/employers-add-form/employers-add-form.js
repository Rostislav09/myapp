import { Component } from 'react';

import './employers-add-form.css';


class EmployersAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: '' 
        }
    }

onValueChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.lenght < 3 || !this.state.salary) return;
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
        name: '',
        salary: ''
    })
}


    render () {

        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add New employers</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What is his name?"
                        name='name'
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="RFP in $?"
                        name='salary' 
                        value={salary} 
                        onChange={this.onValueChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;