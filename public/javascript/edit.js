//Login Logic....Copy
async function editFormHandler(event) {
    event.preventDefault();
  
    //querySelector...pulling id's
    const name = document.querySelector('input[name="item_name"]').value.trim();
    const price = document.querySelector('input[name="price"]').value.trim();
    const id = document.querySelector('input[name="id"]').value.trim();
    const type = document.querySelector('input[name="type_id"]').value.trim();
    const tag = document.querySelector('input[name="tagIds"]').value.trim();
    const amount = document.querySelector('input[name="stock"]').value.trim();

    if (name && price && id && type && amount) {
    const response = await fetch(`/api/items/${id}`, {
        method: 'put',
        body: JSON.stringify({
            name,
            price,
            type,
            amount
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
    

  //listening for submit button on login page
  const form = document.querySelector('.edit-form').addEventListener('submit', editFormHandler);
