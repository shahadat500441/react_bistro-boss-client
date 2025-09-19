import React from 'react';

const SectionTitle = ({subHeading,heading}) => {
    return (
       <div className="mx-auto text-center md:w-3/12">
            <p className="text-lg text-yellow-400 mb-1">{subHeading}</p>
            <h2 className="text-4xl uppercase font-medium border-y-2 py-4 border-gray-300">{heading}</h2>
        </div>
    );
};

export default SectionTitle;