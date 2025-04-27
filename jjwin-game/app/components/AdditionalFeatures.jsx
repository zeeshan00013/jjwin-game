import { DownloadIcon } from "lucide-react";

const features = [
  {
    title: "Invite a Friend – Earn Rs 700",
    description: "Invite a Friend Earn Rs 700",
    alt: "Slot machine 777",
    purpose: "Encourages referrals by offering Rs 700 for each friend invited.",
  },
  {
    title: "20% Bonus on Your First Deposit",
    description: "20% Bonus on Your First Deposit",
    alt: "Rocket launching with coins",
    purpose: "Gives a 20% bonus to new users on their first deposit.",
  },
  {
    title: "Earn Up to 3% Commission on All Player Activity",
    description: "Earn Up to 3% Commission on All Player Activity",
    alt: "Treasure chest and cards",
    purpose: "Earn commissions from the players you refer.",
  },
  {
    title: "Get 7% Extra on Every Deposit",
    description: "Get 7% Extra on Every Deposit",
    alt: "Pirate with coins",
    purpose: "Earn extra bonus on every deposit you make.",
  },
];

export default function AdditionalFeatures() {
  return (
    <section className="px-4 md:px-8 lg:px-16 mt-10  text-white ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Additional Features
        </h2>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-green-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-95 transition duration-300"
            >
              <div className="p-6 text-white ">
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
