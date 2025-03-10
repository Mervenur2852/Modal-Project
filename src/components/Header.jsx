import { AiOutlineFileAdd } from "react-icons/ai"; // benim
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">REACT UYGULAMA</div>
      <div className="flex items-center gap-5">
        <div>
          <select className="h-10 rounded-lg" name="" id="">
            <option className="text-black" value="asc">
              {" "}
              Artan{" "}
            </option>

            <option className="text-black" value="desc">
              {" "}
              Azalan{" "}
            </option>
          </select>
        </div>
        <div>
          <input
            className=" h-10 rounded-lg px-4 text-black bg-white"
            type="text"
            placeholder="Arama Yapınız..."
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <AiOutlineFileAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
