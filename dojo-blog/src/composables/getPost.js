import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch(`http://localhost:3000/posts/${id}`)
            if(!data.ok) {
                throw Error(`The post with the id of ${id} has not been found!`)
            }
            post.value = await data.json()
        } catch(err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    return { post, error, load }
}

export default getPost