import FavQuestion from "./FavQuestion";
import { useState } from "react";

const [isFav, setIsFav] = useState()

function Test() {
    return (
        <div className="p-4">
            <FavQuestion question="What is the capital of France?" />
            <EditFormLine question="What is 2 + 2?" />
        </div>
    );
}

export default Test;