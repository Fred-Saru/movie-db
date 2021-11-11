import { useState, useCallback } from 'react'

const useNavigation = () => {
    const [route, setRoute] = useState('Home')

    const setCurrentRoute = useCallback(
        (option) => {
            if(route === option) return
            setRoute(option)
        },
        [route]
    )

    return { currentRoute: route, setCurrentRoute }
}

export default useNavigation
