import React from 'react';
import MenuItem from './MenuItem';

interface MenuProps {
    title: string;
    items: { label: string; onClick: () => void }[];
}

const Menu: React.FC<MenuProps> = ({ title, items }) => {
    return (
        <div>
            <span>{title}</span>
            <ul>
                {items.map((item, index) => (
                    <MenuItem key={index} label={item.label} onClick={item.onClick} />
                ))}
            </ul>
        </div>
    );
};

export default Menu;
