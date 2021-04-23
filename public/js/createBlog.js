const createBlog = async(event) =>{
    event.preventDefault();
    const userId = event.target.id;
    const comment = document.querySelector('#blog').value;


    const response = await fetch(`/api/blog/${userId}`,{
        method:'POST',
        body: JSON.stringify({comment,starRating}),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Fail to create review');
    }
};

document.querySelector('.formSub').addEventListener('submit', createBlog);