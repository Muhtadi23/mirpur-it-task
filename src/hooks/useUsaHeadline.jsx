// Top business headlines in the US right now
import { useEffect, useState } from "react";

const useUsaHeadline = () => {
    const [usaHeadline, setUsaHeadline] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8d05c31c9b474d1e82394544b439237e')
            .then(res => res.json())
            .then(data => {
                setUsaHeadline(data.articles)
            })
    }, [])
    return [usaHeadline]
};

export default useUsaHeadline;