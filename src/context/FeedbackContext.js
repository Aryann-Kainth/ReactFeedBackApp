import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is From Context",
            rating: 10

        }
    ])
    const addFeedback = (newFeedBack) => {
        newFeedBack.id = uuidv4()
        //console.log(newFeedBack)
        setFeedback([newFeedBack, ...feedback])
    }
    const deleteFeedback = (id) => {
        if (window.confirm("This will be deleted")) {
            setFeedback(feedback.filter((item) => item.id !== id))//deltes the passed id element
        }

    }
    
    return <FeedbackContext.Provider value={{ feedback, deleteFeedback,addFeedback }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;