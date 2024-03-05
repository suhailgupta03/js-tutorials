export function ToDoText(props) {
    const {text} = props;
    return (
        <p className={"fs-5 text-white p-2 mb-3"}>
            {text}
        </p>
    )
}