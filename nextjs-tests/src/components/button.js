"use client";

import { loadData } from "@/actions";
import { useEffect, useState } from "react";


export function LoadComments() {
    
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData()
            .then(r => {
                setComments(r.topComments);
                setLoading(false);
            })
    },[]);

    const displayComments = () => {
        return comments.map(comment => <div style={{
            background: "#ccc",
            borderRadius: "5px",
            border: "1px solid #ccc",
            padding: "10px",
            margin: "5px",
        }}>
            <div style={{
                padding: "5px",
                color: "white",
                fontWeight: 600
            }}>{comment.body}</div>
            <div style={{
                fontSize: "18px",
                fontWeight: 500,
                fontStyle: "italic",
                color: "black",
                marginTop: "2px",
            }}>Made by: {comment.email}</div>
        </div>)
    }
  return (
    <div>
        {loading ? <p>Loading comments ...</p> : displayComments()}
    </div>
  );
}
