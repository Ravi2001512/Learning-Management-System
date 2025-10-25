function Tab({ _id, name, selectedCategoryId, onTabClick }) {
    const isSelected = _id === selectedCategoryId;
  
    return (
      <button
        className={`border px-2 py-1 rounded-md transition-colors ${
          isSelected ? "bg-[#edeef1] font-semibold" : "border-[#edeef1] hover:bg-[#f5f5f5]"
        }`}
        onClick={() => onTabClick(_id)}
      >
        {name}
      </button>
    );
  }
  
  export default Tab;
  