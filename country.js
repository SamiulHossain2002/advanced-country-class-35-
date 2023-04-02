const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(resp => resp.json())
    .then(data => displayCountries(data))
}

loadCountry()

const displayCountries= (countries) =>{
    //  console.log(countries);
    const countriesHTML= countries.map(country=> getCountryHtml(country))
    const container = document.getElementById('countries');
    container.innerHTML= countriesHTML.join(' ')
   

}

//short hand distracturing:

const getCountryHtml= ({name, flags, area, region}) =>{
    
   /*  const {name, flags, area, region} = singleCountry; */
    return `
    <div class="country">
            <h2>${name.common}</h2>
            <p>Area:${area}</p>
            <p>Area:${region}</p>
            <img src="${flags.png}" alt="">
    </div>

    `
}