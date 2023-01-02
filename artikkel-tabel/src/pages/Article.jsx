import React, { useEffect, useState } from 'react'

export const Article = () => {
  const [article, setArticle] = useState([]);
  const url ="https://midaiganes.irw.ee/api/list/972d2b8a"

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
      setArticle(json || []);
    })
  }, []);

 return (
  <div>  
    <div className="tekst">
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{__html: article.intro}}></div>
    </div>
    <div>
      <img className="pilt" src="https://midaiganes.irw.ee/api/imgs/large/a3dac073.jpg" alt="" />
    </div>
    <div className="tekst">
      <div dangerouslySetInnerHTML={{__html: article.body}}></div>
    </div>
  </div>
  )
}
  