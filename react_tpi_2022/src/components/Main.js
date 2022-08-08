import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Functions from "./Functions";
import FormSearch from './FormSearch';
import TotalResults from './TotalResults'
import LoadingSpinner from './Spinner';
import Pagination from './Pagination';
import NewsContainer from './NewsContainer';
import NotFound_Results from "./NotFound_Results";


function Main() {
    const navigateMain = useNavigate()
    const { titleParam, pageParam } = useParams()
    
    const [search, setSearch] = useState('argentina')
    const [newsPerPages, setNewsPerPages] = useState(12)
    const [viewing , setViewing ] = useState()
    const [pagination, setPagination ] = useState(1)
    const [language, setLanguage] = useState('es')
    const [allResp, setAllResp] = useState()

    const urlNews = `https://newsapi.org/v2/everything?q=${search}&searchIn=title&sortBy=popularity&pageSize=${newsPerPages}&page=${pagination}&language=${language}&apiKey=3a8f8a50766947e8b6d4633919806d8a`



    // component did mount 
    useEffect( () =>{
        if (titleParam){     setSearch(titleParam)    }   // if have 'title' from params so set Search with that
        if (pageParam) {  setPagination(pageParam) }

        Functions.formListener( {setSearch, setLanguage, setNewsPerPages, setPagination, pagination, navigateMain } )
        Functions.fetchNews(setAllResp, urlNews, newsPerPages, setNewsPerPages)   // import SET ALL RESP & PAGES

    }, [search, language, newsPerPages, pagination])    // useEffect's dependencies
    
    

    // RETURN MAIN()
    return(
        <>
            <FormSearch defValOpt={newsPerPages} defValSearch={titleParam} />
            
                { allResp ===  undefined 
                    ?   <div className="conteiner-news">
                            <LoadingSpinner />
                        </div>
                    :
                    <>
                        <TotalResults totalResults={allResp} viewing={viewing} />
                        

                        {   // IF HAVE NOT RESULTS
                         allResp.totalResults === 0 
                        ?   
                            <NotFound_Results noResults={true} />
                                                    
                        :
                            <div className="conteiner-news">
                                <NewsContainer allResp={allResp} setViewing={setViewing} search={search} />
                            </div>  
                        }
                        

                        <Pagination pagination={pagination} setPagination={setPagination} navigateMain={navigateMain} search={search} />
                    </>
                }
        </>
    )
}

export default Main ;