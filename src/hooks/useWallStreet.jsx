// All articles published by the Wall Street Journal in the last 6 months, sorted by recent first
import { useEffect, useState } from "react";

const useWallStreet = () => {
    const [wallJournal, setWallJournal] = useState([])
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9fd0c2e437024b3f8b23e80b6439a134')
            .then(res => res.json())
            .then(data => {
                setWallJournal(data.articles)
            })
    }, [])
    return [wallJournal]
};

export default useWallStreet;