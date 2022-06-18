import React from 'react'
import Article from './Article'
import artLstStyle from '../styles/ArticleList.module.css'
function ArticleList({articles}) {
  return (
    <div className={artLstStyle.grid}>
        {
            articles.map((article,index)=>(
                <Article article={article} key={index}/>
            ))
        }
    </div>
  )
}

export default ArticleList