import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function Welcome(props) {
    const [value, setValue] = useState();
    return <>
           <br/> {props.name} {value ? value.target.value : ''}
        <input type={'text'} onChange={setValue} />
    </>;
}
function App() {
    return (
        <div>
            <Welcome name="ФИО:" /> <br/>
            <Welcome name="Номер телефона:" /><br />
            <Welcome name="E-mail:" /><br />
            <Welcome name="Дата рождения:" /><br />
            <Welcome name="Биографические сведения:" /><br />
        </div>   
    );
}
export default Welcome; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//import logo from './logo.svg';
//import './App.css';
//import Remarkable from 'remarkable';
//import RemarkableReactRenderer from 'remarkable-react';

//class MarkdownEditor extends React.Component {
  //constructor(props) {
    //super(props);
    //this.md = new Remarkable();
    //this.handleChange = this.handleChange.bind(this);
    //this.state = { value: 'Привет, **мир**!' };
  //}

  //handleChange(e) {
    //this.setState({ value: e.target.value });
  //}
  //getRawMarkup() {
    //return { __html: this.md.render(this.state.value) };
  //}
       
