import './News.css';
import { useEffect, useState } from "react";

import Functions from "./Functions";
import FormSearch from './FormSearch';
import TotalResults from './TotalResults'
import LoadingSpinner from './Spinner';
import Pagination from './Pagination';
import NewsContainer from './NewsContainer';



function Main() {
    Functions.setTitleFunction('INFOR-NEWS')    // set title dynamically
    const [search, setSearch] = useState('argentina')
    const [newsPerPages, setNewsPerPages] = useState(8)
    const [pagination, setPagination ] = useState(1)
    const [language, setLanguage] = useState('es')
    const [allResp, setAllResp] = useState()
    //                                                              searchIn=title (The fields to restrict your 'q' search to.)
    const urlNews = `https://newsapi.org/v2/everything?q=${search}&searchIn=title&pageSize=${newsPerPages}&page=${pagination}&language=${language}&apiKey=3a8f8a50766947e8b6d4633919806d8a`


    // component did mount 
    useEffect( () =>{
        Functions.fetchNews(setAllResp, urlNews, newsPerPages, setNewsPerPages)     // import SET ALL RESP & PAGES
        Functions.formListener( {setSearch, setLanguage, setNewsPerPages, setPagination} )

    }, [search, language, newsPerPages, pagination])    // useEffect's dependencies
    
    

    // RETURN MAIN()
    return(
        <>
            <FormSearch defValOpt={newsPerPages} defValSearch={search} />
            
                { allResp ===  undefined 
                    ?   <div className="conteiner-news">
                            <LoadingSpinner />
                        </div>
                    :
                    <>
                        <TotalResults viewing={newsPerPages} totalResults={allResp} />
                        
                        <div className="conteiner-news">
                            <NewsContainer allResp={allResp} />
                        </div>

                        <Pagination pagination={pagination} setPagination={setPagination} />
                    </>
                }
        </>
    )
}

export default Main ;