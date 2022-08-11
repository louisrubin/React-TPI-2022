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
    
    const [search, setSearch] = useState(titleParam)
    const [pagination, setPagination ] = useState(pageParam)
    const [newsPerPages, setNewsPerPages] = useState(12)
    const [language, setLanguage] = useState('es')
    const [viewing , setViewing ] = useState()
    const [allResp, setAllResp] = useState()

    console.log('allResp', allResp);    // ERROR: rendering 6 times

    const urlNews = `https://newsapi.org/v2/everything?q=${search}&searchIn=title&sortBy=popularity&pageSize=${newsPerPages}&page=${pagination}&language=${language}&apiKey=3a8f8a50766947e8b6d4633919806d8a`
    
    useEffect( () =>{
        Functions.formListener( {setSearch, setLanguage, setNewsPerPages, setPagination, navigateMain } )

        
        Functions.fetchNews(setAllResp, urlNews )

    }, [ urlNews ])    // useEffect's dependencies



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

export default Main;