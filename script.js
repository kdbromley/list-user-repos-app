function generateReposResults() {

}

function displayReposResults(responseJson) {
    console.log('displayReposResults ran')
    //empty results list
    //const reposString
    //

}

function getReposResults(username) {
    const url = `https://api.github.com/users/${username}/repos`
    //const options
    fetch(url)
        .then(reponse => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => console.log('Uh oh!'));
        displayReposResults(responseJson);
}

function handleFormSubmit() {
    $('.js-form').submit(event => {
        event.preventDefault();
        const searchTerm = $('input#username').val();
        $('input#username').val("");
        $('.display-results').removeClass('hidden');
        getReposResults(searchTerm);
    })
}
