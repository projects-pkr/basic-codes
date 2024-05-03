import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout_function_useeffect() {
  const [userIsInactive, setUserIsInactive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let inactivityTimer;

    const handleUserActivity = () => {
      //  this arrow function is used for User activity detection
      clearTimeout(inactivityTimer);
      setUserIsInactive(false);

      //  here we Schedule the next inactivity timer 
      inactivityTimer = setTimeout(() => {
        setUserIsInactive(true);
      }, 10000); 
    };

    
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

   
    inactivityTimer = setTimeout(() => {
      setUserIsInactive(true);
    }, 10000); 

    return () => {
      //  here we Clean up event listeners and timers on component unmount state for reset usestate
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      clearTimeout(inactivityTimer);
    };
  }, []);

  useEffect(() => {
    if (userIsInactive) {
    
      const logoutUser = () => {
       
        console.log("Logging out user...");
   

        
        navigate("/session-timed-out");
      };

 
      const confirmLogout = window.confirm("You will be logged out due to inactivity. Do you want to stay logged in?");
      if (!confirmLogout) {
       
        setUserIsInactive(false);
      } else {
       
        logoutUser();
      }
    }
  }, [userIsInactive, navigate]);


  
}


