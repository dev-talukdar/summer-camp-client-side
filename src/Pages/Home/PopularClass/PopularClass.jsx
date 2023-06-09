import { useEffect, useState } from "react"; 
import PopularClassCard from "./PopularClassCard";



const PopularClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('popularClass.json')
            .then(res => res.json())
            .then(data => { 
                setClasses(data);
            });
    }, []);


    return (
        <div className=" mb-6"> 
        <div className="divider"><p className="font-bold text-3xl">Popular Classes</p> </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    classes.map(pclass => <PopularClassCard
                        key={pclass._id}
                        pclass={pclass}
                    ></PopularClassCard>)
                }
            </div>

        </div>
    );
};

export default PopularClass;