/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { COMMENTS_URL } from "../utils/constants";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => {
        //console.log(comment?.replies);
        return (
          <div key={comment.id}>
            <Comment
              data={comment?.snippet?.topLevelComment?.snippet}
              avatarSize={true}
            />
            {comment?.snippet?.totalReplyCount > 0 && (
              <div className="pl-14">
                {comment?.replies?.comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    data={comment?.snippet}
                    avatarSize={false}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

const CommentSection = ({ id }) => {
  const [comments, setComments] = useState(null);

  const getComments = async () => {
    const data = await fetch(COMMENTS_URL + id);
    const json = await data.json();
    console.log("Get comments called...");
    setComments(json);
  };

  useEffect(() => {
    getComments();
    return () => {
      console.log("Comments unmounted...");
    };
  }, [id]);

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
