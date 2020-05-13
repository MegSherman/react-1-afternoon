import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor () {
        super ()
        this.state = {
            userInput : '',
            palindrome: ''
        }
    }
    handleChange (value) {
        this.setState ({userInput : value})
    }

    palindromeChecker (userInput) {
        let forwards = userInput
        let backwards = userInput
        backwards = backwards.split ('')
        backwards = backwards.reverse ()
        backwards = backwards.join ('')

        if (forwards === backwards) {
            this.setState ({palindrome: 'true'})
        } else {
            this.setState ({palindrome: 'false'})
        }
    }
    //     let userInput = ''
    //     let palindrome = ''
    //     for (let i = 0; i < userInput.length; i++) {
    //         for (let j = userInput.length -1; j >= 0, j--) {
    //             if (userInput[i] === userInput[j]) {
    //                 let palindrome = 'yes'
    //             }
    //         }
    //     }
    // }

    render() {
        return (
          <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
            <button className="confirmationButton" onClick={ () => this.palindromeChecker(this.state.userInput) }> Check </button>
            <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
          </div>
        )
      }
    }