import { createContext, useState } from "react";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {

    const [personalData, setPersonalData] = useState({
        fullName: "Alex Morgan",
        jobTitle: "Senior Product Designer",
        email: "alex@morgan.design",
        phone: "+1 (415) 555-0142",
        location: "San Francisco, CA",
        portfolio: "morgan.design",
        summary:
            "Product designer with 8+ years shipping consumer and B2B SaaS products. I lead cross-functional design at scale, partnering with engineering and research to turn ambiguity into clear, beautiful experiences."
    });

    return (

        <ResumeContext.Provider
            value={{
                personalData,
                setPersonalData
            }}
        >
            {children}
        </ResumeContext.Provider>

    );
};