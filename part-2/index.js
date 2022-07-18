const Tweet = (props) => (
    <div>
        <p>{props.username}</p>
        <p>{props.name}</p>
        <p>{props.date}</p>
        <p>{props.message}</p>
    </div>

);

const App = () => (
    <div>
        <Tweet username="jsmith123" name="John Smith" date="1/31/2004" message="I love pizza!"/>
        <Tweet username="hlam624" name="Henry Lam" date="7/18/2022" message="React is the greatest!"/>
        <Tweet username="goated345" name="John Doe" date="1/31/2024" message="Lebron is the greatest of all time!"/>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root")); document.get