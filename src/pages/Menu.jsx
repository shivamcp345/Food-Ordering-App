import { FaBorderAll } from "react-icons/fa6";
import { CgMenuGridR } from "react-icons/cg";
import { GiCoffeeCup } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";
import { LuSoup } from "react-icons/lu";
import { FaPizzaSlice } from "react-icons/fa6";
import { SiBurgerking } from "react-icons/si";
const Menu = ({category,setCategory}) => {
    return (
        <div className="m">
            <div className="m-1" onClick={() => setCategory("All")}>
            <CgMenuGridR size={70} />
                <p>All</p>
            </div>
            <div className="m-1" onClick={() => setCategory("Breakfast")}>
                <GiCoffeeCup size={70}/>
                    <p>Breakfast</p>
            </div>
            <div className="m-1" onClick={() => setCategory("Soup")}>
              <LuSoup size={70} />
               <p>soup</p>
            </div>
            <div className="m-1" onClick={() => setCategory("Pasta")}>
              <GiNoodles size={70} />
               <p>Pasta</p>
            </div>
            <div className="m-1" onClick={() => setCategory("Pizza")}>
                 <FaPizzaSlice size={70} />
                  <p>Pizza</p>
            </div>
            <div className="m-1" onClick={() => setCategory("Burger")}>
                <SiBurgerking size={70} />
                 <p>Burger</p>
            </div>
        </div>
    )
}

export default Menu
