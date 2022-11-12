import './post.css';
import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import Code from '../Code/Code';

const Post = () => {

    const [postContent, setPostContent] = useState("");

    useEffect(() => {

        import("../../markdown/post.md")
            .then(res => {
                fetch(res.default)
                    .then(response => response.text())
                    .then(response => setPostContent(response))
                    .catch(err => console.log(err));
            });

    }, []);

    return (
        <article className='article'>
            <div className='container'>
                <div className="post-wrapper">
                    <Markdown
                        options={{
                            overrides: {
                                code: {
                                    component: Code,
                                }
                            }
                        }}
                    >
                        {postContent}
                    </Markdown>
                </div>
            </div>
        </article>
    )
}

export default Post;