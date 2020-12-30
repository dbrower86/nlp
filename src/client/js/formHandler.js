function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    document.getElementById('results').innerHTML = 'Please wait'

    fetch('http://localhost:8080/apiKey')
    .then(function(res) {
        return res.json()
    })
    .then(function(json) {
        let mood = getMood(formText, json.key)
        return mood;
    })
    .then( function(mood) {
        document.getElementById('results').innerHTML = mood.subjectivity
    })
}

const getMood = async (usrTxt, key)=>{

    const str = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&txt=${usrTxt}`
    console.log(str)
      const res = await fetch(str)
    try {
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
}

function onBlur(event) {

}

export { handleSubmit }
export { getMood } // for test
export { onBlur }
