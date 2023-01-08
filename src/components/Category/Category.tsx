import react  from "react";
import { Link } from "react-router-dom" 

const category = [
    {category: 'Frontend'},
    {category: 'Backend'},
    {category: 'Database'},
]

export default function Category() {
    return (
        <div>
            <p className="text-3xl font-semibold h-12">Categories</p>
            {category.map((item, _) => (
                <li key={item.category} className="text-2xl">
                    <Link className="text-neutral-700" to={`/${item.category}`} >
                        {item.category}
                    </Link>
                </li>
            ))}         
        </div>
    )
}