//Login Logic....Copy
async function removeFormHandler(event) {
    event.preventDefault();
  //sign up logic...query selector corresponding to #id's
    const id = document.querySelector('#id').value.trim();
    if (id) {
      const response = await fetch(`api/items/${id}`, {
        method: 'delete',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.delete-form').addEventListener('submit', removeFormHandler);