import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';

const notFound = () => {
  const router = useRouter();

  useState(() => {
    setTimeout(() => {
      router.push('/');
    },3000)
  },[])

    return ( 
        <div className="not-found">
        <h1>Ooops...</h1>
        <h2>That page cannot be found :(</h2>
        <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
      </div>
     );
}
 
export default notFound;