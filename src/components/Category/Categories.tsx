import react from 'react';
import { Link } from 'react-router-dom'
import Header from '../Header'
import Outer from '../Outer'

const title = [
    {title: 'Frontend1111111'},
    {title: 'Frontend22222'},
    {title: '在routes禁用URL'},
    {title: 'Frontend54545'},
]

export default function Categories(){
    return (
        <>
            <div>
                <p className="text-3xl font-semibold h-12">{'asdasd'}</p>
                {title.map((item, _) => (
                    <li key={item.title} className="text-2xl">
                        <Link className="text-neutral-700" to={`/${item.title}`} >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </div>
        </>
    )
}