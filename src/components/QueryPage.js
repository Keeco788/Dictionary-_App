import React, { Component } from 'react'
import API from './api'
import SearchResponse from './SearchResponse'

export default class QueryPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchWord: 'umpire',
            ID_KEY: `${process.env.REACT_APP_KEY_ID}`,
            hasUpdated: false,
            error: null,
            data: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(event){
        this.setState({
            searchWord: event.target.value,
            hasUpdated: true
        })
        
    }

    handleSubmit(event){
        event.preventDefault();

        API.get(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${this.state.searchWord}?key=${this.state.ID_KEY}`)
            .then(res => {
                this.setState({ 
                    data: res.data })
                console.log(this.state)
            })
        
    }



  render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Search a Word
                <br />
                <input type='text'
                        name='searchedWord'
                        onChange={this.handleChange}
                />
                </label>
                <input type ='submit' value='submit' />
            </form>
            <SearchResponse {...this.state} />
            </div>
        ) 
  }
}
