import { is_url } from "./nameChecker"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(is_url(formText))
    {
       let req = {userUrl: formText}
       fetch('http://localhost:8083/api', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
      })
      .then(function(res) {
          if(!res.ok) {
            throw new Error('API call failed')
          }
          return res.json()
      })
      .then( function(res) {
          document.getElementById('subjectivity').innerHTML = res.subjectivity
          document.getElementById('agreement').innerHTML = res.agreement
          document.getElementById('confidence').innerHTML = res.confidence
          document.getElementById('irony').innerHTML = res.irony
      })
    }
}

function onBlur(event) {

}

export { handleSubmit }
export { onBlur }
