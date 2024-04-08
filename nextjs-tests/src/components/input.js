'use client';

import { createPost } from "@/actions";

export function Input() {
    const [input, setInput] = useState("");
    
    const onChange = (e) => {
        setInput(e.target.value);
    
    }

    const onSubmit = async () => {
        createPost(input)
            .then(r => {
                console.log(r);
            });
    }
    return <div>
        <input type="text" onChange={onChange} />
        <br />
        <button onClick={onSubmit}>Submit</button>
    </div>
}