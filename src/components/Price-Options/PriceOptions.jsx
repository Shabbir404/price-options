import PriceOption from "../Price-Option/PriceOption";

const PriceOptions = () => {

    const pricingOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym during off-peak hours",
                "Access to all cardio equipment",
                "One fitness assessment per year",
                "Free access to locker rooms"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym during peak and off-peak hours",
                "Access to all cardio and strength equipment",
                "Two fitness assessments per year",
                "Free access to locker rooms",
                "Discounts on group classes",
                "Access to basic group fitness classes (e.g., Yoga, Pilates)"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "Unlimited access to gym during all hours",
                "Access to cardio, strength, and functional training areas",
                "Four fitness assessments per year",
                "Free access to locker rooms and towel service",
                "Free group classes (e.g., Yoga, Pilates, HIIT, Spinning)",
                "Free personal training sessions (2 per month)",
                "Access to premium wellness services (e.g., sauna, steam room)",
                "Priority booking for group classes",
                "Discount on massage services"
            ]
        },
        {
            "id": 4,
            "name": "Family Membership",
            "price": 119.99,
            "features": [
                "Access to gym for two adults and up to two children (under 18)",
                "Access to cardio, strength, and functional training areas",
                "Discounted family rates for group fitness classes",
                "Two fitness assessments per year per adult",
                "Free access to locker rooms",
                "Priority access to family-oriented classes",
                "Free kids' fitness classes",
                "Access to family events and activities"
            ]
        },
        {
            "id": 5,
            "name": "Student Membership",
            "price": 19.99,
            "features": [
                "Access to gym during off-peak hours",
                "Access to cardio equipment and basic strength training",
                "One fitness assessment per year",
                "Discounted rates on group fitness classes",
                "Access to locker rooms",
                "Free Wi-Fi in common areas"
            ]
        }
    ]

    return (
        <div>
            <h2 className="text-5xl">Best pricing in the city</h2>
            {
                pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;