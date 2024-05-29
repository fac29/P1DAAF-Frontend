import { useState } from "react";
import FavQuestion from "./FavQuestion";

function Test() {
    const [isFav, setIsFav] = useState(false); // Initialize the state with a default value

    const handleToggleFav = () => {
        setIsFav((prevState) => !prevState); // Toggle the state
    };

    return (
        <div className="p-4">
            <FavQuestion state={isFav} onToggle={handleToggleFav} />
        
        </div>
    );
}

export default Test;
