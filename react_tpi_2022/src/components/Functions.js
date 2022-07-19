// FUNCTIONS
import { DateTime } from 'luxon'

const Function = {
    fetchApi: async (state, url) => {
            // WEATHER API
            try {
                const response = await fetch(url)
                const responseJSON = await response.json()
                state(responseJSON)     // setState(responseJSON) traido por parámetro

            } catch (e) {
                console.log('ERROR ', e)
            }
    },


    transformDate: (time) => {
        // function to transform date ISO from News API to a local String Date
        const Date = DateTime.fromISO(time)     // =>  {year: 2022, month: 7, day: 8, hour: 14, minute: 30, minute, second, ... }
        const newDate = Date.toLocaleString(DateTime.DATE_MED)     // 'dd-MM-yyyy- hh:mm' (formato 12hs)

        const Time = `${newDate} - ${ ('0' + Date.c.hour).slice(-2) }:${ ('0' + Date.c.minute).slice(-2) }hs`   // método slice(-2) - shorturl.at/klrxZ
        return Time
        
        //  console.log('Fecha: ', DateTime.fromISO(time).toLocaleString(DateTime.DATE_MED))    // 8 jul 2022
    },


    formListener: (states) => {
        const { setSearch, setLanguage, setPages } = states
        // form listener on Submit event
        document.getElementById('form-search')
            .addEventListener('submit', e => {
                e.preventDefault()
                const data = Object.fromEntries(new FormData(e.target) )
                setSearch(data.search)
                setLanguage( data.language.slice(0, 2) )
                setPages(data.pages)
            }
        )
    },


    
}

export default Function;

