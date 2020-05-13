import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor () {
        super()
        this.state = {
            familyMembers: [
                {
                    name: 'Meg',
                    title: 'Mamsie',
                    age: 40
                },
                {
                    name: 'Raef',
                    activity: 'video games'
                },
                {
                    name: 'Leah',
                    age: 15,
                    awesome: true
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange (val) {
        this.setState({userInput: val})
    }
    filterFamilyMembers(prop) {
        let familyMembers = this.state.familyMembers
        let filteredArray = []
       
        for (let i = 0; i < familyMembers.length; i++) {
            if (familyMembers[i].hasOwnProperty (prop)) {
                filteredArray.push (familyMembers[i])
            }
        }
        this.setState ({filteredArray: filteredArray})
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify (this.state.familyMembers, null, 10)} </span>
                <input className="inputLine" onChange={ (e) => this.handleChange (e.target.value)}/>
                <button className="confirmationButton" onClick={ () => this.filterFamilyMembers (this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify (this.state.filteredFamilyMembers, null, 10) }</span>
            </div>
        )
    }
}