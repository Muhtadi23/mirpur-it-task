import { useEffect, useState } from "react";


const useApple = () => {
    const [apple, setApple] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=apple&from=2024-06-10&to=2024-06-10&sortBy=popularity&apiKey=9fd0c2e437024b3f8b23e80b6439a134')
            .then(res => res.json())
            .then(data => {
                setApple(data.articles)
            })
    }, [])
    return [apple]
};

export default useApple;