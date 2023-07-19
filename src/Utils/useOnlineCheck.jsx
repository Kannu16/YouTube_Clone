import{ useState, useEffect } from 'react'

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
      
        const handleOnline = () =>{
            setIsOnline(true)
            console.log("Online")
        }
        const handleOffline = () =>{
            setIsOnline(false)
            console.log("Offline")
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
    
      return () => {
        window.removeEventListener("online", handleOnline)
        window.removeEventListener("offline", handleOffline)
      }
    }, [])
    
    return isOnline;
}

export default useOnline;