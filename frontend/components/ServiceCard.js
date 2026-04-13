import Link from 'next/link';

export default function ServiceCard({ service, showPrice = true }) {
  return (
    <div className="glossy-card group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="text-4xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
        {service.category === 'Makeup & Bridal' || service.category === 'Makeup' ? '💄' : 
         service.category === 'Hair' ? '💇' : 
         service.category === 'Skin Care' ? '✨' : 
         service.category === 'Spa & Massage' ? '🧖' : '💎'}
      </div>
      <h3 className="font-display text-xl text-white mb-2 group-hover:text-dusty-pink transition-colors">{service.name}</h3>
      <p className="text-white/50 text-sm">{service.description}</p>
    </div>
  );
}