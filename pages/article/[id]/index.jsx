import Link from 'next/link'
import {useRouter} from 'next/router'

function ArticlePage({article}) {
    // const router = useRouter()
    // const {id} = router.query
    console.log(article.title,"hello 404")
  return (
    // <div>index {id}</div>
    <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <br />
        <Link href='/'>Go Back</Link>
    </>
  )
}

// export const getServerSideProps = async(context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props:{
//             article 
//         }
//     }
// }

export const getStaticProps = async(context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props:{
            article 
        }
    }
}
export const getStaticPaths = async(context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articleContent = await res.json()
    const ids = articleContent.map(article=>article.id)
    const paths = ids.map(id=>({params:{id:id.toString()}}))
    console.log(ids);
    return {
        paths,
        fallback:false,
    }
}
export default ArticlePage