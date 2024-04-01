'use server'; // this tells the nextjs
// that all the components / code inside this
// file will be for running on the server

export async function loadData() {
    // async means : that this function will be executed
    // asynchronously (i.e. it will take some time to respond
    // since it is a network call)

    return fetch("https://jsonplaceholder.typicode.com/comments")
        .then(r => r.json())
        .then(r => {
            const topComments = r.slice(0, 5);
            return {
                topComments
            }
        });
}

export async function loadSingleDataItem(props) {
    // async means : that this function will be executed
    // asynchronously (i.e. it will take some time to respond
    // since it is a network call)

    return fetch("https://jsonplaceholder.typicode.com/comments")
        .then(r => r.json())
        .then(r => {
            const comments = r.filter(item => item.id == props.id);
            if(comments.length > 0) {
                return {
                    comment: comments[0]
                }
            }else {
                return {
                    comment: ""
                }
            }
        });
}