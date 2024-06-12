import { useEffect, useState } from "react";


const useApple = () => {
    const [apple, setApple] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=apple&from=2024-06-11&to=2024-06-11&sortBy=popularity&apiKey=8d05c31c9b474d1e82394544b439237e')
            .then(res => res.json())
            .then(data => {
                setApple(data.articles)
            })
    }, [])
    return [apple]
};

export default useApple;