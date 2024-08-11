import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../assets/assets.js'
import { Context } from '../context/Context.jsx'
function Sidebar() {

   const [extended, setExtended] = useState(false)

   const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

   const loadPrompt = async (prompt) => {
      setRecentPrompt(prompt)
      await onSent(prompt);
   }

   return (
      <>

         <div className="sidebar">

            {/* // top-sidebar */}

            <div className="top">
               <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="menu" />
               <div onClick={() => newChat()} className="new-chat">
                  <img src={assets.plus_icon} alt="plus icon" />
                  {extended ? <p>New Chat</p> : null}
               </div>

               {extended ? <div className="recent">
                  <p className="recent-title">Recent</p>
                  {prevPrompt.map((item, index) => {


                     return (
                        <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                           <img src={assets.message_icon} alt="message" />
                           <p >{item.slice(0, 18)}...</p>

                        </div>
                     )

                  })}

               </div> : null}



            </div>


            {/* //bottom side-bar */}

            <div className="bottom">
               <div className="recent-entry bottom-item">
                  <img src={assets.question_icon} alt="" />
                  {extended ? <p>Help</p> : null}
               </div>
               <div className="recent-entry bottom-item">
                  <img src={assets.history_icon} alt="" />
                  {extended ? <p>history</p> : null}
               </div>
               <div className="recent-entry bottom-item">
                  <img src={assets.setting_icon} alt="" />
                  {extended ? <p>setting</p> : null}
               </div>

            </div>
         </div>

      </>
   )
}

export default Sidebar
