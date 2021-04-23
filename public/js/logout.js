const logoutFormHandler = async (event) => {

  console.log("working?")

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};

document
  .querySelector('#logout')
  .addEventListener('click', logoutFormHandler);