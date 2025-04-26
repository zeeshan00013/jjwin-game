import Image from "next/image";

const features = [
  {
    title: "Invite a Friend – Earn Rs 700",
    description: "Invite a Friend Earn Rs 700",
    image: "/slot-machine-777.png",
    alt: "Slot machine 777",
    purpose: "Encourages referrals by offering Rs 700 for each friend invited.",
  },
  {
    title: "20% Bonus on Your First Deposit",
    description: "20% Bonus on Your First Deposit",
    image: "/rocket-coins.png",
    alt: "Rocket launching with coins",
    purpose: "Gives a 20% bonus to new users on their first deposit.",
  },
  {
    title: "Earn Up to 3% Commission on All Player Activity",
    description: "Earn Up to 3% Commission on All Player Activity",
    image: "/treasure-chest-cards.png",
    alt: "Treasure chest and cards",
    purpose: "Earn commissions from the players you refer.",
  },
  {
    title: "Get 7% Extra on Every Deposit",
    description: "Get 7% Extra on Every Deposit",
    image: "/pirate-coins.png", // Replace with actual image path
    alt: "Pirate with coins",
    purpose: "Earn extra bonus on every deposit you make.",
  },
];

export default function AdditionalFeatures() {
  return (
    <section className="py-10 ">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Additional Features
        </h2>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-green-600 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="p-6 text-white flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.purpose}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
