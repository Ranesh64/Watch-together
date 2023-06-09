/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { COMMENTS_URL } from "../utils/constants";
import { API_KEY } from "../utils/constants";
import Comment from "./Comment";

const CommentSection = ({ id }) => {
  const [comments, setComments] = useState(null);

  const getComments = async () => {
    const data = await fetch(COMMENTS_URL + id + "&key=" + API_KEY);
    const json = await data.json();
    console.log(json);
    setComments(json);
  };

  useEffect(() => {
    getComments();
  }, []);

  const CommentsList = ({ comments }) => {
    return (
      <>
        {comments.map((comment) => {
          console.log(comment?.replies);
          return (
            <div key={comment.id}>
              <Comment data={comment?.snippet?.topLevelComment?.snippet} avatarSize={true}/>
              {comment?.snippet?.totalReplyCount > 0 && (
                <div className="pl-14">
                  {comment?.replies?.comments.map((comment) => (
                    <Comment key={comment.id} data={comment?.snippet} avatarSize={false}/>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };

  return !comments ? null : (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-6">
        {comments?.pageInfo?.totalResults + " Comments"}
      </h2>
      <CommentsList comments={comments?.items} />
    </div>
  );
};

export default CommentSection;
