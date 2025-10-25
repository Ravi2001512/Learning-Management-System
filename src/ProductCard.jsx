import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function ProductCard({ name, price, image, description }) {
  const [num, setNum] = useState(0);

  const handleBuyClick = () => {
    setNum(num + 1);
  };

  const handleCancelClick = () => {
    setNum(0);
  };

  return (
    <div className="mt-10 mb-4">
      <Card className="w-[240px] h-[320px] rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <div className="h-48 bg-muted rounded-t-2xl overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="px-5 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">{name}</h2>
            <span className="text-md font-semibold text-primary">${price}</span>
          </div>

          <p className="text-sm text-muted-foreground mt-2 h-12 overflow-hidden text-ellipsis line-clamp-2">
            {description}
          </p>
        </div>

        <div className="px-5 pb-5 mt-4 space-y-2">
          <Button className="w-full rounded-xl" onClick={handleBuyClick}>
            Click me
          </Button>

          {num > 0 && (
            <Button
              className="w-full rounded-xl bg-red-500 hover:bg-red-600 text-white"
              onClick={handleCancelClick}
            >
              Enroll
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;
