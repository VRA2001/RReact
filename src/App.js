import React from "react";
class Clock extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            date: props.date
        }
    }

    componentDidMount(){
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    
    render(){
        const {date} =this.state; //{date: 13.12.2022}
        const min =date.getMinutes();
        const second = date.getSeconds();
        const hour = date.getHours();


        if ((second % 5 ==0) || (second==0)) {
            return  <div> 
             {date.toLocaleDateString()} <br/>
        {hour}:{min}:{second}
                    <div className="circle"> <h4>Круг</h4></div>
            
              </div>;
        } 
        else {
        return  <div>    
        {/* {date.toLocaleTimeString()} */}
        {date.toLocaleDateString()} <br/>
        {hour}:{min}:{second}
        <div className="circle2"> <h4>Круг</h4></div>
      </div>;
        }
    }
}
export default Clock;

//import React, { useState } from 'react';
//import Clock from './components/Clock';
//function Welcome(props) {
    //const [value, setValue] = useState();
    //return <>
           //<br/> {props.name} {value ? value.target.value : ''}
        //<input type={'text'} onChange={setValue} />
    //</>;
//}
//function App() {
    //return (
        //<div>
            //<Welcome name="ФИО:" /> <br/>
            //<Welcome name="Номер телефона:" /><br />
            //<Welcome name="E-mail:" /><br />
            // <Welcome name="Дата рождения:" /><br />
            // <Welcome name="Биографические сведения:" /><br />
        //</div>   
    //);
//}
//export default Welcome; 
//const root = ReactDOM.createRoot(document.getElementById('root'));

//function App() {
  //const timer = function() {
  // {new Date().toDateString()}
  // {new Date().toLocaleDateString()}
  //return 
  //};

    //return 
    //<Clock date={new Date()}/>
    //<Clock date={new Date()}/>
    //<Clock date={new Date()}/>
    //<Clock date={new Date()}/>
    //<Clock date={new Date()}/>
//}

//export default App;


//import React, {useState} from 'react';

//function App(){

  // let a = 1;
  // let b = 9;
  // let c = a+b;
  // b +=a + b;
  // console.log(c);

  //const [value, setValue] = useState();

//console.log(value);

   //return <>
      //<p> 
        //{value ? value.target.value : ""}
      //</p>

      //<input/ type={"text"} onChange={setValue}/>
   //</>;
//}

//export default App;
