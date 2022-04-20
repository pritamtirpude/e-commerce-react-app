import { Fragment } from "react";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
