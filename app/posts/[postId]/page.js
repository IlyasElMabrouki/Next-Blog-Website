import posts from "../../../utils/data"
import {notFound} from "next/navigation"
import Link from "next/link"

export async function generateMetadata({ params : { postId } }) {

  const post = posts.find(post => post.id === postId)
  
  if (!post){
    return {
      title: 'Post Not Found',
    }
  }
  return {
    title: post.title,
  }
}

export default function Post({ params : { postId } }) {

  const post = posts.find(post => post.id === postId)
  
  if (!post){
    notFound()
  }
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <Link href="/">Back to Home Page</Link>
    </main>
  )
}
