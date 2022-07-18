const Person = (props) =>(
    <div>
        <p>Learn some information about this person</p>
        <h3>{props.name.length > 8 ? props.name.slice(0,6): props.name} {props.age > 18 ? "please go vote!":"you must be 18"}</h3>
        <ul>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>

);


const App = ()=> (
    <div>
        <Person name="Henry" age={31} hobbies={["eating","paddling","video games"]}/>
        <Person name="Jack" age={17} hobbies={["running","reading","video games"]}/>
        <Person name="Nicole" age={33} hobbies={["paddling","baking","traveling"]}/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));