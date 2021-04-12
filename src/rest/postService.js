const TIHI_ENDPOINT = 'https://crudcrud.com/api/28873da6ba644dd79b7a4d837d58092a/posts';

class PostService {
    getAll = async() => {
        try {
            const resp = await fetch(TIHI_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.error(`Problem fetching posts: ${e}`);
        }
    }

    update = async(post) => {
        try {
            let updatedWithoutId = {
                name: post.name,
                location: post.location,
                content: post.content,
            }
            const resp = await fetch(`${TIHI_ENDPOINT}/${post._id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedWithoutId)
            });
            return resp;
        } catch(e) {
            console.error(`Problem updating post: ${e}`);
        }
    }

    create = async(post) => {
        try {
            const resp = await fetch(`${TIHI_ENDPOINT}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });
            return resp;
        } catch(e) {
            console.error(`Problem creating post: ${e}`);
        }
    }

    delete = async(id) => {
        try {
            const resp = await fetch(`${TIHI_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return resp;
        } catch(e) {
            console.error(`Problem deleting post:${e}`);
        }
    }
}

export const postService = new PostService();
