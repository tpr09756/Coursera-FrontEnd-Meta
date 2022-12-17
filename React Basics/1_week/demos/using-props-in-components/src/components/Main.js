function Main(props) {
  console.log(props);
  return <h2 className="main-component">{props.greet} from main</h2>;
}

export default Main;
