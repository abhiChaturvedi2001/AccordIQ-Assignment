import img1 from "/img1.png";
import img2 from "/img2.png";
import img4 from "/img4.png";
import img6 from "/img6.png";
import img7 from "/img7.png";

export const SidebarDataSet = [
    {
        id: 1,
        image: img1
    },
    {
        id: 2,
        image: img2
    },
    {
        id: 4,
        image: img4
    },
    {
        id: 6,
        image: img6
    },
    {
        id: 7,
        image: img7
    },
]

export const contractList = [
    {
        id: 1,
        heading: "Contract Value",
        amount: "$2.58B",
        contracts: "No. of Contacts - 2.1k"
    },
    {
        id: 2,
        heading: "Total Contracts",
        amount: "2,034",
    },
    {
        id: 1,
        heading: "Under Review",
        amount: "50",
    },
]

export const ButtonList = [
    {
        id: 1001,
        buttonName: "Name",
        value: 25
    },
    {
        id: 1002,
        buttonName: "Participating",
        value: 14
    },
    {
        id: 1003,
        buttonName: "All Contracts",
        value: 50
    },
    {
        id: 1004,
        buttonName: "Completed",
    },
]

export const dataset1 = [
    {
        id: 1,
        yearName: "Februray",
        year: 2025,
        pending: Math.floor(Math.random() * 9) + 1, // Random value between 1 and 9
    },
    {
        id: 2,
        yearName: "January",
        year: 2025,
        pending: Math.floor(Math.random() * 9) + 1,
    },
    {
        id: 3,
        yearName: "March",
        year: 2025,
        pending: Math.floor(Math.random() * 9) + 1,
    },
];

export const dataset2 = [
    {
        id: 4,
        yearName: "March",
        year: 2021,
        pending: Math.floor(Math.random() * 9) + 1,
    },
    {
        id: 5,
        yearName: "March",
        year: 2020,
        pending: Math.floor(Math.random() * 9) + 1,
    },
    {
        id: 6,
        yearName: "March",
        year: 2019,
        pending: Math.floor(Math.random() * 9) + 1,
    },
];

export const ticketData = [
    {
        title: "Request Ticket",
        subtitle: "Contact XYZ",
        date: "10 August",
        time: "12:00"
    },
    {
        title: "Request Ticket",
        subtitle: "Contact XYZ",
        date: "10 August",
        time: "12:00",
        style: "line-through"
    }, {
        title: "Signature Pending",
        subtitle: "Contact XYZ",
    }
]
