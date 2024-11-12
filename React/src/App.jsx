// src/App.jsx
import { useState } from "react";

// This line ensures that `App` is exported as a default component
export default function App() {
    const [blogPostData, setBlogPostData] = useState({
        title: "",
        body: "",
    });

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (blogPostData.title && blogPostData.body) {
                        fetch(`https://jsonplaceholder.typicode.com/posts`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                userId: 1,
                                title: blogPostData.title,
                                body: blogPostData.body,
                            }),
                        })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log("Post created:", data);
                        })
                        .catch((error) => {
                            console.error("Error creating post:", error);
                        });
                    }
                }}
            >
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={blogPostData.title}
                        onChange={(e) =>
                            setBlogPostData((currentState) => ({
                                ...currentState,
                                title: e.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea
                        name="body"
                        value={blogPostData.body}
                        onChange={(e) =>
                            setBlogPostData((currentState) => ({
                                ...currentState,
                                body: e.target.value,
                            }))
                        }
                    />
                </div>
                <button type="submit">Create post</button>
            </form>
        </div>
    );
}
