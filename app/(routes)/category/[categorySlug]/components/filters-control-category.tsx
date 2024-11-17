import FilterOrigin from "./filter-origin";

//creamos un tipado para nuestro filter
type FiltersControlsCategoryProps = {
  setFilterOrigin: (origin: string) => void;
};

const FiltersControlsCategory = (props: FiltersControlsCategoryProps) => {
  const { setFilterOrigin } = props;

  return (
    <div className="sm:w-[350px] sm:mt-5 p-6">
      {/* crear un componente para filtrar por origen */}
      <FilterOrigin setFilterOrigin={setFilterOrigin} />
    </div>
  );
};

export default FiltersControlsCategory;
