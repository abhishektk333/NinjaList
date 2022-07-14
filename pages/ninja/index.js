import style from '../../styles/Ninja.module.css'
import Link from 'next/link'

export const getStaticProps =async () => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();

    return{
        props: {ninjas : data}
    }
} 

const Ninjas = ({ninjas}) => {
    return ( 
        <div>
            <h1>Ninjas List</h1>
            {ninjas.map(ninja => (
                <Link href={"/ninja/" + ninja.id}  key={ninja.id}>
                    <a className={style.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
           ))}
        </div>
     );
}
 
export default Ninjas;