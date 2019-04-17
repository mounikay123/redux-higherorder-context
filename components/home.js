import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getPosts ,dataPost} from '../actions/posts'


class Home extends Component {
    state = {
        posts: [],
        inpPost:"",
        posts1:[]
    }
    dataChange = (e) => {
      this.setState({inpPost:e.target.value})
    }
    onSubmit=()=>{
        this.props.dataPosts(this.state.inpPost)
        this.setState({inpPost:""})
    }
    componentDidMount() {
        console.log(this.props)
        this.props.getPosts()
    //     this.setState({posts1:this.props.getPosts()})
    //    console.log(this.state.posts)
    }
    render() {
        console.log(this.props,"mona")
        return (
            <div>
                <p>mounika</p>
                {/* {this.state.posts.map((data)=>
                    <ul key={data.id}>
                    <li >{data.country}</li>
                </ul>
                )} */}
                <input type="text" onChange={this.dataChange}  value={this.state.inpPost} />
                <button type="button" className="btn btn-xs btn-primary" onClick={this.onSubmit}>submit</button>
               
                
            </div>

        )
    }
}
const mapStateToProps = state => ({
    Posts: state.posts
    
})
const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts()) ,
    dataPosts:(data)=>dispatch(dataPost(data))
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
