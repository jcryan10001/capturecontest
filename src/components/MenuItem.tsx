import React from 'react';

interface MenuItemProps {
    label: string;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, onClick }) => {
    return (
        <li>
            <button onClick={onClick}>{label}</button>
        </li>
    );
};

export default MenuItem;
