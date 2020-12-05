function displayReposResults(responseJson, username) {
    $('.results-list').empty();
    $('.results-title').html(`${username}'s Repos`)
    for (let i = 0; i < responseJson.length; i++) {
       $('.results-list').append(`<li><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></li>`)
    }
}

function getReposResults(username) {
    const url = `https://api.github.com/users/${username}/repos`
    fetch(url)
      .then(response => {
        if (response.ok) {
         return response.json();
        } if (!response.ok) {
         response.json().then(responseJson => console.log(responseJson));
         return Promise.reject('User not found');
        }
    })     
        .then(responseJson => { 
          console.log(responseJson)
          displayReposResults(responseJson, username); 
          })
        .catch(error => alert('Uh oh! ' + error));
        
}

function handleFormSubmit() {
    $('.js-form').submit(event => {
        event.preventDefault();
        const searchTerm = $('input#username').val();
        $('input#username').val("");
        $('.display-results').removeClass('hidden');
      getReposResults(searchTerm);
    });
}

$(handleFormSubmit)
