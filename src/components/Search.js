import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props);
        this.onsubmit=this.onsubmit.bind(this);
        this.onchange=this.onchange.bind(this);
        this.state={
            keyword:'',
            err:''
        }
    }
    onsubmit(e){
            // console.log(e.target.text.value);
            if(this.state.keyword===""){
                console.log("keyword bos"); //alertolarak gidecek
                
                  this.setState({err:"Lütfen bir değer giriniz."}) 
              
               
            }
            else{
              this.setState({err:''})
              this.props.UserSearch(this.state.keyword);
              this.setState({keyword:""})
            }
            e.preventDefault();
    }
    onchange(e){
    //    console.log(e.target.value)
        this.setState({keyword:e.target.value})
    }

  render() {
    return (
      <div className='container my-3'>
            {this.state.err ? <div className="alert alert-info" role="alert"> {this.state.err}</div>:''}
          <form onSubmit={this.onsubmit}>
            <div className="input-group">
                <input type="text" className="form-control" onChange={this.onchange} name="text" value={this.state.keyword}/>
                <button  type='submit' className="btn btn-warning inpput-group-append">Search</button>
            </div>
         </form> 
         {this.props.swichclrsrchbtn &&
         <button className="btn btn-danger mt-2" onClick={this.props.clearSearch}>Clear</button>
         }
      
      </div>
    )
  }
}

export default  Search