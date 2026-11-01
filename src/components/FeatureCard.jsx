import Button from "./Button";

function FeatureCard({ image, title, text, buttonText, wide }) {
  return (
    <div
      className={`relative h-100 overflow-hidden rounded-2xl ${
        wide ? "flex-[2]" : "flex-1"
      }`}
    >
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-6 text-white">
        <h3 className="text-xl">{title}</h3>
        <p className="mt-1 text-xs">{text}</p>
        {buttonText && (
          <div className="mt-4">
            <Button variant="light">{buttonText}</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeatureCard;