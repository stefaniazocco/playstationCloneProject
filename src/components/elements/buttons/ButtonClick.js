export function ButtonClick(props){
    return (
        <div className={props.className} onClick={props.click}>
            <div>{props.string}</div>
        </div>
    )
}