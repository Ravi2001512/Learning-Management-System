import ProductCards from "./ProductCards";
import { Separator } from "@/components/ui/separator";
import Tab from "./Tab";
import { useState } from "react";
import img2 from "./images/grade6.jpg"

function Products() {
  const products = [
    {
      categoryId: "1",
      image: {img2},
      _id: "1",
      name: "Grade 6",
      price: "5.00",
      description:
        "Grade 6 full Syllabus",
    },
    {
      categoryId: "1",
      image: "/grade1.jpg",
      _id: "2",
      name: "grade 7",
      price: "5.00",
      description:
        "Grade 7 full Syllabus",
    },
    {
      categoryId: "1",
      image: "/grade1.jpg",
      _id: "3",
      name: "Grade 8",
      price: "5.00",
      description:
        "Grade 8 full syllabus",
    },
    {
      categoryId: "1",
      image: "/grade1.jpg",
      _id: "4",
      name: "Grade 9",
      price: "5.00",
      description:
        "Grade 9 Full Syllabus",
    },
    {
      categoryId: "2",
      image: "/grade1.jpg",
      _id: "5",
      name: "Grade 10",
      price: "10.00",
      description:
        "Grade 10 full Syllabus",
    },
    {
      categoryId: "2",
      image: "/grade1.jpg",
      _id: "6",
      name: "Grade 11",
      price: "10.00",
      description:
        "Grade 11 full syllabus",
    },
    {
      categoryId: "3",
      image: "/grade1.jpg",
      _id: "7",
      name: "Grade 12",
      price: "15.00",
      description:
        "Grade 12 full syllabus",
    },
    {
      categoryId: "3",
      image: "/grade1.jpg",
      _id: "8",
      name: "Grade 13",
      price: "15.00",
      description:
        "Grade 13 full Syllabus",
    },
    {
    categoryId: "4",
      image: "/grade1.jpg",
      _id: "8",
      name: "Speciall",
      price: "00.00",
      description:
        "Special Announcement",
    },
  ];


  const categories = [
    { _id: "ALL", name: "All" },
    { _id: "1", name: "Grade 6 - 9" },
    { _id: "2", name: "O/L" },
    { _id: "3", name: "A/L" },
    { _id: "4", name:"Special Announcement" },
   
  ];

  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");

  const filteredProducts =
    selectedCategoryId === "ALL"
      ? products
      : products.filter((product) => product.categoryId === selectedCategoryId);

  const handleTabClick = (_id) => {
    setSelectedCategoryId(_id);
  };

  return (
    <section className="px-8 py-8">
      <h2 className="text-4xl font-bold">Sections</h2>
      <Separator className="mt-2" />
      <div className="mt-4 flex items-center gap-4 flex-wrap">
        {categories.map((category) => (
          <Tab
            key={category._id}
            _id={category._id}
            selectedCategoryId={selectedCategoryId}
            name={category.name}
            onTabClick={handleTabClick}
          />
        ))}
      </div>
      <ProductCards products={filteredProducts} />
    </section>
  );
}

export default Products;
