export default function Post({post}) {
    // console.log(post)
    const {title, body} = post;
    return(
        <div className="card">
            <p style={{color:'green', fontSize:'24px'}}>{title}</p>
            <p style={{color:'blue'}}>{body}</p>
        </div>
    )
}