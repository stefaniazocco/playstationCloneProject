import { Link } from "react-router-dom";
// import "./button.scss"

export function Button(props){
    return (
        <div className={props.className}>
            <Link to={props.link} target="_blank">
                <div>{props.string}</div>
            </Link>
        </div>
    )
}

