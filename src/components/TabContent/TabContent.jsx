import { useEffect } from "react";

const TabContent = ({ activeTab, setSwitchOn }) => {
    useEffect(() => {
        setSwitchOn(true);
    });
    if (activeTab === 0) {
        return <div>0th content</div>;
    } else if (activeTab === 1) {
        return <div>1st content</div>;
    } else if (activeTab === 2) {
        return <div>2nd content</div>;
    }
};

export default TabContent;
