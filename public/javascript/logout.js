//logout logic, If logged out it will start you at the login page
async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      //make sure to get the right route...this is routed to handlebars
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
  //query selector. Make sure id is correct
  document.querySelector('#logout').addEventListener('click', logout);