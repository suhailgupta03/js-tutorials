export function Video(props) {
    const {src} = props;

    return <div>
        <video width={450} height={450}>
            <source src={src} type="video/mp4"></source>
        </video>
    </div>
}