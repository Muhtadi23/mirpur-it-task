//Top headlines from TechCrunch right now api

import { useEffect, useState } from "react"

const useArticleOne = () => {
    const [allArticle, setAllArticle] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8d05c31c9b474d1e82394544b439237e')
            .then(res => res.json())
            .then(data => {
                setAllArticle(data.articles)
            })
    }, [])
    return [allArticle]
}

export default useArticleOne;