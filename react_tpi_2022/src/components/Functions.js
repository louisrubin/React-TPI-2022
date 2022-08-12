import { DateTime } from 'luxon'

//const urlNews = `https://newsapi.org/v2/everything?q=${search}&searchIn=title&sortBy=popularity&pageSize=${newsPerPages}&page=${pagination}&language=${language}&apiKey=3a8f8a50766947e8b6d4633919806d8a`

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

    fetchNews: async (setAllResp, urlNews  ) => {
            // NEWS API
            try {
                setAllResp(undefined)

                const response = await fetch(urlNews)
                const responseJSON = await response.json()
                setAllResp(responseJSON)          

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
        submitBtn.disabled = false

        // EVENT LISTENER FOR ENABLE 'FORM BUTTON'
        input.addEventListener('blur', () => {
            // if input value is greater than

            if (input.value.length < 3 ){
                // if value is less than 'value'
                input.classList.add('lessThanThree')    // borde rojo al input
                textAlert.classList.remove("hiden")     // elimina la clase CSS '.hiden'
                submitBtn.classList.remove("btn-submit-styles")
                submitBtn.disabled = true               // desactiva el button
            
            } else{
                // else value is greater than 'value'
                input.classList.remove('lessThanThree')
                textAlert.classList.add("hiden")
                submitBtn.classList.add("btn-submit-styles")
                submitBtn.disabled = false
            }
        }) 

        // FORM EVENT LISTENER FOR 'SUBMIT EVENT'
        form.addEventListener('submit', e => {      // form listener on Submit event
            e.preventDefault()

            const data = Object.fromEntries(new FormData(e.target) )
            setSearch(data.search)
            setLanguage( data.language.slice(0, 2) )
            setNewsPerPages(data.pages)
            setPagination(1)    // SET PAGINATION TO 1

            navigateMain(`/buscador/${data.search}/${1}`)
            // return data      // Navigate MAIN component
        })
    },

    buscarFormListener: ( idForm, idInput, submitBtn, textAlertID , iconParam=null, navigate = null ) =>{

        const form = document.getElementById(idForm)
        const input = document.getElementById(idInput)
        const submitButton = document.getElementById(submitBtn)
        const alertMessage = document.getElementById(textAlertID)

        let icon = undefined
        if(iconParam){
            icon = document.getElementById(iconParam)
        }
        
        alertMessage.classList.add("hiden")    // agrega la clase CSS 'hiden'
        submitButton.disabled = true
        submitButton.classList.remove("button-styles")
        icon.classList.remove("icon-styles")


        // EVENT LISTENER FOR ENABLE 'FORM BUTTON'
        input.addEventListener('blur', () => {
            // if input value is greater than

            if (input.value.length < 3 ){
                // if value is less than 'value'
                input.classList.add('lessThanThree')       // borde rojo al input
                alertMessage.classList.remove("hiden")     // elimina la clase CSS '.hiden'
                submitButton.disabled = true               // desactiva el button

                submitButton.classList.remove("button-styles")
                icon.classList.remove("icon-styles")
            
            } else{
                // else value is greater than 'value'
                input.classList.remove('lessThanThree')
                alertMessage.classList.add("hiden")
                submitButton.disabled = false

                submitButton.classList.add("button-styles")
                icon.classList.add("icon-styles")
            }
        }) 


        form.addEventListener('submit', e => {
            e.preventDefault()
            const data = Object.fromEntries( new FormData(e.target) )

            if (navigate){
                //  if received 'navigate' hook
                return navigate(`/buscador/${data.buscar}/${1}`)   // return the navigate hook received from params with the value from the from
            }
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

