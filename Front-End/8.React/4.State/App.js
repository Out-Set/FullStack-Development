// state
import React,{Component} from "react";
class App extends Component{
    state = {
        name: "sawan",
        age: "26"
    }

    render(){
        return(
            <>
                <h1>State</h1>
                <hr/>
                <h1>Name:{this.state.name} Age:{this.state.age}</h1>
            </>
        )
    }
}
export default App


// class based
/*
import React,{Component} from "react";
import User from './User'
class App extends Component{
    render(){
        return(
            <>
                <h1>Class Component</h1>
                <hr/>
                <User name="hari" roll="30" img="s2.jpg"/>
                <hr/>
                <User name="jagat" roll="35" img="s3.jpg"/>
                <hr/>
                <User name="mohan" roll="23" img="s4.jpg"/>
            </>
        )
    }
}
export default App
*/



// functio based 
/*
import User from './User'
function App(){
    return(
        <>
            <h2>App Component</h2>
            <hr/>
            <User name="hari" age="34"/>
            <hr/>
            <User name="om" age="15"/>
            <hr/>
            <User name="raman" age="32"/>
            
        </>
    )
}
export default App 
*/