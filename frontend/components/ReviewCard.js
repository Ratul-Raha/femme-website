export default function ReviewCard({ review }) {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`${i < rating ? 'text-champagne' : 'text-white/20'}`}>★</span>
    ));
  };

  return (
    <div className="glossy-card p-6 rounded-2xl">
      <div className="flex gap-1 mb-3">{renderStars(review.rating)}</div>
      <p className="text-white/70 text-sm italic mb-4">"{review.comment}"</p>
      <p className="font-display text-dusty-pink">— {review.name}</p>
    </div>
  );
}