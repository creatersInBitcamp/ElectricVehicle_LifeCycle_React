import React from 'react';

const ProfileImgs = ({img}) => {

    return (
        <>
          <div className="pic">
            <a href="#"><img src={img} alt=""/></a>
          </div>
        </>
    );
};

export default ProfileImgs;