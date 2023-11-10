import { useAppDispatch } from "../../../hooks/useAppDispatch";
import ButtonLight from "../../button/buttonLight/ButtonLight";
import { toggleTheme } from "../../../slices/themeSlice";

const ThemeButton = () => {
  const dispatch = useAppDispatch();

  const themeToggler = () => {
    dispatch(toggleTheme());
  };

  return (
    <ButtonLight onClick={themeToggler}>
      <i className="fa-solid fa-sun"></i>
    </ButtonLight>
  );
};

export default ThemeButton;
