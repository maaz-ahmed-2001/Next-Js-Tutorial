import Link from 'next/link'
import artStyle from '../styles/Article.module.css'


function Article({article}) {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
        <a className={artStyle.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
        </a>
    </Link>
  )
}

export default Article