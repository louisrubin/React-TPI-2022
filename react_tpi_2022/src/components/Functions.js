// FUNCTIONS
import { DateTime } from 'luxon'

const Functions = {
    fetchNews: async (setAllResp, url, pages, setPages) => {
            // NEWS API
            try {
                setAllResp(undefined)

                const response = await fetch(url)
                const responseJSON = await response.json()  //.reject() to reject promise
                setAllResp(responseJSON)

                if(responseJSON.totalResults < pages){      // si totalResults es menor a las pages seleccionadas usa -setPages()-
                    setPages(responseJSON.totalResults)
                }
                

            } catch (e) {
                console.log('ERROR ', e)
                const objError = {
                    articles: null,
                    message: 'An error occurred'
                }
                setAllResp(objError)        // if an error ocurred set hook with null
            }
    },

    fetchWeather: async (setWeather, url) => {
        // WEATHER API
        try {
            
            const response = await fetch(url)
            const responseJSON = await response.json()  //.reject() to reject promise
            setWeather(responseJSON)
        } catch (e) {
            console.log('ERROR', e)
            setWeather(null)        // set weather to null
        }
    },

    formListener: (states) => {
        const { setSearch, setLanguage, setPages } = states
        const input = document.querySelector("#form-search input")     // selecciono el input del form
        const textAlert = document.querySelector("#smll-caract")
        const submitBtn = document.querySelector("#btn-submit")
        textAlert.classList.add("hiden")    // agrega la clase CSS 'hiden'
        submitBtn.disabled = true

        input.addEventListener('blur', () => {
            // event listener de tipo blur: valida longitud y desactiva el boton 'submit'
            if (input.value.length < 3 ){
                input.classList.add('lessThanThree')    // borde rojo al input
                textAlert.classList.remove("hiden")     // elimina la clase CSS '.hiden'
                submitBtn.disabled = true               // desactiva el button
            
            } else{
                input.classList.remove('lessThanThree')
                textAlert.classList.add("hiden")
                submitBtn.disabled = false
            }
        })
        
        
        document.getElementById('form-search')
            .addEventListener('submit', e => {      // form listener on Submit event
                e.preventDefault()

                const data = Object.fromEntries(new FormData(e.target) )
                setSearch(data.search)
                setLanguage( data.language.slice(0, 2) )
                setPages(data.pages)
            }
        )
    },

    transformDate: (time) => {
        // function to transform date ISO from News API to a local String Date
        if (time !== null ){
            const Date = DateTime.fromISO(time)     // =>  {year: 2022, month: 7, day: 8, hour: 14, minute: 30, minute, second, ... }
            const newDate = Date.toLocaleString(DateTime.DATE_MED)     // 'dd-MM-yyyy- hh:mm' (formato 12hs)
    
            const Time = `${newDate} - ${ ('0' + Date.c.hour).slice(-2) }:${ ('0' + Date.c.minute).slice(-2) }hs`   // método slice(-2) - shorturl.at/klrxZ
            return Time

        }
        
        //  console.log('Fecha: ', DateTime.fromISO(time).toLocaleString(DateTime.DATE_MED))    // 8 jul 2022
    },


    
}

export default Functions;

