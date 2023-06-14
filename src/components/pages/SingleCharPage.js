import { useState } from "react";
import { useParams } from "react-router"

const SingleCharPage = () => {

    const {id} = useParams();
    const [char, setChar] = useState(null);

    

}