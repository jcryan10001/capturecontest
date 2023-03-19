import React from 'react';
import './Menubar.css';

const Menubar: React.FC = () => {
    const handleClick = (item: string) => {
        console.log(item);
    };

    return (
        <div className="Menubar">
            <div className="Menubar-item">
                File
                <div className="Menubar-dropdown">
                    <div className="Menubar-dropdown-item" onClick={() => handleClick('Select Working Folder')}>Select Working Folder</div>
                    <div className="Menubar-dropdown-item" onClick={() => handleClick('Update List')}>Update List</div>
                    <div className="Menubar-dropdown-item" onClick={() => handleClick('Set Club Name')}>Set Club Name</div>
                    <div className="Menubar-dropdown-item" onClick={() => handleClick('Exit')}>Exit</div>
                </div>
            </div>
            <div className="Menubar-item">
                Group
                <div className="Menubar-dropdown">
                    <div className="Menubar-dropdown-item" onClick={() => handleClick('Select Group')}>Select Group</div>
                    <div className="Menubar-dropdown-item" onClick={() => handleClick('Set Group Names')}>Set Group Names</div>
                </div>
            </div>
            <div className="Menubar-item">
                Slideshow
                <div className="Menubar-dropdown">
                    <div className="Menubar-dropdown-item" onClick={() => handleClick('Run Slideshow')}>Run Slideshow</div>
                    <div className="Menubar-dropdown-item" onClick={() => handleClick('Set interval time')}>Set interval time</div>
                </div>
            </div>
            <div className="Menubar-item">
                Critique
                <div className="Menubar-dropdown">
                    <div className="Menubar-dropdown-item" onClick={() => handleClick('Start/Repeat')}>Start/Repeat</div>
                    <div className="Menubar-dropdown-item" onClick={() => handleClick('Display Selected')}>Display Selected</div>
                    <div className="Menubar-dropdown-item" onClick={() => handleClick('Display Final')}>Display Final</div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;
