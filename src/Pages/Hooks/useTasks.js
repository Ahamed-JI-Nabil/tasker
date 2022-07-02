import { useEffect, useState } from "react"

const useTasks = () => {
    const [tasks, setTasks] = useState([])

    const url = 'https://socialist-eds-50299.herokuapp.com/tasks'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTasks(data)

            })
    }, [])
    return [tasks, setTasks]

}

export default useTasks