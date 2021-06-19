export default function FilterItem(props) {

    return (
        <span className="dropdown-item" onClick={props.onClick}>{props.itemTitle}</span>
    )
}