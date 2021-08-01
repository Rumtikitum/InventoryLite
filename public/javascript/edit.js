//Login Logic....Copy
async function addFormHandler(event) {
    event.preventDefault();
  //sign up logic...query selector corresponding to #id's
    const item_name = document.querySelector('#item_name').value.trim();
    const price = document.querySelector('#price').value.trim();
    const stock = document.querySelector('#stock').value.trim();
    const type_id = document.querySelector('#type_id').value.trim();
  
  
  
    if (price && item_name) {
      const response = await fetch('api/items', {
        method: 'post',
        body: JSON.stringify({
          item_name,
          price,
          stock,
          type_id,
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.item-form').addEventListener('submit', addFormHandler);