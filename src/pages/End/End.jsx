import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {emptyCard} from "../../store/item/item-action"

import "./end.css"
const End = () => {
    const dispatch = useDispatch();

    return (

        <div className="end">
           <p> Assalomu alaykum!. 
              Men Fayziyev Ravshan bu saytni boshlang'ich uz portfoliomga qushish uchun FrontEnd qismini yasadim. Bu saytni <a className="dodopizza" href="https://dodopizza.uz/tashkent/0000000a-0000-0000-0000-000000000000">dodopizza.uz</a>  saytiga iloji boricha uxshatishga harakat qildim. 
              Agar kamchilik va xatolar bulsa oldindan uzur surayman. Saytni yasashda quydagi texnalogiyalardan foydalandim: Html, Css, Java Script(ES6), ReactJs, Material-ui, Redux, react-hooks, react-hook-form, react-number-format, react-router-dom, redux-persist, redux-logger, Axios. Taklif va kamchiliklar yuzasidan +998939301718 raqamiga yoki ravshanfayziyevjkl@gmail.com manziliga xabar qoldirishingiz mumkin.
               Etiboringiz uchun Raxmat :).
               </p>
               <Link to="/">
                    <button onClick={ () => dispatch(emptyCard([]))} className="btn_home">Home</button>
               </Link>
        </div>
    )
}

export default End
