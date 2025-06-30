export default function Blog({params} : any) {
    
    const postId = params.postId;
    return <div>
        Blog {postId}
    </div>
}