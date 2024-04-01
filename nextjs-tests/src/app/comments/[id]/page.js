import { LoadSingleComment } from "@/components/single-comment";

export default function LoadCommentById(props) {
    const {params} = props;
    const {id} = params;



    return <LoadSingleComment id={id} />
}