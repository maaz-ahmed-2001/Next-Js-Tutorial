import ArticleList from '../components/ArticleList'
import {server} from '../config/index'

export default function Home({articles}) {
  return (
    <div >
      <ArticleList articles={articles}/>
    </div>
  )
}



export const getStaticProps = async()=>{
  const res = await fetch(`${server}/api/articles`)
  let articles = await res.json()
  return {
    props:{
      articles
    }
  }
}


// export const getStaticProps = async()=>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   let articles = await res.json()
//   return {
//     props:{
//       articles
//     }
//   }
// }
