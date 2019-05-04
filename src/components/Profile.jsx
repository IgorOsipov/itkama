import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div className="profile_cover">
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" alt="cover" />
            </div>
            <div className="avatar">
                <img src="https://sample-videos.com/img/Sample-jpg-image-500kb.jpg" alt="ava" />
            </div>
            <div>
                mypsots
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;