//Top headlines from TechCrunch right now api

import { useEffect, useState } from "react"

const useArticleOne = () => {
    const [allArticle, setAllArticle] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9fd0c2e437024b3f8b23e80b6439a134')
            .then(res => res.json())
            .then(data => {
                setAllArticle(data.articles)
            })
    }, [])
    return [allArticle]
}

export default useArticleOne;