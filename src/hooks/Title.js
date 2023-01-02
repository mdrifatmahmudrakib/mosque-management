import { useEffect } from "react"

const Title = title => {
    useEffect(() => {
        document.title = `${title} - Mosque Management Website`;
    }, [title])
};
export default Title;