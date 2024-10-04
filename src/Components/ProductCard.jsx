export const ProductCard = ({ src, name, description, className }) => {
  return (
    <div
      className={`border -border--neutrals-600 -bg--orange-700 rounded-2xl p-5 flex flex-col gap-3 ${className}`}
    >
      <img
        src={src}
        alt={name}
        className="size-[80vw] lg:size-[90vw] object-cover rounded-2xl"
      />
      <div className="flex-col flex gap-5">
        <b>{name}</b>
        <p>{description}</p>
      </div>
    </div>
  );
};
