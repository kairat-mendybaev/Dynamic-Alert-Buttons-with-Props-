import React from 'react';
import AlertButton from './AlertButton';

function Toolbar() {
    const buttons = [
        { message: 'Downloading!', children: 'Download File' },
        { message: 'Sharing!', children: 'Share Document' },
        { message: 'Uploading!', children: 'Upload Image' },
        { message: 'Deleting!', children: 'Delete File' },
        { message: 'Saving!', children: 'Save Changes' },
        { message: 'Exiting!', children: 'Exit Editor' }
    ];

    return (
        <div>
            {buttons.map((btn, index) => (
                <AlertButton key={index} message={btn.message} children={btn.children} />
            ))}
        </div>
    );
}

export default Toolbar;

