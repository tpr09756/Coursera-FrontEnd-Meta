function Sidebar(props) {
  console.log(props);
  return <h2 className="sidebar-component">{props.greet} from sidebar</h2>;
}

export default Sidebar;
