import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "Awesome Experience such a lovely movie",
            rating: 10

        },
        {
            id: 2,
            text: "Everything about the movie was perfect but it had some pacing issues",
            rating: 9

        },
        {
            id: 3,
            text: "A little disappointed",
            rating: 7

        }
    ])
    const [feedbackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false
    })
    const editFeedback = (item) => {
        setFeedBackEdit({
            item,
            edit: true
        })
    }
    const updateFeedback = (id, updItem) => {
        //console.log(id,updItem)
        setFeedback(feedback.map((item)=>item.id===id?{...item,...updItem}:item))
    }
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

    return <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;