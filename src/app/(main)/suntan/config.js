const levels = [
    {
        name: "Level I",
        price: "$12"
    },
    {
        name: "Level II",
        price: "$16"
    },
    {
        name: "Level III",
        price: "$20"
    },
    {
        name: "Level IV",
        price: "$24"
    },
    {
        name: "Level V",
        price: "$30"
    },
    {
        name: "Level VI",
        price: "$35"
    },
    {
        name: "SUNLESS",
        price: "WELLFIT"
    }
];

const plans = [
    {
        title: "Sun Spray Red Light",
        price: "$139.99",
        noOfChecks: 7,
        color: "#8d5524",
    },
    {
        title: "All Access",
        price: "$89.99",
        noOfChecks: 6,
        color: "#bc6c25",
        text: "5 sessions for $49.99"
    },
    {
        title: "Sapphire",
        price: "$69.99",
        noOfChecks: 5,
        color: "#c68642",
        levelPrices: ["$5"],
        text: "5 sessions for $49.99"
    },
    {
        title: "Diamond",
        price: "$49.99",
        noOfChecks: 3,
        color: "#e0ac69",
        levelPrices: ["$5", "$10", "$15"],
        text: "5 sessions for $49.99"
    },
    {
        title: "Platinum",
        price: "$39.99",
        noOfChecks: 2,
        color: "#f1c27d",
        levelPrices: ["$5", "$10", "$15", "$20"],
        text: "5 sessions for $49.99"
    },
    {
        title: "Express",
        price: "$29.99",
        noOfChecks: 1,
        color: "#ffdbac",
        levelPrices: ["$5", "$10", "$15", "$20", "$25"],
        text: "5 sessions for $49.99"
    },
];

export {levels, plans};