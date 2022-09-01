import {createContext, useState, useEffect} from 'react'
// import { v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])//we use json data as backend
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    },[])

    //fetch feedback 
        // `http://localhost:5000/feedback?_sort=id&_order=id`
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=id`)
        const data = await response.json()   
        setFeedback(data)
        setIsLoading(false)
    }

    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?')){

            const requestOptions = {
                method: 'DELETE'
            }
            await fetch( `/feedback/${id}`,requestOptions)
            setFeedback(feedback.filter((item) => 
                item.id !== id
            ))
        }
    }

    const addFeedback = async (newFeedback) => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newFeedback)
        }
        const response = await fetch(`/feedback`, requestOptions) 
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    // when the edit button is clicked on FeedbackItem component, 
    // update feedbackEdit object
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    // update the feedback item
    const updateFeedback = async (id, updateItem) => {

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(updateItem)
        }

        const response = await fetch(`/feedback/${id}`, requestOptions)
        const data = await response.json()

        setFeedback(
           feedback.map((item) => (item.id === id ? {
            ...item, ...data} : item
           ))
        )
        setFeedbackEdit({
            item: {},
            edit: false
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        isLoading,
        addFeedback,
        editFeedback, //used by FeedbackItem.jsx
        feedbackEdit,  //the item whick hold states, used by FeedbackForm.jsx
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext