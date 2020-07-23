import React from 'react'
import man from '../../../assets/images/dashboard/man.png'

const User_panel = () => {
            return <>
                <div className="sidebar-user text-center">
                    <div><img className="img-60 rounded-circle lazyloaded blur-up" src={man} alt="#" />
                    </div>
                    <h6 className="mt-3 f-14">곽 경 열</h6>
                    <p>Project Manager</p>
                </div>
            </>}
export default User_panel

