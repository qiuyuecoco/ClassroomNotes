// ajax/async/rest

$.ajax('https://swapi.co/api/people/1', {
    method: 'GET',
    success: data => {
        let character = data;
        displayName(character.name);
        displayPlanet(character.homeworld);
        displayFilms(character.films);
        console.log('got some data', data);
    },
    error: error => {
        console.log('error', error);
    }
});
let characterPromise = getCharacter(1);

//Promise for cleaner code
function getCharacter(id) {
    return new Promise((resolve, reject) =>{
        $.ajax(`https://swapi.co/api/people/${id}`, {
            method: 'GET',
            success: character => {
                resolve(character);
            },
            error: error => {
                reject(error);
            }
        });
    });
}

characterPromise.then(character => {
    console.log('promiseCharacter', character);
},
error => {
    console.log('promiseCharacterRejected', error);
});

//display name
function displayName(name) {
    $('.name').html(name);

}

function getPlanet(planetUrl) {
    return new Promise((resolve, reject) => {
        $.ajax(planetUrl, {
            method: 'GET',
            success: planet => {
                resolve(planet);
            },
            error: error => {
                reject(error);
            }
        });
    });
}


// function displayPlanet(planetName) {
//     $('.planet').html(planetName);
// }

let planetPromise = characterPromise.then(character => {
   return getPlanet(character.homeworld);
   });
planetPromise.then(planet => {
    displayPlanet(planet.name);
});
planetPromise.then(planet => {
   console.log(planet);
});

function displayPlanet(planetUrl) {
    // prior code when we needed to call info prior to generating info
    // $('.planet').html(character.homeworld);

    $.ajax(planetUrl, {
        method: 'GET',
        success: planet => {
            $('.planet').html(planet.name);
        }
    });
}

function displayFilms(filmUrls) {
    filmUrls.forEach(film => {
        $.ajax(film, {
            method: 'GET',
            success: film => {
                $('.films').append(`<div>${film.title}</div>`);
            }
        });
    });
}