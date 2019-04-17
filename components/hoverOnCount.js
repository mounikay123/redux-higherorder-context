import React, { Component } from 'react'

class HoverOnCount extends Component {
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
        <button type="button" className="btn btn-xs btn-primary" onMouseOver={this.btnClick} >
        click {this.state.count}times
        </button>
      </div>
    )
  }
}
export default HoverOnCount;