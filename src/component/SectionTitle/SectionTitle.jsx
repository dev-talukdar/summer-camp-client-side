 

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-purple-300">----{subHeading}----</p>
            <h3 className="text-4xl text-purple-300 uppercase border-y-4 py-4 font-medium ">{heading}</h3>
        </div>
    );
};

export default SectionTitle;