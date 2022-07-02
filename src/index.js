// 1) import libaries
import React from 'react'; // 定義component及多個component如何一起工作
import ReactDOM from 'react-dom/client'; //如何get component去show up在browser

// 2) get a reference to the div with ID root
const el = document.getElementById('root');

// 3) tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) create a component
function App() {
    const date = new Date();

    // const time = Date().toLocaleTimeString();
	return <h1>{Date()}</h1>;
}

// 5) show the component on the screen
root.render(<App />);

// converting HTML to JSX

// 1) in JSX, all prop names follow camelCase
// maxLength, autoCapitalize, noValidate

// 2) attributes meant to be numbers should be provided as nums with curly braces
// <input maxLength={5}/>

// 3) boolean 'true' can be written with just the property name. 'False' should be written with curly braces
// <input spellcheck="true"/> should be <input spellCheck/>
// <input spellCheck={false}/>

// 4) the class attribute is written as 'className'
// <div class="item"/>  ==>   <div className="item"/>

// 5) in-line styles are provided as objects
// <a style="text-decoration:'none'; padding:'5px';" /> ==> 
// <div style={{textDecoration:'none', padding:'5px'}}

