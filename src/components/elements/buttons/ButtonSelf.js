import { Link } from "react-router-dom";
// import "./button.scss"

export function ButtonSelf(props){
    return (
        <div className={props.className}>
            <Link to={props.link} target="_self">
                <div>{props.string}</div>
            </Link>
        </div>
    )
}
