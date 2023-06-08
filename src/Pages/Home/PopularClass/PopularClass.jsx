import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
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
        <div className="mt-6 mb-6">
            <SectionTitle
                subHeading={"Our Popular"}
                heading={"Classes"}
            ></SectionTitle>

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