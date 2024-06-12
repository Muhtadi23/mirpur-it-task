// Top business headlines in the US right now
import { useEffect, useState } from "react";


const useUsaHeadline = () => {
    const [usaHeadline, setUsaHeadline] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9fd0c2e437024b3f8b23e80b6439a134')
            .then(res => res.json())
            .then(data => {
                setUsaHeadline(data.articles)
            })
    }, [])
    return [usaHeadline]
};

export default useUsaHeadline;