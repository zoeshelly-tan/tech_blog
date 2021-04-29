const createBlog = async(event) =>{
    event.preventDefault();
    const userId = event.target.id;
    const comment = document.querySelector('#comment').value;
    const title = document.querySelector('#reviewTitle').value;


    const response = await fetch(`/api/Blog`,{
        method:'POST',
        body: JSON.stringify({
            blog_title:title,
            blog_content:comment}),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Fail to create review');
    }
};

document.querySelector('#formSub').addEventListener('submit', createBlog);