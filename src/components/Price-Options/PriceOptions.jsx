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
                "Free access to locker rooms",
                "NO",
                "NO",
                "NO",
                "NO",
                "NO",
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
                "Access to basic group fitness classes",
                "No",
                "NO",
                "NO",
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
                "Access to premium wellness services",
                "Priority booking for group classes",
                "Discount on massage services"
            ]
        },

    ]

    return (
        <div className="m-6">
            <h2 className="text-5xl text-center">Best pricing in the city</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;