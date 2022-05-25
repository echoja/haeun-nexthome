import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import MetaContainer from "../MetaContainer"
import { capitalize } from "@lib/index"
import PostHeader from "./PostHeader"
import styled from "styled-components"
import PostHeadings from "./PostHeadings"
import {IPost} from "types"
import { useRouter } from 'next/router'


// const Post = ({frontmatter, mdxSource, headings}) => {
const Post = ({post, mdxSource}: {
    post: IPost,
    mdxSource: MDXRemoteSerializeResult
}) => {
    const router = useRouter()

    const {title , date, category } = post.frontmatter
    const customMeta = {
      title: `${capitalize(category)}: ${title}`,
      date: date
    }
    // const goToLink = `/${category}`

    return (
      <>
      <MetaContainer customMeta={customMeta}/>
      <article>
        <PostHeader date={date} title={title} />
        {post.headings &&
            <PostHeadings headings={post.headings}/>
        }
        <PostDiv>
            <MDXRemote {...mdxSource} />
        </PostDiv>
        <StyledGoBackBtn onClick={()=>router.back()}>&larr; 이전</StyledGoBackBtn>
      </article>
      </>
    )
}
export default Post

const StyledGoBackBtn = styled.span`
display: block;
margin: 10px 0;
color: var(--color-point-blue);
font-weight: 700;
&:hover {
  color: salmon;
}
cursor:pointer;
`


const PostDiv = styled.div`
    &:before {
        content: ' ';
        display: block;
        margin: 30px 2%;
        // border: 1px solid lightgrey;
    }
    margin: 20px 2vw 10px;
    font-size: 18px;
    word-break: break-word;

    p strong, li strong {
        font-weight: bold;
    }
    a {
        font-weight: 500;
        text-decoration: underline;
      }

    a:hover {
        color: salmon;
    }
  
    ul {
        margin-bottom: 1rem;
        line-height: 180%;
        li {
            list-style: none;
            padding-left: 1rem;
            &:before {
                content: '- ';
            }
        }
    }
    ol {
        margin-bottom: 1rem;
        line-height: 180%;
    }
    p img {
      margin: 15px 0;
    }

    h1 {
        font-size: var(--8xl);
    }
    h2 {
        font-weight: 800;
        font-size: var(--7xl);
    }
    h3 {
        font-size: var(--5xl);
        font-weight: 700;
    }
    h4 {
        font-size: var(--3xl);
    }
    h1, h2, h3 {
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    h1, h2 {
        border-bottom: 1px solid rgb(211, 211, 211, 0.5);
        padding-bottom: 1rem;
    }
    h2, h3 {
        &:before {
            content: '# ';
        }
    }
    // h2 바로 아래 p는 margin-top 제거
    p:where(h2+*):not(:where([class~=not-p] *)) {
        margin-top: 0;
    }
    code {
        background: white;
        border-radius: 6px;
        font-weight: 700;
        padding: 3px 6px;
        color: var(--theme1-color);
    }
`