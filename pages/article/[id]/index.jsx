import Link from 'next/link'
import {useRouter} from 'next/router'
import Meta from '../../../components/Meta'
import {server} from '../../../config/index'
function ArticlePage({article}) {
    // const router = useRouter()
    // const {id} = router.query
    console.log(article.title,"hello 404")
  return (
    // <div>index {id}</div>
    <>
        <Meta title={article.title} description={article.excerpt}/>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <br />
        <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async(context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()
    return {
        props:{
            article 
        }
    }
}
export const getStaticPaths = async(context) => {
    const res = await fetch(`${server}/api/articles`)
    const articleContent = await res.json()
    const ids = articleContent.map(article=>article.id)
    const paths = ids.map(id=>({params:{id:id.toString()}}))
    return {
        paths,
        fallback:false,
    }
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

// export const getStaticProps = async(context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props:{
//             article 
//         }
//     }
// }
// export const getStaticPaths = async(context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articleContent = await res.json()
//     const ids = articleContent.map(article=>article.id)
//     const paths = ids.map(id=>({params:{id:id.toString()}}))
//     return {
//         paths,
//         fallback:false,
//     }
// }
export default ArticlePage