import { useEffect, useState } from "react"

const useTasks = () => {
    const [tasks, setTasks] = useState([])

    const url = 'http://localhost:5000/tasks'

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