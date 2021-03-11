import React, { useState, useEffect } from 'react'
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import InputOption from './InputOption';
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from "react-flip-move";


function Feed() {
    // React Hooks
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {   // useEffect: a special hook that allows us to fire off code when the feed component loads. Also allows us to fire off when the component rerenders (if we dont pass in another component. passin in '[]' only allows us to fire off once)

        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>  // pull all posts in database and map them to our posts array
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
                )
            );
    }, [])

    const sendPost = (e) => {
        e.preventDefault(); // stops the refresh (default behavior when submitting)

        db.collection("posts").add({    // add this info to db collection 'posts'
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        console.log(input);
        document.getElementById('myInput').value = '';
        setInput('');
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input
                            type="text"
                            placeholder="Start a post"
                            //value={input}
                            id="myInput"
                            onChange={e => setInput(e.target.value)}
                        />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E" />
                </div>
            </div>

            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div >
    )
}

export default Feed
