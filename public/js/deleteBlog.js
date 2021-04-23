const destroy = async(event) =>{
    event.preventDefault();
    const blog_id = event.target.id;
    const user_id = event.target.getAttribute('key');

    const response = await fetch(`/api/blog/${blog_id}`,{
        method:'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace(`/user/${user_id}`);
}


document.querySelector('.deleteBlog').addEventListener('click', destroy);