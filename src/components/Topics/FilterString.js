import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor () {
        super ()
        
        this.state = {
            nouns : ['purple', 'desk', 'irises', 'kitchen', 'bedtime', 'love', 'puzzle', 'Leah', 'dance', 'kitty cat', 'math', 'Christmas Day'],
            userInput : '',
            filteredNouns : []
        }
    }

    handleChange (value) {
        this.setState ({ userInput : value})
    }
    
    filterNouns (userInput) {
        let nouns = this.state.nouns
        let filteredNouns = []

        for (let i = 0; i < nouns.length; i++) {
            if (nouns[i].includes (userInput)) {
                filteredNouns.push(nouns[i])
            }
        }
        
        this.setState ({ filteredNouns : filteredNouns})
    }

    render () {
        return (
           <div className="puzzleBox filterStringPB">
               <h4>Filter String</h4>
               <span className="puzzleText"> Nouns: {JSON.stringify (this.state.nouns, null, 10)} </span>
               <input className="inputLine" onChange={ (e) => this.handleChange (e.target.value)}/>
               <button className="confirmationButton" onClick={() => this.filterNouns (this.state.userInput)}>Filter</button>
               <span className="resultsBox filterStringRB">Filtered Nouns: {JSON.stringify (this.state.filteredNouns, null, 10)} </span>
           </div>
        )
    }
}