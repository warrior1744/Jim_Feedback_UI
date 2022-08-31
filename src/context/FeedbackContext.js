import {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    
    const [feedback, setFeedback] = useState([
        {
            id:1 ,
            text: 'This is feedback item 1',
            rating: 10
        },
        {
            id:2 ,
            text: 'This is feedback item 2',
            rating: 8
        },
        {
            id:3 ,
            text: 'This is feedback item 3',
            rating: 6
        },
        {
            id:4 ,
            text: 'This is feedback item 4',
            rating: 9
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Set item to be updated when the edit button is clicked
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    // update the feedback item

    const updateFeedback = (id, updateItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? {
            ...item, ...updateItem } : item))
        )
        setFeedbackEdit({
            item: {},
            edit: false
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback, //used by FeedbackItem.jsx
        feedbackEdit,  //the item whick hold states, used by FeedbackForm.jsx
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext