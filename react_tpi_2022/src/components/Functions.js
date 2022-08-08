import { DateTime } from 'luxon'

const Functions = {

    fetchBlue: async (setBlue, url) => {
        // DOLAR BLUE API
        try{
            const response = await fetch(url)
            const responseJSON = await response.json()
            setBlue(responseJSON)

        }catch(err){
            console.log('ERROR ', err)
            setBlue(undefined)          // set Blue to undefined
        }
    },

    fetchNews: async (setAllResp, url, setNewsPerPages, newsPerPages) => {
            // NEWS API
            try {
                setAllResp(undefined)

                const response = await fetch(url)
                const responseJSON = await response.json()
                setAllResp(responseJSON)

                if(responseJSON.totalResults < newsPerPages){      // si totalResults es menor a las pages seleccionadas usa -setPages()-
                    setNewsPerPages(responseJSON.totalResults)
                }
                

            } catch (err) {
                console.log('ERROR ', err)
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
            const responseJSON = await response.json()
            setWeather(responseJSON)
        } catch (err) {
            console.log('ERROR', err)
            setWeather(null)        // set weather to null
        }
    },



    formListener: (states) => {
        const { setSearch, setLanguage, setNewsPerPages, setPagination, navigateMain } = states
        
        const input = document.querySelector("#form-search input")     // selecciono el input del form
        const form = document.querySelector('#form-search')

        const textAlert = document.querySelector("#smll-caract")
        const submitBtn = document.querySelector("#btn-submit")
        textAlert.classList.add("hiden")    // agrega la clase CSS 'hiden'
        submitBtn.disabled = true

        // EVENT LISTENER FOR ENABLE 'FORM BUTTON'
        input.addEventListener('blur', () => {
                // if input value is greater than

                if (input.value.length < 3 ){
                    // if value is less than 'value'
                    input.classList.add('lessThanThree')    // borde rojo al input
                    textAlert.classList.remove("hiden")     // elimina la clase CSS '.hiden'
                    submitBtn.disabled = true               // desactiva el button
                
                } else{
                    // else value is greater than 'value'
                    input.classList.remove('lessThanThree')
                    textAlert.classList.add("hiden")
                    submitBtn.disabled = false
                }
            }  
        ) 

        // FORM EVENT LISTENER FOR 'SUBMIT EVENT'
        form.addEventListener('submit', e => {      // form listener on Submit event
                e.preventDefault()

                const data = Object.fromEntries(new FormData(e.target) )
                setSearch(data.search)
                setLanguage( data.language.slice(0, 2) )
                setNewsPerPages(data.pages)
                setPagination(1)    // SET PAGINATION TO 1
                return navigateMain(`/buscar/${data.search}/${1}`)      // Navigate MAIN component
            }
        )
    },

    buscarFormListener: ( navigate ) =>{
        // received 'navigate' hook
        const buscarForm = document.getElementById('buscar-form')

        buscarForm.addEventListener('submit', e => {
            e.preventDefault()
            const data = Object.fromEntries( new FormData(e.target) )
            return navigate(`/buscar/${data.buscar}/${1}`)   // return the navigate hook received from params with the value from the from
        })

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


    setTitleFunction: (newTitle) => {
        // SET TITLE DYNAMICALLY TO THE DOCUMENT
        const title = document.getElementsByTagName('title')[0]
        title.innerHTML = newTitle
    },

    
}

export default Functions;

