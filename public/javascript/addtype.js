async function typeFormHandler(event) {
    event.preventDefault();
    const type_name = document.querySelector('#type_name').value.trim();

    if (type_name) {
      const response = await fetch('api/types', {
        method: 'post',
        body: JSON.stringify({
          type_name
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
  
  document.querySelector('.type-form').addEventListener('submit', typeFormHandler);