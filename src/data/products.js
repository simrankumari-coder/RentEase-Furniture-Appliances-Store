import bed from "../images/bed.jpg";
import fridge from "../images/fridge.jpg";
import tv from "../images/tv.jpg";
import washing from "../images/washing.jpg";
import drawer from "../images/drawer.jpg";
import desktop from "../images/desktop.jpg"
import table from "../images/table.jpg"
import ac from "../images/ac.jpg"
import microwave from "../images/microwave.jpg"
import laptop from "../images/laptop.jpg"
import homeProjector from "../images/homeProjector.jpg"
import speaker from "../images/speaker.jpg"

export const furnitureProducts = [
    {
        id: 1,
        name: "Wooden Bed",
        price: 699,
        image: bed,
        category: "Furniture",
        description:
            "Comfortable wooden bed made from durable engineered wood. Ideal for students and working professionals living in rented homes.",
        securityDeposit: 2000,
        tenureOptions: [3, 6, 12],
        availability: "In Stock",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
    {
        id: 2, name: "Drawer", price: 799, image: drawer,
        securityDeposit: 1500,
        description: "Spacious wooden drawer with multiple compartments for clothes and documents.",
        category: "Furniture",
        tenureOptions: [3, 6, 12],
        availability: "In Stock",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
    {
        id: 3, name: "Desktop", price: 999, image: desktop,
        securityDeposit: 2500,

        description: "Study/work desk suitable for laptops and office work.",
        tenureOptions: [3, 6, 12],
        availability: "In Stock",
        category: "Furniture",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
    {
        id: 4, name: "Table", price: 699, image: table, tenureOptions: [3, 6, 12],
        securityDeposit: 1800,
        description: "Compact multipurpose table for dining, studying, or office use.",
        availability: "In Stock",
        category: "Furniture",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
];
export const appliancesProducts = [
    {
        id: 5, name: "Washing Machine", price: 499, image: washing, tenureOptions: [3, 6, 12],
        availability: "In Stock",
        securityDeposit: 3000,
        description: "Semi-automatic washing machine with low water and power consumption.",
        category: "Appliances",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
    {
        id: 6, name: "Fridge", price: 799, image: fridge, tenureOptions: [3, 6, 12],
        availability: "In Stock",
        securityDeposit: 3500,
        description: "Single-door refrigerator with energy-efficient cooling.",
        category: "Appliances",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
    {
        id: 7, name: "Air Conditioner", price: 999, image: ac, tenureOptions: [3, 6, 12],
        availability: "In Stock",
        securityDeposit: 5000,
        description: "1.5 Ton inverter AC with fast cooling and low electricity usage.",
        category: "Appliances",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
    {
        id: 8, name: "Microwave Oven", price: 699, image: microwave, tenureOptions: [3, 6, 12],
        availability: "In Stock",
        securityDeposit: 2000,
        description: "1.5 Ton inverter AC with fast cooling and low electricity usage.",
        category: "Appliances",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
];
export const electronicProducts = [
    {
        id: 9, name: "Smart TV", price: 499, image: tv, tenureOptions: [3, 6, 12],
        availability: "In Stock",
        securityDeposit: 3000,
        description: "43-inch Full HD Smart TV with streaming app support.",
        category: "Electronics",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
    {
        id: 10, name: "Laptop", price: 799, image: laptop, tenureOptions: [3, 6, 12],
        availability: "In Stock",
        securityDeposit: 8000,
        description: "Laptop suitable for online classes, office work, and programming.",
        category: "Electronics",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
    {
        id: 11, name: "Home Projector", price: 999, image: homeProjector, tenureOptions: [3, 6, 12],
        availability: "In Stock",
        securityDeposit: 4000,
        description: "HD home projector for movies, gaming, and presentations.",
        category: "Electronics",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
    {
        id: 12, name: "Bluetoot Speaker", price: 699, image: speaker, tenureOptions: [3, 6, 12],
        availability: "In Stock",
        securityDeposit: 1500,
        description: "Portable Bluetooth speaker with powerful bass and long battery life.",
        category: "Electronics",
        maintenance: "Free maintenance during rental period",
        delivery: "Delivery within 2-3 days"
    },
];


