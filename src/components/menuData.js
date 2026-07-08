import {
    FiFileText,
    FiSettings,
} from "react-icons/fi";

export const menuData = [
    {
        id: 1,
        title: "Resume Builder",
        path:"/resume-builder",
        icon: FiFileText,
        dropdown: true,

        children: [

            {
                id: 1,
                title: "Create Resume",
                path: "/resume-builder",
            },

            {
                id: 2,
                title: "My Resume",
                path: "/resume-builder/my-resume",
            },

        ],

    },

];

export default menuData;