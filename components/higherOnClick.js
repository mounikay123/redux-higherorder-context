import React, { Component } from 'react'

class HigherOnClick extends Component {
    state={
        count:0
    }
    btnClick=()=>{
this.setState(prevState=>{
 return {count:prevState.count+1}
})
    }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-xs btn-primary" onClick={this.btnClick} >
        click {this.state.count}times
        </button>
      </div>
    )
  }
}
export default HigherOnClick;
