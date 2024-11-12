import { useEffect } from "react";

export function useDocumentClick(){
    useEffect(()=>{

        console.log("useDocumentClick")
        const handleDocumentClick = ()=>{
            console.log("click on document");
            
        }
        document.addEventListener("click", handleDocumentClick);

        return ()=>{
            document.removeEventListener("click", handleDocumentClick);
        }
    }, []);
}